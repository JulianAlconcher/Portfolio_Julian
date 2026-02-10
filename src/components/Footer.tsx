import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const handleConnection = (e: any) => {
            setIsConnected(e.detail.connected);
        };
        window.addEventListener('rj45-connect', handleConnection);
        return () => window.removeEventListener('rj45-connect', handleConnection);
    }, []);

    return (
        <footer className="bg-slate-950 py-12 text-center text-gray-500 text-sm border-t border-slate-900 relative">
            <div className="container mx-auto px-4 relative z-10">
                <p>&copy; {new Date().getFullYear()} Julian Alconcher. All rights reserved.</p>
                <p className="mt-2 text-gray-600 italic">"The code is the law, but the logic is the engineering."</p>
                <p className="mt-4">Built with React & Tailwind CSS.</p>
            </div>

            {/* RJ45 Female Port (Switch Jack) - Target for the cable */}
            <div
                id="rj45-port"
                className="absolute -top-[28px] right-[60px] translate-x-1/2 hidden lg:block"
            >
                <div className={`transition-colors duration-300 ${isConnected ? 'bg-slate-600 border-cyan-400' : 'bg-slate-700 border-slate-600'} border rounded-md shadow-lg p-[3px]`}>
                    <div className="flex flex-col items-center">
                        {/* LEDs Row */}
                        <div className="flex gap-3 mb-1 px-1">
                            <div className={`w-[5px] h-[5px] rounded-full transition-colors ${isConnected ? 'bg-green-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,1)]' : 'bg-green-900 shadow-none'}`}></div>
                            <div className={`w-[5px] h-[5px] rounded-full transition-colors ${isConnected ? 'bg-amber-400 animate-fast-pulse shadow-[0_0_6px_rgba(245,158,11,1)]' : 'bg-amber-900 shadow-none'}`}></div>
                        </div>

                        {/* The Port Opening */}
                        <div className="w-[30px] h-[24px] bg-slate-900 rounded-sm border border-slate-800 relative flex flex-col items-center justify-start pt-[2px] overflow-hidden">
                            {/* Inner Pins detail */}
                            <div className="flex gap-[1.5px]">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className={`w-[1px] h-[8px] transition-colors ${isConnected ? 'bg-amber-400' : 'bg-amber-600/30'}`}></div>
                                ))}
                            </div>
                            {/* Clip notch */}
                            <div className="w-[10px] h-[4px] bg-slate-800 rounded-b-sm mt-auto mb-[1px]"></div>
                        </div>
                    </div>
                </div>
                {/* Label */}
                <div className="text-center mt-1">
                    <span className={`text-[7px] font-mono uppercase tracking-[0.15em] font-bold transition-colors ${isConnected ? 'text-cyan-400' : 'text-slate-500'}`}>
                        {isConnected ? 'Link Active' : 'Eth 0'}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
