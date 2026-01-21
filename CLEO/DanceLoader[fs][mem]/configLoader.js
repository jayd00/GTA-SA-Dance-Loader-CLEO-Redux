// by J16D
// configLoader.js - Configuration Loader
//
/// <reference path="../.config/sa.d.ts" />

import { AnimationConfig } from "./camCore";
import animationsConfig from "./anims.json";

/**
 * Configuration Loader Class
 */
export class ConfigLoader {
    constructor() {
        this.config = animationsConfig;
        this.basePath = this.config.basePath || "CLEO/DanceLoader[fs][mem]/.dances/";
        this.animations = [];
        this.cameraDataCache = {};
    }

    /**
     * Initialize and load all configurations
     */
    async initialize() {
        try {
            this.animations = await this.loadAllAnimations();
            return true;
        } catch (error) {
            log(`[ConfigLoader] Error: ${error}`);
            return false;
        }
    }

    /**
     * Load all animations from config (metadata only, NO I/O operations)
     */
    async loadAllAnimations() {
        const loadedAnimations = [];

        for (const animData of this.config.animations) {
            try {
                this.validateAnimationConfig(animData);

                const folderPath = this.basePath + animData.folder + "/";
                const audioPath = folderPath + animData.audioFile;
                
                const cameraFiles = animData.cameraFiles || [];
                
                // Create AnimationConfig with default delay (will be overridden when loaded)
                const animConfig = new AnimationConfig(
                    0,  // Default delay, loaded on-demand
                    animData.animName,
                    animData.animPackage,
                    audioPath
                );
                
                // Build complete animation object with UNLOADED settings
                const animation = {
                    id: animData.id,
                    name: animData.name,
                    displayName: animData.displayName,
                    folder: animData.folder,
                    cameraFiles: cameraFiles,
                    cameraFilesDiscovered: cameraFiles.length > 0,  // Track if discovery is needed
                    camerasData: {},
                    selectedCamera: cameraFiles.length > 0 ? cameraFiles[0] : "",
                    data: null,
                    config: animConfig,
                    configFile: animData.configFile || (animData.name + ".ini"),  // Store config filename
                    settingsLoaded: false,  // Track if settings are loaded
                    settings: null          // Will be loaded on-demand
                };
                loadedAnimations.push(animation);
                
            } catch (error) {
                log(`[ConfigLoader] Failed to load ${animData.name}: ${error}`);
            }
        }

        return loadedAnimations;
    }

    /**
     * Ensure camera files are discovered for animation
     * @param {number} animationId - Animation ID
     * @returns {Promise<boolean>} Success status
     */
    async ensureCameraFilesDiscovered(animationId) {
        const animation = this.getAnimationById(animationId);
        if (!animation) {
            return false;
        }
        // Skip if already discovered
        if (animation.cameraFilesDiscovered) {
            return true;
        }

        try {
            const discoveredFiles = await this.discoverCameraFiles(animation.folder);
            
            if (discoveredFiles.length > 0) {
                animation.cameraFiles = discoveredFiles;
                animation.selectedCamera = discoveredFiles[0];
                animation.cameraFilesDiscovered = true;
            } else {
                // No cameras found - mark as discovered to avoid re-scanning
                animation.cameraFilesDiscovered = true;
            }
            
            return true;
        } catch (error) {
            log(`[ConfigLoader] Error discovering camera files for ${animation.name}: ${error}`);
            return false;
        }
    }

    /**
     * Load settings for a specific animation on-demand
     * @param {number} animationId - Animation ID
     * @param {Object} iniManager - INI manager instance
     * @param {string} configFile - Config filename from anims.json
     * @returns {boolean} Success status
     */
    loadAnimationSettings(animationId, iniManager, configFile) {
        const animation = this.getAnimationById(animationId);
        if (!animation) {
            log(`[ConfigLoader] Animation ID ${animationId} not found`);
            return false;
        }

        // Skip if already loaded
        if (animation.settingsLoaded) {
            return true;
        }

        try {
            // Build path to animation's individual INI file
            const folderPath = this.basePath + animation.folder + "/";
            const animIniPath = folderPath + (configFile || animation.name + ".ini");
            
            // Load settings from animation's individual INI file
            const savedSettings = iniManager.getAnimationSettings(
                animIniPath,
                animation.name,
                {
                    delayMs: 0,
                    selectedCameraFile: animation.cameraFiles.length > 0 ? animation.cameraFiles[0] : "",
                    bezierPreset: 'SMOOTH'
                }
            );

            // Initialize settings structure
            const audioPath = folderPath + animation.config.audioFilePath.split('/').pop();

            animation.settings = {
                delayMs: savedSettings.delayMs,
                cameraOffset: savedSettings.cameraOffset,
                fovOffset: savedSettings.fovOffset,
                frameSkipThreshold: savedSettings.frameSkipThreshold,
                selectedCameraFile: savedSettings.selectedCameraFile,
                cameraDir: folderPath,
                sfxName: animation.config.audioFilePath.split('/').pop(),
                sfxDir: audioPath,
                folderPath: folderPath,
                useFixedCamera: savedSettings.useFixedCamera,
                fixedCameraSettings: savedSettings.fixedCameraSettings,
                bezierPreset: savedSettings.bezierPreset,
                category: savedSettings.category || "",
                animIniPath: animIniPath  // Store path for saving later
            };
            
            // Update config delay
            animation.config.startDelayMs = savedSettings.delayMs;
            
            // Apply saved camera selection (only reference, no data loading)
            if (savedSettings.selectedCameraFile && animation.cameraFiles.includes(savedSettings.selectedCameraFile)) {
                this.switchCamera(animation.id, savedSettings.selectedCameraFile);
            }
            
            animation.settingsLoaded = true;
            //log(`[ConfigLoader] Loaded settings for ${animation.name} from ${animIniPath}`);
            return true;
            
        } catch (error) {
            log(`[ConfigLoader] Error loading settings for ${animation.name}: ${error}`);
            return false;
        }
    }    

    /**
     * Load camera data for a specific animation on-demand
     * This is called when user presses PLAY
     * @param {number} animationId - Animation ID
     * @returns {Promise<boolean>} Success status
     */
    async loadAnimationCameraData(animationId) {
        const animation = this.getAnimationById(animationId);
        if (!animation) {
            log(`[ConfigLoader] Animation ID ${animationId} not found`);
            return false;
        }

        try {
            // If using fixed camera, generate fixed camera data
            if (animation.settings.useFixedCamera) {
                const fixedData = await this.generateFixedCameraData(animation);
                animation.data = fixedData;
                //log(`[ConfigLoader] Generated fixed camera data for ${animation.name}`);
                return true;
            }

            // Check if camera files exist
            if (animation.cameraFiles.length === 0) {
                log(`[ConfigLoader] No camera files available for ${animation.name}`);
                return false;
            }

            // Check if camera data is already loaded
            const selectedCamera = animation.selectedCamera;
            if (animation.camerasData[selectedCamera]) {
                // Already loaded, just update data reference
                animation.data = animation.camerasData[selectedCamera];
                return true;
            }

            // Load the selected camera data
            const cameraData = await this.loadCameraData(animation.folder, selectedCamera);
            
            if (!cameraData || cameraData.length === 0) {
                log(`[ConfigLoader] Failed to load camera data for ${animation.name}`);
                return false;
            }

            // Store in cache
            animation.camerasData[selectedCamera] = cameraData;
            animation.data = cameraData;

            //log(`[ConfigLoader] Loaded camera data for ${animation.name} (${selectedCamera})`);
            return true;

        } catch (error) {
            log(`[ConfigLoader] Error loading camera data for ${animation.name}: ${error}`);
            return false;
        }
    }

    /**
     * Generate fixed camera data based on audio duration
     * Creates a simple 2-keyframe camera with fixed position
     * @param {Object} animation - Animation object
     * @returns {Promise<Array>} Fixed camera data array
     */
    async generateFixedCameraData(animation) {
        const settings = animation.settings.fixedCameraSettings;
        
        // Get audio duration (will be calculated at runtime)
        // For now, use a default duration of 180 seconds
        const duration = 180.0;
        
        // Create fixed camera data with 2 keyframes (start and end)
        const fixedData = [
            {
                t: 0.0,
                x: settings.x,
                y: settings.y,
                z: settings.z,
                tx: 0.0,      // Look at player center
                ty: 0.308,
                tz: 0.0,
                roll: 0.0,
                fov: settings.fov
            },
            {
                t: duration,
                x: settings.x,
                y: settings.y,
                z: settings.z,
                tx: 0.0,
                ty: 0.308,
                tz: 0.0,
                roll: 0.0,
                fov: settings.fov
            }
        ];
        
        return fixedData;
    }

    /**
     * Update fixed camera duration based on actual audio length
     * Should be called after audio is loaded
     * @param {number} animationId - Animation ID
     * @param {number} durationSeconds - Audio duration in seconds
     */
    updateFixedCameraDuration(animationId, durationSeconds) {
        const animation = this.getAnimationById(animationId);
        if (!animation || !animation.settings.useFixedCamera) {
            return;
        }

        if (animation.data && animation.data.length === 2) {
            const settings = animation.settings.fixedCameraSettings;
            
            // Update end keyframe time
            animation.data[1] = {
                t: durationSeconds,
                x: settings.x,
                y: settings.y,
                z: settings.z,
                tx: 0.0,
                ty: 0.308,
                tz: 0.0,
                roll: 0.0,
                fov: settings.fov
            };
            //log(`[ConfigLoader] Updated fixed camera duration to ${durationSeconds}s for ${animation.name}`);
        }
    }

    /**
     * Load all camera files for a specific animation
     * Useful for preloading all cameras for an animation
     * @param {number} animationId - Animation ID
     * @returns {Promise<boolean>} Success status
     */
    async loadAllCamerasForAnimation(animationId) {
        const animation = this.getAnimationById(animationId);
        if (!animation) return false;

        try {
            for (const cameraFile of animation.cameraFiles) {
                if (!animation.camerasData[cameraFile]) {
                    const data = await this.loadCameraData(animation.folder, cameraFile);
                    if (data && data.length > 0) {
                        animation.camerasData[cameraFile] = data;
                    }
                }
            }
            
            // Update current data reference
            if (animation.camerasData[animation.selectedCamera]) {
                animation.data = animation.camerasData[animation.selectedCamera];
            }
            
            return true;
        } catch (error) {
            log(`[ConfigLoader] Error loading all cameras for ${animation.name}: ${error}`);
            return false;
        }
    }

    /**
     * Discover all valid camera JSON files in a folder (max 10 files)
     * Tries common naming patterns and numbered variations
     * @param {string} folderName - Animation folder name
     * @returns {Array<string>} Array of valid camera file names (max 10)
     */
    async discoverCameraFiles(folderName) {
        const cameraFiles = [];
        const folderPath = this.basePath + folderName + "/";
        const maxFiles = 10;
        
        // Common base names to try
        const baseNames = [
            'camera', 'Camera',
            'cam', 'Cam',
            `Cam${folderName}`, `cam${folderName}`,
            `${folderName}Cam`, `${folderName}cam`,
            folderName,
            'FixedCam', 'fixedcam', 'fixedCam',
            'CamFixed', 'camfixed', 'camFixed',
            'data', 'Data',
            'default', 'Default',
            'main', 'Main'
        ];
        
        // Try base names without numbers first
        for (const base of baseNames) {
            if (cameraFiles.length >= maxFiles) break;
            
            const fileName = `${base}.json`;
            const fullPath = folderPath + fileName;
            
            // Check if already added (avoid duplicates)
            let alreadyAdded = false;
            for (let i = 0; i < cameraFiles.length; i++) {
                if (cameraFiles[i].toLowerCase() === fileName.toLowerCase()) {
                    alreadyAdded = true;
                    break;
                }
            }
            
            if (!alreadyAdded && await this.fileExists(fullPath)) {
                const isValid = await this.validateCameraFile(fullPath);
                if (isValid) {
                    cameraFiles.push(fileName);
                }
            }
        }
        
        // Try numbered variations (1-10)
        for (let num = 1; num <= 10; num++) {
            if (cameraFiles.length >= maxFiles) break;
            
            // Try just numbers: 1.json, 2.json, etc.
            let fileName = `${num}.json`;
            let fullPath = folderPath + fileName;
            
            let alreadyAdded = false;
            for (let i = 0; i < cameraFiles.length; i++) {
                if (cameraFiles[i].toLowerCase() === fileName.toLowerCase()) {
                    alreadyAdded = true;
                    break;
                }
            }
            
            if (!alreadyAdded && await this.fileExists(fullPath)) {
                const isValid = await this.validateCameraFile(fullPath);
                if (isValid) {
                    cameraFiles.push(fileName);
                }
            }
            
            // Try with base names
            for (const base of baseNames) {
                if (cameraFiles.length >= maxFiles) break;
                
                // Try with underscore: camera_1.json
                fileName = `${base}_${num}.json`;
                fullPath = folderPath + fileName;
                
                alreadyAdded = false;
                for (let i = 0; i < cameraFiles.length; i++) {
                    if (cameraFiles[i].toLowerCase() === fileName.toLowerCase()) {
                        alreadyAdded = true;
                        break;
                    }
                }
                
                if (!alreadyAdded && await this.fileExists(fullPath)) {
                    const isValid = await this.validateCameraFile(fullPath);
                    if (isValid) {
                        cameraFiles.push(fileName);
                    }
                }
                
                if (cameraFiles.length >= maxFiles) break;
                
                // Try without separator: camera1.json
                fileName = `${base}${num}.json`;
                fullPath = folderPath + fileName;
                
                alreadyAdded = false;
                for (let i = 0; i < cameraFiles.length; i++) {
                    if (cameraFiles[i].toLowerCase() === fileName.toLowerCase()) {
                        alreadyAdded = true;
                        break;
                    }
                }
                
                if (!alreadyAdded && await this.fileExists(fullPath)) {
                    const isValid = await this.validateCameraFile(fullPath);
                    if (isValid) {
                        cameraFiles.push(fileName);
                    }
                }
            }
        }

        // Sort files naturally
        cameraFiles.sort((a, b) => {
            const numA = parseInt(a.match(/\d+/)?.[0] || '0');
            const numB = parseInt(b.match(/\d+/)?.[0] || '0');
            
            if (numA !== numB) {
                return numA - numB;
            }
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });

        return cameraFiles;
    }


    /**
     * Check if a file exists by trying to load it
     * @param {string} filePath - Full path to file
     * @returns {boolean} True if file exists
     */
    async fileExists(filePath) {
        try {
            await import(filePath);
            return true;
        } catch {
            return false;
        }
    }

    /**
     * Validate camera file structure
     * @param {string} filePath - Full path to camera file
     * @returns {boolean} True if valid camera file
     */
    async validateCameraFile(filePath) {
        try {
            const module = await import(filePath);
            const data = module.default || module;

            if (!Array.isArray(data) || data.length === 0) {
                return false;
            }
            const frame = data[0];
            const requiredFields = ['t', 'x', 'y', 'z', 'tx', 'ty', 'tz', 'roll', 'fov'];
            
            for (const field of requiredFields) {
                if (!frame.hasOwnProperty(field)) {
                    return false;
                }
            }

            // Validate field types
            if (typeof frame.t !== 'number' || 
                typeof frame.x !== 'number' || 
                typeof frame.y !== 'number' || 
                typeof frame.z !== 'number' ||
                typeof frame.tx !== 'number' || 
                typeof frame.ty !== 'number' || 
                typeof frame.tz !== 'number' ||
                typeof frame.roll !== 'number' || 
                typeof frame.fov !== 'number') {
                return false;
            }

            return true;
        } catch {
            return false;
        }
    }

    /**
     * Load camera data from animation folder
     * @param {string} folderName - Animation folder name
     * @param {string} cameraFileName - Camera JSON filename
     */
    async loadCameraData(folderName, cameraFileName) {
        const cacheKey = `${folderName}/${cameraFileName}`;
        
        if (this.cameraDataCache[cacheKey]) {
            return this.cameraDataCache[cacheKey];
        }

        try {
            const fullPath = this.basePath + folderName + "/" + cameraFileName;
            
            // Dynamic import for camera JSON files
            const cameraModule = await import(fullPath);
            const cameraData = cameraModule.default || cameraModule;

            if (!Array.isArray(cameraData)) {
                throw new Error(`Camera data must be an array, got: ${typeof cameraData}`);
            }
            if (cameraData.length === 0) {
                throw new Error("Camera data array is empty");
            }
            this.cameraDataCache[cacheKey] = cameraData;

            return cameraData;

        } catch (error) {
            log(`[ConfigLoader] Error loading camera file ${folderName}/${cameraFileName}: ${error}`);
            return [];
        }
    }

    /**
     * Switch camera for an animation
     * @param {number} animationId - Animation ID
     * @param {string} cameraFileName - Camera file to switch to
     * @returns {boolean} Success status
     */
    switchCamera(animationId, cameraFileName) {
        const animation = this.getAnimationById(animationId);
        if (!animation) return false;

        if (!animation.cameraFiles.includes(cameraFileName)) {
            log(`[ConfigLoader] Camera file ${cameraFileName} not found for animation ${animation.name}`);
            return false;
        }
        animation.selectedCamera = cameraFileName;
        animation.settings.selectedCameraFile = cameraFileName;
        if (animation.camerasData[cameraFileName]) {
            animation.data = animation.camerasData[cameraFileName];
        } else {
            animation.data = null;
        }
        return true;
    }

    /**
     * Get all loaded animations
     */
    getAnimations() {
        return this.animations;
    }

    /**
     * Get animation by ID
     */
    getAnimationById(id) {
        return this.animations.find(anim => anim.id === id);
    }

    /**
     * Get animation by name
     */
    getAnimationByName(name) {
        return this.animations.find(anim => anim.name === name);
    }

    /**
     * Get animation by folder name
     */
    getAnimationByFolder(folderName) {
        return this.animations.find(anim => anim.folder === folderName);
    }

    /**
     * Reload configurations (useful for hot-reload)
     */
    async reload() {
        this.animations = [];
        this.cameraDataCache = {};
        return await this.initialize();
    }

    /**
     * Get base path for files
     */
    getBasePath() {
        return this.basePath;
    }

    /**
     * Get full path for animation folder
     */
    getAnimationFolderPath(folderName) {
        return this.basePath + folderName + "/";
    }

    /**
     * Validate animation configuration
     */
    validateAnimationConfig(animData) {
        const required = ['id', 'name', 'displayName', 'folder',
                         'animPackage', 'animName', 'audioFile'];
        
        for (const field of required) {
            if (!animData.hasOwnProperty(field)) {
                throw new Error(`Missing required field: ${field}`);
            }
        }
        if (animData.cameraFiles !== undefined) {
            if (!Array.isArray(animData.cameraFiles)) {
                throw new Error(`Field 'cameraFiles' must be an array`);
            }
        }
        if (/[\s<>:"|?*]/.test(animData.folder)) {
            throw new Error(`Invalid folder name: ${animData.folder} (contains invalid characters)`);
        }
        if (typeof animData.id !== 'number') {
            throw new Error(`Field 'id' must be a number, got: ${typeof animData.id}`);
        }
        return true;
    }

    /**
     * Get animation count
     */
    getAnimationCount() {
        return this.animations.length;
    }

    /**
     * Check if animation exists by ID
     */
    hasAnimationById(id) {
        return this.animations.some(anim => anim.id === id);
    }

    /**
     * Check if animation exists by folder
     */
    hasAnimationByFolder(folderName) {
        return this.animations.some(anim => anim.folder === folderName);
    }

    /**
     * Get list of all animation folders
     */
    getAnimationFolders() {
        return this.animations.map(anim => anim.folder);
    }

    /**
     * Check if camera data is loaded for animation
     * @param {number} animationId - Animation ID
     * @returns {boolean} True if camera data is loaded
     */
    isCameraDataLoaded(animationId) {
        const animation = this.getAnimationById(animationId);
        if (!animation) return false;
        
        // If using fixed camera, data is always ready
        if (animation.settings.useFixedCamera) {
            return animation.data !== null;
        }
        
        return animation.data !== null && 
               animation.camerasData[animation.selectedCamera] !== undefined;
    }
}

/**
 * Global instance (singleton pattern)
 */
let configLoaderInstance = null;

/**
 * Get or create config loader instance
 */
export function getConfigLoader() {
    if (!configLoaderInstance) {
        configLoaderInstance = new ConfigLoader();
    }
    return configLoaderInstance;
}

/**
 * Initialize configuration loader
 */
export async function initializeConfigLoader() {
    const loader = getConfigLoader();
    return await loader.initialize();
}
