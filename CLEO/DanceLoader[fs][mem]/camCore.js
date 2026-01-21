// by J16D
// Camera Animation System Classes
//
/// <reference path="../.config/sa.d.ts" />

import { PedType, SwitchType, Fade, AudioStreamAction, Facing, WeaponType } from "../.config/enums";
import { multiObj } from "./sa_ide";
import { ProgressBar } from "./ProgressBar";

// ============================================================================
// GLOBAL CONFIGURATION (Never changes)
// ============================================================================
export class GlobalConfig {
    constructor() {
        this.modelPed = 138; // WFYBE
        this.modelObject = multiObj`beachball`;
        this.defaultFov = 70.0;
        this.fadeDelayMs = 600;
    }
}

// ============================================================================
// ANIMATION CONFIGURATION (Loaded from external config)
// ============================================================================
export class AnimationConfig {
    constructor(startDelayMs, animInternalName, animFileName, audioFilePath) {
        this.startDelayMs = startDelayMs;
        this.animInternalName = animInternalName;
        this.animFileName = animFileName;
        this.audioFilePath = audioFilePath;
    }

    static fromConfig(configData) {
        return new AnimationConfig(
            configData.startDelayMs,
            configData.animName,
            configData.animPackage,
            configData.audioFile
        );
    }
}

// ============================================================================
// CAMERA ANIMATION PLAYER
// ============================================================================
export class CameraAnimationPlayer {
    constructor(globalCfg, animCfg, fovOffset) {
        this.globalConfig = globalCfg;
        this.animConfig = animCfg;
        this.isAnimating = false;
        this.animationObject = null;
        this.animationPed = null;
        this.originalFov = globalCfg.defaultFov;
        this.player = new Player(0);
        this.playerActor = this.player.getChar();
        this.fovOffset = fovOffset;
        this.isPaused = false; // Pause state flag
    }

    isPlaying() {
        return this.isAnimating;
    }

    isPausedState() {
        return this.isPaused;
    }

    pause() {
        this.isPaused = true;
    }

    resume() {
        this.isPaused = false;
    }

    async start(cameraData) {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.isPaused = false;
        await this.loadAssets();
        this.createObjects(cameraData[0]);
        return cameraData;
    }

    stop() {
        if (!this.isAnimating) return;
        
        this.cleanup();
        this.isAnimating = false;
        this.isPaused = false;
    }

    async loadAssets() {
        Streaming.RequestAnimation(this.animConfig.animFileName);
        Streaming.RequestModel(this.globalConfig.modelObject);
        Streaming.RequestModel(this.globalConfig.modelPed);
        Streaming.LoadAllModelsNow();
        await asyncWait(0);
        
        while (!Streaming.HasModelLoaded(this.globalConfig.modelObject) && 
               !Streaming.HasAnimationLoaded(this.animConfig.animFileName) && 
               !Streaming.HasModelLoaded(this.globalConfig.modelPed)) {
            await asyncWait(0);
        }
    }

    createObjects(firstFrame) {
        this.animationObject = ScriptObject.CreateNoSave(this.globalConfig.modelObject, 0.0, 0.0, 0.0, false, false);
        this.animationObject.setCollision(false);
        this.animationObject.setScale(0.01);
        this.animationObject.setVisible(true);
        Streaming.MarkModelAsNoLongerNeeded(this.globalConfig.modelObject);

        const initialPos = this.playerActor.getOffsetInWorldCoords(firstFrame.x, firstFrame.y, firstFrame.z);
        const initialTarget = this.playerActor.getOffsetInWorldCoords(firstFrame.tx, firstFrame.ty, firstFrame.tz);
        this.animationObject.setCoordinates(initialPos.x, initialPos.y, initialPos.z);
        
        const initialAngle = Math.GetAngleFromTwoCoords(initialPos.x, initialPos.y, initialTarget.x, initialTarget.y);
        this.animationObject.setRotation(0.0, 0.0, initialAngle);

        this.animationPed = Char.Create(PedType.CivFemale, this.globalConfig.modelPed, 0.0, 1.0, 0.0);
        this.animationPed.setCollision(false);
        this.animationPed.setVisible(false);
        Streaming.MarkModelAsNoLongerNeeded(this.globalConfig.modelPed);
        this.animationPed.attachToObject(this.animationObject, 0.0, 0.0, 0.0, Facing.Forward, 0.0, WeaponType.Unarmed);
    }

    setInitialFov(fovValue) {
        const targetFov = fovValue + this.fovOffset;
        const currentFov = Camera.GetFov();
        Camera.SetLerpFov(currentFov, targetFov, 1, 1);
        Camera.PersistFov(true);
    }

    setFovTransition(startFov, endFov, durationMs) {
        const from = startFov + this.fovOffset;
        const to = endFov + this.fovOffset;
        const time = durationMs > 0 ? durationMs : 1;   //ensure at least 1 ms to avoid issues
        Camera.SetLerpFov(from, to, time, 1);
        Camera.PersistFov(true);
    }

    applyTransform(frameData) {
        if (!this.animationObject || !this.isAnimating) return;
        
        const zAngle = Math.GetAngleFromTwoCoords(frameData.x, frameData.y, frameData.tx, frameData.ty);
        const xAngle = CameraUtils.getXangleBetweenPoints(frameData.x, frameData.y, frameData.z, frameData.tx, frameData.ty, frameData.tz);
        
        this.animationObject.setRotation(xAngle, frameData.roll, zAngle);
        this.animationObject.setCoordinates(frameData.x, frameData.y, frameData.z);
        
        Camera.AttachToChar(this.animationPed, 0.0, 0.0, -0.01, 0.0, 90.0, 0.0, frameData.roll, SwitchType.JumpCut);
    }

    updateFovOffset(fov) {
        this.fovOffset = fov;
    }

    cleanup() {
        Camera.Restore();
        Camera.RestoreJumpcut();
        
        const currentFov = Camera.GetFov();
        Camera.SetLerpFov(currentFov, this.originalFov, 5, 1);
        Camera.PersistFov(false);

        if (this.animationPed) {
            this.animationPed.delete();
            this.animationPed = null;
        }
        
        if (this.animationObject) {
            this.animationObject.delete();
            this.animationObject = null;
        }
    }
}

// ============================================================================
// CHARACTER ANIMATION CONTROLLER
// ============================================================================
export class CharacterAnimationController {
    constructor(characterRef, animCfg) {
        this.characterRef = characterRef;
        this.animConfig = animCfg;
        this.isPlaying = false;
    }

    start() {
        this.characterRef.clearTasks();
        this.characterRef.clearTasksImmediately();
        Task.PlayAnimNonInterruptable(
            this.characterRef, 
            this.animConfig.animInternalName, 
            this.animConfig.animFileName, 
            4.0, 0, 1, 1, 1, -1
        );
        this.characterRef.setAnimCurrentTime(this.animConfig.animInternalName, 0.0);
        this.setPlayingState(false);
    }

    setPlayingState(playingState) {
        this.characterRef.setAnimPlayingFlag(this.animConfig.animInternalName, playingState);
        this.isPlaying = playingState;
    }

    pause() {
        this.setPlayingState(false);
    }

    resume() {
        this.setPlayingState(true);
    }

    stop() {
        this.characterRef.clearTasks();
        this.characterRef.clearTasksImmediately();
        Streaming.RemoveAnimation(this.animConfig.animFileName);
        this.isPlaying = false;
    }
}

// ============================================================================
// AUDIO PLAYER
// ============================================================================
export class AudioPlayer {
    constructor(audioPath) {
        this.audioPath = audioPath;
        this.audioStream = null;
        this.duration = 0;
    }

    start() {
        this.audioStream = AudioStream.Load(this.audioPath);
        this.audioStream.setState(AudioStreamAction.Play);
        this.duration = this.audioStream.getLength() * 1000;
    }

    getDuration() {
        return this.duration;
    }

    /**
     * Get audio duration in seconds (float)
     * @returns {number} Duration in seconds
     */
    getDurationInSeconds() {
        if (this.audioStream) {
            return this.audioStream.getLength();
        }
        return 0.0;
    }

    pause() {
        if (this.audioStream) {
            this.audioStream.setState(AudioStreamAction.Pause);
        }
    }

    resume() {
        if (this.audioStream) {
            this.audioStream.setState(AudioStreamAction.Resume);
        }
    }

    stop() {
        if (this.audioStream) {
            this.audioStream.setState(AudioStreamAction.Stop);
            this.audioStream.remove();
            this.audioStream = null;
        }
        this.duration = 0;
    }

    isPlaying() {
        return this.audioStream !== null;
    }
}

// ============================================================================
// BEZIER INTERPOLATION
// ============================================================================
export class BezierInterpolator {
    /**
     * Cubic Bezier interpolation for smooth camera movements
     * Based on MMD animation interpolation
     * https://doc.babylonjs.com/communityExtensions/mmdLoader/
     * 
     * @param {number} x1 - Control point 1 X (0-1)
     * @param {number} y1 - Control point 1 Y (0-1)
     * @param {number} x2 - Control point 2 X (0-1)
     * @param {number} y2 - Control point 2 Y (0-1)
     */
    constructor(x1 = 0.25, y1 = 0.1, x2 = 0.25, y2 = 1.0) {
        this.x1 = Math.max(0, Math.min(1, x1));
        this.y1 = Math.max(0, Math.min(1, y1));
        this.x2 = Math.max(0, Math.min(1, x2));
        this.y2 = Math.max(0, Math.min(1, y2));
        // Cache for performance
        this.epsilon = 1e-5;
        this.maxIterations = 15;
    }

    /**
     * Calculate Bezier curve value using Bisection method
     * Solves: f(t) = 3(1-t)²t·x1 + 3(1-t)t²·x2 + t³ - x = 0
     * 
     * @param {number} x - Input value (0-1), typically time ratio
     * @returns {number} Output value (0-1), interpolated result
     */
    calculate(x) {
        // Early returns for edge cases
        if (x <= 0) return 0;
        if (x >= 1) return 1;
        // Special case: linear interpolation
        if (this.x1 === this.y1 && this.x2 === this.y2) {
            return x;
        }
        // Bisection method to find t for given x
        let c = 0.5;
        let t = c;
        let s = 1.0 - t;

        for (let i = 0; i < this.maxIterations; i++) {
            const sst3 = 3.0 * s * s * t;  // 3(1-t)²t
            const stt3 = 3.0 * s * t * t;  // 3(1-t)t²
            const ttt = t * t * t;          // t³
            // Calculate f(t) = bezier_x(t) - x
            const ft = (sst3 * this.x1) + (stt3 * this.x2) + ttt - x;
            // Check convergence
            if (Math.abs(ft) < this.epsilon) break;
            // Bisection step
            c /= 2.0;
            t += (ft < 0) ? c : -c;
            s = 1.0 - t;
        }
        // Calculate final y value using found t
        const sst3 = 3.0 * s * s * t;
        const stt3 = 3.0 * s * t * t;
        const ttt = t * t * t;
        return (sst3 * this.y1) + (stt3 * this.y2) + ttt;
    }

    /**
     * Interpolate between two values using Bezier curve
     * 
     * @param {number} start - Start value
     * @param {number} end - End value
     * @param {number} t - Time factor (0-1)
     * @returns {number} Interpolated value
     */
    interpolate(start, end, t) {
        const ratio = this.calculate(t);
        return start + (end - start) * ratio;
    }
}

// Preset Bezier curves for different animation styles
export const BezierPresets = {
    // Smooth, natural camera movements (default)
    SMOOTH: { x1: 0.25, y1: 0.1, x2: 0.25, y2: 1.0 },
    // Ease in: slow start, fast end
    EASE_IN: { x1: 0.42, y1: 0.0, x2: 1.0, y2: 1.0 },
    // Ease out: fast start, slow end
    EASE_OUT: { x1: 0.0, y1: 0.0, x2: 0.58, y2: 1.0 },
    // Ease in-out: slow start and end, fast middle
    EASE_IN_OUT: { x1: 0.42, y1: 0.0, x2: 0.58, y2: 1.0 },
    // Linear (same as regular lerp)
    LINEAR: { x1: 0.0, y1: 0.0, x2: 1.0, y2: 1.0 },
    // Cinematic: very smooth, dramatic
    CINEMATIC: { x1: 0.33, y1: 0.0, x2: 0.67, y2: 1.0 },
    // Sharp: quick transitions
    SHARP: { x1: 0.4, y1: 0.0, x2: 0.6, y2: 1.0 }
};

// ============================================================================
// QUATERNION INTERPOLATION FOR SMOOTH ROTATIONS
// ============================================================================
export class QuaternionInterpolator {
    /**
     * Quaternion-based interpolation for camera roll
     * Prevents gimbal lock and ensures smooth rotation
     * Based on MMD's rotation interpolation system
     */
    constructor() {
        // Quaternion components [x, y, z, w]
        this.q1 = [0, 0, 0, 1];
        this.q2 = [0, 0, 0, 1];
        this.result = [0, 0, 0, 1];
    }

    /**
     * Convert Euler angle (degrees) to quaternion
     * For camera roll around Z axis
     * @param {number} angleDegrees - Rotation in degrees
     * @returns {Array} Quaternion [x, y, z, w]
     */
    eulerToQuaternion(angleDegrees) {
        const angleRadians = (angleDegrees * Math.PI) / 180.0;
        const halfAngle = angleRadians * 0.5;
        const s = Math.sin(halfAngle);
        const c = Math.cos(halfAngle);
        
        // Rotation around Z axis (roll)
        return [0, 0, s, c];
    }

    /**
     * Convert quaternion to Euler angle (degrees)
     * @param {Array} q - Quaternion [x, y, z, w]
     * @returns {number} Angle in degrees
     */
    quaternionToEuler(q) {
        // For Z-axis rotation (roll)
        const sinr_cosp = 2 * (q[3] * q[2] + q[0] * q[1]);
        const cosr_cosp = 1 - 2 * (q[1] * q[1] + q[2] * q[2]);
        const angleRadians = Math.atan2(sinr_cosp, cosr_cosp);
        
        return (angleRadians * 180.0) / Math.PI;
    }
    
    /**
     * Spherical Linear Interpolation (SLERP) for quaternions
     * Ensures smooth rotation without gimbal lock
     * @param {Array} qa - Start quaternion [x, y, z, w]
     * @param {Array} qb - End quaternion [x, y, z, w]
     * @param {number} t - Interpolation factor (0-1)
     * @returns {Array} Interpolated quaternion
     */
    slerp(qa, qb, t) {
        // Calculate cosine of angle between quaternions
        let cosHalfTheta = qa[0] * qb[0] + qa[1] * qb[1] + 
                          qa[2] * qb[2] + qa[3] * qb[3];

        // If qa and qb are very close, use linear interpolation
        if (Math.abs(cosHalfTheta) >= 1.0) {
            this.result[0] = qa[0];
            this.result[1] = qa[1];
            this.result[2] = qa[2];
            this.result[3] = qa[3];
            return this.result;
        }

        // Take shortest path
        let qb_copy = [qb[0], qb[1], qb[2], qb[3]];
        if (cosHalfTheta < 0) {
            qb_copy[0] = -qb[0];
            qb_copy[1] = -qb[1];
            qb_copy[2] = -qb[2];
            qb_copy[3] = -qb[3];
            cosHalfTheta = -cosHalfTheta;
        }

        // Calculate interpolation coefficients
        const halfTheta = Math.acos(cosHalfTheta);
        const sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);

        // If angle is very small, use linear interpolation
        if (Math.abs(sinHalfTheta) < 0.001) {
            this.result[0] = qa[0] * 0.5 + qb_copy[0] * 0.5;
            this.result[1] = qa[1] * 0.5 + qb_copy[1] * 0.5;
            this.result[2] = qa[2] * 0.5 + qb_copy[2] * 0.5;
            this.result[3] = qa[3] * 0.5 + qb_copy[3] * 0.5;
            return this.result;
        }

        // Standard SLERP
        const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta;
        const ratioB = Math.sin(t * halfTheta) / sinHalfTheta;

        this.result[0] = qa[0] * ratioA + qb_copy[0] * ratioB;
        this.result[1] = qa[1] * ratioA + qb_copy[1] * ratioB;
        this.result[2] = qa[2] * ratioA + qb_copy[2] * ratioB;
        this.result[3] = qa[3] * ratioA + qb_copy[3] * ratioB;

        return this.result;
    }

    /**
     * Interpolate camera roll using quaternion SLERP
     * @param {number} startAngle - Start angle in degrees
     * @param {number} endAngle - End angle in degrees
     * @param {number} t - Interpolation factor (0-1)
     * @returns {number} Interpolated angle in degrees
     */
    interpolateRoll(startAngle, endAngle, t) {
        // Convert angles to quaternions
        const qa = this.eulerToQuaternion(startAngle);
        const qb = this.eulerToQuaternion(endAngle);

        // Perform SLERP
        const result = this.slerp(qa, qb, t);

        // Convert back to Euler angle
        return this.quaternionToEuler(result);
    }
}

// ============================================================================
// CAMERA GRANT SYSTEM
// Allows camera movements to inherit from parent transforms
// Useful for complex camera rigs or follow systems
// ============================================================================
export class CameraGrant {
    /**
     * Grant system for hierarchical camera transforms
     * Based on MMD's bone grant system
     */
    constructor() {
        this.grantEnabled = false;
        this.grantRatio = 1.0;
        this.parentTransform = null;
    }

    /**
     * Enable grant (transform inheritance)
     * @param {number} ratio - Inheritance ratio (0-1)
     */
    enable(ratio = 1.0) {
        this.grantEnabled = true;
        this.grantRatio = Math.max(0, Math.min(1, ratio));
    }

    /**
     * Disable grant
     */
    disable() {
        this.grantEnabled = false;
    }

    /**
     * Set parent transform to inherit from
     * @param {Object} transform - Parent transform {x, y, z, roll}
     */
    setParentTransform(transform) {
        this.parentTransform = transform;
    }

    /**
     * Apply grant to current transform
     * @param {Object} currentTransform - Current camera transform
     * @returns {Object} Modified transform with grant applied
     */
    applyGrant(currentTransform) {
        if (!this.grantEnabled || !this.parentTransform) {
            return currentTransform;
        }

        const ratio = this.grantRatio;
        
        return {
            x: currentTransform.x + (this.parentTransform.x * ratio),
            y: currentTransform.y + (this.parentTransform.y * ratio),
            z: currentTransform.z + (this.parentTransform.z * ratio),
            tx: currentTransform.tx + (this.parentTransform.tx * ratio),
            ty: currentTransform.ty + (this.parentTransform.ty * ratio),
            tz: currentTransform.tz + (this.parentTransform.tz * ratio),
            roll: currentTransform.roll + (this.parentTransform.roll * ratio)
        };
    }
}

// ============================================================================
// FRAME MANAGER
// ============================================================================

export class FrameManager {
    constructor(actorRef, cameraOffset = null, interpolationMode = 'SMOOTH') {
        this.actorRef = actorRef;
        this.cameraOffset = cameraOffset || { x: 0.0, y: 0.0, z: 0.0 };
        
        // Initialize Bezier interpolator with preset
        const preset = BezierPresets[interpolationMode] || BezierPresets.SMOOTH;
        this.bezierInterpolator = new BezierInterpolator(
            preset.x1, 
            preset.y1, 
            preset.x2, 
            preset.y2
        );
        // Initialize quaternion interpolator for smooth rotations
        this.quaternionInterpolator = new QuaternionInterpolator();
        this.interpolationMode = interpolationMode;
    }

    preCalculateWorldFrames(cameraData, frameSkip = 0) {
        let filteredData = cameraData;
        if (frameSkip > 0 && cameraData.length >= 50) {
            filteredData = [];
            for (let i = 0; i < cameraData.length; i += (frameSkip + 1)) {
                filteredData.push(cameraData[i]);
            }
        }
        
        return filteredData.map(frameData => {
            const offsetX = frameData.x + this.cameraOffset.x;
            const offsetY = frameData.y + this.cameraOffset.y;
            const offsetZ = frameData.z + this.cameraOffset.z;
            const offsetTX = frameData.tx + this.cameraOffset.x;
            const offsetTY = frameData.ty + this.cameraOffset.y;
            const offsetTZ = frameData.tz + this.cameraOffset.z;

            const posCoords = this.actorRef.getOffsetInWorldCoords(offsetX, offsetY, offsetZ);
            const targetCoords = this.actorRef.getOffsetInWorldCoords(offsetTX, offsetTY, offsetTZ);
            
            return {
                t: frameData.t * 1000,
                x: posCoords.x,
                y: posCoords.y,
                z: posCoords.z,
                tx: targetCoords.x,
                ty: targetCoords.y,
                tz: targetCoords.z,
                roll: frameData.roll,
                fov: frameData.fov
            };
        });
    }

    /**
     * Interpolate frames using Bezier curves for positions and Quaternion SLERP for rotations  
     * Combines Cubic Bezier interpolation with quaternion rotation for maximum smoothness
     */
    interpolateFrames(currentFrameData, nextFrameData, interpolationFactor) {
        return {
            x: this.bezierInterpolator.interpolate(
                currentFrameData.x, 
                nextFrameData.x, 
                interpolationFactor
            ),
            y: this.bezierInterpolator.interpolate(
                currentFrameData.y, 
                nextFrameData.y, 
                interpolationFactor
            ),
            z: this.bezierInterpolator.interpolate(
                currentFrameData.z, 
                nextFrameData.z, 
                interpolationFactor
            ),
            tx: this.bezierInterpolator.interpolate(
                currentFrameData.tx, 
                nextFrameData.tx, 
                interpolationFactor
            ),
            ty: this.bezierInterpolator.interpolate(
                currentFrameData.ty, 
                nextFrameData.ty, 
                interpolationFactor
            ),
            tz: this.bezierInterpolator.interpolate(
                currentFrameData.tz, 
                nextFrameData.tz, 
                interpolationFactor
            ),
            roll: this.quaternionInterpolator.interpolateRoll(
                currentFrameData.roll, 
                nextFrameData.roll, 
                interpolationFactor
            )
        };
    }

    calculateInterpolationFactor(currentTimeMs, startTimeMs, endTimeMs) {
        const durationMs = endTimeMs - startTimeMs;
        if (durationMs <= 0) return -1;
        
        const factorValue = (currentTimeMs - startTimeMs) / durationMs;
        return Math.max(0, Math.min(1, factorValue));
    }

    /**
     * Change interpolation mode on the fly
     * @param {string} mode - Preset name from BezierPresets
     */
    setInterpolationMode(mode) {
        const preset = BezierPresets[mode] || BezierPresets.SMOOTH;
        this.bezierInterpolator = new BezierInterpolator(
            preset.x1, 
            preset.y1, 
            preset.x2, 
            preset.y2
        );
        this.interpolationMode = mode;
    }

    /**
     * Set custom Bezier control points
     * @param {number} x1 - Control point 1 X (0-1)
     * @param {number} y1 - Control point 1 Y (0-1)
     * @param {number} x2 - Control point 2 X (0-1)
     * @param {number} y2 - Control point 2 Y (0-1)
     */
    setCustomBezier(x1, y1, x2, y2) {
        this.bezierInterpolator = new BezierInterpolator(x1, y1, x2, y2);
        this.interpolationMode = 'CUSTOM';
    }
}

// ============================================================================
// CAMERA UTILITIES
// ============================================================================
export class CameraUtils {
    static getXangleBetweenPoints(xA, yA, zA, xB, yB, zB) {
        const pointX = Math.GetDistanceBetweenCoords2D(xA, yA, xB, yB);
        const pointY = zA - zB;
        let xAngle = this.ATAN(pointX, pointY);
        return (xAngle - 270.0) * -1;
    }

    static ATAN(x, y) {
        let a = Math.atan2(x, y) * 180 / Math.PI;
        if (a < 0) a += 360;
        return a *= -1;
    }
}

// ============================================================================
// ANIMATION MANAGER
// ============================================================================

export class AnimationManager {
    constructor(globalCfg, animCfg, cameraOffset = null, fovOffset, progressBarSettings = null, frameSkip = 0, interpolationMode = 'SMOOTH') {
        this.globalConfig = globalCfg;
        this.animConfig = animCfg;
        this.cameraPlayer = new CameraAnimationPlayer(globalCfg, animCfg, fovOffset);
        this.charController = new CharacterAnimationController(this.cameraPlayer.playerActor, animCfg);
        this.audioPlayer = new AudioPlayer(animCfg.audioFilePath);
        this.frameManager = new FrameManager(
            this.cameraPlayer.playerActor, 
            cameraOffset, 
            interpolationMode       // Pass interpolation mode
        );
        this.progressBar = new ProgressBar(progressBarSettings);
        this.savedTimerValue = 0;
        this.frameSkip = frameSkip;
        this.interpolationMode = interpolationMode;
        
        // Real-time tracking (FPS-independent)
        this.animationStartTime = 0;
        this.pausedTime = 0;
        this.totalPausedDuration = 0;
        this.isPausedFlag = false;
    }

    loadCameraData(rawCameraData) {
        return rawCameraData.map(rowData => ({
            t: rowData.t,
            x: rowData.x,
            y: rowData.y,
            z: rowData.z,
            tx: rowData.tx,
            ty: rowData.ty,
            tz: rowData.tz,
            roll: rowData.roll,
            fov: rowData.fov
        }));
    }

    async start(cameraData) {
        Hud.Display(false);
        Hud.DisplayRadar(false);
        
        await this.cameraPlayer.start(cameraData);
        const worldFrames = this.frameManager.preCalculateWorldFrames(cameraData, this.frameSkip);
        
        if (worldFrames.length > 0) {
            this.cameraPlayer.setInitialFov(worldFrames[0].fov);
        }
        this.progressBar.reset();
        this.progressBar.updateProgress(0, worldFrames.length);
        this.progressBar.setStartTime(0);
        
        Camera.DoFade(this.globalConfig.fadeDelayMs, Fade.In);
        await this.animateFrames(worldFrames);
        
        this.stop();
    }

    pause() {
        if (!this.isPausedFlag) {
            this.pausedTime = Date.now();
            this.isPausedFlag = true;
        }
        this.savedTimerValue = TIMERA;
        this.charController.pause();
        this.audioPlayer.pause();
        this.cameraPlayer.pause();
    }

    resume() {
        if (this.isPausedFlag) {
            this.totalPausedDuration += (Date.now() - this.pausedTime);
            this.isPausedFlag = false;
        }
        TIMERA = this.savedTimerValue;
        this.charController.resume();
        this.audioPlayer.resume();
        this.cameraPlayer.resume();
    }

    /**
     * Get current animation time in milliseconds
     * @returns {number} Elapsed time in milliseconds
     */
    getCurrentAnimationTime() {
        if (this.isPausedFlag) {
            return this.pausedTime - this.animationStartTime - this.totalPausedDuration;
        }
        return Date.now() - this.animationStartTime - this.totalPausedDuration;
    }

    async animateFrames(worldFrames) {
        let currentFrameIndex = 0;
        let lastProcessedIndex = -1;
        
        const totalFrames = worldFrames.length;
        let animationStarted = false;
        
        this.charController.start();
        this.audioPlayer.start();
        const audioDuration = this.audioPlayer.getDuration();
        
        this.animationStartTime = Date.now();
        this.totalPausedDuration = 0;
        this.isPausedFlag = false;
        
        while (this.cameraPlayer.isPlaying() && currentFrameIndex < totalFrames - 1) {
            while (this.cameraPlayer.isPausedState()) {
                await asyncWait(0);
            }

            const currentTime = this.getCurrentAnimationTime();
            const currentFrame = worldFrames[currentFrameIndex];
            const nextFrame = worldFrames[currentFrameIndex + 1];
            
            if (!animationStarted) {
                if (currentTime < this.animConfig.startDelayMs) {
                    this.charController.pause();
                } else {
                    this.charController.resume();
                    animationStarted = true;
                }
            }

            if (currentTime >= nextFrame.t) {
                currentFrameIndex++;
                this.progressBar.updateProgress(currentFrameIndex, totalFrames);
                continue;
            }

            if (currentFrameIndex > lastProcessedIndex) {
                const duration = nextFrame.t - currentFrame.t;
                this.cameraPlayer.setFovTransition(currentFrame.fov, nextFrame.fov, duration);
                lastProcessedIndex = currentFrameIndex;
            }

            const interpolationFactor = this.frameManager.calculateInterpolationFactor(
                currentTime, 
                currentFrame.t, 
                nextFrame.t
            );
            
            if (interpolationFactor < 0) {
                currentFrameIndex++;
                continue;
            }

            const interpolatedFrame = this.frameManager.interpolateFrames(
                currentFrame, 
                nextFrame, 
                interpolationFactor
            );
            
            this.cameraPlayer.applyTransform(interpolatedFrame);
            
            this.progressBar.updateTime(currentTime, audioDuration);
            this.progressBar.drawBar();
            this.progressBar.drawElapsedTime();
            await asyncWait(0);
        }
    }
    
    stop() {
        this.charController.stop();
        this.cameraPlayer.stop();
        this.audioPlayer.stop();
        Hud.Display(true);
        Hud.DisplayRadar(true);
    }

    isPlaying() {
        return this.cameraPlayer.isPlaying();
    }

    isPaused() {
        return this.cameraPlayer.isPausedState();
    }

    updateFovOffset(fov) {
        if (this.cameraPlayer) {
            this.cameraPlayer.updateFovOffset(fov);
        }
    }

    /**
     * Change interpolation mode during runtime
     * @param {string} mode - Preset name from BezierPresets
     */
    setInterpolationMode(mode) {
        this.frameManager.setInterpolationMode(mode);
        this.interpolationMode = mode;
    }
}
