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

        // Get current scroll position and total scrollable height
        const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Absolute position of the port relative to the top of the document
        const portRect = port.getBoundingClientRect();
        const portAbsY = portRect.top + window.scrollY;

        // At scroll progress 100%, the viewport top is at totalScrollableHeight.
        // We want the cable to end such that the connector is inserted into the port.
        // Port top Y relative to viewport at 100% scroll:
        const portViewportYAtBottom = portAbsY - totalScrollableHeight;

        // Total height of the cable should be the distance to the port + insertion depth - connector height
        // We want the 'rim' of the connector to sit near the port top.
        const targetHeight = portViewportYAtBottom + INSERTION_DEPTH - CONNECTOR_BODY_HEIGHT;

        setMaxCableHeight(targetHeight);
    }, []);

    useEffect(() => {
        const timer = setTimeout(recalculate, 500);
        window.addEventListener('resize', recalculate);
        window.addEventListener('scroll', recalculate); // Recalculate as layout might shift
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', recalculate);
            window.removeEventListener('scroll', recalculate);
        };
    }, [recalculate]);

    // Height of the cable line
    const height = useTransform(scrollYProgress, [0, 0.98, 1], [0, maxCableHeight - 5, maxCableHeight]);

    // Smoothly show connector
    const connectorOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

    // Dispatch connection event
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest >= 0.99 && !hasConnected) {
            setHasConnected(true);
            window.dispatchEvent(new CustomEvent('rj45-connect', { detail: { connected: true } }));
        } else if (latest < 0.99 && hasConnected) {
            setHasConnected(false);
            window.dispatchEvent(new CustomEvent('rj45-connect', { detail: { connected: false } }));
        }
    });

    return (
        <div className="fixed top-0 right-[60px] translate-x-1/2 z-[100] pointer-events-none hidden lg:block">
            {/* The Cable Line */}
            <motion.div
                style={{ height }}
                className="w-[4px] bg-cyan-600 shadow-[0_0_10px_rgba(34,211,238,0.3)] relative"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* RJ45 Male Connector (Male) */}
                <motion.div
                    style={{ opacity: connectorOpacity }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full"
                >
                    <div className="relative">
                        {/* Click Spark / Glow */}
                        {hasConnected && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                                className="absolute inset-0 bg-cyan-400 rounded-full blur-md"
                            />
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
            </motion.div>
        </div>
    );
};

export default ScrollCable;
