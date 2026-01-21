// by J16D
// Dance Animation Loader with ImGui Menu and Multi-Camera Support
//
/// <reference path="../.config/sa.d.ts" />

import { KeyCode, Fade, ImGuiCol, ImGuiStyleVar, ImGuiCond, ImGuiDir, DrawEvent, Font, Align } from "../.config/enums";
import { GlobalConfig, AnimationManager } from "./camCore";
import { ThemeManager } from "./ImGuiCore";
import { registerBuiltInThemes } from "./ImGuiThemes";
import { getConfigLoader, initializeConfigLoader } from "./configLoader";
import { getIniManager } from "./iniManager";

//----------------------------------------------------------------------
// CONSTANTS
//----------------------------------------------------------------------
const TOGGLE_MENU_KEY = KeyCode.F4;
const IMGUI_FRAME_ID = 'IMGUI MENU';

const ImGuiWindowFlags = {
  "None": 0,
  "NoTitleBar": 1,
  "NoResize": 2,
  "NoMove": 4
};

const panelSettings = {
  "posX": 50.0,
  "posY": 130.0,
  "Width": 350.0,
  "Height": 650.0
};

//----------------------------------------------------------------------
// GLOBAL STATE
//----------------------------------------------------------------------
var showMenu = false;
var selectedItemIndex = -1;
var showSettingsWindow = false;
var itemsList = [];
var showThemeWindow = false;
var showGeneralSettingsWindow = false;

const globalCfg = new GlobalConfig();
var currentManager = null;
var isAnimationRunning = false;
var isAnimationPaused = false;
var imgTitle = null;

// General settings state
var progressBarSettings = null;
var pauseTextSettings = null;
var selectedItemColor = null;

// Cached sorted theme list
var sortedThemeList = [];

// Progress bar state management for fixedCamera
var progressBarPreviousState = null;  // Saves progressBar.enabled before fixedCamera

// UI initialization state
var uiSettingsLoaded = false;
var firstMenuOpen = false;

// Camera selection state
var selectedCameraIndex = 0;  // Index in camera files array

// Bezier preset constants
const bezierPresetNames = [
    "SMOOTH",
    "LINEAR",
    "EASE_IN",
    "EASE_OUT", 
    "EASE_IN_OUT",
    "CINEMATIC",
    "SHARP"
];

const bezierPresetDescriptions = {
    "SMOOTH": "Natural & smooth (Default)",
    "LINEAR": "Constant speed (No curve)",
    "EASE_IN": "Slow start, fast end",
    "EASE_OUT": "Fast start, slow end",
    "EASE_IN_OUT": "Smooth start & end",
    "CINEMATIC": "Very smooth, dramatic",
    "SHARP": "Quick transitions"
};

// Loading state
var isLoadingAnimation = false;
//
var currentPlayingName = "";

// Category system state
var categorizedAnimations = {};  // {categoryName: [animation indices]}
var allCategories = [];           // All unique category names
var useTabs = false;              // Whether to show tabs or simple list
var selectedTabIndex = 0;         // Currently selected tab index

// Fixed camera UI state
var tempFixedCamSettings = {
    x: 0.0,
    y: 5.000,
    z: 0.3000,
    fov: 45.000
};

//----------------------------------------------------------------------
// THEME MANAGER
//----------------------------------------------------------------------
let iniManager = null;
let configLoader = null;
let manager = new ThemeManager();
registerBuiltInThemes(manager);

//----------------------------------------------------------------------
// MAIN INITIALIZATION AND LOOP
//----------------------------------------------------------------------
(async () => {
    while (true) {
        await asyncWait(0);
        if (Pad.IsKeyPressed(TOGGLE_MENU_KEY)) {
            break;
        }
    }
    await asyncWait(100);
    iniManager = getIniManager();
    
    // Load animations metadata only
    const configLoaded = await initializeConfigLoader();
    if (!configLoaded) {
        Text.PrintFormattedNow("~r~ERROR: Failed to load animations!", 500);
        return;
    }
    
    configLoader = getConfigLoader();
    itemsList = configLoader.getAnimations();
    //Text.PrintFormattedNow(`~g~Loaded ${itemsList.length} animations!`, 2000);
    showMenu = !showMenu;
    if (!uiSettingsLoaded) {
        await loadUISettings();
        uiSettingsLoaded = true;
        firstMenuOpen = true;
    }
    
    main_loop: while (true) {
        await asyncWait(0);
        
        const plc = new Player(0);
        if (!plc.isPlaying()) await asyncWait(0);

        if (Pad.IsKeyPressed(TOGGLE_MENU_KEY)) {
            showMenu = !showMenu;
            
            // Load UI settings on first menu open
            if (showMenu && !uiSettingsLoaded) {
                await loadUISettings();
                uiSettingsLoaded = true;
                firstMenuOpen = true;
            }
            if (showSettingsWindow) showSettingsWindow = false;
            if (showThemeWindow) showThemeWindow = false;
            if (showGeneralSettingsWindow) showGeneralSettingsWindow = false;
            await asyncWait(200);
        }

        ImGui.BeginFrame(IMGUI_FRAME_ID);
        ImGui.SetCursorVisible(showMenu);
        
        if (showMenu) {
            renderMainMenu();
        } else {
            if (showSettingsWindow) showSettingsWindow = false;
            if (showThemeWindow) showThemeWindow = false;
            if (showGeneralSettingsWindow) showGeneralSettingsWindow = false;
        }

        if (showSettingsWindow && selectedItemIndex >= 0) {
            if (showThemeWindow) showThemeWindow = false;
            if (showGeneralSettingsWindow) showGeneralSettingsWindow = false;
            renderSettingsWindow();
        }

        if (showGeneralSettingsWindow) {
            if (showSettingsWindow) showSettingsWindow = false;
            if (showThemeWindow) showThemeWindow = false;
            renderGeneralSettingsWindow();
        }

        // Display "PAUSED" text when animation is paused
        if (isAnimationPaused && pauseTextSettings && pauseTextSettings.enabled) {
            let linfo = "PAUSED";
            Text.DrawStringExt(
                linfo, 
                DrawEvent.AfterHud, 
                pauseTextSettings.posX, 
                pauseTextSettings.posY, 
                pauseTextSettings.scaleX, 
                pauseTextSettings.scaleY, 
                true, 
                Font.Subtitles, 
                true, 
                Align.Center, 
                640.0, 
                false, 
                pauseTextSettings.color.r, 
                pauseTextSettings.color.g, 
                pauseTextSettings.color.b, 
                pauseTextSettings.color.a, 
                1, 0, 0, 0, 0, 100, false, 0, 0, 0, 0
            );
        }

        ImGui.EndFrame();
    }
})();

/**
 * Organize animations by category
 */
function organizeAnimationsByCategory() {
    categorizedAnimations = {};
    allCategories = [];
    const categorySet = new Set();
    for (let i = 0; i < itemsList.length; i++) {
        const anim = itemsList[i];
        if (!anim.settingsLoaded && configLoader && iniManager) {
            configLoader.loadAnimationSettings(anim.id, iniManager, anim.configFile);
        }
        const category = anim.settings && anim.settings.category ? anim.settings.category : "";
        if (category) {
            categorySet.add(category);
        }
    }
    
    // Determine if we should use tabs
    // Use tabs only if: there are 2+ different categories
    const uniqueCategories = Array.from(categorySet);
    const hasUncategorized = itemsList.some(a => !a.settings || !a.settings.category);
    const allHaveCategory = !hasUncategorized;
    const allHaveSameCategory = uniqueCategories.length === 1 && allHaveCategory;
    
    useTabs = uniqueCategories.length >= 1 && !allHaveSameCategory && (uniqueCategories.length > 1 || hasUncategorized);
    
    if (!useTabs) {
        // Simple list - put all in "Common" category
        categorizedAnimations["Common"] = [];
        for (let i = 0; i < itemsList.length; i++) {
            categorizedAnimations["Common"].push(i);
        }
        allCategories = ["Common"];
        selectedTabIndex = 0;
        return;
    }
    // Organize by categories
    for (let i = 0; i < itemsList.length; i++) {
        const anim = itemsList[i];
        let category = anim.settings && anim.settings.category ? anim.settings.category : "Common";
        
        if (!categorizedAnimations[category]) {
            categorizedAnimations[category] = [];
        }
        categorizedAnimations[category].push(i);
    }
    allCategories = Object.keys(categorizedAnimations).sort((a, b) => {
        if (a === "Common") return 1;
        if (b === "Common") return -1;
        return a.localeCompare(b);
    });
    selectedTabIndex = 0;
}

//----------------------------------------------------------------------
// UI SETTINGS LOADER
//----------------------------------------------------------------------

/**
 * Load all UI settings on first menu open
 */
async function loadUISettings() {
    try {
        const savedTheme = iniManager.getTheme();
        manager.loadTheme(savedTheme);
        progressBarSettings = iniManager.getProgressBarSettings();
        pauseTextSettings = iniManager.getPauseTextSettings();
        selectedItemColor = iniManager.getSelectedItemColor();
        sortedThemeList = manager.listThemes().sort();
        organizeAnimationsByCategory();
    } catch (error) {
        log(`[UISettings] Error loading UI settings: ${error}`);
        progressBarSettings = getDefaultProgressBarSettings();
        pauseTextSettings = getDefaultPauseTextSettings();
        selectedItemColor = { r: 255, g: 255, b: 0, a: 255 };
        manager.loadTheme("darkModern");
        sortedThemeList = manager.listThemes().sort();
        organizeAnimationsByCategory();
    }
}

/**
 * Get default progress bar settings
 * Used as fallback if INI loading fails
 */
function getDefaultProgressBarSettings() {
    return {
        enabled: true,
        showText: true,
        posX: 160.0,
        posY: 428.0,
        width: 320.0,
        height: 6.0,
        fgColor: { r: 255, g: 200, b: 0, a: 220 },
        bgColor: { r: 0, g: 0, b: 0, a: 150 },
        borderColor: { r: 255, g: 255, b: 255, a: 50 },
        textColor: { r: 255, g: 255, b: 255, a: 255 }
    };
}

/**
 * Get default pause text settings
 * Used as fallback if INI loading fails
 */
function getDefaultPauseTextSettings() {
    return {
        enabled: true,
        posX: 320.0,
        posY: 400.0,
        scaleX: 0.6,
        scaleY: 1.2,
        color: { r: 255, g: 255, b: 0, a: 255 }
    };
}

//----------------------------------------------------------------------
// UI RENDERING FUNCTIONS
//----------------------------------------------------------------------

function renderMainMenu() {
    if (!uiSettingsLoaded) {
        ImGui.Text("Loading UI...");
        return;
    }
    
    let theme = manager.getCurrentTheme();
    if (theme) theme.apply();

    if (imgTitle == null) {
        imgTitle = ImGui.LoadImage("CLEO/DanceLoader[fs][mem]/title.jpg");
    }

    let ws = panelSettings;
    ImGui.SetNextWindowTransparency(0.8);
    ImGui.SetNextWindowSize(ws.Width, ws.Height, ImGuiCond.None);
    
    showMenu = ImGui.Begin("MENU", showMenu, false, true, false, false);
    ImGui.SetWindowPos(ws.posX, ws.posY, ImGuiCond.None);
    
    if (imgTitle !== null) {
        ImGui.PushStyleColor(ImGuiCol.Button, 51, 153, 230, 0);
        ImGui.PushStyleColor(ImGuiCol.ButtonHovered, 51, 153, 230, 0);
        ImGui.PushStyleColor(ImGuiCol.ButtonActive, 51, 153, 230, 0);
            if ( ImGui.ButtonImage("DANCE", imgTitle, ws.Width-25, 50) ){}
        ImGui.PopStyleColor(3);
    } else {
        ImGui.TextCentered("=== DANCE ANIMATIONS ===");
    }
    ImGui.Separator();
    ImGui.Dummy(30, 5);

    let textA = "Select Animation:";
    ImGui.Text(textA);
    let cw = ImGui.GetWindowContentRegionWidth(IMGUI_FRAME_ID);
    let textAW = ImGui.CalcTextSize(textA);
    let textMid = ((textAW.width / 2 - 10) + (cw - textAW.width - textAW.height - 10));
    ImGui.SameLine();
    ImGui.Dummy(textMid, textAW.height);
    ImGui.SameLine();
    if (ImGui.ButtonArrow(">>", ImGuiDir.Right)) {
        if (selectedItemIndex >= 0) {
            showGeneralSettingsWindow = false;
            // Load settings on-demand when opening settings window
            const anim = itemsList[selectedItemIndex];
            if (!anim.settingsLoaded) {
                configLoader.loadAnimationSettings(anim.id, iniManager, anim.configFile);
            }
            showSettingsWindow = true;
            // Reset camera index when opening settings
            selectedCameraIndex = anim.cameraFiles.indexOf(anim.selectedCamera);
            if (selectedCameraIndex < 0) selectedCameraIndex = 0;
        }
    }

    ImGui.Spacing();
    ImGui.Separator();
    ImGui.Spacing();

    renderAnimationList();

    ImGui.Spacing();
    ImGui.Separator();
    ImGui.Spacing();

    renderControlButtons();

    ImGui.Spacing();
    ImGui.Separator();
    ImGui.Spacing();

    renderStatus();

    ImGui.Spacing();
    ImGui.Separator();
    ImGui.Spacing();
    
    ImGui.PushStyleColor(ImGuiCol.Text, 195, 195, 195, 195);
        ImGui.TextCentered("by J16D");
    ImGui.PopStyleColor(1);

    ImGui.Spacing();
    ImGui.Separator();
    
    if (ImGui.Button("Settings", 90, 35)) {
        showSettingsWindow = false;
        showGeneralSettingsWindow = true;
    }
    
    ImGui.End();
    if (theme) theme.pop();
}

function renderAnimationList() {
    let childSize = ImGui.GetScalingSize("CH001", 1, true);
    
    if (!useTabs) {
        ImGui.BeginChildEx("ItemList", childSize.x, 200, false, ImGuiWindowFlags.None);
        
        for (let i = 0; i < itemsList.length; i++) {
            let itm = itemsList[i];
            const isSelected = (selectedItemIndex === i);
            const displayId = i + 1; // Sequential ID in simple list

            if (isSelected && selectedItemColor) {
                ImGui.PushStyleColor(ImGuiCol.Text, selectedItemColor.r, selectedItemColor.g, selectedItemColor.b, selectedItemColor.a);
            }
            if (ImGui.Selectable(`${displayId}. ${itm.displayName}`, false)) {
                selectedItemIndex = i;
                showSettingsWindow = false;
            }
            if (isSelected && selectedItemColor) {
                ImGui.PopStyleColor(1);
            }
        }
        
        ImGui.EndChild();
    } else {
        ImGui.BeginChildEx("ItemList", childSize.x, 200, false, ImGuiWindowFlags.None);
        const categoryNames = allCategories.join(",");
        selectedTabIndex = ImGui.Tabs("AnimCategoriesTab", categoryNames);
        if (selectedTabIndex >= 0 && selectedTabIndex < allCategories.length) {
            const currentCategory = allCategories[selectedTabIndex];
            const animIndices = categorizedAnimations[currentCategory] || [];
            
            ImGui.Spacing();
            
            let localId = 1;
            for (let idx of animIndices) {
                let itm = itemsList[idx];
                const isSelected = (selectedItemIndex === idx);

                if (isSelected && selectedItemColor) {
                    ImGui.PushStyleColor(ImGuiCol.Text, selectedItemColor.r, selectedItemColor.g, selectedItemColor.b, selectedItemColor.a);
                }
                if (ImGui.Selectable(`${localId}. ${itm.displayName}`, false)) {
                    selectedItemIndex = idx;
                    showSettingsWindow = false;
                }
                if (isSelected && selectedItemColor) {
                    ImGui.PopStyleColor(1);
                }
                localId++;
            }
        }
        
        ImGui.EndChild();
    }
}

function renderControlButtons() {
    let size = ImGui.GetScalingSize("BTN001", 3, false);
    ImGui.PushStyleVar(ImGuiStyleVar.FrameRounding, 10);

    const playButtonText = isAnimationPaused ? "RESUME" : "PLAY";
    ImGui.PushStyleColor(ImGuiCol.Button, 0, 150, 0, 255);
    ImGui.PushStyleColor(ImGuiCol.ButtonHovered, 0, 180, 0, 255);
    if (ImGui.Button(playButtonText, size.x - 5, size.y / 1.25)) {
        if (selectedItemIndex >= 0 && !isLoadingAnimation) {
            if (isAnimationPaused) {
                resumeAnimation();
            } else {
                playAnimation();
            }
        }
    }
    ImGui.PopStyleColor(2);

    ImGui.SameLine();

    ImGui.PushStyleColor(ImGuiCol.Button, 200, 150, 0, 255);
    ImGui.PushStyleColor(ImGuiCol.ButtonHovered, 220, 170, 0, 255);
    if (ImGui.Button("PAUSE", size.x - 5, size.y / 1.25)) {
        if (selectedItemIndex >= 0 && isAnimationRunning && !isAnimationPaused) {
            pauseAnimation();
        }
    }
    ImGui.PopStyleColor(2);

    ImGui.SameLine();

    ImGui.PushStyleColor(ImGuiCol.Button, 150, 0, 0, 255);
    ImGui.PushStyleColor(ImGuiCol.ButtonHovered, 180, 0, 0, 255);
    if (ImGui.Button("STOP", size.x - 5, size.y / 1.25)) {
        if (isAnimationRunning && currentManager) {
            stopAnimation();
        }
    }
    ImGui.PopStyleColor(2);
    ImGui.PopStyleVar(1);
}

function renderStatus() {
    ImGui.Text("Selected:");
    ImGui.SameLine();
    if (selectedItemIndex >= 0) {
        if (selectedItemColor) {
            let colTS = {
                r: selectedItemColor.r / 255, 
                g: selectedItemColor.g / 255, 
                b: selectedItemColor.b / 255, 
                a: selectedItemColor.a / 255
            };
            ImGui.TextColored(itemsList[selectedItemIndex].name, colTS.r, colTS.g, colTS.b, colTS.a);
        } else {
            ImGui.Text(itemsList[selectedItemIndex].name);
        }
    } else {
        ImGui.TextDisabled("None");
    }

    ImGui.Text("Status:");
    ImGui.SameLine();
    
    if (isLoadingAnimation) {
        ImGui.TextColored("Loading...", 1.0, 1.0, 0.0, 1.0);
    } else if (isAnimationRunning) {
        const statusTxt = isAnimationPaused ? "Paused" : "Playing";
        const color     = isAnimationPaused
                        ? [1.0, 0.65, 0.0, 1.0]   // orange
                        : [0.0, 1.0, 0.0, 1.0];   // green
        ImGui.TextColored(statusTxt, color[0], color[1], color[2], color[3]);
        ImGui.TextDisabled(`Current: ${currentPlayingName}`);
    } else {
        ImGui.TextColored("Idle", 0.7, 0.7, 0.7, 1.0);
        ImGui.TextDisabled("Current: IDLE");
    }
    let fps = Game.GetFramerate();
    ImGui.Text(`FPS: ${fps}`);
}

function renderGeneralSettingsWindow() {
    if (!uiSettingsLoaded || !progressBarSettings || !pauseTextSettings || !selectedItemColor) {
        return;
    }
    let ws = panelSettings;
    let theme = manager.getCurrentTheme();
    if (theme) theme.apply();
    
    ImGui.SetNextWindowTransparency(0.8);
    ImGui.SetNextWindowSize(ws.Width + 20, ws.Height, ImGuiCond.None);
    showGeneralSettingsWindow = ImGui.Begin("General Settings", showGeneralSettingsWindow, false, true, false, false);
    ImGui.SetWindowPos((ws.posX + ws.Width + 10), ws.posY, ImGuiCond.None);

    ImGui.Text("General Settings");
    ImGui.Separator();
    ImGui.Spacing();
    
    // ========== SELECTED ITEM COLOR SECTION ==========
    if (ImGui.CollapsingHeader("Selected Item Color")) {
        ImGui.Spacing();
        ImGui.Text("Selected animation text color:");
        ImGui.SameLine();
        let colSt = {r:selectedItemColor.r/255, g:selectedItemColor.g/255, b:selectedItemColor.b/255, a:selectedItemColor.a/255};
        ImGui.ButtonColored("RGBA##Foreground", colSt.r, colSt.g, colSt.b, colSt.a, 30.0, 30.0);
        ImGui.Spacing();
        
        ImGui.PushItemWidth(145);
        selectedItemColor.r = ImGui.SliderInt("R##sitem", selectedItemColor.r, 0, 255);
        ImGui.SameLine();
        selectedItemColor.g = ImGui.SliderInt("G##sitem", selectedItemColor.g, 0, 255);
        selectedItemColor.b = ImGui.SliderInt("B##sitem", selectedItemColor.b, 0, 255);
        ImGui.SameLine();
        selectedItemColor.a = ImGui.SliderInt("A##sitem", selectedItemColor.a, 0, 255);
        ImGui.PopItemWidth();
        ImGui.Separator();
        ImGui.Spacing();
        
        if (ImGui.Button("SAVE##seitemsave", 120, 30)) {
            iniManager.saveSelectedItemColor(selectedItemColor);
            Text.PrintFormattedNow("~g~SAVED!", 500);
        }
        ImGui.Spacing();
        ImGui.Separator();
    }
    
    // ========== PROGRESS BAR SECTION ==========
    if (ImGui.CollapsingHeader("Progress Bar")) {
        ImGui.Spacing();
        progressBarSettings.enabled = ImGui.Checkbox("Enable Progress Bar##pb", progressBarSettings.enabled);
        progressBarSettings.showText = ImGui.Checkbox("Display track progress time##pb", progressBarSettings.showText);
        ImGui.Separator();
        ImGui.Spacing();
        ImGui.Text("Position & Size:");
        // Use SliderInt for UI but convert to float internally
        let tempPosX = Math.floor(progressBarSettings.posX);
        let tempPosY = Math.floor(progressBarSettings.posY);
        tempPosX = ImGui.SliderInt("Position X##pb", tempPosX, 0, 640);
        tempPosY = ImGui.SliderInt("Position Y##pb", tempPosY, 0, 448);
        // Convert back to float
        progressBarSettings.posX = tempPosX;
        progressBarSettings.posY = tempPosY;        

        ImGui.Spacing();
        ImGui.PushItemWidth(95);
        progressBarSettings.width = ImGui.InputFloat("Width##pb", progressBarSettings.width, 50.0, 640.0);
        ImGui.SameLine();
        progressBarSettings.height = ImGui.InputFloat("Height##pb", progressBarSettings.height, 1.0, 50.0);
        ImGui.PopItemWidth();
        ImGui.Spacing();
        ImGui.Separator();
        
        /* ---------- Foreground Color ---------- */
        ImGui.Spacing();
        ImGui.Text("Foreground Color:");
        ImGui.SameLine();
        let colFg = {r:progressBarSettings.fgColor.r/255, g:progressBarSettings.fgColor.g/255, b:progressBarSettings.fgColor.b/255, a:progressBarSettings.fgColor.a/255};
        ImGui.ButtonColored("RGBA##Foreground", colFg.r, colFg.g, colFg.b, colFg.a, 30.0, 30.0);

        ImGui.PushItemWidth(145);
        progressBarSettings.fgColor.r = ImGui.SliderInt("R##pbfg", progressBarSettings.fgColor.r, 0, 255);
        ImGui.SameLine();
        progressBarSettings.fgColor.g = ImGui.SliderInt("G##pbfg", progressBarSettings.fgColor.g, 0, 255);
        progressBarSettings.fgColor.b = ImGui.SliderInt("B##pbfg", progressBarSettings.fgColor.b, 0, 255);
        ImGui.SameLine();
        progressBarSettings.fgColor.a = ImGui.SliderInt("A##pbfg", progressBarSettings.fgColor.a, 0, 255);
        ImGui.PopItemWidth();
        ImGui.Spacing();
        ImGui.Separator();
        /* ---------- Background Color ---------- */
        ImGui.Spacing();
        ImGui.Text("Background Color:");
        ImGui.SameLine();
        let colBg = {r:progressBarSettings.bgColor.r/255, g:progressBarSettings.bgColor.g/255, b:progressBarSettings.bgColor.b/255, a:progressBarSettings.bgColor.a/255};
        ImGui.ButtonColored("RGBA##Background", colBg.r, colBg.g, colBg.b, colBg.a, 30.0, 30.0);

        ImGui.PushItemWidth(145);
        progressBarSettings.bgColor.r = ImGui.SliderInt("R##pbbg", progressBarSettings.bgColor.r, 0, 255);
        ImGui.SameLine();
        progressBarSettings.bgColor.g = ImGui.SliderInt("G##pbbg", progressBarSettings.bgColor.g, 0, 255);
        progressBarSettings.bgColor.b = ImGui.SliderInt("B##pbbg", progressBarSettings.bgColor.b, 0, 255);
        ImGui.SameLine();
        progressBarSettings.bgColor.a = ImGui.SliderInt("A##pbbg", progressBarSettings.bgColor.a, 0, 255);
        ImGui.PopItemWidth();
        ImGui.Spacing();
        ImGui.Separator();
        /* ---------- Border Color ---------- */
        ImGui.Spacing();
        ImGui.Text("Border Color:");
        ImGui.SameLine();
        let colBc = {r:progressBarSettings.borderColor.r/255, g:progressBarSettings.borderColor.g/255, b:progressBarSettings.borderColor.b/255, a:progressBarSettings.borderColor.a/255};
        ImGui.ButtonColored("RGBA##BorderColor", colBc.r, colBc.g, colBc.b, colBc.a, 30.0, 30.0);

        ImGui.PushItemWidth(145);
        progressBarSettings.borderColor.r = ImGui.SliderInt("R##pbbd", progressBarSettings.borderColor.r, 0, 255);
        ImGui.SameLine();
        progressBarSettings.borderColor.g = ImGui.SliderInt("G##pbbd", progressBarSettings.borderColor.g, 0, 255);
        progressBarSettings.borderColor.b = ImGui.SliderInt("B##pbbd", progressBarSettings.borderColor.b, 0, 255);
        ImGui.SameLine();
        progressBarSettings.borderColor.a = ImGui.SliderInt("A##pbbd", progressBarSettings.borderColor.a, 0, 255);
        ImGui.PopItemWidth();
        ImGui.Spacing();
        ImGui.Separator();
        /* ---------- Text Color ---------- */
        ImGui.Spacing();
        ImGui.Text("Text Color:");
        ImGui.SameLine();
        let colTc = {r:progressBarSettings.textColor.r/255, g:progressBarSettings.textColor.g/255, b:progressBarSettings.textColor.b/255, a:progressBarSettings.textColor.a/255};
        ImGui.ButtonColored("RGBA##TextColor", colTc.r, colTc.g, colTc.b, colTc.a, 30.0, 30.0);

        ImGui.PushItemWidth(145);
        progressBarSettings.textColor.r = ImGui.SliderInt("R##pbtxt", progressBarSettings.textColor.r, 0, 255);
        ImGui.SameLine();
        progressBarSettings.textColor.g = ImGui.SliderInt("G##pbtxt", progressBarSettings.textColor.g, 0, 255);
        progressBarSettings.textColor.b = ImGui.SliderInt("B##pbtxt", progressBarSettings.textColor.b, 0, 255);
        ImGui.SameLine();
        progressBarSettings.textColor.a = ImGui.SliderInt("A##pbtxt", progressBarSettings.textColor.a, 0, 255);
        ImGui.PopItemWidth();
        ImGui.Spacing();
        ImGui.Separator();
        
        // Update current manager if running
        if (currentManager) {
            currentManager.progressBar.updateSettings(progressBarSettings);
        }
        ImGui.Spacing();
        if (ImGui.Button("SAVE##pbsave", 150, 30)) {
            iniManager.saveProgressBarSettings(progressBarSettings);
            Text.PrintFormattedNow("~g~SAVED!", 500);
        }
        ImGui.Spacing();
        ImGui.Separator();        
    }

    // ========== PAUSE TEXT SECTION ==========
    if (ImGui.CollapsingHeader("Pause Text")) {
        ImGui.Spacing();

        pauseTextSettings.enabled = ImGui.Checkbox("Enable Pause Text##pt", pauseTextSettings.enabled);
        ImGui.Separator();
        ImGui.Spacing();
        ImGui.Text("Position:");
        // Use SliderInt for UI but convert to float internally
        let tempPausePosX = Math.floor(pauseTextSettings.posX);
        let tempPausePosY = Math.floor(pauseTextSettings.posY);
        tempPausePosX = ImGui.SliderInt("Position X##pt", tempPausePosX, 0, 640);
        tempPausePosY = ImGui.SliderInt("Position Y##pt", tempPausePosY, 0, 448);
        // Convert back to float
        pauseTextSettings.posX = tempPausePosX;
        pauseTextSettings.posY = tempPausePosY;

        ImGui.Separator();
        ImGui.Spacing();
        ImGui.Text("Scale:");
        ImGui.PushItemWidth(95);
        pauseTextSettings.scaleX = ImGui.InputFloat("Scale X##pt", pauseTextSettings.scaleX, 0.1, 3.0);
        ImGui.SameLine();
        pauseTextSettings.scaleY = ImGui.InputFloat("Scale Y##pt", pauseTextSettings.scaleY, 0.1, 3.0);
        ImGui.PopItemWidth();
        ImGui.Separator();
        
        ImGui.Spacing();
        ImGui.Text("Color:");
        ImGui.SameLine();
        let colPtc = {r:pauseTextSettings.color.r/255, g:pauseTextSettings.color.g/255, b:pauseTextSettings.color.b/255, a:pauseTextSettings.color.a/255};
        ImGui.ButtonColored("RGBA##PauseTextColor", colPtc.r, colPtc.g, colPtc.b, colPtc.a, 30.0, 30.0);

        ImGui.PushItemWidth(145);
        pauseTextSettings.color.r = ImGui.SliderInt("R##pt", pauseTextSettings.color.r, 0, 255);
        ImGui.SameLine();
        pauseTextSettings.color.g = ImGui.SliderInt("G##pt", pauseTextSettings.color.g, 0, 255);
        pauseTextSettings.color.b = ImGui.SliderInt("B##pt", pauseTextSettings.color.b, 0, 255);
        ImGui.SameLine();
        pauseTextSettings.color.a = ImGui.SliderInt("A##pt", pauseTextSettings.color.a, 0, 255);
        ImGui.PopItemWidth();
        ImGui.Separator();

        ImGui.Spacing();
        if (ImGui.Button("SAVE##ptsave", 150, 30)) {
            iniManager.savePauseTextSettings(pauseTextSettings);
            Text.PrintFormattedNow("~g~SAVED!", 500);
        }
        ImGui.Spacing();
        ImGui.Separator();
    }

    // ========== THEMES SECTION ==========
    if (ImGui.CollapsingHeader("Themes")) {
        ImGui.Spacing();
        
        let currentTheme = manager.getCurrentTheme();
        
        ImGui.Text("Current theme: " + (currentTheme ? currentTheme.name : "None"));
        ImGui.Spacing();
        ImGui.Separator();
        ImGui.Spacing();
        
        ImGui.Text("Select a theme:");
        let size = ImGui.GetScalingSize("BTN005", 2, false);
        
        // Use sorted theme list (fixed order)
        for (let i = 0; i < sortedThemeList.length; i++) {
            const themeName = sortedThemeList[i];
            if (ImGui.Button(themeName, size.x - 2, size.y / 1.30)) {
                manager.loadTheme(themeName);
                iniManager.saveTheme(themeName);
            }
            if ((i + 1) % 2 !== 0 && i < sortedThemeList.length - 1) {
                ImGui.SameLine();
            }
        }
        ImGui.Spacing();
    }

    ImGui.End();
    if (theme) theme.pop();
}

function renderSettingsWindow() {
    let itm = itemsList[selectedItemIndex];
    let ws = panelSettings;
    const uniqueId = selectedItemIndex;

    if (!itm.cameraFilesDiscovered) {
        configLoader.ensureCameraFilesDiscovered(itm.id).then(() => {
        });
    }
    if (!itm.settingsLoaded) {
        configLoader.loadAnimationSettings(itm.id, iniManager, itm.configFile);
    }

    if (!itm.settings) {
        let theme = manager.getCurrentTheme();
        if (theme) theme.apply();
        
        ImGui.SetNextWindowTransparency(0.8);
        ImGui.SetNextWindowSize(ws.Width + 20, ws.Height, ImGuiCond.None);
        showSettingsWindow = ImGui.Begin(`Loading...`, showSettingsWindow, false, true, false, false);
        ImGui.SetWindowPos((ws.posX + ws.Width + 10), ws.posY, ImGuiCond.None);
        
        ImGui.Text("Loading settings...");
        
        ImGui.End();
        if (theme) theme.pop();
        return;
    }
    
    let theme = manager.getCurrentTheme();
    if (theme) theme.apply();

    ImGui.SetNextWindowTransparency(0.8);
    ImGui.SetNextWindowSize(ws.Width + 20, ws.Height, ImGuiCond.None);
    showSettingsWindow = ImGui.Begin(`Settings - ${itm.name}`, showSettingsWindow, false, true, false, false);
    ImGui.SetWindowPos((ws.posX + ws.Width + 10), ws.posY, ImGuiCond.None);

    //ImGui.Spacing();
    //ImGui.Text(`Settings - ${itm.name}`);
    //ImGui.Separator();
    //ImGui.Spacing();

    // ========== FIXED CAMERA CHECKBOX ==========
    const prevUseFixedCamera = itm.settings.useFixedCamera;
    itm.settings.useFixedCamera = ImGui.Checkbox(`Fixed Camera##fixed${uniqueId}`, itm.settings.useFixedCamera);

    if (itm.settings.useFixedCamera !== prevUseFixedCamera) {
        if (itm.settings.useFixedCamera) {
            // Fixed camera ENABLED
            tempFixedCamSettings.x = itm.settings.fixedCameraSettings.x;
            tempFixedCamSettings.y = itm.settings.fixedCameraSettings.y;
            tempFixedCamSettings.z = itm.settings.fixedCameraSettings.z;
            tempFixedCamSettings.fov = itm.settings.fixedCameraSettings.fov;

            if (progressBarSettings && progressBarSettings.enabled) {
                progressBarPreviousState = true;
                progressBarSettings.enabled = false;
            } else {
                progressBarPreviousState = false;
            }
        } else {
            // Fixed camera DISABLED
            if (progressBarSettings && progressBarPreviousState !== null) {
                progressBarSettings.enabled = progressBarPreviousState;
                progressBarPreviousState = null;
            }
        }
    }
    ImGui.SameLine();
    ImGui.TextDisabled("(Static camera)");
    ImGui.Spacing();
    ImGui.Separator();
    ImGui.Spacing();

    // ========== FIXED CAMERA SETTINGS (shown when enabled) ==========
    if (itm.settings.useFixedCamera) {
        ImGui.Text("Camera Offset:");
        ImGui.Spacing();
        
        tempFixedCamSettings.x = ImGui.InputFloat(`X##fixX${uniqueId}`, tempFixedCamSettings.x, -20.0, 20.0);
        tempFixedCamSettings.y = ImGui.InputFloat(`Y##fixY${uniqueId}`, tempFixedCamSettings.y, -20.0, 20.0);
        tempFixedCamSettings.z = ImGui.InputFloat(`Z##fixZ${uniqueId}`, tempFixedCamSettings.z, -20.0, 20.0);
        tempFixedCamSettings.fov = ImGui.InputFloat(`FOV##fixFOV${uniqueId}`, tempFixedCamSettings.fov, 1.0, 120.0);
        
        ImGui.Spacing();
        if (ImGui.Button(`Update Fixed Camera##updateFix${uniqueId}`, 200, 40)) {
            itm.settings.fixedCameraSettings.x = tempFixedCamSettings.x;
            itm.settings.fixedCameraSettings.y = tempFixedCamSettings.y;
            itm.settings.fixedCameraSettings.z = tempFixedCamSettings.z;
            itm.settings.fixedCameraSettings.fov = tempFixedCamSettings.fov;
            Text.PrintFormattedNow("~g~Fixed camera updated!", 500);
        }
        
        ImGui.Spacing();
        ImGui.Separator();
        ImGui.Spacing();
    }
    // ========== CAMERA SELECTION SECTION (hidden when fixed camera enabled) ==========
    else if (itm.cameraFiles.length > 1) {
        ImGui.Text("Camera Selection:");
        ImGui.SameLine();
        ImGui.TextDisabled(`(${itm.cameraFiles.length} available)`);

        const cameraNames = itm.cameraFiles.map(file => file.replace('.json', ''));
        const listNames = cameraNames.join(",");
        let tempCheck = selectedCameraIndex;
        selectedCameraIndex = ImGui.ComboBox(`##camera${uniqueId}`, listNames, selectedCameraIndex)
        if (selectedCameraIndex !== tempCheck ) {
            const selectedCameraFile = itm.cameraFiles[selectedCameraIndex];
            configLoader.switchCamera(itm.id, selectedCameraFile);            
        }
        ImGui.Spacing();
        ImGui.TextDisabled("Current: " + cameraNames[selectedCameraIndex]);

        ImGui.Spacing();
        ImGui.Separator();
        ImGui.Spacing();
    } else if (itm.cameraFiles.length === 1) {
        // Single camera - just show info
        ImGui.Text("Camera: " + itm.cameraFiles[0].replace('.json', ''));
        ImGui.Spacing();
        ImGui.Separator();
        ImGui.Spacing(); 
    } else {
        // No camera files available
        ImGui.PushStyleColor(ImGuiCol.Text, 255, 180, 0, 255);
        ImGui.TextWrapped("No camera files found.");
        ImGui.PopStyleColor(1);
        ImGui.Spacing();
        ImGui.Separator();
        ImGui.Spacing();
    }

    // ========== BEZIER INTERPOLATION PRESET SECTION (hidden when fixed camera is enabled) ==========
    if (!itm.settings.useFixedCamera) {
        ImGui.Text("Camera Interpolation:");
        const bezierListNames = bezierPresetNames.join(",");
        let currentPresetIndex = bezierPresetNames.indexOf(itm.settings.bezierPreset || 'SMOOTH');
        if (currentPresetIndex < 0) currentPresetIndex = 0;
        const newPresetIndex = ImGui.ComboBox(`##bezier${uniqueId}`, bezierListNames, currentPresetIndex);
        if (newPresetIndex !== currentPresetIndex) {
            itm.settings.bezierPreset = bezierPresetNames[newPresetIndex];
            //Text.PrintFormattedNow(`~b~Interpolation: ${itm.settings.bezierPreset}`, 500);
        }
        ImGui.Spacing();
        ImGui.TextDisabled(bezierPresetDescriptions[itm.settings.bezierPreset || 'SMOOTH']);
        ImGui.Spacing();
        ImGui.Separator();
        ImGui.Spacing();
    }

    // ========== ANIMATION SETTINGS SECTION ==========
    ImGui.Text("Animation start delay:");
    const newDelay = ImGui.InputInt(`##delay${uniqueId}`, itm.settings.delayMs, 0, 5000);
    ImGui.SameLine();
    ImGui.TextDisabled("ms");
    ImGui.Spacing();

    if (!itm.settings.useFixedCamera) {
        ImGui.Text("Frame skip threshold:");
        ImGui.SameLine();
        ImGui.TextDisabled("(0 = no skip)");
        const newFrameSkip = ImGui.InputInt(`##frameskip${uniqueId}`, itm.settings.frameSkipThreshold, 0, 10);
        ImGui.SameLine();
        ImGui.TextDisabled("frames");
        ImGui.Spacing();
        if (itm.data && itm.data.length < 50) {
            ImGui.PushStyleColor(ImGuiCol.Text, 255, 180, 0, 255);
            ImGui.TextWrapped("Warning: This camera has less than 50 frames. Frame skip will be automatically disabled.");
            ImGui.PopStyleColor(1);
        } else {
            ImGui.TextDisabled("Skip N frames between keyframes");
        }
        ImGui.Spacing();
        itm.settings.frameSkipThreshold = newFrameSkip;
    }

    if (!itm.settings.useFixedCamera) {
        ImGui.Text("Camera offset:");
        ImGui.SameLine();
        ImGui.TextDisabled("(Applies on start)");
        const newVx = ImGui.InputFloat(`X##camX${uniqueId}`, itm.settings.cameraOffset.x, -20.0, 20.0);
        const newVy = ImGui.InputFloat(`Y##camY${uniqueId}`, itm.settings.cameraOffset.y, -20.0, 20.0);
        const newVz = ImGui.InputFloat(`Z##camZ${uniqueId}`, itm.settings.cameraOffset.z, -20.0, 20.0);
        ImGui.Spacing();
        
        ImGui.Text("FOV Offset:");
        ImGui.SameLine();
        ImGui.TextDisabled("(Applies on start)");
        const newCfov = ImGui.InputFloat(`##fov${uniqueId}`, itm.settings.fovOffset, -50.0, 50.0);
        ImGui.Spacing();
        
        itm.settings.cameraOffset.x = newVx;
        itm.settings.cameraOffset.y = newVy;
        itm.settings.cameraOffset.z = newVz;
        itm.settings.fovOffset = newCfov;
    }
    ImGui.Separator();
    ImGui.Spacing();

    // ========== CATEGORY SELECTION ==========
    if (useTabs) {
        ImGui.Text("Category:");
        const currentCategory = itm.settings.category || "Common";
        const categoryNames = allCategories.join(",");
        let currentCategoryIndex = allCategories.indexOf(currentCategory);
        if (currentCategoryIndex < 0) currentCategoryIndex = allCategories.indexOf("Common");
        if (currentCategoryIndex < 0) currentCategoryIndex = 0;
        
        const newCategoryIndex = ImGui.ComboBox(`##category${uniqueId}`, categoryNames, currentCategoryIndex);
        if (newCategoryIndex !== currentCategoryIndex) {
            const newCategory = allCategories[newCategoryIndex];
            itm.settings.category = newCategory === "Common" ? "" : newCategory;
        }
        ImGui.Spacing();
    } else {
        // Single category or no categories
        const displayCategory = itm.settings.category || "Common";
        ImGui.Text("Category:");
        ImGui.SameLine();
        ImGui.TextDisabled(displayCategory);
        ImGui.Spacing();
    }
    ImGui.Separator();
    ImGui.Spacing();

    let size = ImGui.GetScalingSize("ST001", 2, false);
    if (ImGui.Button("Apply", size.x - 5, size.y / 1.25)) {
        itm.settings.delayMs = newDelay;
        itm.config.startDelayMs = newDelay;
        
        if (!itm.settings.useFixedCamera && itm.cameraFiles.length > 0) {
            const selectedCameraFile = itm.cameraFiles[selectedCameraIndex];
            itm.settings.selectedCameraFile = selectedCameraFile;
        }
        
        const settingsToSave = {
            delayMs: newDelay,
            cameraOffset: { 
                x: itm.settings.cameraOffset.x, 
                y: itm.settings.cameraOffset.y, 
                z: itm.settings.cameraOffset.z 
            },
            fovOffset: itm.settings.fovOffset,
            frameSkipThreshold: itm.settings.frameSkipThreshold,
            selectedCameraFile: itm.settings.selectedCameraFile,
            useFixedCamera: itm.settings.useFixedCamera,
            fixedCameraSettings: {
                x: itm.settings.fixedCameraSettings.x,
                y: itm.settings.fixedCameraSettings.y,
                z: itm.settings.fixedCameraSettings.z,
                fov: itm.settings.fixedCameraSettings.fov
            },
            bezierPreset: itm.settings.bezierPreset,
            category: itm.settings.category || ""
        };
        iniManager.saveAnimationSettings(itm.settings.animIniPath, itm.name, settingsToSave);
        organizeAnimationsByCategory();
        Text.PrintFormattedNow("~g~SAVED!", 500);
    }

    ImGui.SameLine();
    if (ImGui.Button("Cancel", size.x - 5, size.y / 1.25)) {
        showSettingsWindow = false;
    }

    ImGui.Separator();
    ImGui.Dummy(30, 5);

    if (ImGui.CollapsingHeader("Camera & Music Info")) {
        if (itm.settings.useFixedCamera) {
            ImGui.Text("Fixed Camera Enabled");
            ImGui.Text(`Position: X=${itm.settings.fixedCameraSettings.x.toFixed(3)}, Y=${itm.settings.fixedCameraSettings.y.toFixed(3)}, Z=${itm.settings.fixedCameraSettings.z.toFixed(3)}`);
            ImGui.Text(`FOV: ${itm.settings.fixedCameraSettings.fov.toFixed(3)}`);
        } else {
            ImGui.Text("Camera Information");
            if (itm.cameraFiles.length > 0) {
                ImGui.Text(`Selected: ${itm.cameraFiles[selectedCameraIndex]}`);
                ImGui.Text(`Total cameras: ${itm.cameraFiles.length}`);
                if (itm.cameraFiles.length > 1) {
                    ImGui.TextDisabled("Available cameras:");
                    for (let i = 0; i < itm.cameraFiles.length; i++) {
                        ImGui.TextDisabled(`  ${i + 1}. ${itm.cameraFiles[i]}`);
                    }
                }
            } else {
                ImGui.TextDisabled("No camera files available");
            }
        }
        ImGui.Spacing();

        ImGui.Separator();
        ImGui.Spacing();

        ImGui.Text("Audio Information");
        ImGui.Text(`Name: ${itm.settings.sfxName}`);
        ImGui.TextWrapped(`Dir: ${itm.settings.sfxDir}`);
        ImGui.Separator();
        ImGui.Spacing();
    }

    ImGui.End();
    if (theme) theme.pop();
}

//----------------------------------------------------------------------
// ANIMATION CONTROL FUNCTIONS
//----------------------------------------------------------------------

async function playAnimation() {
    if (selectedItemIndex < 0) return;
    if (isAnimationRunning) {
        return;
    }
    const datDance = itemsList[selectedItemIndex];
    await configLoader.ensureCameraFilesDiscovered(datDance.id);
    if (!datDance.settingsLoaded) {
        configLoader.loadAnimationSettings(datDance.id, iniManager, datDance.configFile);
    }
    if (!datDance.settings) {
        Text.PrintFormattedNow("~r~ERROR: Failed to load settings!", 500);
        return;
    }
    
    isLoadingAnimation = true;
    showMenu = false;
    Camera.DoFade(globalCfg.fadeDelayMs, Fade.Out);
    await asyncWait(globalCfg.fadeDelayMs);

    const cameraDataLoaded = await configLoader.loadAnimationCameraData(datDance.id);

    if (datDance.settings.useFixedCamera && cameraDataLoaded) {
        const tempAudio = AudioStream.Load(datDance.config.audioFilePath);
        const audioDurationSeconds = tempAudio.getLength();
        tempAudio.remove();
        configLoader.updateFixedCameraDuration(datDance.id, audioDurationSeconds);
    }

    if (!cameraDataLoaded || !datDance.data) {
        isLoadingAnimation = false;
        Text.PrintFormattedNow("~r~ERROR: Failed to load camera data!", 800);
        Camera.DoFade(globalCfg.fadeDelayMs, Fade.In);
        return;
    }
    
    isLoadingAnimation = false;
    const cameraOffset = {
        x: datDance.settings.cameraOffset.x,
        y: datDance.settings.cameraOffset.y,
        z: datDance.settings.cameraOffset.z
    };
    const fovOffset = datDance.settings.fovOffset;

    // Pass interpolation mode using animation-specific preset
    currentManager = new AnimationManager(
        globalCfg, 
        datDance.config, 
        cameraOffset, 
        fovOffset, 
        progressBarSettings,
        datDance.settings.frameSkipThreshold,
        datDance.settings.bezierPreset || 'SMOOTH'  // Use animation-specific preset
    );
    
    const loadedCameraData = currentManager.loadCameraData(datDance.data);

    isAnimationRunning = true;
    isAnimationPaused = false;
    currentPlayingName = datDance.name;

    await currentManager.start(loadedCameraData);
    
    showMenu = true;
    isAnimationRunning = false;
    isAnimationPaused = false;
    currentManager = null;
}

function pauseAnimation() {
    if (currentManager && isAnimationRunning && !isAnimationPaused) {
        currentManager.pause();
        isAnimationPaused = true;
    }
}

function resumeAnimation() {
    if (currentManager && isAnimationRunning && isAnimationPaused) {
        currentManager.resume();
        isAnimationPaused = false;
    }
}

function stopAnimation() {
    if (currentManager) {
        currentManager.stop();
        currentManager = null;
    }
    isAnimationRunning = false;
    isAnimationPaused = false;
    currentPlayingName = "";
}
