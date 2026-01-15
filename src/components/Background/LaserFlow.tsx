/**
 * LaserFlow Background Component
 * 
 * A canvas-based animated background featuring flowing laser beams
 * inspired by React Bits / sci-fi aesthetics.
 * 
 * Features:
 * - GPU-accelerated canvas rendering
 * - Responsive resize handling
 * - Performance-adaptive rendering
 * - Automatic pause when tab is hidden
 */

import React, { useRef, useEffect, useMemo, useCallback } from 'react';
import {
    LaserFlowProps,
    LaserFlowConfig,
    LaserBeam,
    AnimationState,
    DEFAULT_CONFIG,
} from './LaserFlow.types';
import {
    randomRange,
    randomInt,
    degToRad,
    isLowEndDevice,
    getOptimalPixelRatio,
    debounce,
} from '../../utils/math';
import styles from './LaserFlow.module.css';

/**
 * Creates a new laser beam with randomized properties
 */
function createBeam(
    id: number,
    width: number,
    height: number,
    config: LaserFlowConfig
): LaserBeam {
    // Random angle between -30 and 30 degrees (mostly horizontal flow)
    const angleVariation = randomRange(-30, 30);
    const baseAngle = randomInt(0, 1) === 0 ? 0 : 180; // Left or right
    const angle = degToRad(baseAngle + angleVariation);

    // Start position - spawn from edges
    let x: number;
    let y: number;

    if (baseAngle === 0) {
        // Moving right, spawn from left
        x = -randomRange(50, config.maxLength);
        y = randomRange(-50, height + 50);
    } else {
        // Moving left, spawn from right
        x = width + randomRange(50, config.maxLength);
        y = randomRange(-50, height + 50);
    }

    return {
        id,
        x,
        y,
        length: randomRange(config.minLength, config.maxLength),
        angle,
        speed: randomRange(2, 6) * config.speed,
        color: config.colors[randomInt(0, config.colors.length - 1)],
        opacity: randomRange(config.minOpacity, config.maxOpacity),
        lineWidth: randomRange(config.minLineWidth, config.maxLineWidth),
    };
}

/**
 * Updates a beam's position and respawns if out of bounds
 */
function updateBeam(
    beam: LaserBeam,
    width: number,
    height: number,
    config: LaserFlowConfig,
    deltaTime: number
): LaserBeam {
    const velocity = beam.speed * (deltaTime / 16.67); // Normalize to 60fps
    const newX = beam.x + Math.cos(beam.angle) * velocity;
    const newY = beam.y + Math.sin(beam.angle) * velocity;

    // Check if beam is out of bounds
    const padding = beam.length + 100;
    const outOfBounds =
        newX < -padding ||
        newX > width + padding ||
        newY < -padding ||
        newY > height + padding;

    if (outOfBounds) {
        // Respawn as new beam
        return createBeam(beam.id, width, height, config);
    }

    return {
        ...beam,
        x: newX,
        y: newY,
    };
}

/**
 * Renders a single laser beam to the canvas
 */
function renderBeam(
    ctx: CanvasRenderingContext2D,
    beam: LaserBeam,
    config: LaserFlowConfig
): void {
    const endX = beam.x + Math.cos(beam.angle) * beam.length;
    const endY = beam.y + Math.sin(beam.angle) * beam.length;

    ctx.save();

    // Apply glow effect
    if (config.glowEnabled) {
        ctx.shadowColor = beam.color;
        ctx.shadowBlur = config.glowBlur;
    }

    // Create gradient for beam fade
    const gradient = ctx.createLinearGradient(beam.x, beam.y, endX, endY);
    const colorWithOpacity = (opacity: number) => {
        // Parse hex color and apply opacity
        if (beam.color.startsWith('#')) {
            const hex = beam.color.slice(1);
            const r = parseInt(hex.slice(0, 2), 16);
            const g = parseInt(hex.slice(2, 4), 16);
            const b = parseInt(hex.slice(4, 6), 16);
            return `rgba(${r}, ${g}, ${b}, ${opacity})`;
        }
        return beam.color;
    };

    gradient.addColorStop(0, colorWithOpacity(0));
    gradient.addColorStop(0.1, colorWithOpacity(beam.opacity * 0.5));
    gradient.addColorStop(0.5, colorWithOpacity(beam.opacity));
    gradient.addColorStop(0.9, colorWithOpacity(beam.opacity * 0.5));
    gradient.addColorStop(1, colorWithOpacity(0));

    // Draw the beam
    ctx.beginPath();
    ctx.moveTo(beam.x, beam.y);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = beam.lineWidth;
    ctx.lineCap = 'round';
    ctx.stroke();

    ctx.restore();
}

/**
 * LaserFlow Component
 * 
 * Canvas-based animated background with flowing laser beams
 */
export const LaserFlow: React.FC<LaserFlowProps> = ({
    config: userConfig,
    className,
    paused = false,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<AnimationState>({
        beams: [],
        isRunning: false,
        frameId: null,
        lastTime: 0,
    });

    // Merge user config with defaults
    const config = useMemo<LaserFlowConfig>(() => {
        const merged = { ...DEFAULT_CONFIG, ...userConfig };

        // Reduce complexity on low-end devices
        if (merged.adaptivePerformance && isLowEndDevice()) {
            merged.beamCount = Math.floor(merged.beamCount * 0.5);
            merged.glowEnabled = false;
        }

        return merged;
    }, [userConfig]);

    // Initialize beams
    const initializeBeams = useCallback((width: number, height: number) => {
        const beams: LaserBeam[] = [];
        for (let i = 0; i < config.beamCount; i++) {
            const beam = createBeam(i, width, height, config);
            // Randomize initial x position so beams are spread out
            beam.x = randomRange(-config.maxLength, width + config.maxLength);
            beams.push(beam);
        }
        animationRef.current.beams = beams;
    }, [config]);

    // Handle canvas resize
    const handleResize = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const parent = canvas.parentElement;
        if (!parent) return;

        const pixelRatio = getOptimalPixelRatio();
        const width = parent.clientWidth;
        const height = parent.clientHeight;

        // Set display size
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        // Set actual size in memory
        canvas.width = width * pixelRatio;
        canvas.height = height * pixelRatio;

        // Scale context
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.scale(pixelRatio, pixelRatio);
        }

        // Re-initialize beams with new dimensions
        initializeBeams(width, height);
    }, [initializeBeams]);

    // Animation loop
    const animate = useCallback((currentTime: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const state = animationRef.current;

        if (!canvas || !ctx || !state.isRunning) return;

        // Calculate delta time
        const deltaTime = state.lastTime ? currentTime - state.lastTime : 16.67;
        state.lastTime = currentTime;

        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Update and render beams
        state.beams = state.beams.map((beam) =>
            updateBeam(beam, width, height, config, deltaTime)
        );

        // Render beams (back to front for proper layering)
        state.beams.forEach((beam) => {
            renderBeam(ctx, beam, config);
        });

        // Continue animation
        state.frameId = requestAnimationFrame(animate);
    }, [config]);

    // Start/stop animation
    useEffect(() => {
        const state = animationRef.current;

        if (paused) {
            state.isRunning = false;
            if (state.frameId !== null) {
                cancelAnimationFrame(state.frameId);
                state.frameId = null;
            }
        } else {
            state.isRunning = true;
            state.lastTime = 0;
            state.frameId = requestAnimationFrame(animate);
        }

        return () => {
            if (state.frameId !== null) {
                cancelAnimationFrame(state.frameId);
            }
        };
    }, [paused, animate]);

    // Handle visibility change (pause when tab is hidden)
    useEffect(() => {
        if (!config.pauseOnHidden) return;

        const handleVisibilityChange = () => {
            const state = animationRef.current;

            if (document.hidden) {
                state.isRunning = false;
                if (state.frameId !== null) {
                    cancelAnimationFrame(state.frameId);
                    state.frameId = null;
                }
            } else if (!paused) {
                state.isRunning = true;
                state.lastTime = 0;
                state.frameId = requestAnimationFrame(animate);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [config.pauseOnHidden, paused, animate]);

    // Initialize and handle resize
    useEffect(() => {
        handleResize();

        const debouncedResize = debounce(handleResize, 200);
        window.addEventListener('resize', debouncedResize);

        return () => {
            window.removeEventListener('resize', debouncedResize);
        };
    }, [handleResize]);

    return (
        <div className={`${styles.container} ${className || ''}`}>
            <canvas
                ref={canvasRef}
                className={styles.canvas}
                aria-hidden="true"
            />
        </div>
    );
};

export default LaserFlow;
