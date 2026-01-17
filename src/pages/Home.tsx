import React from 'react';
import LaserFlow from '../components/LaserFlow';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col w-full">
            {/* Section 1: Hero (100vh) */}
            <section className="relative flex items-center justify-center w-full h-screen overflow-hidden">
                {/* Background Layer (Scrolls with Hero) */}
                <div className="absolute inset-0 z-0 pointer-events-none">
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

                <div className="relative z-10 p-12 text-center group">

                    <div className="absolute inset-0 m-4 transition-all duration-700 " />

                    <p className="text-9xl text-white bai-jamjuree-extralight">
                        LUMENYX
                    </p>
                    <p className="mt-4 text-xs font-medium tracking-[0.6em] text-white/60 uppercase">
                        Bringing Ideas to Light
                    </p>
                </div>
            </section>

            {/* Navigation Separator Bar */}
            <nav className="sticky top-0 z-50 flex items-center justify-center w-full h-24 bg-black border-t-2 border-purple-500/80 shadow-[0_-15px_30px_-5px_rgba(168,85,247,0.4)]">
                <div className="flex items-center space-x-24">
                    <a href="#about" className="text-xs font-medium tracking-[0.5em] text-white/70 uppercase hover:text-white transition-colors">About</a>
                    <a href="#services" className="text-xs font-medium tracking-[0.5em] text-white/70 uppercase hover:text-white transition-colors">Services</a>
                    <a href="#pricing" className="text-xs font-medium tracking-[0.5em] text-white/70 uppercase hover:text-white transition-colors">Pricing</a>
                    <a href="#contact" className="text-xs font-medium tracking-[0.5em] text-white/70 uppercase hover:text-white transition-colors">Contact</a>
                </div>
            </nav>

            {/* Section 2: Content Section (100vh) */}
            <section className="relative flex flex-row items-center justify-between w-full h-screen px-20 overflow-hidden bg-black">
                {/* Subtle purple glow background for this section */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-purple-900/10 blur-[150px] pointer-events-none" />

                {/* Left Card: Full-Stack Ecosystems */}
                <div className="relative z-10 w-full max-w-xl p-10 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group">
                    <div className="space-y-6">
                        <span className="text-xs font-mono tracking-widest text-white/40 uppercase">01 // BUILD // DEV</span>
                        <h2 className="text-4xl font-bold tracking-tight text-white leading-tight">
                            Full-Stack Ecosystems
                        </h2>

                        {/* Illustration Placeholder/Area */}
                        <div className="relative w-full aspect-video rounded-xl bg-black/40 overflow-hidden border border-white/5">
                            <img
                                src="/assets/full_stack_ecosystems_illustration.png"
                                alt="Full-Stack Technical Illustration"
                                className="w-full h-full object-cover mix-blend-screen opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Text: YOUR DESIGNS OUR */}
                <div className="relative z-10 flex flex-col text-right">
                    <h2 className="text-[120px] font-black leading-[1] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-purple-400 to-purple-600 opacity-90">
                        YOUR<br />DESIGNS<br />OUR
                    </h2>
                </div>
            </section>
        </div>
    );
};

export default Home;
