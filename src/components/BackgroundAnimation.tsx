import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

const Blob = ({ color, speed, size, delay }: { color: string; speed: number; size: number; delay: number }) => {
    const frame = useCurrentFrame();
    const { width, height } = useVideoConfig();

    const x = interpolate(
        Math.sin((frame + delay) * 0.02 * speed),
        [-1, 1],
        [0, width]
    );
    const y = interpolate(
        Math.cos((frame + delay) * 0.015 * speed),
        [-1, 1],
        [0, height]
    );

    const scale = interpolate(
        Math.sin((frame + delay) * 0.01 * speed),
        [-1, 1],
        [0.8, 1.2]
    );

    return (
        <div
            style={{
                position: 'absolute',
                width: size,
                height: size,
                left: x - size / 2,
                top: y - size / 2,
                backgroundColor: color,
                borderRadius: '50%',
                filter: 'blur(80px)',
                opacity: 0.4,
                transform: `scale(${scale})`,
            }}
        />
    );
};

export const BackgroundAnimation: React.FC = () => {
    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#0f172a', position: 'relative', overflow: 'hidden' }}>
            <Blob color="#3b82f6" speed={1.2} size={400} delay={0} />
            <Blob color="#8b5cf6" speed={0.8} size={500} delay={100} />
            <Blob color="#10b981" speed={1.5} size={350} delay={200} />
            <Blob color="#3b82f6" speed={1} size={450} delay={300} />
        </div>
    );
};
