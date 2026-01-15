/**
 * MainLayout Component
 * 
 * Primary layout wrapper that positions content above the LaserFlow background
 * with proper z-indexing and responsive container styling.
 */

import React from 'react';
import styles from './MainLayout.module.css';
import LaserFlow from '../Background/LaserFlow';

interface MainLayoutProps {
    /** Child content to render within the layout */
    children: React.ReactNode;
    /** Optional additional CSS class */
    className?: string;
    /** Whether to show the animated background */
    showBackground?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    className,
    showBackground = true,
}) => {
    return (
        <div className={`${styles.layout} ${className || ''}`}>
            {/* Animated Background Layer */}
            {showBackground && <LaserFlow />}

            {/* Content Layer */}
            <div className={styles.content}>
                <main className={styles.main}>{children}</main>
            </div>
        </div>
    );
};

export default MainLayout;
