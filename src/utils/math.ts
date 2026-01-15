/**
 * Math Utilities for Animations
 * 
 * Collection of mathematical functions optimized for
 * canvas animations and physics simulations.
 */

/**
 * Generates a random number within a range
 */
export function randomRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

/**
 * Generates a random integer within a range (inclusive)
 */
export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Linearly interpolates between two values
 */
export function lerp(start: number, end: number, t: number): number {
    return start + (end - start) * t;
}

/**
 * Clamps a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

/**
 * Maps a value from one range to another
 */
export function mapRange(
    value: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
): number {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

/**
 * Converts degrees to radians
 */
export function degToRad(degrees: number): number {
    return degrees * (Math.PI / 180);
}

/**
 * Converts radians to degrees
 */
export function radToDeg(radians: number): number {
    return radians * (180 / Math.PI);
}

/**
 * Calculates the distance between two points
 */
export function distance(
    x1: number,
    y1: number,
    x2: number,
    y2: number
): number {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Calculates the angle between two points in radians
 */
export function angleBetween(
    x1: number,
    y1: number,
    x2: number,
    y2: number
): number {
    return Math.atan2(y2 - y1, x2 - x1);
}

/**
 * Normalizes a value to a 0-1 range
 */
export function normalize(value: number, min: number, max: number): number {
    return (value - min) / (max - min);
}

/* ==========================================================================
   Easing Functions
   ========================================================================== */

/**
 * Easing function types
 */
export type EasingFunction = (t: number) => number;

/**
 * Quadratic ease-in
 */
export function easeInQuad(t: number): number {
    return t * t;
}

/**
 * Quadratic ease-out
 */
export function easeOutQuad(t: number): number {
    return t * (2 - t);
}

/**
 * Quadratic ease-in-out
 */
export function easeInOutQuad(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

/**
 * Cubic ease-in
 */
export function easeInCubic(t: number): number {
    return t * t * t;
}

/**
 * Cubic ease-out
 */
export function easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
}

/**
 * Cubic ease-in-out
 */
export function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Sine ease-in
 */
export function easeInSine(t: number): number {
    return 1 - Math.cos((t * Math.PI) / 2);
}

/**
 * Sine ease-out
 */
export function easeOutSine(t: number): number {
    return Math.sin((t * Math.PI) / 2);
}

/**
 * Sine ease-in-out
 */
export function easeInOutSine(t: number): number {
    return -(Math.cos(Math.PI * t) - 1) / 2;
}

/**
 * Exponential ease-in
 */
export function easeInExpo(t: number): number {
    return t === 0 ? 0 : Math.pow(2, 10 * t - 10);
}

/**
 * Exponential ease-out
 */
export function easeOutExpo(t: number): number {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/* ==========================================================================
   Performance Detection
   ========================================================================== */

/**
 * Detects if the device might have performance constraints
 */
export function isLowEndDevice(): boolean {
    // Check for low memory
    if ('deviceMemory' in navigator) {
        const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
        if (memory && memory < 4) return true;
    }

    // Check for limited CPU cores
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        return true;
    }

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return true;
    }

    return false;
}

/**
 * Get device pixel ratio clamped to a reasonable range
 */
export function getOptimalPixelRatio(maxRatio: number = 2): number {
    return Math.min(window.devicePixelRatio || 1, maxRatio);
}

/**
 * Throttle function for performance-critical operations
 */
export function throttle<T extends (...args: unknown[]) => void>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle = false;

    return function (this: unknown, ...args: Parameters<T>) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

/**
 * Debounce function for resize and other frequent events
 */
export function debounce<T extends (...args: unknown[]) => void>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return function (this: unknown, ...args: Parameters<T>) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), wait);
    };
}
