import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    className,
}) => {
    return (
        <div className={`relative min-h-screen text-white bg-black overflow-x-hidden ${className || ''}`}>
            {/* Content Layer (Scrollable) */}
            <div className="relative z-10 flex flex-col">
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
