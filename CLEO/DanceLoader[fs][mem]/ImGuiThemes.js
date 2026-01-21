// by J16D
// Description: Collection of pre-made themes
// 
// USER INSTRUCTIONS:
// ============================
// You can add your own themes here following the same pattern.
// 
// To create a custom theme:
// 1. Copy one of the existing functions (e.g. createDarkModernTheme)
// 2. Rename it (e.g. createMyCustomTheme)
// 3. Change the theme name: new ImGuiTheme('myCustomTheme')
// 4. Modify the RGB colours (0-255) according to your preference
// 5. Add your function in THEME_REGISTRY at the end of the file
//
// All themes have 55 elements (indexes 0-54) for complete ImGui styling
//
/// <reference path="../.config/sa.d.ts" />

import { ImGuiTheme } from "./ImGuiCore";

/* ============================
   THEMES INCLUDED (40 Total)
   ============================ */

/**
 * Modern dark theme with blue accents
 */
function createDarkModernTheme() {
    let theme = new ImGuiTheme("darkModern");
    theme.addElement(0, "Text", 220, 220, 220, 255);
    theme.addElement(1, "Text Disabled", 120, 120, 120, 255);
    theme.addElement(2, "Window Background", 20, 20, 25, 240);
    theme.addElement(3, "Child Background", 30, 30, 35, 255);
    theme.addElement(4, "Popup Background", 25, 25, 30, 255);
    theme.addElement(5, "Border", 80, 80, 90, 255);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 50);
    theme.addElement(7, "Frame Background", 40, 40, 50, 255);
    theme.addElement(8, "Frame Background Hovered", 60, 60, 75, 255);
    theme.addElement(9, "Frame Background Active", 80, 80, 100, 255);
    theme.addElement(10, "Title Background", 35, 35, 40, 255);
    theme.addElement(11, "Title Background Active", 50, 50, 60, 255);
    theme.addElement(12, "Title Background Collapsed", 30, 30, 35, 200);
    theme.addElement(13, "Menu Bar Background", 30, 30, 35, 255);
    theme.addElement(14, "Scrollbar Background", 40, 40, 50, 255);
    theme.addElement(15, "Scrollbar Grab", 80, 80, 90, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 100, 100, 110, 255);
    theme.addElement(17, "Scrollbar Grab Active", 120, 120, 130, 255);
    theme.addElement(18, "Check Mark", 100, 200, 255, 255);
    theme.addElement(19, "Slider Grab", 100, 200, 255, 255);
    theme.addElement(20, "Slider Grab Active", 120, 220, 255, 255);
    theme.addElement(21, "Button", 60, 60, 70, 255);
    theme.addElement(22, "Button Hovered", 80, 80, 100, 255);
    theme.addElement(23, "Button Active", 100, 100, 130, 255);
    theme.addElement(24, "Header", 60, 100, 150, 20);
    theme.addElement(25, "Header Hovered", 80, 120, 170, 255);
    theme.addElement(26, "Header Active", 100, 140, 190, 255);
    theme.addElement(27, "Separator", 80, 80, 90, 255);
    theme.addElement(28, "Separator Hovered", 100, 100, 120, 255);
    theme.addElement(29, "Separator Active", 120, 120, 150, 255);
    theme.addElement(30, "Resize Grip", 60, 100, 150, 51);
    theme.addElement(31, "Resize Grip Hovered", 80, 120, 170, 171);
    theme.addElement(32, "Resize Grip Active", 100, 140, 190, 242);
    theme.addElement(33, "Tab", 40, 40, 50, 219);
    theme.addElement(34, "Tab Hovered", 60, 60, 75, 204);
    theme.addElement(35, "Tab Active", 80, 80, 100, 255);
    theme.addElement(36, "Tab Unfocused", 30, 30, 35, 255);
    theme.addElement(37, "Tab Unfocused Active", 35, 35, 40, 255);
    theme.addElement(38, "Plot Lines", 100, 200, 255, 255);
    theme.addElement(39, "Plot Lines Hovered", 120, 220, 255, 255);
    theme.addElement(40, "Plot Histogram", 80, 180, 255, 255);
    theme.addElement(41, "Plot Histogram Hovered", 100, 200, 255, 255);
    theme.addElement(42, "Text Selected Background", 60, 100, 150, 89);
    theme.addElement(43, "Drag Drop Target", 100, 200, 255, 230);
    theme.addElement(44, "Nav Highlight", 60, 100, 150, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 40, 40, 50, 51);
    theme.addElement(47, "Modal Window Dim Background", 20, 20, 25, 89);
    theme.addElement(48, "Table Header Background", 40, 40, 50, 255);
    theme.addElement(49, "Table Border Strong", 60, 60, 70, 255);
    theme.addElement(50, "Table Border Light", 50, 50, 60, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 60, 100, 150, 204);
    theme.addElement(54, "Docking Empty Background", 30, 30, 35, 204);
    return theme;
}

/**
 * Dark theme with blue accents
 */
function createBlueDarkTheme() {
    let theme = new ImGuiTheme("blueDark");
    theme.addElement(0, "Text", 255, 255, 255, 255);
    theme.addElement(1, "Text Disabled", 128, 128, 128, 255);
    theme.addElement(2, "Window Background", 15, 15, 15, 240);
    theme.addElement(3, "Child Background", 0, 0, 0, 0);
    theme.addElement(4, "Popup Background", 20, 20, 20, 240);
    theme.addElement(5, "Border", 109, 109, 127, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 41, 74, 122, 138);
    theme.addElement(8, "Frame Background Hovered", 66, 150, 250, 102);
    theme.addElement(9, "Frame Background Active", 66, 150, 250, 171);
    theme.addElement(10, "Title Background", 10, 10, 10, 255);
    theme.addElement(11, "Title Background Active", 41, 74, 122, 255);
    theme.addElement(12, "Title Background Collapsed", 0, 0, 0, 130);
    theme.addElement(13, "Menu Bar Background", 36, 36, 36, 255);
    theme.addElement(14, "Scrollbar Background", 5, 5, 5, 135);
    theme.addElement(15, "Scrollbar Grab", 79, 79, 79, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 104, 104, 104, 255);
    theme.addElement(17, "Scrollbar Grab Active", 130, 130, 130, 255);
    theme.addElement(18, "Check Mark", 66, 150, 250, 255);
    theme.addElement(19, "Slider Grab", 61, 133, 224, 255);
    theme.addElement(20, "Slider Grab Active", 66, 150, 250, 255);
    theme.addElement(21, "Button", 66, 150, 250, 102);
    theme.addElement(22, "Button Hovered", 66, 150, 250, 255);
    theme.addElement(23, "Button Active", 15, 135, 250, 255);
    theme.addElement(24, "Header", 66, 150, 250, 20);
    theme.addElement(25, "Header Hovered", 66, 150, 250, 204);
    theme.addElement(26, "Header Active", 66, 150, 250, 255);
    theme.addElement(27, "Separator", 109, 109, 127, 128);
    theme.addElement(28, "Separator Hovered", 66, 150, 250, 199);
    theme.addElement(29, "Separator Active", 66, 150, 250, 255);
    theme.addElement(30, "Resize Grip", 66, 150, 250, 64);
    theme.addElement(31, "Resize Grip Hovered", 66, 150, 250, 171);
    theme.addElement(32, "Resize Grip Active", 66, 150, 250, 242);
    theme.addElement(33, "Tab", 41, 74, 122, 219);
    theme.addElement(34, "Tab Hovered", 66, 150, 250, 204);
    theme.addElement(35, "Tab Active", 80, 100, 150, 255);
    theme.addElement(36, "Tab Unfocused", 30, 30, 35, 255);
    theme.addElement(37, "Tab Unfocused Active", 35, 35, 40, 255);
    theme.addElement(38, "Plot Lines", 66, 150, 250, 255);
    theme.addElement(39, "Plot Lines Hovered", 100, 180, 255, 255);
    theme.addElement(40, "Plot Histogram", 50, 130, 224, 255);
    theme.addElement(41, "Plot Histogram Hovered", 66, 150, 250, 255);
    theme.addElement(42, "Text Selected Background", 66, 150, 250, 89);
    theme.addElement(43, "Drag Drop Target", 66, 150, 250, 230);
    theme.addElement(44, "Nav Highlight", 66, 150, 250, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 15, 15, 20, 51);
    theme.addElement(47, "Modal Window Dim Background", 10, 10, 15, 89);
    theme.addElement(48, "Table Header Background", 40, 40, 50, 255);
    theme.addElement(49, "Table Border Strong", 60, 60, 70, 255);
    theme.addElement(50, "Table Border Light", 50, 50, 60, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 66, 150, 250, 204);
    theme.addElement(54, "Docking Empty Background", 30, 30, 35, 204);
    return theme;
}

/**
 * Dark theme with red accents
 */
function createRedDarkTheme() {
    let theme = new ImGuiTheme("redDark");
    theme.addElement(0, "Text", 255, 255, 255, 255);
    theme.addElement(1, "Text Disabled", 128, 128, 128, 255);
    theme.addElement(2, "Window Background", 15, 15, 15, 240);
    theme.addElement(3, "Child Background", 255, 255, 255, 0);
    theme.addElement(4, "Popup Background", 20, 20, 20, 240);
    theme.addElement(5, "Border", 109, 109, 127, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 122, 33, 33, 138);
    theme.addElement(8, "Frame Background Hovered", 250, 66, 66, 102);
    theme.addElement(9, "Frame Background Active", 250, 66, 66, 171);
    theme.addElement(10, "Title Background", 10, 10, 10, 255);
    theme.addElement(11, "Title Background Active", 122, 33, 33, 255);
    theme.addElement(12, "Title Background Collapsed", 0, 0, 0, 130);
    theme.addElement(13, "Menu Bar Background", 35, 35, 35, 255);
    theme.addElement(14, "Scrollbar Background", 5, 5, 5, 135);
    theme.addElement(15, "Scrollbar Grab", 79, 79, 79, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 104, 104, 104, 255);
    theme.addElement(17, "Scrollbar Grab Active", 130, 130, 130, 255);
    theme.addElement(18, "Check Mark", 250, 66, 66, 255);
    theme.addElement(19, "Slider Grab", 224, 66, 61, 255);
    theme.addElement(20, "Slider Grab Active", 250, 66, 66, 255);
    theme.addElement(21, "Button", 250, 66, 66, 102);
    theme.addElement(22, "Button Hovered", 250, 66, 66, 255);
    theme.addElement(23, "Button Active", 250, 15, 15, 255);
    theme.addElement(24, "Header", 250, 66, 66, 20);
    theme.addElement(25, "Header Hovered", 250, 66, 66, 204);
    theme.addElement(26, "Header Active", 250, 66, 66, 255);
    theme.addElement(27, "Separator", 109, 109, 127, 128);
    theme.addElement(28, "Separator Hovered", 191, 25, 25, 199);
    theme.addElement(29, "Separator Active", 191, 25, 25, 255);
    theme.addElement(30, "Resize Grip", 250, 66, 66, 64);
    theme.addElement(31, "Resize Grip Hovered", 250, 66, 66, 171);
    theme.addElement(32, "Resize Grip Active", 250, 66, 66, 242);
    theme.addElement(33, "Tab", 122, 33, 33, 219);
    theme.addElement(34, "Tab Hovered", 250, 66, 66, 204);
    theme.addElement(35, "Tab Active", 191, 25, 25, 255);
    theme.addElement(36, "Tab Unfocused", 40, 20, 20, 255);
    theme.addElement(37, "Tab Unfocused Active", 60, 30, 30, 255);
    theme.addElement(38, "Plot Lines", 250, 66, 66, 255);
    theme.addElement(39, "Plot Lines Hovered", 255, 100, 100, 255);
    theme.addElement(40, "Plot Histogram", 200, 50, 50, 255);
    theme.addElement(41, "Plot Histogram Hovered", 250, 80, 80, 255);
    theme.addElement(42, "Text Selected Background", 250, 66, 66, 89);
    theme.addElement(43, "Drag Drop Target", 250, 100, 100, 230);
    theme.addElement(44, "Nav Highlight", 250, 66, 66, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 40, 20, 20, 51);
    theme.addElement(47, "Modal Window Dim Background", 20, 10, 10, 89);
    theme.addElement(48, "Table Header Background", 50, 30, 30, 255);
    theme.addElement(49, "Table Border Strong", 70, 40, 40, 255);
    theme.addElement(50, "Table Border Light", 60, 35, 35, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 250, 66, 66, 204);
    theme.addElement(54, "Docking Empty Background", 30, 30, 35, 204);
    return theme;
}

/**
 * Dark theme with orange accents
 */
function createOrangeDarkTheme() {
    let theme = new ImGuiTheme("orangeDark");
    theme.addElement(0, "Text", 255, 255, 255, 255);
    theme.addElement(1, "Text Disabled", 128, 128, 128, 255);
    theme.addElement(2, "Window Background", 15, 15, 15, 240);
    theme.addElement(3, "Child Background", 255, 255, 255, 0);
    theme.addElement(4, "Popup Background", 20, 20, 20, 240);
    theme.addElement(5, "Border", 109, 109, 127, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 122, 59, 41, 138);
    theme.addElement(8, "Frame Background Hovered", 250, 109, 66, 102);
    theme.addElement(9, "Frame Background Active", 250, 109, 66, 171);
    theme.addElement(10, "Title Background", 10, 10, 10, 255);
    theme.addElement(11, "Title Background Active", 122, 59, 41, 255);
    theme.addElement(12, "Title Background Collapsed", 0, 0, 0, 130);
    theme.addElement(13, "Menu Bar Background", 35, 35, 35, 255);
    theme.addElement(14, "Scrollbar Background", 5, 5, 5, 135);
    theme.addElement(15, "Scrollbar Grab", 79, 79, 79, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 104, 104, 104, 255);
    theme.addElement(17, "Scrollbar Grab Active", 130, 130, 130, 255);
    theme.addElement(18, "Check Mark", 250, 109, 66, 255);
    theme.addElement(19, "Slider Grab", 224, 99, 61, 255);
    theme.addElement(20, "Slider Grab Active", 250, 109, 66, 255);
    theme.addElement(21, "Button", 250, 109, 66, 102);
    theme.addElement(22, "Button Hovered", 250, 109, 66, 255);
    theme.addElement(23, "Button Active", 250, 71, 15, 255);
    theme.addElement(24, "Header", 250, 109, 66, 20);
    theme.addElement(25, "Header Hovered", 250, 109, 66, 204);
    theme.addElement(26, "Header Active", 250, 109, 66, 255);
    theme.addElement(27, "Separator", 109, 109, 127, 128);
    theme.addElement(28, "Separator Hovered", 191, 64, 25, 199);
    theme.addElement(29, "Separator Active", 191, 64, 25, 255);
    theme.addElement(30, "Resize Grip", 250, 109, 66, 64);
    theme.addElement(31, "Resize Grip Hovered", 250, 109, 66, 171);
    theme.addElement(32, "Resize Grip Active", 250, 109, 66, 242);
    theme.addElement(33, "Tab", 122, 59, 41, 219);
    theme.addElement(34, "Tab Hovered", 250, 109, 66, 204);
    theme.addElement(35, "Tab Active", 191, 64, 25, 255);
    theme.addElement(36, "Tab Unfocused", 40, 25, 20, 255);
    theme.addElement(37, "Tab Unfocused Active", 60, 40, 30, 255);
    theme.addElement(38, "Plot Lines", 250, 109, 66, 255);
    theme.addElement(39, "Plot Lines Hovered", 255, 140, 100, 255);
    theme.addElement(40, "Plot Histogram", 200, 80, 40, 255);
    theme.addElement(41, "Plot Histogram Hovered", 250, 120, 60, 255);
    theme.addElement(42, "Text Selected Background", 250, 109, 66, 89);
    theme.addElement(43, "Drag Drop Target", 250, 150, 50, 230);
    theme.addElement(44, "Nav Highlight", 250, 109, 66, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 40, 25, 20, 51);
    theme.addElement(47, "Modal Window Dim Background", 20, 15, 10, 89);
    theme.addElement(48, "Table Header Background", 50, 40, 30, 255);
    theme.addElement(49, "Table Border Strong", 70, 50, 35, 255);
    theme.addElement(50, "Table Border Light", 60, 45, 35, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 250, 109, 66, 204);
    theme.addElement(54, "Docking Empty Background", 30, 30, 35, 204);
    return theme;
}

/**
 * Dark theme with teal accents
 */
function createTealDarkTheme() {
    let theme = new ImGuiTheme("tealDark");
    theme.addElement(0, "Text", 255, 255, 255, 255);
    theme.addElement(1, "Text Disabled", 128, 128, 128, 255);
    theme.addElement(2, "Window Background", 15, 15, 15, 240);
    theme.addElement(3, "Child Background", 255, 255, 255, 0);
    theme.addElement(4, "Popup Background", 20, 20, 20, 240);
    theme.addElement(5, "Border", 109, 109, 127, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 41, 122, 107, 138);
    theme.addElement(8, "Frame Background Hovered", 66, 250, 217, 102);
    theme.addElement(9, "Frame Background Active", 66, 250, 217, 171);
    theme.addElement(10, "Title Background", 10, 10, 10, 255);
    theme.addElement(11, "Title Background Active", 41, 122, 107, 255);
    theme.addElement(12, "Title Background Collapsed", 0, 0, 0, 130);
    theme.addElement(13, "Menu Bar Background", 35, 35, 35, 255);
    theme.addElement(14, "Scrollbar Background", 5, 5, 5, 135);
    theme.addElement(15, "Scrollbar Grab", 79, 79, 79, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 104, 104, 104, 255);
    theme.addElement(17, "Scrollbar Grab Active", 130, 130, 130, 255);
    theme.addElement(18, "Check Mark", 66, 250, 217, 255);
    theme.addElement(19, "Slider Grab", 61, 224, 196, 255);
    theme.addElement(20, "Slider Grab Active", 66, 250, 217, 255);
    theme.addElement(21, "Button", 66, 250, 217, 102);
    theme.addElement(22, "Button Hovered", 66, 250, 217, 255);
    theme.addElement(23, "Button Active", 15, 250, 209, 255);
    theme.addElement(24, "Header", 66, 250, 217, 20);
    theme.addElement(25, "Header Hovered", 66, 250, 217, 204);
    theme.addElement(26, "Header Active", 66, 250, 217, 255);
    theme.addElement(27, "Separator", 109, 109, 127, 128);
    theme.addElement(28, "Separator Hovered", 25, 191, 160, 199);
    theme.addElement(29, "Separator Active", 25, 191, 160, 255);
    theme.addElement(30, "Resize Grip", 66, 250, 217, 64);
    theme.addElement(31, "Resize Grip Hovered", 66, 250, 217, 171);
    theme.addElement(32, "Resize Grip Active", 66, 250, 217, 242);
    theme.addElement(33, "Tab", 41, 122, 107, 219);
    theme.addElement(34, "Tab Hovered", 66, 250, 217, 204);
    theme.addElement(35, "Tab Active", 25, 191, 160, 255);
    theme.addElement(36, "Tab Unfocused", 20, 35, 35, 255);
    theme.addElement(37, "Tab Unfocused Active", 30, 50, 45, 255);
    theme.addElement(38, "Plot Lines", 66, 250, 217, 255);
    theme.addElement(39, "Plot Lines Hovered", 100, 255, 230, 255);
    theme.addElement(40, "Plot Histogram", 50, 200, 180, 255);
    theme.addElement(41, "Plot Histogram Hovered", 66, 250, 217, 255);
    theme.addElement(42, "Text Selected Background", 66, 250, 217, 89);
    theme.addElement(43, "Drag Drop Target", 66, 250, 217, 230);
    theme.addElement(44, "Nav Highlight", 66, 250, 217, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 20, 35, 35, 51);
    theme.addElement(47, "Modal Window Dim Background", 15, 25, 25, 89);
    theme.addElement(48, "Table Header Background", 30, 40, 40, 255);
    theme.addElement(49, "Table Border Strong", 50, 70, 70, 255);
    theme.addElement(50, "Table Border Light", 40, 55, 55, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 66, 250, 217, 204);
    theme.addElement(54, "Docking Empty Background", 30, 30, 35, 204);
    return theme;
}

/**
 * Dark theme with lime accents
 */
function createLimeDarkTheme() {
    let theme = new ImGuiTheme("limeDark");
    theme.addElement(0, "Text", 255, 255, 255, 255);
    theme.addElement(1, "Text Disabled", 128, 128, 128, 255);
    theme.addElement(2, "Window Background", 15, 15, 15, 240);
    theme.addElement(3, "Child Background", 255, 255, 255, 0);
    theme.addElement(4, "Popup Background", 20, 20, 20, 240);
    theme.addElement(5, "Border", 109, 109, 127, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 107, 122, 41, 138);
    theme.addElement(8, "Frame Background Hovered", 217, 250, 66, 102);
    theme.addElement(9, "Frame Background Active", 217, 250, 66, 171);
    theme.addElement(10, "Title Background", 10, 10, 10, 255);
    theme.addElement(11, "Title Background Active", 107, 122, 41, 255);
    theme.addElement(12, "Title Background Collapsed", 0, 0, 0, 130);
    theme.addElement(13, "Menu Bar Background", 35, 35, 35, 255);
    theme.addElement(14, "Scrollbar Background", 5, 5, 5, 135);
    theme.addElement(15, "Scrollbar Grab", 79, 79, 79, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 104, 104, 104, 255);
    theme.addElement(17, "Scrollbar Grab Active", 130, 130, 130, 255);
    theme.addElement(18, "Check Mark", 217, 250, 66, 255);
    theme.addElement(19, "Slider Grab", 196, 224, 61, 255);
    theme.addElement(20, "Slider Grab Active", 217, 250, 66, 255);
    theme.addElement(21, "Button", 217, 250, 66, 102);
    theme.addElement(22, "Button Hovered", 217, 250, 66, 255);
    theme.addElement(23, "Button Active", 209, 250, 15, 255);
    theme.addElement(24, "Header", 217, 250, 66, 20);
    theme.addElement(25, "Header Hovered", 217, 250, 66, 204);
    theme.addElement(26, "Header Active", 217, 250, 66, 255);
    theme.addElement(27, "Separator", 109, 109, 127, 128);
    theme.addElement(28, "Separator Hovered", 160, 191, 25, 199);
    theme.addElement(29, "Separator Active", 160, 191, 25, 255);
    theme.addElement(30, "Resize Grip", 217, 250, 66, 64);
    theme.addElement(31, "Resize Grip Hovered", 217, 250, 66, 171);
    theme.addElement(32, "Resize Grip Active", 217, 250, 66, 242);
    theme.addElement(33, "Tab", 107, 122, 41, 219);
    theme.addElement(34, "Tab Hovered", 217, 250, 66, 204);
    theme.addElement(35, "Tab Active", 160, 191, 25, 255);
    theme.addElement(36, "Tab Unfocused", 30, 35, 20, 255);
    theme.addElement(37, "Tab Unfocused Active", 40, 45, 25, 255);
    theme.addElement(38, "Plot Lines", 217, 250, 66, 255);
    theme.addElement(39, "Plot Lines Hovered", 230, 255, 100, 255);
    theme.addElement(40, "Plot Histogram", 180, 220, 50, 255);
    theme.addElement(41, "Plot Histogram Hovered", 217, 250, 66, 255);
    theme.addElement(42, "Text Selected Background", 217, 250, 66, 89);
    theme.addElement(43, "Drag Drop Target", 217, 250, 66, 230);
    theme.addElement(44, "Nav Highlight", 217, 250, 66, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 30, 35, 20, 51);
    theme.addElement(47, "Modal Window Dim Background", 20, 25, 15, 89);
    theme.addElement(48, "Table Header Background", 35, 40, 30, 255);
    theme.addElement(49, "Table Border Strong", 55, 65, 40, 255);
    theme.addElement(50, "Table Border Light", 45, 55, 35, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 217, 250, 66, 204);
    theme.addElement(54, "Docking Empty Background", 30, 30, 35, 204);
    return theme;
}

/**
 * CS:GO inspired simple theme
 */
function createCSGOSimpleTheme() {
    let theme = new ImGuiTheme("csgoSimple");
    theme.addElement(0, "Text", 255, 255, 255, 255);
    theme.addElement(1, "Text Disabled", 128, 128, 128, 255);
    theme.addElement(2, "Window Background", 0, 2, 19, 240);
    theme.addElement(4, "Popup Background", 19, 36, 53, 255);
    theme.addElement(5, "Border", 109, 109, 127, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 51, 64, 76, 255);
    theme.addElement(8, "Frame Background Hovered", 0, 139, 255, 255);
    theme.addElement(9, "Frame Background Active", 15, 106, 250, 255);
    theme.addElement(10, "Title Background", 51, 64, 76, 255);
    theme.addElement(11, "Title Background Active", 0, 2, 30, 240);
    theme.addElement(12, "Title Background Collapsed", 0, 0, 0, 130);
    theme.addElement(13, "Menu Bar Background", 35, 35, 35, 255);
    theme.addElement(14, "Scrollbar Background", 5, 5, 5, 135);
    theme.addElement(15, "Scrollbar Grab", 79, 79, 79, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 104, 104, 104, 255);
    theme.addElement(17, "Scrollbar Grab Active", 130, 130, 130, 255);
    theme.addElement(18, "Check Mark", 15, 106, 250, 255);
    theme.addElement(19, "Slider Grab", 61, 133, 224, 255);
    theme.addElement(20, "Slider Grab Active", 15, 106, 250, 255);
    theme.addElement(21, "Button", 66, 150, 250, 171);
    theme.addElement(22, "Button Hovered", 0, 139, 255, 255);
    theme.addElement(23, "Button Active", 15, 106, 250, 255);
    theme.addElement(24, "Header", 66, 150, 250, 20);
    theme.addElement(25, "Header Hovered", 66, 150, 250, 255);
    theme.addElement(26, "Header Active", 15, 106, 250, 255);
    theme.addElement(27, "Separator", 109, 109, 127, 128);
    theme.addElement(28, "Separator Hovered", 25, 102, 191, 199);
    theme.addElement(29, "Separator Active", 25, 102, 191, 255);
    theme.addElement(30, "Resize Grip", 66, 150, 250, 64);
    theme.addElement(31, "Resize Grip Hovered", 66, 150, 250, 171);
    theme.addElement(32, "Resize Grip Active", 66, 150, 250, 242);
    theme.addElement(33, "Tab", 51, 64, 76, 219);
    theme.addElement(34, "Tab Hovered", 66, 150, 250, 204);
    theme.addElement(35, "Tab Active", 15, 106, 250, 255);
    theme.addElement(36, "Tab Unfocused", 30, 30, 35, 255);
    theme.addElement(37, "Tab Unfocused Active", 35, 35, 40, 255);
    theme.addElement(38, "Plot Lines", 66, 150, 250, 255);
    theme.addElement(39, "Plot Lines Hovered", 100, 180, 255, 255);
    theme.addElement(40, "Plot Histogram", 50, 130, 224, 255);
    theme.addElement(41, "Plot Histogram Hovered", 66, 150, 250, 255);
    theme.addElement(42, "Text Selected Background", 66, 150, 250, 89);
    theme.addElement(43, "Drag Drop Target", 66, 150, 250, 230);
    theme.addElement(44, "Nav Highlight", 66, 150, 250, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 15, 15, 19, 51);
    theme.addElement(47, "Modal Window Dim Background", 10, 10, 15, 89);
    theme.addElement(48, "Table Header Background", 40, 40, 50, 255);
    theme.addElement(49, "Table Border Strong", 60, 60, 70, 255);
    theme.addElement(50, "Table Border Light", 50, 50, 60, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 66, 150, 250, 204);
    theme.addElement(54, "Docking Empty Background", 30, 30, 35, 204);
    theme.addElement(3, "Child Background", 0, 0, 0, 0);
    return theme;
}

/**
 * Monochrome grayscale theme
 */
function createMonoChromeTheme() {
    let theme = new ImGuiTheme("monochrome");
    theme.addElement(0, "Text", 230, 230, 230, 255);
    theme.addElement(1, "Text Disabled", 255, 255, 255, 255);
    theme.addElement(2, "Window Background", 0, 0, 0, 255);
    theme.addElement(3, "Child Background", 0, 0, 0, 255);
    theme.addElement(4, "Popup Background", 0, 0, 0, 255);
    theme.addElement(5, "Border", 209, 196, 199, 255);
    theme.addElement(6, "Border Shadow", 89, 89, 89, 168);
    theme.addElement(7, "Frame Background", 255, 255, 255, 71);
    theme.addElement(8, "Frame Background Hovered", 173, 173, 173, 171);
    theme.addElement(9, "Frame Background Active", 201, 186, 186, 158);
    theme.addElement(10, "Title Background", 0, 0, 0, 255);
    theme.addElement(11, "Title Background Active", 117, 117, 117, 255);
    theme.addElement(12, "Title Background Collapsed", 0, 0, 0, 255);
    theme.addElement(13, "Menu Bar Background", 0, 0, 0, 204);
    theme.addElement(14, "Scrollbar Background", 0, 0, 0, 153);
    theme.addElement(15, "Scrollbar Grab", 255, 255, 255, 222);
    theme.addElement(16, "Scrollbar Grab Hovered", 255, 255, 255, 201);
    theme.addElement(17, "Scrollbar Grab Active", 204, 128, 128, 102);
    theme.addElement(18, "Check Mark", 252, 252, 252, 132);
    theme.addElement(19, "Slider Grab", 255, 255, 255, 107);
    theme.addElement(20, "Slider Grab Active", 193, 193, 193, 255);
    theme.addElement(21, "Button", 130, 130, 130, 153);
    theme.addElement(22, "Button Hovered", 173, 173, 173, 255);
    theme.addElement(23, "Button Active", 171, 171, 171, 255);
    theme.addElement(24, "Header", 183, 183, 183, 20);
    theme.addElement(25, "Header Hovered", 234, 234, 242, 196);
    theme.addElement(26, "Header Active", 209, 209, 209, 204);
    theme.addElement(27, "Separator", 186, 186, 186, 255);
    theme.addElement(28, "Separator Hovered", 206, 206, 206, 255);
    theme.addElement(29, "Separator Active", 189, 189, 189, 255);
    theme.addElement(30, "Resize Grip", 204, 204, 204, 76);
    theme.addElement(31, "Resize Grip Hovered", 242, 242, 242, 153);
    theme.addElement(32, "Resize Grip Active", 255, 255, 255, 229);
    theme.addElement(33, "Close Button", 115, 115, 115, 128);
    theme.addElement(34, "Close Button Hovered", 178, 178, 229, 153);
    theme.addElement(35, "Close Button Active", 178, 178, 178, 255);
    theme.addElement(36, "Plot Lines", 255, 255, 255, 255);
    theme.addElement(37, "Plot Lines Hovered", 255, 255, 255, 255);
    theme.addElement(38, "Plot Histogram", 255, 255, 255, 255);
    theme.addElement(39, "Plot Histogram Hovered", 255, 255, 255, 255);
    theme.addElement(40, "Text Selected Background", 255, 255, 255, 89);
    theme.addElement(41, "Modal Window Darkening", 224, 224, 224, 89);
    theme.addElement(42, "Text Selected Background", 255, 255, 255, 89);
    theme.addElement(43, "Drag Drop Target", 255, 255, 255, 230);
    theme.addElement(44, "Nav Highlight", 255, 255, 255, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 50, 50, 50, 51);
    theme.addElement(47, "Modal Window Dim Background", 100, 100, 100, 89);
    theme.addElement(48, "Table Header Background", 50, 50, 50, 255);
    theme.addElement(49, "Table Border Strong", 100, 100, 100, 255);
    theme.addElement(50, "Table Border Light", 75, 75, 75, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 200, 200, 200, 204);
    theme.addElement(54, "Docking Empty Background", 30, 30, 30, 204);
    return theme;
}


/**
 * Deep dark theme with subtle blue accents
 */
function createDeepDarkTheme() {
    let theme = new ImGuiTheme("deepDark");
    theme.addElement(0, "Text", 242, 245, 250, 255);
    theme.addElement(1, "Text Disabled", 92, 107, 120, 255);
    theme.addElement(2, "Window Background", 28, 38, 43, 255);
    theme.addElement(3, "Child Background", 38, 46, 56, 255);
    theme.addElement(4, "Popup Background", 20, 20, 20, 240);
    theme.addElement(5, "Border", 109, 109, 127, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 51, 64, 74, 255);
    theme.addElement(8, "Frame Background Hovered", 31, 51, 71, 255);
    theme.addElement(9, "Frame Background Active", 23, 31, 36, 255);
    theme.addElement(10, "Title Background", 23, 31, 36, 166);
    theme.addElement(11, "Title Background Active", 20, 26, 31, 255);
    theme.addElement(12, "Title Background Collapsed", 0, 0, 0, 130);
    theme.addElement(13, "Menu Bar Background", 38, 46, 56, 255);
    theme.addElement(14, "Scrollbar Background", 5, 5, 5, 100);
    theme.addElement(15, "Scrollbar Grab", 51, 64, 74, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 46, 56, 64, 255);
    theme.addElement(17, "Scrollbar Grab Active", 23, 54, 79, 255);
    theme.addElement(18, "Check Mark", 72, 143, 255, 255);
    theme.addElement(19, "Slider Grab", 72, 143, 255, 255);
    theme.addElement(20, "Slider Grab Active", 94, 156, 255, 255);
    theme.addElement(21, "Button", 51, 64, 74, 255);
    theme.addElement(22, "Button Hovered", 72, 143, 255, 255);
    theme.addElement(23, "Button Active", 15, 135, 250, 255);
    theme.addElement(24, "Header", 51, 64, 74, 20);
    theme.addElement(25, "Header Hovered", 66, 150, 250, 204);
    theme.addElement(26, "Header Active", 66, 150, 250, 255);
    theme.addElement(27, "Separator", 109, 109, 127, 128);
    theme.addElement(28, "Separator Hovered", 66, 150, 250, 199);
    theme.addElement(29, "Separator Active", 66, 150, 250, 255);
    theme.addElement(30, "Resize Grip", 66, 150, 250, 64);
    theme.addElement(31, "Resize Grip Hovered", 66, 150, 250, 171);
    theme.addElement(32, "Resize Grip Active", 15, 13, 18, 255);
    theme.addElement(33, "Close Button", 102, 99, 97, 41);
    theme.addElement(34, "Close Button Hovered", 102, 99, 97, 99);
    theme.addElement(35, "Close Button Active", 102, 99, 97, 255);
    theme.addElement(36, "Plot Lines", 156, 156, 156, 255);
    theme.addElement(37, "Plot Lines Hovered", 255, 110, 89, 255);
    theme.addElement(38, "Plot Histogram", 230, 179, 0, 255);
    theme.addElement(39, "Plot Histogram Hovered", 255, 153, 0, 255);
    theme.addElement(40, "Text Selected Background", 0, 255, 0, 110);
    theme.addElement(41, "Modal Window Darkening", 255, 250, 242, 186);
    theme.addElement(42, "Text Selected Background", 66, 150, 250, 89);
    theme.addElement(43, "Drag Drop Target", 72, 143, 255, 230);
    theme.addElement(44, "Nav Highlight", 66, 150, 250, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 38, 46, 56, 51);
    theme.addElement(47, "Modal Window Dim Background", 20, 20, 25, 89);
    theme.addElement(48, "Table Header Background", 51, 64, 74, 255);
    theme.addElement(49, "Table Border Strong", 71, 84, 94, 255);
    theme.addElement(50, "Table Border Light", 61, 74, 84, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 66, 150, 250, 204);
    theme.addElement(54, "Docking Empty Background", 33, 33, 33, 204);
    return theme;
}

/**
 * Cherry blossom theme with pink accents
 */
function createCherryTheme() {
    let theme = new ImGuiTheme("cherry");
    theme.addElement(0, "Text", 219, 237, 227, 199);
    theme.addElement(1, "Text Disabled", 219, 237, 227, 71);
    theme.addElement(2, "Window Background", 33, 36, 43, 255);
    theme.addElement(3, "Child Background", 51, 56, 69, 148);
    theme.addElement(4, "Popup Background", 51, 56, 69, 230);
    theme.addElement(5, "Border", 79, 79, 255, 0);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 51, 56, 69, 255);
    theme.addElement(8, "Frame Background Hovered", 116, 51, 77, 199);
    theme.addElement(9, "Frame Background Active", 116, 51, 77, 255);
    theme.addElement(10, "Title Background", 59, 51, 69, 255);
    theme.addElement(11, "Title Background Active", 128, 19, 65, 255);
    theme.addElement(12, "Title Background Collapsed", 51, 56, 69, 191);
    theme.addElement(13, "Menu Bar Background", 51, 56, 69, 120);
    theme.addElement(14, "Scrollbar Background", 51, 56, 69, 255);
    theme.addElement(15, "Scrollbar Grab", 23, 38, 26, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 116, 51, 77, 199);
    theme.addElement(17, "Scrollbar Grab Active", 116, 51, 77, 255);
    theme.addElement(18, "Check Mark", 181, 56, 69, 255);
    theme.addElement(19, "Slider Grab", 120, 196, 212, 36);
    theme.addElement(20, "Slider Grab Active", 181, 56, 69, 255);
    theme.addElement(21, "Button", 120, 196, 212, 36);
    theme.addElement(22, "Button Hovered", 116, 51, 77, 219);
    theme.addElement(23, "Button Active", 116, 51, 77, 255);
    theme.addElement(24, "Header", 116, 51, 77, 20);
    theme.addElement(25, "Header Hovered", 116, 51, 77, 219);
    theme.addElement(26, "Header Active", 128, 19, 65, 255);
    theme.addElement(27, "Separator", 120, 196, 212, 10);
    theme.addElement(28, "Separator Hovered", 116, 51, 77, 199);
    theme.addElement(29, "Separator Active", 116, 51, 77, 255);
    theme.addElement(30, "Resize Grip", 120, 196, 212, 10);
    theme.addElement(31, "Resize Grip Hovered", 116, 51, 77, 199);
    theme.addElement(32, "Resize Grip Active", 116, 51, 77, 255);
    theme.addElement(33, "Tab", 51, 56, 69, 219);
    theme.addElement(34, "Tab Hovered", 116, 51, 77, 204);
    theme.addElement(35, "Tab Active", 128, 19, 65, 255);
    theme.addElement(36, "Tab Unfocused", 45, 48, 55, 255);
    theme.addElement(37, "Tab Unfocused Active", 55, 58, 65, 255);
    theme.addElement(38, "Plot Lines", 219, 237, 227, 160);
    theme.addElement(39, "Plot Lines Hovered", 116, 51, 77, 255);
    theme.addElement(40, "Plot Histogram", 219, 237, 227, 160);
    theme.addElement(41, "Plot Histogram Hovered", 116, 51, 77, 255);
    theme.addElement(42, "Text Selected Background", 116, 51, 77, 109);
    theme.addElement(43, "Drag Drop Target", 181, 56, 69, 230);
    theme.addElement(44, "Nav Highlight", 116, 51, 77, 255);
    theme.addElement(45, "Nav Windowing Highlight", 219, 237, 227, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 51, 56, 69, 51);
    theme.addElement(47, "Modal Window Dim Background", 33, 36, 43, 89);
    theme.addElement(48, "Table Header Background", 51, 56, 69, 255);
    theme.addElement(49, "Table Border Strong", 71, 76, 89, 255);
    theme.addElement(50, "Table Border Light", 61, 66, 79, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 116, 51, 77, 204);
    theme.addElement(54, "Docking Empty Background", 33, 36, 43, 204);
    return theme;
}

/**
 * Crimson theme with red accents
 */
function createCrimsonTheme() {
    let theme = new ImGuiTheme("crimson");
    theme.addElement(0, "Text", 255, 255, 255, 255);
    theme.addElement(1, "Text Disabled", 186, 191, 189, 255);
    theme.addElement(2, "Window Background", 23, 23, 23, 240);
    theme.addElement(3, "Child Background", 0, 0, 0, 0);
    theme.addElement(4, "Popup Background", 20, 20, 20, 240);
    theme.addElement(5, "Border", 51, 51, 51, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 181, 99, 99, 138);
    theme.addElement(8, "Frame Background Hovered", 214, 168, 168, 102);
    theme.addElement(9, "Frame Background Active", 214, 168, 168, 171);
    theme.addElement(10, "Title Background", 120, 56, 56, 171);
    theme.addElement(11, "Title Background Active", 120, 56, 56, 255);
    theme.addElement(12, "Title Background Collapsed", 120, 56, 56, 171);
    theme.addElement(13, "Menu Bar Background", 87, 41, 41, 255);
    theme.addElement(14, "Scrollbar Background", 5, 5, 5, 135);
    theme.addElement(15, "Scrollbar Grab", 79, 79, 79, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 104, 104, 104, 255);
    theme.addElement(17, "Scrollbar Grab Active", 130, 130, 130, 255);
    theme.addElement(18, "Check Mark", 255, 255, 255, 255);
    theme.addElement(19, "Slider Grab", 181, 99, 99, 255);
    theme.addElement(20, "Slider Grab Active", 214, 168, 168, 255);
    theme.addElement(21, "Button", 120, 56, 56, 166);
    theme.addElement(22, "Button Hovered", 181, 99, 99, 166);
    theme.addElement(23, "Button Active", 51, 51, 51, 128);
    theme.addElement(24, "Header", 181, 99, 99, 20);
    theme.addElement(25, "Header Hovered", 214, 168, 168, 166);
    theme.addElement(26, "Header Active", 214, 168, 168, 0);
    theme.addElement(27, "Separator", 109, 109, 127, 128);
    theme.addElement(28, "Separator Hovered", 181, 99, 99, 138);
    theme.addElement(29, "Separator Active", 181, 99, 99, 138);
    theme.addElement(30, "Resize Grip", 181, 99, 99, 138);
    theme.addElement(31, "Resize Grip Hovered", 214, 168, 168, 168);
    theme.addElement(32, "Resize Grip Active", 214, 168, 168, 168);
    theme.addElement(33, "Close Button", 104, 104, 104, 255);
    theme.addElement(34, "Close Button Hovered", 250, 99, 92, 255);
    theme.addElement(35, "Close Button Active", 250, 99, 92, 255);
    theme.addElement(36, "Plot Lines", 156, 156, 156, 255);
    theme.addElement(37, "Plot Lines Hovered", 255, 110, 89, 255);
    theme.addElement(38, "Plot Histogram", 230, 179, 0, 255);
    theme.addElement(39, "Plot Histogram Hovered", 255, 153, 0, 255);
    theme.addElement(40, "Text Selected Background", 66, 150, 250, 89);
    theme.addElement(41, "Modal Window Darkening", 204, 204, 204, 89);
    theme.addElement(42, "Text Selected Background", 214, 168, 168, 89);
    theme.addElement(43, "Drag Drop Target", 181, 99, 99, 230);
    theme.addElement(44, "Nav Highlight", 181, 99, 99, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 23, 23, 23, 51);
    theme.addElement(47, "Modal Window Dim Background", 15, 15, 20, 89);
    theme.addElement(48, "Table Header Background", 60, 40, 40, 255);
    theme.addElement(49, "Table Border Strong", 80, 60, 60, 255);
    theme.addElement(50, "Table Border Light", 70, 50, 50, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 181, 99, 99, 204);
    theme.addElement(54, "Docking Empty Background", 23, 23, 23, 204);
    return theme;
}

/**
 * Red accent theme with dark background
 */
function createRedAccentTheme() {
    let theme = new ImGuiTheme("redAccent");
    theme.addElement(0, "Text", 242, 245, 250, 255);
    theme.addElement(1, "Text Disabled", 74, 74, 74, 255);
    theme.addElement(2, "Window Background", 36, 36, 36, 255);
    theme.addElement(3, "Child Background", 31, 31, 31, 255);
    theme.addElement(4, "Popup Background", 20, 20, 20, 240);
    theme.addElement(5, "Border", 36, 36, 36, 255);
    theme.addElement(6, "Border Shadow", 255, 255, 255, 26);
    theme.addElement(7, "Frame Background", 56, 56, 56, 255);
    theme.addElement(8, "Frame Background Hovered", 46, 46, 46, 255);
    theme.addElement(9, "Frame Background Active", 23, 31, 36, 255);
    theme.addElement(10, "Title Background", 36, 36, 36, 206);
    theme.addElement(11, "Title Background Active", 36, 36, 36, 255);
    theme.addElement(12, "Title Background Collapsed", 0, 0, 0, 130);
    theme.addElement(13, "Menu Bar Background", 51, 51, 51, 255);
    theme.addElement(14, "Scrollbar Background", 5, 5, 5, 100);
    theme.addElement(15, "Scrollbar Grab", 92, 92, 92, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 46, 56, 64, 255);
    theme.addElement(17, "Scrollbar Grab Active", 61, 61, 61, 255);
    theme.addElement(18, "Check Mark", 255, 72, 72, 255);
    theme.addElement(19, "Slider Grab", 255, 72, 72, 255);
    theme.addElement(20, "Slider Grab Active", 255, 72, 72, 255);
    theme.addElement(21, "Button", 255, 72, 72, 255);
    theme.addElement(22, "Button Hovered", 255, 99, 99, 255);
    theme.addElement(23, "Button Active", 255, 54, 54, 255);
    theme.addElement(24, "Header", 255, 72, 72, 20);
    theme.addElement(25, "Header Hovered", 255, 99, 99, 255);
    theme.addElement(26, "Header Active", 255, 54, 54, 255);
    theme.addElement(27, "Resize Grip", 255, 72, 72, 255);
    theme.addElement(28, "Resize Grip Hovered", 255, 99, 99, 255);
    theme.addElement(29, "Resize Grip Active", 255, 49, 49, 255);
    theme.addElement(30, "Resize Grip", 255, 72, 72, 64);
    theme.addElement(31, "Resize Grip Hovered", 255, 99, 99, 171);
    theme.addElement(32, "Resize Grip Active", 255, 49, 49, 242);
    theme.addElement(33, "Tab", 255, 72, 72, 150);
    theme.addElement(34, "Tab Hovered", 255, 99, 99, 200);
    theme.addElement(35, "Tab Active", 255, 54, 54, 255);
    theme.addElement(36, "Tab Unfocused", 60, 60, 60, 255);
    theme.addElement(37, "Tab Unfocused Active", 80, 80, 80, 255);
    theme.addElement(38, "Plot Lines", 255, 72, 72, 255);
    theme.addElement(39, "Plot Lines Hovered", 255, 100, 100, 255);
    theme.addElement(40, "Plot Histogram", 200, 50, 50, 255);
    theme.addElement(41, "Plot Histogram Hovered", 255, 60, 60, 255);
    theme.addElement(42, "Text Selected Background", 255, 82, 82, 255);
    theme.addElement(43, "Drag Drop Target", 255, 100, 100, 230);
    theme.addElement(44, "Nav Highlight", 255, 72, 72, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 60, 60, 60, 51);
    theme.addElement(47, "Modal Window Dim Background", 30, 30, 30, 89);
    theme.addElement(48, "Table Header Background", 70, 50, 50, 255);
    theme.addElement(49, "Table Border Strong", 90, 60, 60, 255);
    theme.addElement(50, "Table Border Light", 80, 55, 55, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 255, 72, 72, 204);
    theme.addElement(54, "Docking Empty Background", 36, 36, 36, 204);
    return theme;
}

/**
 * Glamour pink theme with light tones
 */
function createGlamourPinkTheme() {
    let theme = new ImGuiTheme("glamourPink");
    theme.addElement(0, "Text", 0, 0, 0, 255);
    theme.addElement(1, "Text Disabled", 56, 56, 56, 255);
    theme.addElement(2, "Window Background", 255, 255, 255, 181);
    theme.addElement(3, "Child Background", 235, 235, 235, 0);
    theme.addElement(4, "Popup Background", 255, 255, 255, 240);
    theme.addElement(5, "Border", 255, 255, 255, 128);
    theme.addElement(6, "Border Shadow", 255, 255, 255, 0);
    theme.addElement(7, "Frame Background", 196, 125, 168, 138);
    theme.addElement(8, "Frame Background Hovered", 255, 255, 255, 102);
    theme.addElement(9, "Frame Background Active", 255, 255, 255, 171);
    theme.addElement(10, "Title Background", 193, 130, 168, 181);
    theme.addElement(11, "Title Background Active", 247, 188, 224, 189);
    theme.addElement(12, "Title Background Collapsed", 255, 255, 255, 171);
    theme.addElement(13, "Menu Bar Background", 255, 255, 255, 138);
    theme.addElement(14, "Scrollbar Background", 206, 206, 206, 138);
    theme.addElement(15, "Scrollbar Grab", 198, 72, 148, 33);
    theme.addElement(16, "Scrollbar Grab Hovered", 255, 255, 255, 255);
    theme.addElement(17, "Scrollbar Grab Active", 130, 130, 130, 255);
    theme.addElement(18, "Check Mark", 255, 255, 255, 255);
    theme.addElement(19, "Slider Grab", 181, 99, 99, 255);
    theme.addElement(20, "Slider Grab Active", 193, 130, 168, 117);
    theme.addElement(21, "Button", 198, 72, 148, 138);
    theme.addElement(22, "Button Hovered", 196, 132, 170, 138);
    theme.addElement(23, "Button Active", 51, 51, 51, 128);
    theme.addElement(24, "Header", 198, 72, 148, 20);
    theme.addElement(25, "Header Hovered", 198, 72, 148, 64);
    theme.addElement(26, "Header Active", 201, 10, 123, 160);
    theme.addElement(27, "Separator", 109, 109, 127, 128);
    theme.addElement(28, "Separator Hovered", 201, 113, 166, 163);
    theme.addElement(29, "Separator Active", 201, 44, 138, 196);
    theme.addElement(30, "Resize Grip", 221, 91, 168, 138);
    theme.addElement(31, "Resize Grip Hovered", 193, 130, 168, 117);
    theme.addElement(32, "Resize Grip Active", 193, 130, 168, 117);
    theme.addElement(33, "Close Button", 104, 104, 104, 255);
    theme.addElement(34, "Close Button Hovered", 193, 116, 162, 181);
    theme.addElement(35, "Close Button Active", 198, 72, 148, 201);
    theme.addElement(36, "Plot Lines", 156, 156, 156, 255);
    theme.addElement(37, "Plot Lines Hovered", 235, 235, 235, 255);
    theme.addElement(38, "Plot Histogram", 230, 179, 0, 255);
    theme.addElement(39, "Plot Histogram Hovered", 255, 153, 0, 255);
    theme.addElement(40, "Text Selected Background", 66, 150, 250, 89);
    theme.addElement(41, "Modal Window Darkening", 204, 204, 204, 89);
    theme.addElement(42, "Text Selected Background", 198, 72, 148, 89);
    theme.addElement(43, "Drag Drop Target", 198, 72, 148, 230);
    theme.addElement(44, "Nav Highlight", 198, 72, 148, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 235, 235, 235, 51);
    theme.addElement(47, "Modal Window Dim Background", 255, 255, 255, 89);
    theme.addElement(48, "Table Header Background", 200, 200, 200, 255);
    theme.addElement(49, "Table Border Strong", 180, 180, 180, 255);
    theme.addElement(50, "Table Border Light", 190, 190, 190, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 198, 72, 148, 204);
    theme.addElement(54, "Docking Empty Background", 235, 235, 235, 204);
    return theme;
}

/**
 * Lime green theme with dark background
 */
function createLimeTheme() {
    let theme = new ImGuiTheme("lime");
    theme.addElement(0, "Text", 212, 212, 212, 255);
    theme.addElement(1, "Text Disabled", 186, 191, 186, 255);
    theme.addElement(2, "Window Background", 23, 23, 23, 240);
    theme.addElement(3, "Child Background", 0, 0, 0, 0);
    theme.addElement(4, "Popup Background", 20, 20, 20, 240);
    theme.addElement(5, "Border", 109, 109, 127, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 109, 181, 99, 138);
    theme.addElement(8, "Frame Background Hovered", 168, 214, 168, 102);
    theme.addElement(9, "Frame Background Active", 173, 214, 168, 171);
    theme.addElement(10, "Title Background", 61, 120, 56, 171);
    theme.addElement(11, "Title Background Active", 71, 120, 56, 255);
    theme.addElement(12, "Title Background Collapsed", 66, 120, 56, 171);
    theme.addElement(13, "Menu Bar Background", 45, 87, 41, 255);
    theme.addElement(14, "Scrollbar Background", 5, 5, 5, 135);
    theme.addElement(15, "Scrollbar Grab", 79, 79, 79, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 104, 104, 104, 255);
    theme.addElement(17, "Scrollbar Grab Active", 130, 130, 130, 255);
    theme.addElement(18, "Check Mark", 255, 255, 255, 255);
    theme.addElement(19, "Slider Grab", 115, 181, 99, 255);
    theme.addElement(20, "Slider Grab Active", 178, 214, 168, 255);
    theme.addElement(21, "Button", 69, 120, 56, 166);
    theme.addElement(22, "Button Hovered", 99, 181, 99, 166);
    theme.addElement(23, "Button Active", 51, 51, 51, 128);
    theme.addElement(24, "Header", 99, 181, 99, 20);
    theme.addElement(25, "Header Hovered", 168, 214, 168, 166);
    theme.addElement(26, "Header Active", 168, 214, 168, 0);
    theme.addElement(27, "Separator", 109, 128, 109, 128);
    theme.addElement(28, "Separator Hovered", 99, 181, 107, 138);
    theme.addElement(29, "Separator Active", 109, 181, 99, 138);
    theme.addElement(30, "Resize Grip", 117, 181, 99, 138);
    theme.addElement(31, "Resize Grip Hovered", 168, 214, 168, 168);
    theme.addElement(32, "Resize Grip Active", 168, 214, 168, 168);
    theme.addElement(33, "Close Button", 104, 104, 104, 255);
    theme.addElement(34, "Close Button Hovered", 107, 250, 92, 255);
    theme.addElement(35, "Close Button Active", 97, 250, 92, 255);
    theme.addElement(36, "Plot Lines", 156, 156, 156, 255);
    theme.addElement(37, "Plot Lines Hovered", 133, 255, 89, 255);
    theme.addElement(38, "Plot Histogram", 41, 230, 0, 255);
    theme.addElement(39, "Plot Histogram Hovered", 33, 255, 0, 255);
    theme.addElement(40, "Text Selected Background", 77, 250, 66, 89);
    theme.addElement(41, "Modal Window Darkening", 204, 204, 204, 89);
    theme.addElement(42, "Text Selected Background", 168, 214, 168, 89);
    theme.addElement(43, "Drag Drop Target", 115, 181, 99, 230);
    theme.addElement(44, "Nav Highlight", 99, 181, 99, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 23, 23, 23, 51);
    theme.addElement(47, "Modal Window Dim Background", 15, 15, 15, 89);
    theme.addElement(48, "Table Header Background", 50, 60, 45, 255);
    theme.addElement(49, "Table Border Strong", 70, 80, 65, 255);
    theme.addElement(50, "Table Border Light", 60, 70, 55, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 99, 181, 99, 204);
    theme.addElement(54, "Docking Empty Background", 23, 23, 23, 204);
    return theme;
}


/**
 * Crimson night theme with dark red tones
 */
function createCrimsonNightTheme() {
    let theme = new ImGuiTheme("crimsonNight");
    theme.addElement(0, "Text", 255, 255, 255, 199);
    theme.addElement(1, "Text Disabled", 255, 255, 255, 255);
    theme.addElement(2, "Window Background", 28, 38, 43, 255);
    theme.addElement(3, "Child Background", 38, 46, 56, 255);
    theme.addElement(4, "Popup Background", 20, 20, 20, 240);
    theme.addElement(5, "Border", 109, 109, 127, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 51, 64, 74, 255);
    theme.addElement(8, "Frame Background Hovered", 31, 51, 71, 255);
    theme.addElement(9, "Frame Background Active", 23, 31, 36, 255);
    theme.addElement(10, "Title Background", 135, 51, 41, 166);
    theme.addElement(11, "Title Background Active", 143, 36, 36, 255);
    theme.addElement(12, "Title Background Collapsed", 0, 0, 0, 130);
    theme.addElement(13, "Menu Bar Background", 38, 46, 56, 255);
    theme.addElement(14, "Scrollbar Background", 5, 5, 5, 100);
    theme.addElement(15, "Scrollbar Grab", 51, 64, 74, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 46, 56, 64, 255);
    theme.addElement(17, "Scrollbar Grab Active", 23, 54, 79, 255);
    theme.addElement(18, "Check Mark", 255, 72, 72, 255);
    theme.addElement(19, "Slider Grab", 163, 36, 36, 255);
    theme.addElement(20, "Slider Grab Active", 255, 94, 94, 255);
    theme.addElement(21, "Button", 150, 33, 33, 255);
    theme.addElement(22, "Button Hovered", 176, 38, 38, 255);
    theme.addElement(23, "Button Active", 171, 33, 18, 255);
    theme.addElement(24, "Header", 51, 64, 74, 20);
    theme.addElement(25, "Header Hovered", 250, 97, 66, 204);
    theme.addElement(26, "Header Active", 250, 66, 66, 255);
    theme.addElement(27, "Separator", 128, 128, 128, 255);
    theme.addElement(28, "Separator Hovered", 153, 153, 179, 255);
    theme.addElement(29, "Separator Active", 179, 179, 230, 255);
    theme.addElement(30, "Resize Grip", 66, 150, 250, 64);
    theme.addElement(31, "Resize Grip Hovered", 66, 150, 250, 171);
    theme.addElement(32, "Resize Grip Active", 15, 13, 18, 255);
    theme.addElement(33, "Close Button", 102, 99, 97, 41);
    theme.addElement(34, "Close Button Hovered", 102, 99, 97, 99);
    theme.addElement(35, "Close Button Active", 102, 99, 97, 255);
    theme.addElement(36, "Plot Lines", 156, 156, 156, 255);
    theme.addElement(37, "Plot Lines Hovered", 255, 110, 89, 255);
    theme.addElement(38, "Plot Histogram", 230, 179, 0, 255);
    theme.addElement(39, "Plot Histogram Hovered", 255, 153, 0, 255);
    theme.addElement(40, "Text Selected Background", 0, 255, 0, 110);
    theme.addElement(41, "Modal Window Darkening", 255, 250, 242, 186);
    theme.addElement(42, "Text Selected Background", 143, 36, 36, 89);
    theme.addElement(43, "Drag Drop Target", 255, 72, 72, 230);
    theme.addElement(44, "Nav Highlight", 143, 36, 36, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 38, 46, 56, 51);
    theme.addElement(47, "Modal Window Dim Background", 20, 20, 25, 89);
    theme.addElement(48, "Table Header Background", 51, 64, 74, 255);
    theme.addElement(49, "Table Border Strong", 71, 84, 94, 255);
    theme.addElement(50, "Table Border Light", 61, 74, 84, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 143, 36, 36, 204);
    theme.addElement(54, "Docking Empty Background", 28, 38, 43, 204);
    return theme;
}

/**
 * Military green theme with tactical colors
 */
function createMilitaryGreenTheme() {
    let theme = new ImGuiTheme("militaryGreen");
    theme.addElement(0, "Text", 255, 255, 255, 199);
    theme.addElement(1, "Text Disabled", 92, 107, 120, 255);
    theme.addElement(2, "Window Background", 28, 38, 43, 255);
    theme.addElement(3, "Child Background", 38, 46, 56, 255);
    theme.addElement(4, "Popup Background", 20, 20, 20, 240);
    theme.addElement(5, "Border", 109, 109, 127, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 64, 74, 51, 255);
    theme.addElement(8, "Frame Background Hovered", 31, 51, 71, 255);
    theme.addElement(9, "Frame Background Active", 23, 31, 36, 255);
    theme.addElement(10, "Title Background", 23, 31, 36, 166);
    theme.addElement(11, "Title Background Active", 89, 148, 15, 255);
    theme.addElement(12, "Title Background Collapsed", 0, 0, 0, 130);
    theme.addElement(13, "Menu Bar Background", 38, 46, 56, 255);
    theme.addElement(14, "Scrollbar Background", 5, 5, 5, 100);
    theme.addElement(15, "Scrollbar Grab", 51, 64, 74, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 46, 56, 64, 255);
    theme.addElement(17, "Scrollbar Grab Active", 23, 54, 79, 255);
    theme.addElement(18, "Check Mark", 184, 255, 72, 255);
    theme.addElement(19, "Slider Grab", 110, 145, 13, 255);
    theme.addElement(20, "Slider Grab Active", 140, 171, 37, 255);
    theme.addElement(21, "Button", 102, 145, 2, 255);
    theme.addElement(22, "Button Hovered", 115, 176, 18, 255);
    theme.addElement(23, "Button Active", 69, 128, 0, 255);
    theme.addElement(24, "Header", 51, 64, 74, 20);
    theme.addElement(25, "Header Hovered", 184, 250, 66, 204);
    theme.addElement(26, "Header Active", 189, 250, 66, 255);
    theme.addElement(27, "Separator", 128, 128, 128, 255);
    theme.addElement(28, "Separator Hovered", 153, 153, 179, 255);
    theme.addElement(29, "Separator Active", 179, 179, 230, 255);
    theme.addElement(30, "Resize Grip", 174, 250, 66, 64);
    theme.addElement(31, "Resize Grip Hovered", 184, 250, 66, 171);
    theme.addElement(32, "Resize Grip Active", 15, 13, 18, 255);
    theme.addElement(33, "Close Button", 102, 99, 97, 41);
    theme.addElement(34, "Close Button Hovered", 102, 99, 97, 99);
    theme.addElement(35, "Close Button Active", 102, 99, 97, 255);
    theme.addElement(36, "Plot Lines", 156, 156, 156, 255);
    theme.addElement(37, "Plot Lines Hovered", 255, 110, 89, 255);
    theme.addElement(38, "Plot Histogram", 230, 179, 0, 255);
    theme.addElement(39, "Plot Histogram Hovered", 255, 153, 0, 255);
    theme.addElement(40, "Text Selected Background", 0, 255, 0, 110);
    theme.addElement(41, "Modal Window Darkening", 255, 250, 242, 186);
    theme.addElement(42, "Text Selected Background", 140, 171, 37, 89);
    theme.addElement(43, "Drag Drop Target", 184, 255, 72, 230);
    theme.addElement(44, "Nav Highlight", 140, 171, 37, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 38, 46, 56, 51);
    theme.addElement(47, "Modal Window Dim Background", 20, 20, 25, 89);
    theme.addElement(48, "Table Header Background", 51, 64, 74, 255);
    theme.addElement(49, "Table Border Strong", 71, 84, 94, 255);
    theme.addElement(50, "Table Border Light", 61, 74, 84, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 140, 171, 37, 204);
    theme.addElement(54, "Docking Empty Background", 28, 38, 43, 204);
    return theme;
}

/**
 * Deep blue theme with oceanic colors
 */
function createDeepBlueTheme() {
    let theme = new ImGuiTheme("deepBlue");
    theme.addElement(0, "Text", 219, 237, 227, 199);
    theme.addElement(1, "Text Disabled", 92, 107, 120, 255);
    theme.addElement(2, "Window Background", 28, 38, 43, 255);
    theme.addElement(3, "Child Background", 38, 46, 56, 255);
    theme.addElement(4, "Popup Background", 20, 20, 20, 240);
    theme.addElement(5, "Border", 109, 109, 127, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 51, 64, 74, 255);
    theme.addElement(8, "Frame Background Hovered", 31, 51, 71, 255);
    theme.addElement(9, "Frame Background Active", 23, 31, 36, 255);
    theme.addElement(10, "Title Background", 23, 31, 36, 166);
    theme.addElement(11, "Title Background Active", 28, 77, 151, 255);
    theme.addElement(12, "Title Background Collapsed", 0, 0, 0, 130);
    theme.addElement(13, "Menu Bar Background", 38, 46, 56, 255);
    theme.addElement(14, "Scrollbar Background", 5, 5, 5, 100);
    theme.addElement(15, "Scrollbar Grab", 51, 64, 74, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 46, 56, 64, 255);
    theme.addElement(17, "Scrollbar Grab Active", 23, 54, 79, 255);
    theme.addElement(18, "Check Mark", 72, 143, 255, 255);
    theme.addElement(19, "Slider Grab", 72, 143, 255, 255);
    theme.addElement(20, "Slider Grab Active", 94, 156, 255, 255);
    theme.addElement(21, "Button", 20, 84, 140, 255);
    theme.addElement(22, "Button Hovered", 72, 143, 255, 255);
    theme.addElement(23, "Button Active", 15, 135, 250, 255);
    theme.addElement(24, "Header", 51, 64, 74, 20);
    theme.addElement(25, "Header Hovered", 66, 150, 250, 204);
    theme.addElement(26, "Header Active", 66, 150, 250, 255);
    theme.addElement(27, "Separator", 128, 128, 128, 255);
    theme.addElement(28, "Separator Hovered", 153, 153, 179, 255);
    theme.addElement(29, "Separator Active", 179, 179, 230, 255);
    theme.addElement(30, "Resize Grip", 66, 150, 250, 64);
    theme.addElement(31, "Resize Grip Hovered", 66, 150, 250, 171);
    theme.addElement(32, "Resize Grip Active", 15, 13, 18, 255);
    theme.addElement(33, "Close Button", 102, 99, 97, 41);
    theme.addElement(34, "Close Button Hovered", 102, 99, 97, 99);
    theme.addElement(35, "Close Button Active", 102, 99, 97, 255);
    theme.addElement(36, "Plot Lines", 156, 156, 156, 255);
    theme.addElement(37, "Plot Lines Hovered", 255, 110, 89, 255);
    theme.addElement(38, "Plot Histogram", 230, 179, 0, 255);
    theme.addElement(39, "Plot Histogram Hovered", 255, 153, 0, 255);
    theme.addElement(40, "Text Selected Background", 0, 255, 0, 110);
    theme.addElement(41, "Modal Window Darkening", 255, 250, 242, 186);
    theme.addElement(42, "Text Selected Background", 28, 77, 151, 89);
    theme.addElement(43, "Drag Drop Target", 72, 143, 255, 230);
    theme.addElement(44, "Nav Highlight", 28, 77, 151, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 38, 46, 56, 51);
    theme.addElement(47, "Modal Window Dim Background", 20, 20, 25, 89);
    theme.addElement(48, "Table Header Background", 51, 64, 74, 255);
    theme.addElement(49, "Table Border Strong", 71, 84, 94, 255);
    theme.addElement(50, "Table Border Light", 61, 74, 84, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 28, 77, 151, 204);
    theme.addElement(54, "Docking Empty Background", 28, 38, 43, 204);
    return theme;
}

/**
 * Blue horizon theme with modern blue tones
 */
function createBlueHorizonTheme() {
    let theme = new ImGuiTheme("blueHorizon");
    theme.addElement(0, "Text", 255, 255, 255, 255);
    theme.addElement(1, "Text Disabled", 71, 77, 89, 255);
    theme.addElement(2, "Window Background", 41, 46, 56, 255);
    theme.addElement(3, "Child Background", 48, 56, 66, 255);
    theme.addElement(4, "Popup Background", 13, 13, 26, 230);
    theme.addElement(5, "Border", 48, 56, 66, 255);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 48, 56, 66, 255);
    theme.addElement(8, "Frame Background Hovered", 56, 64, 77, 255);
    theme.addElement(9, "Frame Background Active", 56, 64, 74, 255);
    theme.addElement(10, "Title Background", 48, 56, 66, 255);
    theme.addElement(11, "Title Background Active", 48, 56, 66, 255);
    theme.addElement(12, "Title Background Collapsed", 48, 56, 66, 150);
    theme.addElement(13, "Menu Bar Background", 48, 56, 66, 255);
    theme.addElement(14, "Scrollbar Background", 51, 64, 77, 153);
    theme.addElement(15, "Scrollbar Grab", 105, 140, 199, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 125, 161, 219, 255);
    theme.addElement(17, "Scrollbar Grab Active", 125, 161, 219, 255);
    theme.addElement(18, "Check Mark", 230, 230, 230, 128);
    theme.addElement(19, "Slider Grab", 255, 255, 255, 77);
    theme.addElement(20, "Slider Grab Active", 204, 128, 128, 255);
    theme.addElement(21, "Button", 105, 140, 199, 255);
    theme.addElement(22, "Button Hovered", 125, 160, 217, 255);
    theme.addElement(23, "Button Active", 125, 160, 217, 255);
    theme.addElement(24, "Header", 48, 56, 66, 20);
    theme.addElement(25, "Header Hovered", 54, 60, 71, 255);
    theme.addElement(26, "Header Active", 54, 60, 71, 255);
    theme.addElement(27, "Separator", 105, 140, 199, 255);
    theme.addElement(28, "Separator Hovered", 105, 140, 199, 255);
    theme.addElement(29, "Separator Active", 105, 140, 199, 255);
    theme.addElement(30, "Resize Grip", 105, 140, 199, 255);
    theme.addElement(31, "Resize Grip Hovered", 125, 160, 217, 255);
    theme.addElement(32, "Resize Grip Active", 125, 160, 217, 255);
    theme.addElement(33, "Close Button", 105, 140, 199, 255);
    theme.addElement(34, "Close Button Hovered", 128, 161, 214, 255);
    theme.addElement(35, "Close Button Active", 105, 140, 199, 255);
    theme.addElement(36, "Plot Lines", 255, 255, 255, 255);
    theme.addElement(37, "Plot Lines Hovered", 230, 179, 0, 255);
    theme.addElement(38, "Plot Histogram", 230, 179, 0, 255);
    theme.addElement(39, "Plot Histogram Hovered", 255, 153, 0, 255);
    theme.addElement(40, "Text Selected Background", 105, 140, 199, 255);
    theme.addElement(41, "Modal Window Darkening", 41, 46, 56, 194);
    theme.addElement(42, "Text Selected Background", 105, 140, 199, 89);
    theme.addElement(43, "Drag Drop Target", 105, 140, 199, 230);
    theme.addElement(44, "Nav Highlight", 105, 140, 199, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 56, 64, 77, 51);
    theme.addElement(47, "Modal Window Dim Background", 41, 46, 56, 89);
    theme.addElement(48, "Table Header Background", 61, 68, 78, 255);
    theme.addElement(49, "Table Border Strong", 81, 88, 98, 255);
    theme.addElement(50, "Table Border Light", 71, 78, 88, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 105, 140, 199, 204);
    theme.addElement(54, "Docking Empty Background", 51, 56, 66, 204);
    return theme;
}

/**
 * Purple style theme with violet accents
 */
function createPurpleStyleTheme() {
    let theme = new ImGuiTheme("purple");
    theme.addElement(0, "Text", 255, 255, 255, 255);
    theme.addElement(1, "Text Disabled", 153, 48, 102, 255);
    theme.addElement(2, "Window Background", 15, 15, 15, 240);
    theme.addElement(3, "Child Background", 255, 255, 255, 0);
    theme.addElement(4, "Popup Background", 20, 20, 20, 240);
    theme.addElement(5, "Border", 125, 36, 79, 255);
    theme.addElement(6, "Border Shadow", 125, 36, 79, 0);
    theme.addElement(7, "Frame Background", 117, 28, 74, 255);
    theme.addElement(8, "Frame Background Hovered", 176, 41, 110, 255);
    theme.addElement(9, "Frame Background Active", 148, 26, 89, 255);
    theme.addElement(10, "Title Background", 0, 0, 0, 255);
    theme.addElement(11, "Title Background Active", 156, 41, 100, 255);
    theme.addElement(12, "Title Background Collapsed", 0, 0, 0, 130);
    theme.addElement(13, "Menu Bar Background", 38, 38, 38, 255);
    theme.addElement(14, "Scrollbar Background", 5, 5, 5, 135);
    theme.addElement(15, "Scrollbar Grab", 79, 79, 79, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 104, 104, 104, 255);
    theme.addElement(17, "Scrollbar Grab Active", 130, 130, 130, 255);
    theme.addElement(18, "Check Mark", 240, 77, 161, 255);
    theme.addElement(19, "Slider Grab", 217, 28, 125, 255);
    theme.addElement(20, "Slider Grab Active", 227, 61, 148, 255);
    theme.addElement(21, "Button", 117, 28, 74, 255);
    theme.addElement(22, "Button Hovered", 176, 43, 110, 255);
    theme.addElement(23, "Button Active", 151, 26, 89, 255);
    theme.addElement(24, "Header", 117, 28, 74, 20);
    theme.addElement(25, "Header Hovered", 176, 41, 110, 255);
    theme.addElement(26, "Header Active", 148, 26, 89, 255);
    theme.addElement(27, "Separator", 176, 41, 110, 255);
    theme.addElement(28, "Separator Hovered", 148, 26, 89, 255);
    theme.addElement(29, "Separator Active", 148, 26, 89, 255);
    theme.addElement(30, "Resize Grip", 117, 28, 74, 178);
    theme.addElement(31, "Resize Grip Hovered", 176, 41, 110, 171);
    theme.addElement(32, "Resize Grip Active", 179, 34, 107, 255);
    theme.addElement(33, "Close Button", 104, 104, 104, 128);
    theme.addElement(34, "Close Button Hovered", 250, 99, 92, 255);
    theme.addElement(35, "Close Button Active", 250, 99, 92, 255);
    theme.addElement(36, "Plot Lines", 156, 156, 156, 255);
    theme.addElement(37, "Plot Lines Hovered", 235, 235, 235, 255);
    theme.addElement(38, "Plot Histogram", 230, 179, 0, 255);
    theme.addElement(39, "Plot Histogram Hovered", 255, 153, 0, 255);
    theme.addElement(40, "Text Selected Background", 255, 200, 230, 89);
    theme.addElement(41, "Modal Window Darkening", 204, 204, 204, 89);
    theme.addElement(42, "Text Selected Background", 148, 26, 89, 89);
    theme.addElement(43, "Drag Drop Target", 240, 77, 161, 230);
    theme.addElement(44, "Nav Highlight", 148, 26, 89, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 15, 15, 15, 51);
    theme.addElement(47, "Modal Window Dim Background", 15, 15, 20, 89);
    theme.addElement(48, "Table Header Background", 50, 40, 50, 255);
    theme.addElement(49, "Table Border Strong", 70, 55, 70, 255);
    theme.addElement(50, "Table Border Light", 60, 45, 60, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 148, 26, 89, 204);
    theme.addElement(54, "Docking Empty Background", 15, 15, 15, 204);
    return theme;
}


/**
 * Teal contrast theme with high contrast elements
 */
function createTealContrastTheme() {
    let theme = new ImGuiTheme("tealContrast");
    theme.addElement(0, "Text", 240, 245, 250, 255);
    theme.addElement(1, "Text Disabled", 100, 120, 130, 255);
    theme.addElement(2, "Window Background", 18, 22, 26, 245);
    theme.addElement(3, "Child Background", 22, 28, 32, 255);
    theme.addElement(4, "Popup Background", 20, 24, 28, 250);
    theme.addElement(5, "Border", 0, 197, 197, 100);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 60);
    theme.addElement(7, "Frame Background", 28, 35, 42, 255);
    theme.addElement(8, "Frame Background Hovered", 40, 50, 60, 255);
    theme.addElement(9, "Frame Background Active", 52, 65, 78, 255);
    theme.addElement(10, "Title Background", 24, 30, 36, 255);
    theme.addElement(11, "Title Background Active", 38, 48, 58, 255);
    theme.addElement(12, "Title Background Collapsed", 20, 25, 30, 210);
    theme.addElement(13, "Menu Bar Background", 22, 28, 32, 255);
    theme.addElement(14, "Scrollbar Background", 28, 35, 42, 255);
    theme.addElement(15, "Scrollbar Grab", 0, 160, 160, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 0, 180, 180, 255);
    theme.addElement(17, "Scrollbar Grab Active", 0, 200, 200, 255);
    theme.addElement(18, "Check Mark", 0, 197, 197, 255);
    theme.addElement(19, "Slider Grab", 0, 180, 180, 255);
    theme.addElement(20, "Slider Grab Active", 0, 200, 200, 255);
    theme.addElement(21, "Button", 45, 56, 68, 255);
    theme.addElement(22, "Button Hovered", 58, 72, 88, 255);
    theme.addElement(23, "Button Active", 70, 88, 106, 255);
    theme.addElement(24, "Header", 0, 140, 140, 25);
    theme.addElement(25, "Header Hovered", 0, 170, 170, 255);
    theme.addElement(26, "Header Active", 0, 197, 197, 255);
    theme.addElement(27, "Separator", 0, 160, 160, 255);
    theme.addElement(28, "Separator Hovered", 0, 180, 180, 255);
    theme.addElement(29, "Separator Active", 0, 197, 197, 255);
    theme.addElement(30, "Resize Grip", 0, 197, 197, 64);
    theme.addElement(31, "Resize Grip Hovered", 0, 217, 217, 171);
    theme.addElement(32, "Resize Grip Active", 0, 237, 237, 242);
    theme.addElement(33, "Tab", 0, 160, 160, 219);
    theme.addElement(34, "Tab Hovered", 0, 197, 197, 204);
    theme.addElement(35, "Tab Active", 0, 180, 180, 255);
    theme.addElement(36, "Tab Unfocused", 22, 28, 32, 255);
    theme.addElement(37, "Tab Unfocused Active", 28, 35, 42, 255);
    theme.addElement(38, "Plot Lines", 0, 197, 197, 255);
    theme.addElement(39, "Plot Lines Hovered", 0, 217, 217, 255);
    theme.addElement(40, "Plot Histogram", 0, 180, 180, 255);
    theme.addElement(41, "Plot Histogram Hovered", 0, 200, 200, 255);
    theme.addElement(42, "Text Selected Background", 0, 140, 140, 100);
    theme.addElement(43, "Drag Drop Target", 0, 197, 197, 230);
    theme.addElement(44, "Nav Highlight", 0, 197, 197, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 28, 35, 42, 51);
    theme.addElement(47, "Modal Window Dim Background", 18, 22, 26, 89);
    theme.addElement(48, "Table Header Background", 35, 42, 50, 255);
    theme.addElement(49, "Table Border Strong", 55, 65, 75, 255);
    theme.addElement(50, "Table Border Light", 45, 55, 65, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 0, 197, 197, 204);
    theme.addElement(54, "Docking Empty Background", 28, 35, 42, 204);
    return theme;
}

/**
 * Rice white theme with clean light colors
 */
function createRiceWhiteTheme() {
    let theme = new ImGuiTheme("riceWhite");
    theme.addElement(0, "Text", 0, 0, 0, 255);
    theme.addElement(1, "Text Disabled", 128, 128, 128, 255);
    theme.addElement(2, "Window Background", 219, 219, 219, 255);
    theme.addElement(3, "Child Background", 181, 181, 181, 255);
    theme.addElement(4, "Popup Background", 201, 201, 201, 255);
    theme.addElement(5, "Border", 0, 0, 0, 92);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 26);
    theme.addElement(7, "Frame Background", 255, 255, 255, 255);
    theme.addElement(8, "Frame Background Hovered", 255, 255, 255, 255);
    theme.addElement(9, "Frame Background Active", 255, 255, 255, 255);
    theme.addElement(10, "Title Background", 255, 255, 255, 206);
    theme.addElement(11, "Title Background Active", 255, 255, 255, 255);
    theme.addElement(12, "Title Background Collapsed", 255, 255, 255, 130);
    theme.addElement(13, "Menu Bar Background", 255, 255, 255, 255);
    theme.addElement(14, "Scrollbar Background", 255, 255, 255, 219);
    theme.addElement(15, "Scrollbar Grab", 94, 94, 94, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 153, 153, 153, 255);
    theme.addElement(17, "Scrollbar Grab Active", 54, 54, 54, 255);
    theme.addElement(18, "Check Mark", 107, 107, 107, 255);
    theme.addElement(19, "Slider Grab", 130, 130, 130, 255);
    theme.addElement(20, "Slider Grab Active", 166, 166, 166, 255);
    theme.addElement(21, "Button", 133, 133, 133, 212);
    theme.addElement(22, "Button Hovered", 148, 148, 148, 212);
    theme.addElement(23, "Button Active", 112, 112, 112, 212);
    theme.addElement(24, "Header", 166, 166, 166, 20);
    theme.addElement(25, "Header Hovered", 186, 186, 186, 255);
    theme.addElement(26, "Header Active", 135, 135, 135, 255);
    theme.addElement(27, "Separator", 117, 117, 117, 255);
    theme.addElement(28, "Separator Hovered", 115, 115, 115, 255);
    theme.addElement(29, "Separator Active", 115, 115, 115, 255);
    theme.addElement(30, "Resize Grip", 59, 59, 59, 255);
    theme.addElement(31, "Resize Grip Hovered", 82, 82, 82, 255);
    theme.addElement(32, "Resize Grip Active", 36, 36, 36, 255);
    theme.addElement(33, "Close Button", 102, 102, 102, 41);
    theme.addElement(34, "Close Button Hovered", 102, 102, 102, 99);
    theme.addElement(35, "Close Button Active", 102, 102, 102, 255);
    theme.addElement(36, "Plot Lines", 156, 156, 156, 255);
    theme.addElement(37, "Plot Lines Hovered", 255, 255, 255, 255);
    theme.addElement(38, "Plot Histogram", 179, 179, 179, 255);
    theme.addElement(39, "Plot Histogram Hovered", 255, 255, 255, 255);
    theme.addElement(40, "Text Selected Background", 158, 158, 158, 255);
    theme.addElement(41, "Modal Window Darkening", 66, 66, 66, 153);
    theme.addElement(42, "Text Selected Background", 158, 158, 158, 89);
    theme.addElement(43, "Drag Drop Target", 200, 200, 200, 230);
    theme.addElement(44, "Nav Highlight", 158, 158, 158, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 219, 219, 219, 51);
    theme.addElement(47, "Modal Window Dim Background", 200, 200, 200, 89);
    theme.addElement(48, "Table Header Background", 180, 180, 180, 255);
    theme.addElement(49, "Table Border Strong", 150, 150, 150, 255);
    theme.addElement(50, "Table Border Light", 170, 170, 170, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 180, 180, 180, 204);
    theme.addElement(54, "Docking Empty Background", 219, 219, 219, 204);
    return theme;
}

/**
 * Ruda theme with dark blue-gray tones
 */
function createRudaTheme() {
    let theme = new ImGuiTheme("ruda");
    theme.addElement(0, "Text", 242, 245, 250, 255);
    theme.addElement(1, "Text Disabled", 92, 107, 120, 255);
    theme.addElement(2, "Window Background", 28, 38, 43, 255);
    theme.addElement(3, "Child Background", 38, 46, 56, 255);
    theme.addElement(4, "Popup Background", 20, 20, 20, 240);
    theme.addElement(5, "Border", 20, 26, 31, 255);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 51, 64, 74, 255);
    theme.addElement(8, "Frame Background Hovered", 31, 51, 71, 255);
    theme.addElement(9, "Frame Background Active", 23, 31, 36, 255);
    theme.addElement(10, "Title Background", 23, 31, 36, 166);
    theme.addElement(11, "Title Background Active", 20, 26, 31, 255);
    theme.addElement(12, "Title Background Collapsed", 0, 0, 0, 130);
    theme.addElement(13, "Menu Bar Background", 38, 46, 56, 255);
    theme.addElement(14, "Scrollbar Background", 5, 5, 5, 100);
    theme.addElement(15, "Scrollbar Grab", 51, 64, 74, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 46, 56, 64, 255);
    theme.addElement(17, "Scrollbar Grab Active", 23, 54, 79, 255);
    theme.addElement(18, "Check Mark", 72, 143, 255, 255);
    theme.addElement(19, "Slider Grab", 72, 143, 255, 255);
    theme.addElement(20, "Slider Grab Active", 94, 156, 255, 255);
    theme.addElement(21, "Button", 51, 64, 74, 255);
    theme.addElement(22, "Button Hovered", 72, 143, 255, 255);
    theme.addElement(23, "Button Active", 15, 135, 250, 255);
    theme.addElement(24, "Header", 51, 64, 74, 24);
    theme.addElement(25, "Header Hovered", 66, 150, 250, 204);
    theme.addElement(26, "Header Active", 66, 150, 250, 255);
    theme.addElement(27, "Separator", 51, 64, 74, 255);
    theme.addElement(28, "Separator Hovered", 26, 102, 191, 199);
    theme.addElement(29, "Separator Active", 26, 102, 191, 255);
    theme.addElement(30, "Resize Grip", 66, 150, 250, 64);
    theme.addElement(31, "Resize Grip Hovered", 66, 150, 250, 171);
    theme.addElement(32, "Resize Grip Active", 66, 150, 250, 242);
    theme.addElement(33, "Tab", 28, 38, 43, 255);
    theme.addElement(34, "Tab Hovered", 66, 150, 250, 204);
    theme.addElement(35, "Tab Active", 51, 64, 74, 255);
    theme.addElement(36, "Tab Unfocused", 28, 38, 43, 255);
    theme.addElement(37, "Tab Unfocused Active", 28, 38, 43, 255);
    theme.addElement(38, "Plot Lines", 156, 156, 156, 255);
    theme.addElement(39, "Plot Lines Hovered", 255, 110, 89, 255);
    theme.addElement(40, "Plot Histogram", 230, 179, 0, 255);
    theme.addElement(41, "Plot Histogram Hovered", 255, 153, 0, 255);
    theme.addElement(42, "Text Selected Background", 66, 150, 250, 89);
    theme.addElement(43, "Drag Drop Target", 255, 255, 0, 230);
    theme.addElement(44, "Nav Highlight", 66, 150, 250, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 204, 204, 204, 51);
    theme.addElement(47, "Modal Window Dim Background", 204, 204, 204, 89);
    theme.addElement(48, "Table Header Background", 48, 48, 48, 255);
    theme.addElement(49, "Table Border Strong", 79, 79, 89, 255);
    theme.addElement(50, "Table Border Light", 59, 59, 64, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 33, 191, 140, 204);
    theme.addElement(54, "Docking Empty Background", 33, 33, 33, 204);
    return theme;
}

/**
 * Purple mist theme with ethereal purple tones
 */
function createPurpleMistTheme() {
    let theme = new ImGuiTheme("purpleMist");
    theme.addElement(0, "Text", 255, 255, 255, 255);
    theme.addElement(1, "Text Disabled", 128, 128, 128, 255);
    theme.addElement(2, "Window Background", 5, 3, 5, 240);
    theme.addElement(3, "Child Background", 0, 0, 0, 0);
    theme.addElement(4, "Popup Background", 20, 20, 20, 240);
    theme.addElement(5, "Border", 181, 153, 232, 84);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 26, 18, 31, 227);
    theme.addElement(8, "Frame Background Hovered", 51, 51, 51, 255);
    theme.addElement(9, "Frame Background Active", 74, 71, 87, 239);
    theme.addElement(10, "Title Background", 10, 10, 10, 255);
    theme.addElement(11, "Title Background Active", 105, 46, 143, 255);
    theme.addElement(12, "Title Background Collapsed", 0, 0, 0, 130);
    theme.addElement(13, "Menu Bar Background", 36, 36, 36, 255);
    theme.addElement(14, "Scrollbar Background", 5, 5, 5, 135);
    theme.addElement(15, "Scrollbar Grab", 79, 79, 79, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 104, 104, 104, 255);
    theme.addElement(17, "Scrollbar Grab Active", 130, 130, 130, 255);
    theme.addElement(18, "Check Mark", 153, 51, 222, 255);
    theme.addElement(19, "Slider Grab", 166, 61, 224, 255);
    theme.addElement(20, "Slider Grab Active", 224, 15, 120, 255);
    theme.addElement(21, "Button", 219, 46, 156, 102);
    theme.addElement(22, "Button Hovered", 193, 54, 188, 255);
    theme.addElement(23, "Button Active", 102, 26, 133, 255);
    theme.addElement(24, "Header", 247, 54, 125, 20);
    theme.addElement(25, "Header Hovered", 222, 95, 166, 204);
    theme.addElement(26, "Header Active", 199, 26, 77, 255);
    theme.addElement(27, "Separator", 64, 46, 219, 128);
    theme.addElement(28, "Separator Hovered", 107, 34, 175, 199);
    theme.addElement(29, "Separator Active", 140, 10, 204, 255);
    theme.addElement(30, "Resize Grip", 199, 128, 222, 51);
    theme.addElement(31, "Resize Grip Hovered", 138, 36, 235, 171);
    theme.addElement(32, "Resize Grip Active", 130, 9, 220, 242);
    theme.addElement(33, "Tab", 59, 32, 102, 219);
    theme.addElement(34, "Tab Hovered", 113, 58, 219, 204);
    theme.addElement(35, "Tab Active", 76, 26, 193, 255);
    theme.addElement(36, "Tab Unfocused", 18, 26, 31, 255);
    theme.addElement(37, "Tab Unfocused Active", 35, 42, 49, 255);
    theme.addElement(38, "Plot Lines", 156, 156, 156, 255);
    theme.addElement(39, "Plot Lines Hovered", 255, 110, 89, 255);
    theme.addElement(40, "Plot Histogram", 230, 179, 0, 255);
    theme.addElement(41, "Plot Histogram Hovered", 255, 153, 0, 255);
    theme.addElement(42, "Text Selected Background", 66, 150, 250, 89);
    theme.addElement(43, "Drag Drop Target", 255, 255, 0, 230);
    theme.addElement(44, "Nav Highlight", 66, 150, 250, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 204, 204, 204, 51);
    theme.addElement(47, "Modal Window Dim Background", 204, 204, 204, 89);
    theme.addElement(48, "Table Header Background", 48, 48, 48, 255);
    theme.addElement(49, "Table Border Strong", 79, 79, 89, 255);
    theme.addElement(50, "Table Border Light", 59, 59, 64, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 33, 191, 140, 204);
    theme.addElement(54, "Docking Empty Background", 33, 33, 33, 204);
    return theme;
}

/**
 * macOS inspired theme with light colors
 */
function createMacOSTheme() {
    let theme = new ImGuiTheme("macOS");
    theme.addElement(0, "Text", 30, 30, 30, 255);
    theme.addElement(1, "Text Disabled", 155, 155, 160, 255);
    theme.addElement(2, "Window Background", 236, 236, 236, 250);
    theme.addElement(3, "Child Background", 246, 246, 246, 255);
    theme.addElement(4, "Popup Background", 242, 242, 247, 255);
    theme.addElement(5, "Border", 200, 200, 205, 255);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 30);
    theme.addElement(7, "Frame Background", 255, 255, 255, 255);
    theme.addElement(8, "Frame Background Hovered", 248, 248, 250, 255);
    theme.addElement(9, "Frame Background Active", 240, 240, 245, 255);
    theme.addElement(10, "Title Background", 236, 236, 236, 255);
    theme.addElement(11, "Title Background Active", 220, 220, 225, 255);
    theme.addElement(12, "Title Background Collapsed", 236, 236, 236, 200);
    theme.addElement(13, "Menu Bar Background", 246, 246, 246, 255);
    theme.addElement(14, "Scrollbar Background", 240, 240, 242, 255);
    theme.addElement(15, "Scrollbar Grab", 190, 190, 195, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 170, 170, 175, 255);
    theme.addElement(17, "Scrollbar Grab Active", 150, 150, 155, 255);
    theme.addElement(18, "Check Mark", 0, 122, 255, 255);
    theme.addElement(19, "Slider Grab", 0, 122, 255, 255);
    theme.addElement(20, "Slider Grab Active", 10, 132, 255, 255);
    theme.addElement(21, "Button", 255, 255, 255, 255);
    theme.addElement(22, "Button Hovered", 245, 245, 250, 255);
    theme.addElement(23, "Button Active", 0, 122, 255, 255);
    theme.addElement(24, "Header", 220, 230, 245, 20);
    theme.addElement(25, "Header Hovered", 200, 220, 245, 255);
    theme.addElement(26, "Header Active", 180, 210, 240, 255);
    theme.addElement(27, "Separator", 210, 210, 215, 255);
    theme.addElement(28, "Separator Hovered", 0, 122, 255, 200);
    theme.addElement(29, "Separator Active", 0, 122, 255, 255);
    theme.addElement(30, "Resize Grip", 200, 200, 210, 76);
    theme.addElement(31, "Resize Grip Hovered", 180, 180, 200, 153);
    theme.addElement(32, "Resize Grip Active", 160, 160, 190, 229);
    theme.addElement(33, "Tab", 236, 236, 236, 219);
    theme.addElement(34, "Tab Hovered", 200, 220, 245, 204);
    theme.addElement(35, "Tab Active", 0, 122, 255, 255);
    theme.addElement(36, "Tab Unfocused", 246, 246, 246, 255);
    theme.addElement(37, "Tab Unfocused Active", 240, 240, 245, 255);
    theme.addElement(38, "Plot Lines", 100, 100, 100, 255);
    theme.addElement(39, "Plot Lines Hovered", 0, 122, 255, 255);
    theme.addElement(40, "Plot Histogram", 80, 80, 80, 255);
    theme.addElement(41, "Plot Histogram Hovered", 0, 122, 255, 255);
    theme.addElement(42, "Text Selected Background", 0, 122, 255, 89);
    theme.addElement(43, "Drag Drop Target", 0, 122, 255, 230);
    theme.addElement(44, "Nav Highlight", 0, 122, 255, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 200, 200, 205, 51);
    theme.addElement(47, "Modal Window Dim Background", 200, 200, 210, 89);
    theme.addElement(48, "Table Header Background", 230, 230, 235, 255);
    theme.addElement(49, "Table Border Strong", 190, 190, 195, 255);
    theme.addElement(50, "Table Border Light", 210, 210, 215, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 0, 122, 255, 204);
    theme.addElement(54, "Docking Empty Background", 240, 240, 242, 204);
    return theme;
}

/**
 * The Witcher inspired theme with dark medieval tones
 */
function createWitcherTheme() {
    let theme = new ImGuiTheme("witcher");
    theme.addElement(0, "Text", 230, 220, 200, 255);
    theme.addElement(1, "Text Disabled", 130, 120, 100, 255);
    theme.addElement(2, "Window Background", 25, 20, 18, 240);
    theme.addElement(3, "Child Background", 35, 28, 25, 255);
    theme.addElement(4, "Popup Background", 30, 25, 22, 255);
    theme.addElement(5, "Border", 120, 100, 70, 255);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 80);
    theme.addElement(7, "Frame Background", 45, 38, 32, 255);
    theme.addElement(8, "Frame Background Hovered", 65, 55, 45, 255);
    theme.addElement(9, "Frame Background Active", 85, 72, 60, 255);
    theme.addElement(10, "Title Background", 40, 32, 28, 255);
    theme.addElement(11, "Title Background Active", 60, 50, 42, 255);
    theme.addElement(12, "Title Background Collapsed", 35, 28, 25, 200);
    theme.addElement(13, "Menu Bar Background", 35, 28, 25, 255);
    theme.addElement(14, "Scrollbar Background", 45, 38, 32, 255);
    theme.addElement(15, "Scrollbar Grab", 100, 85, 65, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 120, 100, 75, 255);
    theme.addElement(17, "Scrollbar Grab Active", 140, 115, 85, 255);
    theme.addElement(18, "Check Mark", 220, 180, 80, 255);
    theme.addElement(19, "Slider Grab", 220, 180, 80, 255);
    theme.addElement(20, "Slider Grab Active", 240, 200, 100, 255);
    theme.addElement(21, "Button", 65, 55, 45, 255);
    theme.addElement(22, "Button Hovered", 85, 72, 60, 255);
    theme.addElement(23, "Button Active", 105, 90, 75, 255);
    theme.addElement(24, "Header", 80, 65, 50, 20);
    theme.addElement(25, "Header Hovered", 100, 82, 65, 255);
    theme.addElement(26, "Header Active", 120, 100, 80, 255);
    theme.addElement(27, "Separator", 100, 85, 65, 255);
    theme.addElement(28, "Separator Hovered", 120, 100, 75, 255);
    theme.addElement(29, "Separator Active", 140, 115, 85, 255);
    theme.addElement(30, "Resize Grip", 220, 180, 80, 51);
    theme.addElement(31, "Resize Grip Hovered", 230, 190, 90, 171);
    theme.addElement(32, "Resize Grip Active", 240, 200, 100, 242);
    theme.addElement(33, "Tab", 45, 38, 32, 219);
    theme.addElement(34, "Tab Hovered", 65, 55, 45, 204);
    theme.addElement(35, "Tab Active", 85, 72, 60, 255);
    theme.addElement(36, "Tab Unfocused", 35, 28, 25, 255);
    theme.addElement(37, "Tab Unfocused Active", 40, 32, 28, 255);
    theme.addElement(38, "Plot Lines", 220, 180, 80, 255);
    theme.addElement(39, "Plot Lines Hovered", 240, 200, 100, 255);
    theme.addElement(40, "Plot Histogram", 200, 160, 60, 255);
    theme.addElement(41, "Plot Histogram Hovered", 220, 180, 80, 255);
    theme.addElement(42, "Text Selected Background", 220, 180, 80, 89);
    theme.addElement(43, "Drag Drop Target", 220, 180, 80, 230);
    theme.addElement(44, "Nav Highlight", 220, 180, 80, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 35, 28, 25, 51);
    theme.addElement(47, "Modal Window Dim Background", 25, 20, 18, 89);
    theme.addElement(48, "Table Header Background", 50, 42, 38, 255);
    theme.addElement(49, "Table Border Strong", 70, 60, 55, 255);
    theme.addElement(50, "Table Border Light", 60, 50, 45, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 220, 180, 80, 204);
    theme.addElement(54, "Docking Empty Background", 25, 20, 18, 204);
    return theme;
}


/**
 * Mario inspired theme with vibrant red and blue
 */
function createMarioTheme() {
    let theme = new ImGuiTheme("mario");
    theme.addElement(0, "Text", 50, 40, 40, 255);
    theme.addElement(1, "Text Disabled", 150, 140, 140, 255);
    theme.addElement(2, "Window Background", 245, 230, 220, 255);
    theme.addElement(3, "Child Background", 255, 245, 235, 255);
    theme.addElement(4, "Popup Background", 250, 240, 230, 255);
    theme.addElement(5, "Border", 200, 80, 60, 255);
    theme.addElement(6, "Border Shadow", 100, 40, 30, 50);
    theme.addElement(7, "Frame Background", 235, 220, 210, 255);
    theme.addElement(8, "Frame Background Hovered", 225, 210, 200, 255);
    theme.addElement(9, "Frame Background Active", 215, 200, 190, 255);
    theme.addElement(10, "Title Background", 220, 70, 50, 255);
    theme.addElement(11, "Title Background Active", 240, 90, 70, 255);
    theme.addElement(12, "Title Background Collapsed", 220, 70, 50, 200);
    theme.addElement(13, "Menu Bar Background", 230, 80, 60, 255);
    theme.addElement(14, "Scrollbar Background", 235, 220, 210, 255);
    theme.addElement(15, "Scrollbar Grab", 40, 100, 200, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 60, 120, 220, 255);
    theme.addElement(17, "Scrollbar Grab Active", 80, 140, 240, 255);
    theme.addElement(18, "Check Mark", 240, 200, 40, 255);
    theme.addElement(19, "Slider Grab", 40, 100, 200, 255);
    theme.addElement(20, "Slider Grab Active", 60, 120, 220, 255);
    theme.addElement(21, "Button", 220, 70, 50, 255);
    theme.addElement(22, "Button Hovered", 240, 90, 70, 255);
    theme.addElement(23, "Button Active", 200, 50, 30, 255);
    theme.addElement(24, "Header", 40, 100, 200, 20);
    theme.addElement(25, "Header Hovered", 60, 120, 220, 255);
    theme.addElement(26, "Header Active", 80, 140, 240, 255);
    theme.addElement(27, "Separator", 200, 80, 60, 255);
    theme.addElement(28, "Separator Hovered", 220, 100, 80, 255);
    theme.addElement(29, "Separator Active", 240, 120, 100, 255);
    theme.addElement(30, "Resize Grip", 240, 200, 40, 51);
    theme.addElement(31, "Resize Grip Hovered", 250, 210, 50, 171);
    theme.addElement(32, "Resize Grip Active", 255, 220, 60, 242);
    theme.addElement(33, "Tab", 220, 70, 50, 219);
    theme.addElement(34, "Tab Hovered", 240, 90, 70, 204);
    theme.addElement(35, "Tab Active", 200, 50, 30, 255);
    theme.addElement(36, "Tab Unfocused", 245, 235, 225, 255);
    theme.addElement(37, "Tab Unfocused Active", 240, 230, 220, 255);
    theme.addElement(38, "Plot Lines", 40, 100, 200, 255);
    theme.addElement(39, "Plot Lines Hovered", 60, 120, 220, 255);
    theme.addElement(40, "Plot Histogram", 220, 70, 50, 255);
    theme.addElement(41, "Plot Histogram Hovered", 240, 90, 70, 255);
    theme.addElement(42, "Text Selected Background", 40, 100, 200, 89);
    theme.addElement(43, "Drag Drop Target", 240, 200, 40, 230);
    theme.addElement(44, "Nav Highlight", 40, 100, 200, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 235, 220, 210, 51);
    theme.addElement(47, "Modal Window Dim Background", 220, 200, 190, 89);
    theme.addElement(48, "Table Header Background", 225, 215, 205, 255);
    theme.addElement(49, "Table Border Strong", 195, 185, 175, 255);
    theme.addElement(50, "Table Border Light", 205, 195, 185, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 40, 100, 200, 204);
    theme.addElement(54, "Docking Empty Background", 235, 220, 210, 204);
    return theme;
}

/**
 * Zelda inspired theme with green and gold
 */
function createZeldaTheme() {
    let theme = new ImGuiTheme("zelda");
    theme.addElement(0, "Text", 240, 235, 210, 255);
    theme.addElement(1, "Text Disabled", 140, 135, 120, 255);
    theme.addElement(2, "Window Background", 20, 35, 25, 240);
    theme.addElement(3, "Child Background", 28, 45, 32, 255);
    theme.addElement(4, "Popup Background", 25, 40, 28, 255);
    theme.addElement(5, "Border", 180, 150, 80, 255);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 80);
    theme.addElement(7, "Frame Background", 35, 55, 40, 255);
    theme.addElement(8, "Frame Background Hovered", 50, 75, 55, 255);
    theme.addElement(9, "Frame Background Active", 65, 95, 70, 255);
    theme.addElement(10, "Title Background", 30, 50, 35, 255);
    theme.addElement(11, "Title Background Active", 45, 70, 50, 255);
    theme.addElement(12, "Title Background Collapsed", 28, 45, 32, 200);
    theme.addElement(13, "Menu Bar Background", 28, 45, 32, 255);
    theme.addElement(14, "Scrollbar Background", 35, 55, 40, 255);
    theme.addElement(15, "Scrollbar Grab", 100, 140, 90, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 120, 160, 110, 255);
    theme.addElement(17, "Scrollbar Grab Active", 140, 180, 130, 255);
    theme.addElement(18, "Check Mark", 220, 180, 60, 255);
    theme.addElement(19, "Slider Grab", 180, 150, 80, 255);
    theme.addElement(20, "Slider Grab Active", 200, 170, 100, 255);
    theme.addElement(21, "Button", 50, 75, 55, 255);
    theme.addElement(22, "Button Hovered", 65, 95, 70, 255);
    theme.addElement(23, "Button Active", 80, 115, 85, 255);
    theme.addElement(24, "Header", 60, 100, 70, 20);
    theme.addElement(25, "Header Hovered", 80, 125, 90, 255);
    theme.addElement(26, "Header Active", 100, 150, 110, 255);
    theme.addElement(27, "Separator", 100, 140, 90, 255);
    theme.addElement(28, "Separator Hovered", 120, 160, 110, 255);
    theme.addElement(29, "Separator Active", 140, 180, 130, 255);
    theme.addElement(30, "Resize Grip", 220, 180, 60, 51);
    theme.addElement(31, "Resize Grip Hovered", 230, 190, 70, 171);
    theme.addElement(32, "Resize Grip Active", 240, 200, 80, 242);
    theme.addElement(33, "Tab", 30, 50, 35, 219);
    theme.addElement(34, "Tab Hovered", 45, 70, 50, 204);
    theme.addElement(35, "Tab Active", 60, 100, 70, 255);
    theme.addElement(36, "Tab Unfocused", 25, 40, 28, 255);
    theme.addElement(37, "Tab Unfocused Active", 30, 45, 32, 255);
    theme.addElement(38, "Plot Lines", 100, 140, 90, 255);
    theme.addElement(39, "Plot Lines Hovered", 120, 160, 110, 255);
    theme.addElement(40, "Plot Histogram", 180, 150, 80, 255);
    theme.addElement(41, "Plot Histogram Hovered", 200, 170, 100, 255);
    theme.addElement(42, "Text Selected Background", 180, 150, 80, 89);
    theme.addElement(43, "Drag Drop Target", 220, 180, 60, 230);
    theme.addElement(44, "Nav Highlight", 180, 150, 80, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 35, 28, 25, 51);
    theme.addElement(47, "Modal Window Dim Background", 25, 20, 18, 89);
    theme.addElement(48, "Table Header Background", 32, 50, 38, 255);
    theme.addElement(49, "Table Border Strong", 52, 70, 58, 255);
    theme.addElement(50, "Table Border Light", 42, 60, 48, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 180, 150, 80, 204);
    theme.addElement(54, "Docking Empty Background", 20, 35, 25, 204);
    return theme;
}

/**
 * GTA San Andreas inspired theme with orange and purple
 */
function createGtaTheme() {
    let theme = new ImGuiTheme("gta");
    theme.addElement(0, "Text", 255, 220, 180, 255);
    theme.addElement(1, "Text Disabled", 150, 130, 110, 255);
    theme.addElement(2, "Window Background", 30, 20, 40, 240);
    theme.addElement(3, "Child Background", 40, 28, 50, 255);
    theme.addElement(4, "Popup Background", 35, 25, 45, 255);
    theme.addElement(5, "Border", 200, 120, 60, 255);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 80);
    theme.addElement(7, "Frame Background", 50, 35, 60, 255);
    theme.addElement(8, "Frame Background Hovered", 70, 50, 80, 255);
    theme.addElement(9, "Frame Background Active", 90, 65, 100, 255);
    theme.addElement(10, "Title Background", 45, 30, 55, 255);
    theme.addElement(11, "Title Background Active", 65, 45, 75, 255);
    theme.addElement(12, "Title Background Collapsed", 40, 28, 50, 200);
    theme.addElement(13, "Menu Bar Background", 40, 28, 50, 255);
    theme.addElement(14, "Scrollbar Background", 50, 35, 60, 255);
    theme.addElement(15, "Scrollbar Grab", 150, 90, 50, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 170, 110, 70, 255);
    theme.addElement(17, "Scrollbar Grab Active", 190, 130, 90, 255);
    theme.addElement(18, "Check Mark", 255, 140, 60, 255);
    theme.addElement(19, "Slider Grab", 200, 120, 60, 255);
    theme.addElement(20, "Slider Grab Active", 220, 140, 80, 255);
    theme.addElement(21, "Button", 70, 50, 80, 255);
    theme.addElement(22, "Button Hovered", 90, 65, 100, 255);
    theme.addElement(23, "Button Active", 110, 80, 120, 255);
    theme.addElement(24, "Header", 120, 70, 140, 20);
    theme.addElement(25, "Header Hovered", 140, 90, 160, 255);
    theme.addElement(26, "Header Active", 160, 110, 180, 255);
    theme.addElement(27, "Separator", 150, 90, 50, 255);
    theme.addElement(28, "Separator Hovered", 170, 110, 70, 255);
    theme.addElement(29, "Separator Active", 190, 130, 90, 255);
    theme.addElement(30, "Resize Grip", 200, 120, 60, 51);
    theme.addElement(31, "Resize Grip Hovered", 210, 130, 70, 171);
    theme.addElement(32, "Resize Grip Active", 220, 140, 80, 242);
    theme.addElement(33, "Tab", 65, 45, 75, 219);
    theme.addElement(34, "Tab Hovered", 85, 65, 95, 204);
    theme.addElement(35, "Tab Active", 110, 80, 120, 255);
    theme.addElement(36, "Tab Unfocused", 40, 28, 50, 255);
    theme.addElement(37, "Tab Unfocused Active", 45, 30, 55, 255);
    theme.addElement(38, "Plot Lines", 200, 120, 60, 255);
    theme.addElement(39, "Plot Lines Hovered", 220, 140, 80, 255);
    theme.addElement(40, "Plot Histogram", 150, 90, 50, 255);
    theme.addElement(41, "Plot Histogram Hovered", 170, 110, 70, 255);
    theme.addElement(42, "Text Selected Background", 200, 120, 60, 89);
    theme.addElement(43, "Drag Drop Target", 255, 140, 60, 230);
    theme.addElement(44, "Nav Highlight", 200, 120, 60, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 40, 28, 50, 51);
    theme.addElement(47, "Modal Window Dim Background", 30, 20, 40, 89);
    theme.addElement(48, "Table Header Background", 55, 40, 65, 255);
    theme.addElement(49, "Table Border Strong", 75, 60, 85, 255);
    theme.addElement(50, "Table Border Light", 65, 50, 75, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 200, 120, 60, 204);
    theme.addElement(54, "Docking Empty Background", 30, 20, 40, 204);
    return theme;
}

/**
 * Final Fantasy inspired theme with crystal blue
 */
function createFinalFantasyTheme() {
    let theme = new ImGuiTheme("finalFantasy");
    theme.addElement(0, "Text", 220, 230, 255, 255);
    theme.addElement(1, "Text Disabled", 120, 130, 150, 255);
    theme.addElement(2, "Window Background", 15, 20, 35, 240);
    theme.addElement(3, "Child Background", 20, 28, 45, 255);
    theme.addElement(4, "Popup Background", 18, 25, 40, 255);
    theme.addElement(5, "Border", 100, 150, 220, 255);
    theme.addElement(6, "Border Shadow", 0, 20, 40, 80);
    theme.addElement(7, "Frame Background", 30, 40, 60, 255);
    theme.addElement(8, "Frame Background Hovered", 45, 60, 85, 255);
    theme.addElement(9, "Frame Background Active", 60, 80, 110, 255);
    theme.addElement(10, "Title Background", 25, 35, 55, 255);
    theme.addElement(11, "Title Background Active", 40, 55, 80, 255);
    theme.addElement(12, "Title Background Collapsed", 20, 28, 45, 200);
    theme.addElement(13, "Menu Bar Background", 20, 28, 45, 255);
    theme.addElement(14, "Scrollbar Background", 30, 40, 60, 255);
    theme.addElement(15, "Scrollbar Grab", 80, 120, 180, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 100, 145, 210, 255);
    theme.addElement(17, "Scrollbar Grab Active", 120, 170, 240, 255);
    theme.addElement(18, "Check Mark", 150, 200, 255, 255);
    theme.addElement(19, "Slider Grab", 100, 150, 220, 255);
    theme.addElement(20, "Slider Grab Active", 120, 180, 250, 255);
    theme.addElement(21, "Button", 45, 60, 85, 255);
    theme.addElement(22, "Button Hovered", 60, 80, 110, 255);
    theme.addElement(23, "Button Active", 75, 100, 135, 255);
    theme.addElement(24, "Header", 50, 80, 130, 20);
    theme.addElement(25, "Header Hovered", 70, 105, 160, 255);
    theme.addElement(26, "Header Active", 90, 130, 190, 255);
    theme.addElement(27, "Separator", 80, 120, 180, 255);
    theme.addElement(28, "Separator Hovered", 100, 145, 210, 255);
    theme.addElement(29, "Separator Active", 120, 170, 240, 255);
    theme.addElement(30, "Resize Grip", 100, 150, 220, 51);
    theme.addElement(31, "Resize Grip Hovered", 120, 180, 250, 171);
    theme.addElement(32, "Resize Grip Active", 140, 200, 255, 242);
    theme.addElement(33, "Tab", 30, 40, 60, 219);
    theme.addElement(34, "Tab Hovered", 45, 60, 85, 204);
    theme.addElement(35, "Tab Active", 60, 80, 110, 255);
    theme.addElement(36, "Tab Unfocused", 20, 28, 45, 255);
    theme.addElement(37, "Tab Unfocused Active", 25, 33, 50, 255);
    theme.addElement(38, "Plot Lines", 100, 150, 220, 255);
    theme.addElement(39, "Plot Lines Hovered", 120, 180, 250, 255);
    theme.addElement(40, "Plot Histogram", 80, 120, 180, 255);
    theme.addElement(41, "Plot Histogram Hovered", 100, 150, 220, 255);
    theme.addElement(42, "Text Selected Background", 100, 150, 220, 89);
    theme.addElement(43, "Drag Drop Target", 150, 200, 255, 230);
    theme.addElement(44, "Nav Highlight", 100, 150, 220, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 30, 40, 60, 51);
    theme.addElement(47, "Modal Window Dim Background", 15, 20, 35, 89);
    theme.addElement(48, "Table Header Background", 40, 50, 70, 255);
    theme.addElement(49, "Table Border Strong", 60, 70, 90, 255);
    theme.addElement(50, "Table Border Light", 50, 60, 80, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 100, 150, 220, 204);
    theme.addElement(54, "Docking Empty Background", 30, 40, 60, 204);
    return theme;
}

/**
 * Black Myth: Wukong inspired theme with gold and black
 */
function createBlackMythTheme() {
    let theme = new ImGuiTheme("blackMyth");
    theme.addElement(0, "Text", 255, 240, 200, 255);
    theme.addElement(1, "Text Disabled", 140, 130, 110, 255);
    theme.addElement(2, "Window Background", 12, 10, 8, 240);
    theme.addElement(3, "Child Background", 18, 15, 12, 255);
    theme.addElement(4, "Popup Background", 15, 12, 10, 255);
    theme.addElement(5, "Border", 200, 170, 100, 255);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 100);
    theme.addElement(7, "Frame Background", 28, 24, 20, 255);
    theme.addElement(8, "Frame Background Hovered", 42, 36, 30, 255);
    theme.addElement(9, "Frame Background Active", 56, 48, 40, 255);
    theme.addElement(10, "Title Background", 22, 18, 15, 255);
    theme.addElement(11, "Title Background Active", 35, 30, 25, 255);
    theme.addElement(12, "Title Background Collapsed", 18, 15, 12, 200);
    theme.addElement(13, "Menu Bar Background", 18, 15, 12, 255);
    theme.addElement(14, "Scrollbar Background", 28, 24, 20, 255);
    theme.addElement(15, "Scrollbar Grab", 150, 130, 80, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 180, 155, 95, 255);
    theme.addElement(17, "Scrollbar Grab Active", 210, 180, 110, 255);
    theme.addElement(18, "Check Mark", 255, 215, 100, 255);
    theme.addElement(19, "Slider Grab", 200, 170, 100, 255);
    theme.addElement(20, "Slider Grab Active", 230, 200, 120, 255);
    theme.addElement(21, "Button", 42, 36, 30, 255);
    theme.addElement(22, "Button Hovered", 56, 48, 40, 255);
    theme.addElement(23, "Button Active", 70, 60, 50, 255);
    theme.addElement(24, "Header", 80, 70, 50, 20);
    theme.addElement(25, "Header Hovered", 110, 95, 65, 255);
    theme.addElement(26, "Header Active", 140, 120, 80, 255);
    theme.addElement(27, "Separator", 150, 130, 80, 255);
    theme.addElement(28, "Separator Hovered", 180, 155, 95, 255);
    theme.addElement(29, "Separator Active", 210, 180, 110, 255);
    theme.addElement(30, "Resize Grip", 255, 215, 100, 51);
    theme.addElement(31, "Resize Grip Hovered", 255, 225, 110, 171);
    theme.addElement(32, "Resize Grip Active", 255, 235, 120, 242);
    theme.addElement(33, "Tab", 28, 24, 20, 219);
    theme.addElement(34, "Tab Hovered", 42, 36, 30, 204);
    theme.addElement(35, "Tab Active", 56, 48, 40, 255);
    theme.addElement(36, "Tab Unfocused", 18, 15, 12, 255);
    theme.addElement(37, "Tab Unfocused Active", 22, 18, 15, 255);
    theme.addElement(38, "Plot Lines", 200, 170, 100, 255);
    theme.addElement(39, "Plot Lines Hovered", 220, 190, 110, 255);
    theme.addElement(40, "Plot Histogram", 180, 150, 80, 255);
    theme.addElement(41, "Plot Histogram Hovered", 200, 170, 100, 255);
    theme.addElement(42, "Text Selected Background", 255, 215, 100, 89);
    theme.addElement(43, "Drag Drop Target", 255, 235, 120, 230);
    theme.addElement(44, "Nav Highlight", 255, 215, 100, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 18, 15, 12, 51);
    theme.addElement(47, "Modal Window Dim Background", 15, 12, 10, 89);
    theme.addElement(48, "Table Header Background", 35, 30, 25, 255);
    theme.addElement(49, "Table Border Strong", 55, 50, 45, 255);
    theme.addElement(50, "Table Border Light", 45, 40, 35, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 255, 215, 100, 204);
    theme.addElement(54, "Docking Empty Background", 18, 15, 12, 204);
    return theme;
}

/**
 * Stellar Blade inspired theme with white and technological blue
 */
function createStellarBladeTheme() {
    let theme = new ImGuiTheme("stellarBlade");
    theme.addElement(0, "Text", 240, 250, 255, 255);
    theme.addElement(1, "Text Disabled", 130, 140, 150, 255);
    theme.addElement(2, "Window Background", 18, 22, 28, 240);
    theme.addElement(3, "Child Background", 25, 30, 38, 255);
    theme.addElement(4, "Popup Background", 22, 26, 33, 255);
    theme.addElement(5, "Border", 80, 180, 255, 255);
    theme.addElement(6, "Border Shadow", 20, 60, 100, 80);
    theme.addElement(7, "Frame Background", 35, 42, 52, 255);
    theme.addElement(8, "Frame Background Hovered", 50, 60, 75, 255);
    theme.addElement(9, "Frame Background Active", 65, 78, 98, 255);
    theme.addElement(10, "Title Background", 30, 36, 45, 255);
    theme.addElement(11, "Title Background Active", 45, 54, 68, 255);
    theme.addElement(12, "Title Background Collapsed", 25, 30, 38, 200);
    theme.addElement(13, "Menu Bar Background", 25, 30, 38, 255);
    theme.addElement(14, "Scrollbar Background", 35, 42, 52, 255);
    theme.addElement(15, "Scrollbar Grab", 100, 160, 220, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 120, 180, 240, 255);
    theme.addElement(17, "Scrollbar Grab Active", 140, 200, 255, 255);
    theme.addElement(18, "Check Mark", 100, 200, 255, 255);
    theme.addElement(19, "Slider Grab", 80, 180, 255, 255);
    theme.addElement(20, "Slider Grab Active", 100, 200, 255, 255);
    theme.addElement(21, "Button", 50, 60, 75, 255);
    theme.addElement(22, "Button Hovered", 65, 78, 98, 255);
    theme.addElement(23, "Button Active", 80, 96, 120, 255);
    theme.addElement(24, "Header", 60, 120, 180, 20);
    theme.addElement(25, "Header Hovered", 80, 150, 220, 255);
    theme.addElement(26, "Header Active", 100, 180, 255, 255);
    theme.addElement(27, "Separator", 100, 160, 220, 255);
    theme.addElement(28, "Separator Hovered", 120, 180, 240, 255);
    theme.addElement(29, "Separator Active", 140, 200, 255, 255);
    theme.addElement(30, "Resize Grip", 100, 180, 255, 51);
    theme.addElement(31, "Resize Grip Hovered", 120, 200, 255, 171);
    theme.addElement(32, "Resize Grip Active", 140, 220, 255, 242);
    theme.addElement(33, "Tab", 35, 42, 52, 219);
    theme.addElement(34, "Tab Hovered", 50, 60, 75, 204);
    theme.addElement(35, "Tab Active", 65, 78, 98, 255);
    theme.addElement(36, "Tab Unfocused", 25, 30, 38, 255);
    theme.addElement(37, "Tab Unfocused Active", 30, 36, 45, 255);
    theme.addElement(38, "Plot Lines", 100, 180, 255, 255);
    theme.addElement(39, "Plot Lines Hovered", 120, 200, 255, 255);
    theme.addElement(40, "Plot Histogram", 80, 160, 220, 255);
    theme.addElement(41, "Plot Histogram Hovered", 100, 180, 255, 255);
    theme.addElement(42, "Text Selected Background", 80, 180, 255, 89);
    theme.addElement(43, "Drag Drop Target", 100, 200, 255, 230);
    theme.addElement(44, "Nav Highlight", 100, 200, 255, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 35, 42, 52, 51);
    theme.addElement(47, "Modal Window Dim Background", 18, 22, 28, 89);
    theme.addElement(48, "Table Header Background", 45, 52, 62, 255);
    theme.addElement(49, "Table Border Strong", 65, 72, 82, 255);
    theme.addElement(50, "Table Border Light", 55, 62, 72, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 100, 180, 255, 204);
    theme.addElement(54, "Docking Empty Background", 35, 42, 52, 204);
    return theme;
}

/**
 * Neon cyberpunk theme with electric colors
 */
function createCyberpunkTheme() {
    let theme = new ImGuiTheme("cyberpunk");
    theme.addElement(0, "Text", 0, 255, 255, 255);
    theme.addElement(1, "Text Disabled", 0, 150, 150, 255);
    theme.addElement(2, "Window Background", 10, 10, 30, 240);
    theme.addElement(3, "Child Background", 20, 15, 40, 255);
    theme.addElement(4, "Popup Background", 15, 12, 35, 255);
    theme.addElement(5, "Border", 255, 0, 255, 255);
    theme.addElement(6, "Border Shadow", 0, 255, 255, 80);
    theme.addElement(7, "Frame Background", 30, 25, 50, 255);
    theme.addElement(8, "Frame Background Hovered", 45, 40, 70, 255);
    theme.addElement(9, "Frame Background Active", 60, 55, 90, 255);
    theme.addElement(10, "Title Background", 25, 20, 45, 255);
    theme.addElement(11, "Title Background Active", 40, 35, 60, 255);
    theme.addElement(12, "Title Background Collapsed", 20, 15, 40, 200);
    theme.addElement(13, "Menu Bar Background", 20, 15, 40, 255);
    theme.addElement(14, "Scrollbar Background", 30, 25, 50, 255);
    theme.addElement(15, "Scrollbar Grab", 255, 0, 255, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 255, 50, 255, 255);
    theme.addElement(17, "Scrollbar Grab Active", 255, 100, 255, 255);
    theme.addElement(18, "Check Mark", 0, 255, 255, 255);
    theme.addElement(19, "Slider Grab", 255, 0, 255, 255);
    theme.addElement(20, "Slider Grab Active", 255, 100, 255, 255);
    theme.addElement(21, "Button", 45, 40, 70, 255);
    theme.addElement(22, "Button Hovered", 60, 55, 90, 255);
    theme.addElement(23, "Button Active", 75, 70, 110, 255);
    theme.addElement(24, "Header", 0, 255, 255, 20);
    theme.addElement(25, "Header Hovered", 50, 255, 255, 255);
    theme.addElement(26, "Header Active", 100, 255, 255, 255);
    theme.addElement(27, "Separator", 255, 0, 255, 255);
    theme.addElement(28, "Separator Hovered", 255, 50, 255, 255);
    theme.addElement(29, "Separator Active", 255, 100, 255, 255);
    theme.addElement(30, "Resize Grip", 0, 255, 255, 51);
    theme.addElement(31, "Resize Grip Hovered", 50, 255, 255, 171);
    theme.addElement(32, "Resize Grip Active", 100, 255, 255, 242);
    theme.addElement(33, "Tab", 255, 0, 255, 150);
    theme.addElement(34, "Tab Hovered", 255, 50, 255, 200);
    theme.addElement(35, "Tab Active", 255, 100, 255, 255);
    theme.addElement(36, "Tab Unfocused", 20, 15, 40, 255);
    theme.addElement(37, "Tab Unfocused Active", 25, 20, 45, 255);
    theme.addElement(38, "Plot Lines", 0, 255, 255, 255);
    theme.addElement(39, "Plot Lines Hovered", 50, 255, 255, 255);
    theme.addElement(40, "Plot Histogram", 255, 0, 255, 255);
    theme.addElement(41, "Plot Histogram Hovered", 255, 50, 255, 255);
    theme.addElement(42, "Text Selected Background", 0, 255, 255, 89);
    theme.addElement(43, "Drag Drop Target", 0, 255, 255, 230);
    theme.addElement(44, "Nav Highlight", 0, 255, 255, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 255, 255, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 20, 15, 40, 51);
    theme.addElement(47, "Modal Window Dim Background", 10, 10, 30, 89);
    theme.addElement(48, "Table Header Background", 35, 30, 55, 255);
    theme.addElement(49, "Table Border Strong", 55, 50, 75, 255);
    theme.addElement(50, "Table Border Light", 45, 40, 65, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 0, 255, 255, 204);
    theme.addElement(54, "Docking Empty Background", 20, 15, 40, 204);
    return theme;
}

/**
 * Solarized theme with warm amber tones
 */
function createSolarizedTheme() {
    let theme = new ImGuiTheme("solarized");
    theme.addElement(0, "Text", 131, 148, 150, 255);
    theme.addElement(1, "Text Disabled", 88, 110, 117, 255);
    theme.addElement(2, "Window Background", 0, 43, 54, 240);
    theme.addElement(3, "Child Background", 7, 54, 66, 255);
    theme.addElement(4, "Popup Background", 5, 50, 62, 255);
    theme.addElement(5, "Border", 88, 110, 117, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 7, 54, 66, 255);
    theme.addElement(8, "Frame Background Hovered", 15, 65, 80, 255);
    theme.addElement(9, "Frame Background Active", 25, 80, 95, 255);
    theme.addElement(10, "Title Background", 10, 55, 70, 255);
    theme.addElement(11, "Title Background Active", 20, 70, 85, 255);
    theme.addElement(12, "Title Background Collapsed", 5, 50, 62, 200);
    theme.addElement(13, "Menu Bar Background", 7, 54, 66, 255);
    theme.addElement(14, "Scrollbar Background", 7, 54, 66, 255);
    theme.addElement(15, "Scrollbar Grab", 88, 110, 117, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 101, 123, 131, 255);
    theme.addElement(17, "Scrollbar Grab Active", 131, 148, 150, 255);
    theme.addElement(18, "Check Mark", 181, 137, 0, 255);
    theme.addElement(19, "Slider Grab", 181, 137, 0, 255);
    theme.addElement(20, "Slider Grab Active", 220, 160, 20, 255);
    theme.addElement(21, "Button", 15, 65, 80, 255);
    theme.addElement(22, "Button Hovered", 25, 80, 95, 255);
    theme.addElement(23, "Button Active", 35, 95, 110, 255);
    theme.addElement(24, "Header", 181, 137, 0, 20);
    theme.addElement(25, "Header Hovered", 200, 150, 20, 255);
    theme.addElement(26, "Header Active", 220, 160, 30, 255);
    theme.addElement(27, "Separator", 88, 110, 117, 255);
    theme.addElement(28, "Separator Hovered", 101, 123, 131, 255);
    theme.addElement(29, "Separator Active", 131, 148, 150, 255);
    theme.addElement(30, "Resize Grip", 181, 137, 0, 51);
    theme.addElement(31, "Resize Grip Hovered", 200, 150, 20, 171);
    theme.addElement(32, "Resize Grip Active", 220, 160, 30, 242);
    theme.addElement(33, "Tab", 7, 54, 66, 219);
    theme.addElement(34, "Tab Hovered", 15, 65, 80, 204);
    theme.addElement(35, "Tab Active", 25, 80, 95, 255);
    theme.addElement(36, "Tab Unfocused", 5, 50, 62, 255);
    theme.addElement(37, "Tab Unfocused Active", 10, 55, 67, 255);
    theme.addElement(38, "Plot Lines", 88, 110, 117, 255);
    theme.addElement(39, "Plot Lines Hovered", 131, 148, 150, 255);
    theme.addElement(40, "Plot Histogram", 181, 137, 0, 255);
    theme.addElement(41, "Plot Histogram Hovered", 220, 160, 20, 255);
    theme.addElement(42, "Text Selected Background", 181, 137, 0, 89);
    theme.addElement(43, "Drag Drop Target", 181, 137, 0, 230);
    theme.addElement(44, "Nav Highlight", 181, 137, 0, 255);
    theme.addElement(45, "Nav Windowing Highlight", 131, 148, 150, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 7, 54, 66, 51);
    theme.addElement(47, "Modal Window Dim Background", 0, 43, 54, 89);
    theme.addElement(48, "Table Header Background", 15, 65, 80, 255);
    theme.addElement(49, "Table Border Strong", 35, 85, 100, 255);
    theme.addElement(50, "Table Border Light", 25, 75, 90, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 181, 137, 0, 204);
    theme.addElement(54, "Docking Empty Background", 7, 54, 66, 204);
    return theme;
}

/**
 * Oceanic deep theme with blue-green tones
 */
function createOceanicTheme() {
    let theme = new ImGuiTheme("oceanic");
    theme.addElement(0, "Text", 192, 197, 206, 255);
    theme.addElement(1, "Text Disabled", 101, 115, 126, 255);
    theme.addElement(2, "Window Background", 30, 38, 46, 240);
    theme.addElement(3, "Child Background", 37, 46, 56, 255);
    theme.addElement(4, "Popup Background", 33, 42, 52, 255);
    theme.addElement(5, "Border", 51, 62, 75, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 43, 53, 64, 255);
    theme.addElement(8, "Frame Background Hovered", 52, 63, 76, 255);
    theme.addElement(9, "Frame Background Active", 61, 74, 88, 255);
    theme.addElement(10, "Title Background", 26, 33, 40, 255);
    theme.addElement(11, "Title Background Active", 38, 47, 57, 255);
    theme.addElement(12, "Title Background Collapsed", 22, 28, 34, 200);
    theme.addElement(13, "Menu Bar Background", 37, 46, 56, 255);
    theme.addElement(14, "Scrollbar Background", 43, 53, 64, 255);
    theme.addElement(15, "Scrollbar Grab", 68, 86, 106, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 79, 99, 119, 255);
    theme.addElement(17, "Scrollbar Grab Active", 90, 112, 132, 255);
    theme.addElement(18, "Check Mark", 84, 181, 167, 255);
    theme.addElement(19, "Slider Grab", 84, 181, 167, 255);
    theme.addElement(20, "Slider Grab Active", 104, 201, 187, 255);
    theme.addElement(21, "Button", 52, 63, 76, 255);
    theme.addElement(22, "Button Hovered", 61, 74, 88, 255);
    theme.addElement(23, "Button Active", 70, 85, 100, 255);
    theme.addElement(24, "Header", 84, 181, 167, 20);
    theme.addElement(25, "Header Hovered", 104, 201, 187, 255);
    theme.addElement(26, "Header Active", 124, 221, 207, 255);
    theme.addElement(27, "Separator", 68, 86, 106, 255);
    theme.addElement(28, "Separator Hovered", 79, 99, 119, 255);
    theme.addElement(29, "Separator Active", 90, 112, 132, 255);
    theme.addElement(30, "Resize Grip", 84, 181, 167, 51);
    theme.addElement(31, "Resize Grip Hovered", 104, 201, 187, 171);
    theme.addElement(32, "Resize Grip Active", 124, 221, 207, 242);
    theme.addElement(33, "Tab", 43, 53, 64, 219);
    theme.addElement(34, "Tab Hovered", 52, 63, 76, 204);
    theme.addElement(35, "Tab Active", 61, 74, 88, 255);
    theme.addElement(36, "Tab Unfocused", 37, 46, 56, 255);
    theme.addElement(37, "Tab Unfocused Active", 42, 51, 61, 255);
    theme.addElement(38, "Plot Lines", 84, 181, 167, 255);
    theme.addElement(39, "Plot Lines Hovered", 104, 201, 187, 255);
    theme.addElement(40, "Plot Histogram", 64, 161, 147, 255);
    theme.addElement(41, "Plot Histogram Hovered", 84, 181, 167, 255);
    theme.addElement(42, "Text Selected Background", 84, 181, 167, 89);
    theme.addElement(43, "Drag Drop Target", 84, 181, 167, 230);
    theme.addElement(44, "Nav Highlight", 84, 181, 167, 255);
    theme.addElement(45, "Nav Windowing Highlight", 192, 197, 206, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 37, 46, 56, 51);
    theme.addElement(47, "Modal Window Dim Background", 30, 38, 46, 89);
    theme.addElement(48, "Table Header Background", 52, 63, 76, 255);
    theme.addElement(49, "Table Border Strong", 72, 83, 96, 255);
    theme.addElement(50, "Table Border Light", 62, 73, 86, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 84, 181, 167, 204);
    theme.addElement(54, "Docking Empty Background", 37, 46, 56, 204);
    return theme;
}

/**
 * Midnight black theme with subtle gray accents
 */
function createMidnightTheme() {
    let theme = new ImGuiTheme("midnight");
    theme.addElement(0, "Text", 200, 200, 200, 255);
    theme.addElement(1, "Text Disabled", 100, 100, 100, 255);
    theme.addElement(2, "Window Background", 0, 0, 0, 240);
    theme.addElement(3, "Child Background", 10, 10, 10, 255);
    theme.addElement(4, "Popup Background", 5, 5, 5, 255);
    theme.addElement(5, "Border", 50, 50, 50, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 20, 20, 20, 255);
    theme.addElement(8, "Frame Background Hovered", 30, 30, 30, 255);
    theme.addElement(9, "Frame Background Active", 40, 40, 40, 255);
    theme.addElement(10, "Title Background", 15, 15, 15, 255);
    theme.addElement(11, "Title Background Active", 25, 25, 25, 255);
    theme.addElement(12, "Title Background Collapsed", 10, 10, 10, 200);
    theme.addElement(13, "Menu Bar Background", 10, 10, 10, 255);
    theme.addElement(14, "Scrollbar Background", 20, 20, 20, 255);
    theme.addElement(15, "Scrollbar Grab", 60, 60, 60, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 80, 80, 80, 255);
    theme.addElement(17, "Scrollbar Grab Active", 100, 100, 100, 255);
    theme.addElement(18, "Check Mark", 150, 150, 150, 255);
    theme.addElement(19, "Slider Grab", 120, 120, 120, 255);
    theme.addElement(20, "Slider Grab Active", 150, 150, 150, 255);
    theme.addElement(21, "Button", 30, 30, 30, 255);
    theme.addElement(22, "Button Hovered", 40, 40, 40, 255);
    theme.addElement(23, "Button Active", 50, 50, 50, 255);
    theme.addElement(24, "Header", 40, 40, 40, 20);
    theme.addElement(25, "Header Hovered", 50, 50, 50, 255);
    theme.addElement(26, "Header Active", 60, 60, 60, 255);
    theme.addElement(27, "Separator", 50, 50, 50, 255);
    theme.addElement(28, "Separator Hovered", 70, 70, 70, 255);
    theme.addElement(29, "Separator Active", 90, 90, 90, 255);
    theme.addElement(30, "Resize Grip", 100, 100, 100, 51);
    theme.addElement(31, "Resize Grip Hovered", 120, 120, 120, 171);
    theme.addElement(32, "Resize Grip Active", 140, 140, 140, 242);
    theme.addElement(33, "Tab", 20, 20, 20, 219);
    theme.addElement(34, "Tab Hovered", 30, 30, 30, 204);
    theme.addElement(35, "Tab Active", 40, 40, 40, 255);
    theme.addElement(36, "Tab Unfocused", 15, 15, 15, 255);
    theme.addElement(37, "Tab Unfocused Active", 18, 18, 18, 255);
    theme.addElement(38, "Plot Lines", 120, 120, 120, 255);
    theme.addElement(39, "Plot Lines Hovered", 150, 150, 150, 255);
    theme.addElement(40, "Plot Histogram", 100, 100, 100, 255);
    theme.addElement(41, "Plot Histogram Hovered", 130, 130, 130, 255);
    theme.addElement(42, "Text Selected Background", 100, 100, 100, 89);
    theme.addElement(43, "Drag Drop Target", 150, 150, 150, 230);
    theme.addElement(44, "Nav Highlight", 150, 150, 150, 255);
    theme.addElement(45, "Nav Windowing Highlight", 200, 200, 200, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 10, 10, 10, 51);
    theme.addElement(47, "Modal Window Dim Background", 5, 5, 5, 89);
    theme.addElement(48, "Table Header Background", 25, 25, 25, 255);
    theme.addElement(49, "Table Border Strong", 45, 45, 45, 255);
    theme.addElement(50, "Table Border Light", 35, 35, 35, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 100, 100, 100, 204);
    theme.addElement(54, "Docking Empty Background", 10, 10, 10, 204);
    return theme;
}


/**
 * Emerald green theme with vibrant green accents
 */
function createEmeraldTheme() {
    let theme = new ImGuiTheme("emerald");
    theme.addElement(0, "Text", 240, 255, 240, 255);
    theme.addElement(1, "Text Disabled", 100, 120, 100, 255);
    theme.addElement(2, "Window Background", 15, 35, 15, 240);
    theme.addElement(3, "Child Background", 22, 42, 22, 255);
    theme.addElement(4, "Popup Background", 18, 38, 18, 255);
    theme.addElement(5, "Border", 60, 130, 60, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 30, 55, 30, 255);
    theme.addElement(8, "Frame Background Hovered", 40, 70, 40, 255);
    theme.addElement(9, "Frame Background Active", 50, 85, 50, 255);
    theme.addElement(10, "Title Background", 25, 45, 25, 255);
    theme.addElement(11, "Title Background Active", 35, 65, 35, 255);
    theme.addElement(12, "Title Background Collapsed", 20, 40, 20, 200);
    theme.addElement(13, "Menu Bar Background", 22, 42, 22, 255);
    theme.addElement(14, "Scrollbar Background", 30, 55, 30, 255);
    theme.addElement(15, "Scrollbar Grab", 70, 140, 70, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 85, 160, 85, 255);
    theme.addElement(17, "Scrollbar Grab Active", 100, 180, 100, 255);
    theme.addElement(18, "Check Mark", 100, 255, 100, 255);
    theme.addElement(19, "Slider Grab", 80, 200, 80, 255);
    theme.addElement(20, "Slider Grab Active", 100, 255, 100, 255);
    theme.addElement(21, "Button", 45, 90, 45, 255);
    theme.addElement(22, "Button Hovered", 60, 120, 60, 255);
    theme.addElement(23, "Button Active", 75, 150, 75, 255);
    theme.addElement(24, "Header", 80, 180, 80, 20);
    theme.addElement(25, "Header Hovered", 100, 220, 100, 255);
    theme.addElement(26, "Header Active", 120, 255, 120, 255);
    theme.addElement(27, "Separator", 70, 140, 70, 255);
    theme.addElement(28, "Separator Hovered", 85, 160, 85, 255);
    theme.addElement(29, "Separator Active", 100, 180, 100, 255);
    theme.addElement(30, "Resize Grip", 100, 255, 100, 51);
    theme.addElement(31, "Resize Grip Hovered", 120, 255, 120, 171);
    theme.addElement(32, "Resize Grip Active", 140, 255, 140, 242);
    theme.addElement(33, "Tab", 30, 55, 30, 219);
    theme.addElement(34, "Tab Hovered", 40, 70, 40, 204);
    theme.addElement(35, "Tab Active", 50, 85, 50, 255);
    theme.addElement(36, "Tab Unfocused", 22, 42, 22, 255);
    theme.addElement(37, "Tab Unfocused Active", 25, 45, 25, 255);
    theme.addElement(38, "Plot Lines", 80, 200, 80, 255);
    theme.addElement(39, "Plot Lines Hovered", 100, 255, 100, 255);
    theme.addElement(40, "Plot Histogram", 60, 180, 60, 255);
    theme.addElement(41, "Plot Histogram Hovered", 80, 200, 80, 255);
    theme.addElement(42, "Text Selected Background", 80, 200, 80, 89);
    theme.addElement(43, "Drag Drop Target", 100, 255, 100, 230);
    theme.addElement(44, "Nav Highlight", 100, 255, 100, 255);
    theme.addElement(45, "Nav Windowing Highlight", 240, 255, 240, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 22, 42, 22, 51);
    theme.addElement(47, "Modal Window Dim Background", 15, 35, 15, 89);
    theme.addElement(48, "Table Header Background", 35, 65, 35, 255);
    theme.addElement(49, "Table Border Strong", 55, 85, 55, 255);
    theme.addElement(50, "Table Border Light", 45, 75, 45, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 100, 255, 100, 204);
    theme.addElement(54, "Docking Empty Background", 15, 35, 15, 204);
    return theme;
}

/**
 * Volcanic red theme with intense red-orange tones
 */
function createVolcanicTheme() {
    let theme = new ImGuiTheme("volcanic");
    theme.addElement(0, "Text", 255, 230, 200, 255);
    theme.addElement(1, "Text Disabled", 150, 130, 110, 255);
    theme.addElement(2, "Window Background", 40, 15, 10, 240);
    theme.addElement(3, "Child Background", 50, 20, 15, 255);
    theme.addElement(4, "Popup Background", 45, 18, 12, 255);
    theme.addElement(5, "Border", 200, 80, 40, 255);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 80);
    theme.addElement(7, "Frame Background", 60, 25, 18, 255);
    theme.addElement(8, "Frame Background Hovered", 80, 35, 25, 255);
    theme.addElement(9, "Frame Background Active", 100, 45, 32, 255);
    theme.addElement(10, "Title Background", 50, 20, 15, 255);
    theme.addElement(11, "Title Background Active", 70, 30, 20, 255);
    theme.addElement(12, "Title Background Collapsed", 45, 18, 12, 200);
    theme.addElement(13, "Menu Bar Background", 45, 18, 12, 255);
    theme.addElement(14, "Scrollbar Background", 60, 25, 18, 255);
    theme.addElement(15, "Scrollbar Grab", 200, 80, 40, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 220, 100, 50, 255);
    theme.addElement(17, "Scrollbar Grab Active", 240, 120, 60, 255);
    theme.addElement(18, "Check Mark", 255, 160, 40, 255);
    theme.addElement(19, "Slider Grab", 220, 90, 30, 255);
    theme.addElement(20, "Slider Grab Active", 255, 120, 40, 255);
    theme.addElement(21, "Button", 80, 35, 25, 255);
    theme.addElement(22, "Button Hovered", 100, 45, 32, 255);
    theme.addElement(23, "Button Active", 120, 55, 40, 255);
    theme.addElement(24, "Header", 200, 80, 40, 20);
    theme.addElement(25, "Header Hovered", 220, 100, 50, 255);
    theme.addElement(26, "Header Active", 240, 120, 60, 255);
    theme.addElement(27, "Separator", 200, 80, 40, 255);
    theme.addElement(28, "Separator Hovered", 220, 100, 50, 255);
    theme.addElement(29, "Separator Active", 240, 120, 60, 255);
    theme.addElement(30, "Resize Grip", 255, 160, 40, 51);
    theme.addElement(31, "Resize Grip Hovered", 255, 180, 50, 171);
    theme.addElement(32, "Resize Grip Active", 255, 200, 60, 242);
    theme.addElement(33, "Tab", 70, 30, 20, 219);
    theme.addElement(34, "Tab Hovered", 90, 40, 30, 204);
    theme.addElement(35, "Tab Active", 110, 50, 35, 255);
    theme.addElement(36, "Tab Unfocused", 50, 20, 15, 255);
    theme.addElement(37, "Tab Unfocused Active", 55, 22, 18, 255);
    theme.addElement(38, "Plot Lines", 255, 120, 60, 255);
    theme.addElement(39, "Plot Lines Hovered", 255, 140, 80, 255);
    theme.addElement(40, "Plot Histogram", 200, 80, 40, 255);
    theme.addElement(41, "Plot Histogram Hovered", 220, 100, 50, 255);
    theme.addElement(42, "Text Selected Background", 255, 140, 60, 89);
    theme.addElement(43, "Drag Drop Target", 255, 180, 60, 230);
    theme.addElement(44, "Nav Highlight", 255, 160, 40, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 230, 200, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 50, 20, 15, 51);
    theme.addElement(47, "Modal Window Dim Background", 40, 15, 10, 89);
    theme.addElement(48, "Table Header Background", 55, 22, 18, 255);
    theme.addElement(49, "Table Border Strong", 75, 35, 25, 255);
    theme.addElement(50, "Table Border Light", 65, 30, 22, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 255, 140, 60, 204);
    theme.addElement(54, "Docking Empty Background", 40, 15, 10, 204);
    return theme;
}

/**
 * Arctic frost theme with icy blue-white tones
 */
function createArcticTheme() {
    let theme = new ImGuiTheme("arctic");
    theme.addElement(0, "Text", 230, 240, 250, 255);
    theme.addElement(1, "Text Disabled", 150, 160, 170, 255);
    theme.addElement(2, "Window Background", 20, 30, 40, 240);
    theme.addElement(3, "Child Background", 30, 40, 50, 255);
    theme.addElement(4, "Popup Background", 25, 35, 45, 255);
    theme.addElement(5, "Border", 100, 140, 180, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 35, 45, 55, 255);
    theme.addElement(8, "Frame Background Hovered", 45, 60, 75, 255);
    theme.addElement(9, "Frame Background Active", 55, 75, 95, 255);
    theme.addElement(10, "Title Background", 25, 35, 45, 255);
    theme.addElement(11, "Title Background Active", 40, 55, 70, 255);
    theme.addElement(12, "Title Background Collapsed", 20, 30, 40, 200);
    theme.addElement(13, "Menu Bar Background", 30, 40, 50, 255);
    theme.addElement(14, "Scrollbar Background", 35, 45, 55, 255);
    theme.addElement(15, "Scrollbar Grab", 120, 160, 200, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 140, 180, 220, 255);
    theme.addElement(17, "Scrollbar Grab Active", 160, 200, 240, 255);
    theme.addElement(18, "Check Mark", 140, 200, 255, 255);
    theme.addElement(19, "Slider Grab", 120, 180, 240, 255);
    theme.addElement(20, "Slider Grab Active", 140, 200, 255, 255);
    theme.addElement(21, "Button", 50, 70, 90, 255);
    theme.addElement(22, "Button Hovered", 65, 85, 105, 255);
    theme.addElement(23, "Button Active", 80, 100, 120, 255);
    theme.addElement(24, "Header", 100, 160, 220, 20);
    theme.addElement(25, "Header Hovered", 120, 180, 240, 255);
    theme.addElement(26, "Header Active", 140, 200, 255, 255);
    theme.addElement(27, "Separator", 120, 160, 200, 255);
    theme.addElement(28, "Separator Hovered", 140, 180, 220, 255);
    theme.addElement(29, "Separator Active", 160, 200, 240, 255);
    theme.addElement(30, "Resize Grip", 140, 200, 255, 51);
    theme.addElement(31, "Resize Grip Hovered", 160, 220, 255, 171);
    theme.addElement(32, "Resize Grip Active", 180, 240, 255, 242);
    theme.addElement(33, "Tab", 35, 45, 55, 219);
    theme.addElement(34, "Tab Hovered", 45, 60, 75, 204);
    theme.addElement(35, "Tab Active", 55, 75, 95, 255);
    theme.addElement(36, "Tab Unfocused", 30, 40, 50, 255);
    theme.addElement(37, "Tab Unfocused Active", 35, 45, 55, 255);
    theme.addElement(38, "Plot Lines", 120, 180, 240, 255);
    theme.addElement(39, "Plot Lines Hovered", 140, 200, 255, 255);
    theme.addElement(40, "Plot Histogram", 100, 160, 220, 255);
    theme.addElement(41, "Plot Histogram Hovered", 120, 180, 240, 255);
    theme.addElement(42, "Text Selected Background", 120, 180, 240, 89);
    theme.addElement(43, "Drag Drop Target", 140, 200, 255, 230);
    theme.addElement(44, "Nav Highlight", 140, 200, 255, 255);
    theme.addElement(45, "Nav Windowing Highlight", 230, 240, 250, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 37, 46, 56, 51);
    theme.addElement(47, "Modal Window Dim Background", 20, 30, 40, 89);
    theme.addElement(48, "Table Header Background", 42, 52, 62, 255);
    theme.addElement(49, "Table Border Strong", 62, 72, 82, 255);
    theme.addElement(50, "Table Border Light", 52, 62, 72, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 140, 200, 255, 204);
    theme.addElement(54, "Docking Empty Background", 30, 40, 50, 204);
    return theme;
}

/**
 * Sunset gradient theme with warm orange-pink tones
 */
function createSunsetTheme() {
    let theme = new ImGuiTheme("sunset");
    theme.addElement(0, "Text", 255, 240, 220, 255);
    theme.addElement(1, "Text Disabled", 180, 160, 140, 255);
    theme.addElement(2, "Window Background", 30, 20, 35, 240);
    theme.addElement(3, "Child Background", 40, 25, 45, 255);
    theme.addElement(4, "Popup Background", 35, 22, 40, 255);
    theme.addElement(5, "Border", 220, 120, 100, 128);
    theme.addElement(6, "Border Shadow", 0, 0, 0, 0);
    theme.addElement(7, "Frame Background", 50, 30, 55, 255);
    theme.addElement(8, "Frame Background Hovered", 65, 40, 70, 255);
    theme.addElement(9, "Frame Background Active", 80, 50, 85, 255);
    theme.addElement(10, "Title Background", 45, 25, 50, 255);
    theme.addElement(11, "Title Background Active", 60, 35, 65, 255);
    theme.addElement(12, "Title Background Collapsed", 40, 25, 45, 200);
    theme.addElement(13, "Menu Bar Background", 40, 25, 45, 255);
    theme.addElement(14, "Scrollbar Background", 50, 30, 55, 255);
    theme.addElement(15, "Scrollbar Grab", 200, 100, 80, 255);
    theme.addElement(16, "Scrollbar Grab Hovered", 220, 120, 100, 255);
    theme.addElement(17, "Scrollbar Grab Active", 240, 140, 120, 255);
    theme.addElement(18, "Check Mark", 255, 180, 100, 255);
    theme.addElement(19, "Slider Grab", 230, 110, 90, 255);
    theme.addElement(20, "Slider Grab Active", 255, 140, 110, 255);
    theme.addElement(21, "Button", 70, 40, 75, 255);
    theme.addElement(22, "Button Hovered", 85, 50, 90, 255);
    theme.addElement(23, "Button Active", 100, 60, 105, 255);
    theme.addElement(24, "Header", 230, 110, 90, 20);
    theme.addElement(25, "Header Hovered", 250, 130, 110, 255);
    theme.addElement(26, "Header Active", 255, 150, 130, 255);
    theme.addElement(27, "Separator", 200, 100, 80, 255);
    theme.addElement(28, "Separator Hovered", 220, 120, 100, 255);
    theme.addElement(29, "Separator Active", 240, 140, 120, 255);
    theme.addElement(30, "Resize Grip", 255, 160, 120, 51);
    theme.addElement(31, "Resize Grip Hovered", 255, 180, 140, 171);
    theme.addElement(32, "Resize Grip Active", 255, 200, 160, 242);
    theme.addElement(33, "Tab", 60, 35, 65, 219);
    theme.addElement(34, "Tab Hovered", 75, 45, 80, 204);
    theme.addElement(35, "Tab Active", 90, 55, 95, 255);
    theme.addElement(36, "Tab Unfocused", 40, 25, 45, 255);
    theme.addElement(37, "Tab Unfocused Active", 45, 28, 50, 255);
    theme.addElement(38, "Plot Lines", 255, 140, 110, 255);
    theme.addElement(39, "Plot Lines Hovered", 255, 160, 130, 255);
    theme.addElement(40, "Plot Histogram", 200, 100, 80, 255);
    theme.addElement(41, "Plot Histogram Hovered", 220, 120, 100, 255);
    theme.addElement(42, "Text Selected Background", 255, 160, 120, 89);
    theme.addElement(43, "Drag Drop Target", 255, 200, 140, 230);
    theme.addElement(44, "Nav Highlight", 255, 180, 120, 255);
    theme.addElement(45, "Nav Windowing Highlight", 255, 240, 220, 178);
    theme.addElement(46, "Nav Windowing Dim Background", 40, 25, 45, 51);
    theme.addElement(47, "Modal Window Dim Background", 30, 20, 35, 89);
    theme.addElement(48, "Table Header Background", 55, 35, 60, 255);
    theme.addElement(49, "Table Border Strong", 75, 55, 80, 255);
    theme.addElement(50, "Table Border Light", 65, 45, 70, 255);
    theme.addElement(51, "Table Row Background", 0, 0, 0, 0);
    theme.addElement(52, "Table Row Background Alt", 255, 255, 255, 15);
    theme.addElement(53, "Docking Preview", 255, 180, 140, 204);
    theme.addElement(54, "Docking Empty Background", 30, 20, 35, 204);
    return theme;
}

/* ============================
   THEME REGISTRY (40 Themes)
   ============================ */

/**
 * Theme registry - Maps theme names to their factory functions
 */
const THEME_REGISTRY = {
    // Core Dark Themes
    'darkModern': createDarkModernTheme,
    'blueDark': createBlueDarkTheme,
    'redDark': createRedDarkTheme,
    'orangeDark': createOrangeDarkTheme,
    'tealDark': createTealDarkTheme,
    'limeDark': createLimeDarkTheme,
    'purple': createPurpleStyleTheme,
    'deepDark': createDeepDarkTheme,
    'deepBlue': createDeepBlueTheme,
    'midnight': createMidnightTheme,
    
    // Light & Clean Themes
    'riceWhite': createRiceWhiteTheme,
    'macOS': createMacOSTheme,
    'glamourPink': createGlamourPinkTheme,
    
    // Color Accent Themes
    'redAccent': createRedAccentTheme,
    'crimson': createCrimsonTheme,
    'crimsonNight': createCrimsonNightTheme,
    'cherry': createCherryTheme,
    'lime': createLimeTheme,
    'militaryGreen': createMilitaryGreenTheme,
    'tealContrast': createTealContrastTheme,
    'blueHorizon': createBlueHorizonTheme,
    'oceanic': createOceanicTheme,
    
    // Game-Inspired Themes
    'csgoSimple': createCSGOSimpleTheme,
    'witcher': createWitcherTheme,
    'mario': createMarioTheme,
    'zelda': createZeldaTheme,
    'gta': createGtaTheme,
    'finalFantasy': createFinalFantasyTheme,
    'blackMyth': createBlackMythTheme,
    'stellarBlade': createStellarBladeTheme,
    
    // Special Style Themes
    'monochrome': createMonoChromeTheme,
    'ruda': createRudaTheme,
    'purpleMist': createPurpleMistTheme,
    'cyberpunk': createCyberpunkTheme,
    'solarized': createSolarizedTheme,
    
    // New Themes
    'emerald': createEmeraldTheme,
    'volcanic': createVolcanicTheme,
    'arctic': createArcticTheme,
    'sunset': createSunsetTheme,
};

/**
 * Register theme factories in the manager
 * @param {ThemeManager} manager - The theme manager
 */
export function registerBuiltInThemes(manager) {
    for (const themeName in THEME_REGISTRY) {
        manager.registerThemeFactory(themeName, THEME_REGISTRY[themeName]);
    }
}

/**
 * Get list of available theme names
 */
export function getAvailableThemeNames() {
    return Object.keys(THEME_REGISTRY);
}
