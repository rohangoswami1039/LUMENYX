/**
 * Button Component
 * 
 * A futuristic, neon-styled button with hover effects and multiple variants.
 */

import React from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual variant of the button */
    variant?: ButtonVariant;
    /** Size of the button */
    size?: ButtonSize;
    /** Full width button */
    fullWidth?: boolean;
    /** Loading state */
    isLoading?: boolean;
    /** Icon to show before text */
    leftIcon?: React.ReactNode;
    /** Icon to show after text */
    rightIcon?: React.ReactNode;
    /** Button content */
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    className,
    disabled,
    ...props
}) => {
    const buttonClasses = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        isLoading ? styles.loading : '',
        className || '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            className={buttonClasses}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && (
                <span className={styles.spinner} aria-hidden="true" />
            )}
            {!isLoading && leftIcon && (
                <span className={styles.icon}>{leftIcon}</span>
            )}
            <span className={styles.text}>{children}</span>
            {!isLoading && rightIcon && (
                <span className={styles.icon}>{rightIcon}</span>
            )}
        </button>
    );
};

export default Button;
