// by J16D
// Progress Bar with Elapsed Time Display
//
/// <reference path="../.config/sa.d.ts" />

import { DrawEvent, Font, Align } from "../.config/enums";

/**
 * Progress Bar for Animation Playback  
 * Displays elapsed time in MM:SS format
 */
export class ProgressBar {
    constructor(settings = null) {
        this.screenWidth = 640.0;
        this.screenHeight = 448.0;
        
        if (settings) {
            this.enabled = settings.enabled;
            this.showText = settings.showText;
            this.posX = settings.posX;
            this.posY = settings.posY;
            this.barWidth = settings.width;
            this.barHeight = settings.height;
            this.fgColor = { ...settings.fgColor };
            this.bgColor = { ...settings.bgColor };
            this.borderColor = { ...settings.borderColor };
            this.textColor = { ...settings.textColor };
        } else {
            this.enabled = true;
            this.showText = true;
            this.posX = 160.0;
            this.posY = 428.0;
            this.barWidth = 320.0;
            this.barHeight = 6.0;
            this.fgColor = { r: 255, g: 200, b: 0, a: 220 };
            this.bgColor = { r: 0, g: 0, b: 0, a: 150 };
            this.borderColor = { r: 255, g: 255, b: 255, a: 50 };
            this.textColor = { r: 255, g: 255, b: 255, a: 255 };
        }
        this.borderWidth = 0.1;
        this.showBorder = true;
        this.currentProgress = 0.0;
        this.maxProgress = 1.0;
        this.startTime = 0;
        this.currentTime = 0;
        this.totalTime = 0;
    }

    updateProgress(current, max) {
        this.currentProgress = current;
        this.maxProgress = max;
    }

    /**
     * Update current time and total duration for elapsed time display
     * @param {number} timeMs - Current time in milliseconds
     * @param {number} totalMs - Total duration in milliseconds
     */
    updateTime(timeMs, totalMs) {
        this.currentTime = timeMs;
        this.totalTime = totalMs || 0;
    }

    /**
     * Set start time for elapsed time calculation
     * @param {number} timeMs - Start time in milliseconds
     */
    setStartTime(timeMs) {
        this.startTime = timeMs;
    }

    /**
     * Format milliseconds to MM:SS format
     * @param {number} milliseconds - Time in milliseconds
     * @returns {string} Formatted time string
     */
    formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        
        const minutesStr = minutes.toString().padStart(2, '0');
        const secondsStr = seconds.toString().padStart(2, '0');
        
        return `${minutesStr}:${secondsStr}`;
    }

    updateSettings(settings) {
        this.enabled = settings.enabled;
        this.showText = settings.showText;
        this.posX = settings.posX;
        this.posY = settings.posY;
        this.barWidth = settings.width;
        this.barHeight = settings.height;
        this.fgColor = { ...settings.fgColor };
        this.bgColor = { ...settings.bgColor };
        this.borderColor = { ...settings.borderColor };
        this.textColor = { ...settings.textColor };
    }
    
    drawBar() {
        if (!this.enabled || this.maxProgress <= 0) return;
        
        //const barCenterX = this.posX + (this.barWidth / 2.0);
        //const barCenterY = this.posY;
        const barCenterX = parseFloat(this.posX) + (this.barWidth / 2.0);
        const barCenterY = parseFloat(this.posY);
        const progress = Math.min(this.currentProgress / this.maxProgress, 1.0);
        const fillWidth = this.barWidth * progress;

        // Border
        if (this.showBorder) {
            Hud.DrawRect(
                barCenterX,
                barCenterY,
                this.barWidth + this.borderWidth * 2,
                this.barHeight + this.borderWidth * 2,
                this.borderColor.r, this.borderColor.g, this.borderColor.b, this.borderColor.a
            );
        }
        
        // Background
        Hud.DrawRect(
            barCenterX,
            barCenterY,
            this.barWidth,
            this.barHeight,
            this.bgColor.r, this.bgColor.g, this.bgColor.b, this.bgColor.a
        );
        
        // Foreground (fill)
        if (fillWidth > 0) {
            const fillCenterX = this.posX + (fillWidth / 2.0);
            Hud.DrawRect(
                fillCenterX,
                barCenterY,
                fillWidth,
                this.barHeight,
                this.fgColor.r, this.fgColor.g, this.fgColor.b, this.fgColor.a
            );
        }

        Text.UseCommands(false);
    }

    drawElapsedTime() {
        if (!this.showText || this.maxProgress <= 0) return;

        //const textX = this.posX + this.barWidth + 40;
        //const textY = this.posY - 6.0;
        const textX = parseFloat(this.posX) + this.barWidth + 40;
        const textY = parseFloat(this.posY) - 6.0;
        
        // Calculate elapsed time and total duration
        const elapsedTime = this.currentTime;
        const elapsedString = this.formatTime(elapsedTime);
        const totalString = this.formatTime(this.totalTime);
        
        // Format: MM:SS / MM:SS
        const timeString = `${elapsedString} / ${totalString}`;
       
        Text.DrawStringExt(
            timeString, 
            DrawEvent.AfterHud, 
            textX, textY, 
            0.3, 0.6, 
            true, 
            Font.Subtitles, 
            true, 
            Align.Center, 
            640.0, 
            false, 
            this.textColor.r,
            this.textColor.g,
            this.textColor.b,
            this.textColor.a,
            1, 0, 0, 0, 0, 100, false, 0, 0, 0, 0
        );
    }

    setColors(fgColor, bgColor) {
        if (fgColor) this.fgColor = fgColor;
        if (bgColor) this.bgColor = bgColor;
    }

    reset() {
        this.currentProgress = 0.0;
        this.maxProgress = 1.0;
        this.startTime = 0;
        this.currentTime = 0;
        this.totalTime = 0;
    }
}
