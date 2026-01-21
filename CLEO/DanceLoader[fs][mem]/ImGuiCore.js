// by J16D
// Classes: Color, ThemeElement, ImGuiTheme, ThemeManager
//
/// <reference path="../.config/sa.d.ts" />

/**
 * Represents an RGBA colour
 */
export class Color {
    constructor(r = 0, g = 0, b = 0, a = 255) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    toHex() {
        return `#${this.r.toString(16).padStart(2,'0')}${this.g.toString(16).padStart(2,'0')}${this.b.toString(16).padStart(2,'0')}`;
    }

    toFloat() {
        return [this.r/255, this.g/255, this.b/255, this.a/255];
    }

    clone() {
        return new Color(this.r, this.g, this.b, this.a);
    }
}

/**
 * Represents a theme element with its colour
 */
export class ThemeElement {
    constructor(element, name, color) {
        this.element = element;
        this.name = name;
        this.color = (color instanceof Color) ? color : new Color(color.r, color.g, color.b, color.a);
    }

    clone() {
        return new ThemeElement(this.element, this.name, this.color.clone());
    }
}

/**
 * Main class for defining an ImGui theme
 */
export class ImGuiTheme {
    constructor(name = "Custom") {
        this.name = name;
        this.elements = [];
    }

    /**
     * Add an item to the theme
     */
    addElement(element, name, r, g, b, a = 255) {
        this.elements.push(new ThemeElement(element, name, new Color(r, g, b, a)));
        return this;
    }

    /**
     * Get an element by index
     */
    getElement(index) {
        return this.elements[index];
    }

    /**
     * Change the colour of an element
     */
    setColor(index, r, g, b, a = 255) {
        if (this.elements[index]) {
            this.elements[index].color = new Color(r, g, b, a);
        }
        return this;
    }

    /**
     * Clone the theme
     */
    clone() {
        let t = new ImGuiTheme(this.name);
        this.elements.forEach(el => t.elements.push(el.clone()));
        return t;
    }

    /**
     * Apply the theme to ImGui
     */
    apply() {
        this.elements.forEach(el => {
            ImGui.PushStyleColor(el.element, el.color.r, el.color.g, el.color.b, el.color.a);
        });
    }
    
    /**
     * Remove the applied theme
     */
    pop() {
        ImGui.PopStyleColor(this.elements.length);
    }

    /**
     * Get the number of items in the theme
     */
    getElementCount() {
        return this.elements.length;
    }
}

/**
 * Theme administrator
 */
export class ThemeManager {
    constructor() {
        this.themes = {};           // Cached created themes
        this.themeFactories = {};   // Theme factory functions
        this.currentTheme = null;
        this.previousTheme = null;
    }

    /**
     * Register a theme factory function  
     * The theme will only be created when first requested
     * @param {string} themeName - Name of the theme
     * @param {Function} factoryFunc - Function that creates and returns the theme
     */
    registerThemeFactory(themeName, factoryFunc) {
        this.themeFactories[themeName] = factoryFunc;
        return this;
    }

    /**
     * Add a theme to the manager (immediate creation)
     * @param {ImGuiTheme} theme - Theme object
     */
    addTheme(theme) {
        this.themes[theme.name] = theme;
        return this;
    }

    /**
     * Get a theme by name (creates it if not yet created)
     * @param {string} name - Theme name
     * @returns {ImGuiTheme|null} Theme object or null if not found
     */
    getTheme(name) {
        // Check if already created
        if (this.themes[name]) {
            return this.themes[name];
        }

        // Check if factory exists
        if (this.themeFactories[name]) {
            // Create theme on-demand
            const theme = this.themeFactories[name]();
            // Cache it for future use
            this.themes[name] = theme;
            return theme;
        }

        return null;
    }

    /**
     * Load a theme (creates it if needed)
     * @param {string} name - Theme name
     * @returns {boolean} Success status
     */
    loadTheme(name) {
        const theme = this.getTheme(name);
        if (!theme) {
            return false;
        }
        
        this.previousTheme = this.currentTheme;
        this.currentTheme = theme.clone();
        return true;
    }

    /**
     * Get the current theme
     */
    getCurrentTheme() {
        return this.currentTheme;
    }

    /**
     * Get the previous theme
     */
    getPreviousTheme() {
        return this.previousTheme;
    }

    /**
     * List all available themes
     * @returns {Array<string>} Array of theme names
     */
    listThemes() {
        const createdThemes = Object.keys(this.themes);
        const registeredThemes = Object.keys(this.themeFactories);
        
        // Use Set to avoid duplicates
        const allThemes = new Set([...createdThemes, ...registeredThemes]);
        return Array.from(allThemes);
    }

    /**
     * Check if there is a theme (created or registered)
     * @param {string} name - Theme name
     * @returns {boolean} True if theme exists
     */
    hasTheme(name) {
        return this.themes.hasOwnProperty(name) || this.themeFactories.hasOwnProperty(name);
    }

    /**
     * Check if theme is already created (loaded in memory)
     * @param {string} name - Theme name
     * @returns {boolean} True if theme is created
     */
    isThemeCreated(name) {
        return this.themes.hasOwnProperty(name);
    }

    /**
     * Remove a theme from cache
     * @param {string} name - Theme name
     * @returns {boolean} Success status
     */
    removeTheme(name) {
        if (this.themes[name]) {
            delete this.themes[name];
            return true;
        }
        return false;
    }

    /**
     * Clear all cached themes (keeps factory registrations)
     */
    clearCache() {
        this.themes = {};
    }

    /**
     * Get number of created themes in cache
     * @returns {number} Number of cached themes
     */
    getCachedThemeCount() {
        return Object.keys(this.themes).length;
    }

    /**
     * Get number of registered theme factories
     * @returns {number} Number of registered themes
     */
    getRegisteredThemeCount() {
        return Object.keys(this.themeFactories).length;
    }
}
