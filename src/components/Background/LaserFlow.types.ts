/**
 * LaserFlow Background Component Types
 * 
 * Type definitions for the animated laser flow background effect.
 */

/**
 * Configuration options for the LaserFlow component
 */
export interface LaserFlowConfig {
    /** Number of laser beams to render (default: 15) */
    beamCount: number;
    /** Speed multiplier for beam movement (default: 1) */
    speed: number;
    /** Array of colors for the laser beams */
    colors: string[];
    /** Minimum line width in pixels (default: 1) */
    minLineWidth: number;
    /** Maximum line width in pixels (default: 3) */
    maxLineWidth: number;
    /** Minimum beam length in pixels (default: 100) */
    minLength: number;
    /** Maximum beam length in pixels (default: 400) */
    maxLength: number;
    /** Minimum opacity (0-1) (default: 0.3) */
    minOpacity: number;
    /** Maximum opacity (0-1) (default: 0.8) */
    maxOpacity: number;
    /** Enable glow effect (default: true) */
    glowEnabled: boolean;
    /** Glow blur radius in pixels (default: 10) */
    glowBlur: number;
    /** Whether to pause animation when not visible (default: true) */
    pauseOnHidden: boolean;
    /** Reduce quality on low-end devices (default: true) */
    adaptivePerformance: boolean;
}

/**
 * Represents a single laser beam in the animation
 */
export interface LaserBeam {
    /** Current X position */
    x: number;
    /** Current Y position */
    y: number;
    /** Length of the beam in pixels */
    length: number;
    /** Angle of movement in radians */
    angle: number;
    /** Movement speed */
    speed: number;
    /** Beam color (hex or css color) */
    color: string;
    /** Current opacity (0-1) */
    opacity: number;
    /** Line width in pixels */
    lineWidth: number;
    /** Unique identifier for the beam */
    id: number;
}

/**
 * Props for the LaserFlow component
 */
export interface LaserFlowProps {
    /** Optional custom configuration overrides */
    config?: Partial<LaserFlowConfig>;
    /** Additional CSS class name */
    className?: string;
    /** Whether the animation is paused */
    paused?: boolean;
}

/**
 * Canvas render context with dimensions
 */
export interface RenderContext {
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
    pixelRatio: number;
}

/**
 * Default configuration values
 */
export const DEFAULT_CONFIG: LaserFlowConfig = {
    beamCount: 20,
    speed: 1,
    colors: [
        '#00ffff', // Cyan
        '#00a8ff', // Blue
        '#a855f7', // Purple
        '#ff00ff', // Magenta
        '#00ff88', // Green
        '#ff6bd6', // Pink
    ],
    minLineWidth: 1,
    maxLineWidth: 4,
    minLength: 80,
    maxLength: 350,
    minOpacity: 0.2,
    maxOpacity: 0.7,
    glowEnabled: true,
    glowBlur: 15,
    pauseOnHidden: true,
    adaptivePerformance: true,
};

/**
 * Animation state for the component
 */
export interface AnimationState {
    beams: LaserBeam[];
    isRunning: boolean;
    frameId: number | null;
    lastTime: number;
}
