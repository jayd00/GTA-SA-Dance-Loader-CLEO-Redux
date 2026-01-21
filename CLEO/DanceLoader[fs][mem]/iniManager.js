// by J16D
// iniManager.js - INI Configuration Manager
//
/// <reference path="../.config/sa.d.ts" />

/**
 * INI Manager Class  
 * Manages global settings (theme, UI, progress bar) and individual animation configs
 */
export class IniManager {
    constructor() {
        this.globalIniPath = "CLEO/DanceLoader[fs][mem]/userConfig.ini";
    }

    /**
     * Initialize global INI file  
     * Only creates structure if doesn't exist
     */
    initialize() {
        if (!IniFile.ReadString(this.globalIniPath, "Global", "Theme")) {
            this.createDefaultGlobalIni();
        }
    }

    /**
     * Create default global INI file structure
     */
    createDefaultGlobalIni() {
        IniFile.WriteString("darkModern", this.globalIniPath, "Global", "Theme");
        IniFile.WriteInt(3, this.globalIniPath, "Global", "Version");
        
        // Selected Item Color defaults
        IniFile.WriteInt(255, this.globalIniPath, "UI", "SelectedItemR");
        IniFile.WriteInt(255, this.globalIniPath, "UI", "SelectedItemG");
        IniFile.WriteInt(0, this.globalIniPath, "UI", "SelectedItemB");
        IniFile.WriteInt(255, this.globalIniPath, "UI", "SelectedItemA");
        
        // Progress Bar defaults
        IniFile.WriteInt(1, this.globalIniPath, "ProgressBar", "Enabled");
        IniFile.WriteInt(1, this.globalIniPath, "ProgressBar", "ShowText");
        IniFile.WriteFloat(160.0, this.globalIniPath, "ProgressBar", "PosX");
        IniFile.WriteFloat(428.0, this.globalIniPath, "ProgressBar", "PosY");
        IniFile.WriteFloat(320.0, this.globalIniPath, "ProgressBar", "Width");
        IniFile.WriteFloat(6.0, this.globalIniPath, "ProgressBar", "Height");
        IniFile.WriteInt(255, this.globalIniPath, "ProgressBar", "FgColorR");
        IniFile.WriteInt(200, this.globalIniPath, "ProgressBar", "FgColorG");
        IniFile.WriteInt(0, this.globalIniPath, "ProgressBar", "FgColorB");
        IniFile.WriteInt(220, this.globalIniPath, "ProgressBar", "FgColorA");
        IniFile.WriteInt(0, this.globalIniPath, "ProgressBar", "BgColorR");
        IniFile.WriteInt(0, this.globalIniPath, "ProgressBar", "BgColorG");
        IniFile.WriteInt(0, this.globalIniPath, "ProgressBar", "BgColorB");
        IniFile.WriteInt(150, this.globalIniPath, "ProgressBar", "BgColorA");
        IniFile.WriteInt(255, this.globalIniPath, "ProgressBar", "BorderColorR");
        IniFile.WriteInt(255, this.globalIniPath, "ProgressBar", "BorderColorG");
        IniFile.WriteInt(255, this.globalIniPath, "ProgressBar", "BorderColorB");
        IniFile.WriteInt(50, this.globalIniPath, "ProgressBar", "BorderColorA");
        IniFile.WriteInt(255, this.globalIniPath, "ProgressBar", "TextColorR");
        IniFile.WriteInt(255, this.globalIniPath, "ProgressBar", "TextColorG");
        IniFile.WriteInt(255, this.globalIniPath, "ProgressBar", "TextColorB");
        IniFile.WriteInt(255, this.globalIniPath, "ProgressBar", "TextColorA");
        
        // Pause Text defaults
        IniFile.WriteInt(1, this.globalIniPath, "PauseText", "Enabled");
        IniFile.WriteFloat(320.0, this.globalIniPath, "PauseText", "PosX");
        IniFile.WriteFloat(400.0, this.globalIniPath, "PauseText", "PosY");
        IniFile.WriteFloat(0.6, this.globalIniPath, "PauseText", "ScaleX");
        IniFile.WriteFloat(1.2, this.globalIniPath, "PauseText", "ScaleY");
        IniFile.WriteInt(255, this.globalIniPath, "PauseText", "ColorR");
        IniFile.WriteInt(255, this.globalIniPath, "PauseText", "ColorG");
        IniFile.WriteInt(0, this.globalIniPath, "PauseText", "ColorB");
        IniFile.WriteInt(255, this.globalIniPath, "PauseText", "ColorA");
    }

    /**
     * Create default animation INI file
     * @param {string} animIniPath - Full path to animation INI file
     * @param {string} animName - Animation name (for section header)
     * @param {string} defaultCamera - Default camera file name
     */
    createDefaultAnimationIni(animIniPath, animName, defaultCamera = "") {
        IniFile.WriteInt(0, animIniPath, animName, "DelayMs");
        IniFile.WriteInt(0, animIniPath, animName, "FrameSkipThreshold");
        IniFile.WriteFloat(0.0, animIniPath, animName, "CameraX");
        IniFile.WriteFloat(0.0, animIniPath, animName, "CameraY");
        IniFile.WriteFloat(0.0, animIniPath, animName, "CameraZ");
        IniFile.WriteFloat(0.0, animIniPath, animName, "FovOffset");
        IniFile.WriteString(defaultCamera, animIniPath, animName, "SelectedCamera");
        IniFile.WriteInt(0, animIniPath, animName, "UseFixedCamera");
        IniFile.WriteFloat(0.0, animIniPath, animName, "FixedCamX");
        IniFile.WriteFloat(5.0, animIniPath, animName, "FixedCamY");
        IniFile.WriteFloat(0.3, animIniPath, animName, "FixedCamZ");
        IniFile.WriteFloat(45.0, animIniPath, animName, "FixedCamFOV");
        IniFile.WriteString("SMOOTH", animIniPath, animName, "BezierPreset");
        IniFile.WriteString("", animIniPath, animName, "Category");
    }

    // ==================== GLOBAL SETTINGS (Theme, UI, ProgressBar, PauseText) ====================

    getTheme() {
        const theme = IniFile.ReadString(this.globalIniPath, "Global", "Theme");
        return theme || "darkModern";
    }

    saveTheme(themeName) {
        IniFile.WriteString(themeName, this.globalIniPath, "Global", "Theme");
    }

    getSelectedItemColor() {
        return {
            r: IniFile.ReadInt(this.globalIniPath, "UI", "SelectedItemR") || 255,
            g: IniFile.ReadInt(this.globalIniPath, "UI", "SelectedItemG") || 255,
            b: IniFile.ReadInt(this.globalIniPath, "UI", "SelectedItemB") || 0,
            a: IniFile.ReadInt(this.globalIniPath, "UI", "SelectedItemA") || 255
        };
    }

    saveSelectedItemColor(color) {
        IniFile.WriteInt(color.r, this.globalIniPath, "UI", "SelectedItemR");
        IniFile.WriteInt(color.g, this.globalIniPath, "UI", "SelectedItemG");
        IniFile.WriteInt(color.b, this.globalIniPath, "UI", "SelectedItemB");
        IniFile.WriteInt(color.a, this.globalIniPath, "UI", "SelectedItemA");
    }
    
    getProgressBarSettings() {
        return {
            enabled: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "Enabled") === 1,
            showText: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "ShowText") === 1,
            posX: IniFile.ReadFloat(this.globalIniPath, "ProgressBar", "PosX") || 160.0,
            posY: IniFile.ReadFloat(this.globalIniPath, "ProgressBar", "PosY") || 428.0,
            width: IniFile.ReadFloat(this.globalIniPath, "ProgressBar", "Width") || 320.0,
            height: IniFile.ReadFloat(this.globalIniPath, "ProgressBar", "Height") || 6.0,
            fgColor: {
                r: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "FgColorR"),
                g: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "FgColorG"),
                b: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "FgColorB"),
                a: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "FgColorA")
            },
            bgColor: {
                r: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "BgColorR"),
                g: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "BgColorG"),
                b: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "BgColorB"),
                a: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "BgColorA")
            },
            borderColor: {
                r: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "BorderColorR"),
                g: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "BorderColorG"),
                b: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "BorderColorB"),
                a: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "BorderColorA")
            },
            textColor: {
                r: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "TextColorR"),
                g: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "TextColorG"),
                b: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "TextColorB"),
                a: IniFile.ReadInt(this.globalIniPath, "ProgressBar", "TextColorA")
            }
        };
    }

    saveProgressBarSettings(settings) {
        IniFile.WriteInt(settings.enabled ? 1 : 0, this.globalIniPath, "ProgressBar", "Enabled");
        IniFile.WriteInt(settings.showText ? 1 : 0, this.globalIniPath, "ProgressBar", "ShowText");
        IniFile.WriteFloat(settings.posX, this.globalIniPath, "ProgressBar", "PosX");
        IniFile.WriteFloat(settings.posY, this.globalIniPath, "ProgressBar", "PosY");
        IniFile.WriteFloat(settings.width, this.globalIniPath, "ProgressBar", "Width");
        IniFile.WriteFloat(settings.height, this.globalIniPath, "ProgressBar", "Height");
        IniFile.WriteInt(settings.fgColor.r, this.globalIniPath, "ProgressBar", "FgColorR");
        IniFile.WriteInt(settings.fgColor.g, this.globalIniPath, "ProgressBar", "FgColorG");
        IniFile.WriteInt(settings.fgColor.b, this.globalIniPath, "ProgressBar", "FgColorB");
        IniFile.WriteInt(settings.fgColor.a, this.globalIniPath, "ProgressBar", "FgColorA");
        
        IniFile.WriteInt(settings.bgColor.r, this.globalIniPath, "ProgressBar", "BgColorR");
        IniFile.WriteInt(settings.bgColor.g, this.globalIniPath, "ProgressBar", "BgColorG");
        IniFile.WriteInt(settings.bgColor.b, this.globalIniPath, "ProgressBar", "BgColorB");
        IniFile.WriteInt(settings.bgColor.a, this.globalIniPath, "ProgressBar", "BgColorA");
        
        IniFile.WriteInt(settings.borderColor.r, this.globalIniPath, "ProgressBar", "BorderColorR");
        IniFile.WriteInt(settings.borderColor.g, this.globalIniPath, "ProgressBar", "BorderColorG");
        IniFile.WriteInt(settings.borderColor.b, this.globalIniPath, "ProgressBar", "BorderColorB");
        IniFile.WriteInt(settings.borderColor.a, this.globalIniPath, "ProgressBar", "BorderColorA");
        
        IniFile.WriteInt(settings.textColor.r, this.globalIniPath, "ProgressBar", "TextColorR");
        IniFile.WriteInt(settings.textColor.g, this.globalIniPath, "ProgressBar", "TextColorG");
        IniFile.WriteInt(settings.textColor.b, this.globalIniPath, "ProgressBar", "TextColorB");
        IniFile.WriteInt(settings.textColor.a, this.globalIniPath, "ProgressBar", "TextColorA");
    }

    getPauseTextSettings() {
        return {
            enabled: IniFile.ReadInt(this.globalIniPath, "PauseText", "Enabled") === 1,
            posX: IniFile.ReadFloat(this.globalIniPath, "PauseText", "PosX") || 320.0,
            posY: IniFile.ReadFloat(this.globalIniPath, "PauseText", "PosY") || 400.0,
            scaleX: IniFile.ReadFloat(this.globalIniPath, "PauseText", "ScaleX") || 0.6,
            scaleY: IniFile.ReadFloat(this.globalIniPath, "PauseText", "ScaleY") || 1.2,
            color: {
                r: IniFile.ReadInt(this.globalIniPath, "PauseText", "ColorR"),
                g: IniFile.ReadInt(this.globalIniPath, "PauseText", "ColorG"),
                b: IniFile.ReadInt(this.globalIniPath, "PauseText", "ColorB"),
                a: IniFile.ReadInt(this.globalIniPath, "PauseText", "ColorA")
            }
        };
    }

    savePauseTextSettings(settings) {
        IniFile.WriteInt(settings.enabled ? 1 : 0, this.globalIniPath, "PauseText", "Enabled");
        IniFile.WriteFloat(settings.posX, this.globalIniPath, "PauseText", "PosX");
        IniFile.WriteFloat(settings.posY, this.globalIniPath, "PauseText", "PosY");
        IniFile.WriteFloat(settings.scaleX, this.globalIniPath, "PauseText", "ScaleX");
        IniFile.WriteFloat(settings.scaleY, this.globalIniPath, "PauseText", "ScaleY");
        IniFile.WriteInt(settings.color.r, this.globalIniPath, "PauseText", "ColorR");
        IniFile.WriteInt(settings.color.g, this.globalIniPath, "PauseText", "ColorG");
        IniFile.WriteInt(settings.color.b, this.globalIniPath, "PauseText", "ColorB");
        IniFile.WriteInt(settings.color.a, this.globalIniPath, "PauseText", "ColorA");
    }

    // ==================== ANIMATION SETTINGS ====================

    /**
     * Get animation settings from individual INI file
     * @param {string} animIniPath - Full path to animation INI file
     * @param {string} animName - Animation name (section header)
     * @param {Object} defaults - Default values
     * @returns {Object} Animation settings
     */
    getAnimationSettings(animIniPath, animName, defaults = {}) {
        if (!IniFile.ReadString(animIniPath, animName, "DelayMs")) {
            this.createDefaultAnimationIni(animIniPath, animName, defaults.selectedCameraFile || "");
        }

        return {
            delayMs: IniFile.ReadInt(animIniPath, animName, "DelayMs") || defaults.delayMs || 0,
            cameraOffset: {
                x: IniFile.ReadFloat(animIniPath, animName, "CameraX") || 0.0,
                y: IniFile.ReadFloat(animIniPath, animName, "CameraY") || 0.0,
                z: IniFile.ReadFloat(animIniPath, animName, "CameraZ") || 0.0
            },
            fovOffset: IniFile.ReadFloat(animIniPath, animName, "FovOffset") || 0.0,
            frameSkipThreshold: IniFile.ReadInt(animIniPath, animName, "FrameSkipThreshold") || 0,
            selectedCameraFile: IniFile.ReadString(animIniPath, animName, "SelectedCamera") || defaults.selectedCameraFile || "",
            useFixedCamera: IniFile.ReadInt(animIniPath, animName, "UseFixedCamera") === 1,
            fixedCameraSettings: {
                x: IniFile.ReadFloat(animIniPath, animName, "FixedCamX") || 0.0,
                y: IniFile.ReadFloat(animIniPath, animName, "FixedCamY") || 5.0,
                z: IniFile.ReadFloat(animIniPath, animName, "FixedCamZ") || 0.3,
                fov: IniFile.ReadFloat(animIniPath, animName, "FixedCamFOV") || 45.0
            },
            bezierPreset: IniFile.ReadString(animIniPath, animName, "BezierPreset") || defaults.bezierPreset || 'SMOOTH',
            category: IniFile.ReadString(animIniPath, animName, "Category") || ""
        };
    }

    /**
     * Save animation settings to individual INI file
     * @param {string} animIniPath - Full path to animation INI file
     * @param {string} animName - Animation name (section header)
     * @param {Object} settings - Settings to save
     */
    saveAnimationSettings(animIniPath, animName, settings) {
        IniFile.WriteInt(settings.delayMs, animIniPath, animName, "DelayMs");
        IniFile.WriteInt(settings.frameSkipThreshold || 0, animIniPath, animName, "FrameSkipThreshold");
        IniFile.WriteFloat(settings.cameraOffset.x, animIniPath, animName, "CameraX");
        IniFile.WriteFloat(settings.cameraOffset.y, animIniPath, animName, "CameraY");
        IniFile.WriteFloat(settings.cameraOffset.z, animIniPath, animName, "CameraZ");
        IniFile.WriteFloat(settings.fovOffset, animIniPath, animName, "FovOffset");
        
        if (settings.selectedCameraFile !== undefined) {
            IniFile.WriteString(settings.selectedCameraFile, animIniPath, animName, "SelectedCamera");
        }

        if (settings.useFixedCamera !== undefined) {
            IniFile.WriteInt(settings.useFixedCamera ? 1 : 0, animIniPath, animName, "UseFixedCamera");
        }

        if (settings.fixedCameraSettings) {
            IniFile.WriteFloat(settings.fixedCameraSettings.x, animIniPath, animName, "FixedCamX");
            IniFile.WriteFloat(settings.fixedCameraSettings.y, animIniPath, animName, "FixedCamY");
            IniFile.WriteFloat(settings.fixedCameraSettings.z, animIniPath, animName, "FixedCamZ");
            IniFile.WriteFloat(settings.fixedCameraSettings.fov, animIniPath, animName, "FixedCamFOV");
        }

        if (settings.bezierPreset !== undefined) {
            IniFile.WriteString(settings.bezierPreset, animIniPath, animName, "BezierPreset");
        }

        if (settings.category !== undefined) {
            IniFile.WriteString(settings.category, animIniPath, animName, "Category");
        }
    }

    /**
     * Reset animation settings to defaults
     * @param {string} animIniPath - Full path to animation INI file
     * @param {string} animName - Animation name (section header)
     */
    resetAnimation(animIniPath, animName) {
        IniFile.WriteInt(0, animIniPath, animName, "DelayMs");
        IniFile.WriteFloat(0.0, animIniPath, animName, "CameraX");
        IniFile.WriteFloat(0.0, animIniPath, animName, "CameraY");
        IniFile.WriteFloat(0.0, animIniPath, animName, "CameraZ");
        IniFile.WriteFloat(0.0, animIniPath, animName, "FovOffset");
        IniFile.WriteInt(0, animIniPath, animName, "UseFixedCamera");
    }
}

/**
Global instance (singleton)
*/
let iniManagerInstance = null;

export function getIniManager() {
    if (!iniManagerInstance) {
        iniManagerInstance = new IniManager();
        iniManagerInstance.initialize();
    }
    return iniManagerInstance;
}
