import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const CONNECTOR_BODY_HEIGHT = 44; // Total height of the visible connector part in SVG
const INSERTION_DEPTH = 12; // Pixels to insert into the port

const ScrollCable: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const [maxCableHeight, setMaxCableHeight] = useState(0);
    const [hasConnected, setHasConnected] = useState(false);

    const recalculate = useCallback(() => {
        const port = document.getElementById('rj45-port');
        if (!port) return;

        const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const portRect = port.getBoundingClientRect();
        const portAbsY = portRect.top + window.scrollY;
        const portViewportYAtBottom = portAbsY - totalScrollableHeight;
        const targetHeight = portViewportYAtBottom + INSERTION_DEPTH - CONNECTOR_BODY_HEIGHT;

        setMaxCableHeight(targetHeight);
    }, []);

    useEffect(() => {
        const timer = setTimeout(recalculate, 500);
        window.addEventListener('resize', recalculate);
        window.addEventListener('scroll', recalculate);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', recalculate);
            window.removeEventListener('scroll', recalculate);
        };
    }, [recalculate]);

    // Height of the cable line
    const height = useTransform(scrollYProgress, [0, 1], [0, maxCableHeight]);

    // Audio helper using Web Audio API to simulate a classic RJ45 plastic click
    const playClickSound = useCallback(() => {
        try {
            const AudioContextClass = (window.AudioContext || (window as any).webkitAudioContext);
            const audioCtx = new AudioContextClass();

            // First part of the click: high frequency snap
            const osc1 = audioCtx.createOscillator();
            const gain1 = audioCtx.createGain();
            osc1.type = 'triangle';
            osc1.frequency.setValueAtTime(1200, audioCtx.currentTime);
            osc1.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.04);
            gain1.gain.setValueAtTime(0.2, audioCtx.currentTime);
            gain1.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.04);
            osc1.connect(gain1);
            gain1.connect(audioCtx.destination);

            // Second part: the plastic internal "clack"
            const osc2 = audioCtx.createOscillator();
            const gain2 = audioCtx.createGain();
            osc2.type = 'square';
            osc2.frequency.setValueAtTime(400, audioCtx.currentTime);
            gain2.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gain2.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
            osc2.connect(gain2);
            gain2.connect(audioCtx.destination);

            osc1.start();
            osc2.start();
            osc1.stop(audioCtx.currentTime + 0.05);
            osc2.stop(audioCtx.currentTime + 0.05);
        } catch (e) {
            console.error("Audio failed", e);
        }
    }, []);

    // Dispatch connection event
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest >= 0.999 && !hasConnected) {
            setHasConnected(true);
            playClickSound();
            window.dispatchEvent(new CustomEvent('rj45-connect', { detail: { connected: true } }));
        } else if (latest < 0.995 && hasConnected) {
            setHasConnected(false);
            window.dispatchEvent(new CustomEvent('rj45-connect', { detail: { connected: false } }));
        }
    });

    return (
        <div className="fixed top-0 right-[60px] translate-x-1/2 z-[40] pointer-events-none hidden lg:block overflow-visible">
            {/* Organic Curved Cable using SVG */}
            <svg
                width="60"
                height={maxCableHeight + 60}
                className="absolute top-0 left-1/2 -translate-x-1/2"
                style={{ overflow: 'visible' }}
            >
                <motion.path
                    d={useTransform(height, (h) => {
                        const val = typeof h === 'string' ? parseFloat(h) : h;
                        // Create a slight S-curve that scales with height
                        const sway = 8;
                        return `M 30 0 
                                C ${30 + sway} ${val * 0.3} 
                                  ${30 - sway} ${val * 0.7} 
                                  30 ${val}`;
                    })}
                    stroke="#164e63" // cyan-900ish
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{
                        pathLength: 1,
                        stroke: hasConnected ? "#22d3ee" : "#164e63"
                    }}
                    transition={{ stroke: { duration: 0.3 } }}
                    className="shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                />
                {/* Highlight line for the cable cable */}
                <motion.path
                    d={useTransform(height, (h) => {
                        const val = typeof h === 'string' ? parseFloat(h) : h;
                        const sway = 8;
                        return `M 31 0 
                                C ${31 + sway} ${val * 0.3} 
                                  ${31 - sway} ${val * 0.7} 
                                  31 ${val}`;
                    })}
                    stroke="#22d3ee"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                    fill="none"
                    strokeLinecap="round"
                />
            </svg>

            {/* RJ45 Male Connector - Positioned using the same height transform */}
            <motion.div
                style={{
                    y: height,
                    x: "-50%"
                }}
                className="absolute top-0 left-1/2"
            >
                <div className="relative mt-[0px]">
                    {/* Click Spark / Explosion / Glow */}
                    {hasConnected && (
                        <>
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: [1, 5], opacity: [0.9, 0] }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="absolute inset-0 bg-cyan-400 rounded-full blur-2xl z-[60]"
                            />
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: [1, 8], opacity: [0.5, 0] }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.05 }}
                                className="absolute inset-0 border-4 border-cyan-300 rounded-full blur-md z-[60]"
                            />
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: [1, 4], opacity: [1, 0] }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute inset-0 bg-white rounded-full blur-lg z-[60]"
                            />
                        </>
                    )}

                    <svg
                        width="32"
                        height="50"
                        viewBox="0 0 32 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    >
                        {/* Boot / Strain Relief */}
                        <rect x="10" y="0" width="12" height="10" rx="2" fill="#334155" />
                        {/* Main Body */}
                        <rect x="4" y="6" width="24" height="34" rx="2" fill="#94A3B8" />
                        <rect x="6" y="10" width="20" height="15" rx="1" fill="#CBD5E1" />

                        {/* The "Insert" part with pins */}
                        <rect x="7" y="40" width="18" height="10" rx="1" fill="#64748B" />

                        {/* Pins (Gold) */}
                        <g>
                            {[...Array(8)].map((_, i) => (
                                <rect key={i} x={9 + i * 2} y="44" width="1.2" height="6" fill="#F59E0B" />
                            ))}
                        </g>

                        {/* Locking Clip (facing down) */}
                        <path d="M12 20H20V35L16 40L12 35V20Z" fill="#B0BEC5" stroke="#475569" strokeWidth="0.5" />
                    </svg>
                </div>
            </motion.div>
        </div>
    );
};

export default ScrollCable;
