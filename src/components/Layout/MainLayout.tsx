import React from 'react';
import Header from './Header';
import LaserFlow from '../LaserFlow';

interface MainLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    className,
}) => {
    return (
        <div className={`relative min-h-screen text-white overflow-x-hidden ${className || ''}`}>
            {/* Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <LaserFlow
                    verticalBeamWidth={3.5}
                    horizontalBeamOffset={0}
                    verticalBeamOffset={-0.49}
                    horizontalSizing={2.95}
                    verticalSizing={8}
                    fogScale={0.15}
                    flowStrength={0.7}
                    flowSpeed={0.2}
                    fogIntensity={0.30}
                    wispSpeed={100}
                    wispDensity={1.5}
                    color="#976CC4"
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
