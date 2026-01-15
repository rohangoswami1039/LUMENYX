/**
 * Home Page Component
 * 
 * The main landing page showcasing the Antigravity theme
 * with floating elements and hero section.
 */

import React from 'react';
import styles from './Home.module.css';
import Button from '../components/UI/Button';

export const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    {/* Floating Badge */}
                    <div className={styles.badge}>
                        <span className={styles.badgeDot} />
                        <span>Next Generation Interface</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className={styles.title}>
                        <span className={styles.titleLine}>Experience</span>
                        <span className={`${styles.titleLine} ${styles.gradientText}`}>
                            Antigravity
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className={styles.subtitle}>
                        A futuristic web experience powered by cutting-edge animations
                        and modern design principles. Where technology meets art.
                    </p>

                    {/* CTA Buttons */}
                    <div className={styles.ctaGroup}>
                        <Button variant="primary" size="lg">
                            Get Started
                        </Button>
                        <Button variant="outline" size="lg">
                            Learn More
                        </Button>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className={styles.floatingElements}>
                    <div className={`${styles.floatElement} ${styles.element1}`} />
                    <div className={`${styles.floatElement} ${styles.element2}`} />
                    <div className={`${styles.floatElement} ${styles.element3}`} />
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.features}>
                <div className={styles.featureGrid}>
                    {/* Feature Card 1 */}
                    <article className={styles.featureCard}>
                        <div className={styles.featureIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        </div>
                        <h3 className={styles.featureTitle}>Lightning Fast</h3>
                        <p className={styles.featureDesc}>
                            Optimized for performance with GPU-accelerated animations
                            that run at 60fps.
                        </p>
                    </article>

                    {/* Feature Card 2 */}
                    <article className={styles.featureCard}>
                        <div className={styles.featureIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                        </div>
                        <h3 className={styles.featureTitle}>Responsive</h3>
                        <p className={styles.featureDesc}>
                            Adapts seamlessly to any screen size from mobile to ultra-wide.
                        </p>
                    </article>

                    {/* Feature Card 3 */}
                    <article className={styles.featureCard}>
                        <div className={styles.featureIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                            </svg>
                        </div>
                        <h3 className={styles.featureTitle}>Accessible</h3>
                        <p className={styles.featureDesc}>
                            Built with accessibility in mind, respecting reduced motion preferences.
                        </p>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Home;
