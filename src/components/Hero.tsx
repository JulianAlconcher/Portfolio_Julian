import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900 text-white pt-16">

            {/* Background Animation - Crazy Blurred Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-slate-900 z-[-2]"></div>

                {/* Animated Orbs */}
                <motion.div
                    animate={{
                        x: [0, 100, -100, 0],
                        y: [0, -100, 100, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]"
                />

                <motion.div
                    animate={{
                        x: [0, -150, 150, 0],
                        y: [0, 150, -150, 0],
                        scale: [1, 0.8, 1.3, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px]"
                />

                <motion.div
                    animate={{
                        x: [0, 200, -200, 0],
                        y: [0, 100, -100, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]"
                />

                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[4px] z-[-1]"></div>

                {/* Floating Linux Commands */}
                <TerminalCommands />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
                <div className="text-center max-w-4xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide mb-6">
                            Disponible para nuevos proyectos
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-gray-300"
                    >
                        Ingeniero en Sistemas de Información
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Transformo problemas complejos en soluciones de software elegantes, escalables y de alto rendimiento. Especializado en React, Node.js y arquitecturas modernas.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/25 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Ver Proyectos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>

                        <a href="#contact" className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-sm">
                            <span className="flex items-center gap-2">
                                Contactame <MailIcon size={18} />
                            </span>
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const TerminalCommands = () => {
    const commands = [
        'sudo systemctl restart nginx',
        'git commit -m "feat: core architecture"',
        'chmod +x script.sh',
        'docker-compose up -d',
        'npm run build',
        'ssh root@192.168.1.1',
        'ls -la /var/www/html',
        'grep -r "error" ./logs',
        'kubectl apply -f deployment.yaml',
        'mongod --dbpath /data/db',
        'tail -f access.log'
    ];

    return (
        <div className="absolute inset-0 z-[-1] opacity-20 pointer-events-none overflow-hidden font-mono">
            {commands.map((cmd, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: Math.random() * 100 + '%', y: Math.random() * 100 + '%' }}
                    animate={{
                        opacity: [0, 0.5, 0],
                        y: ['-10%', '110%'],
                    }}
                    transition={{
                        duration: 15 + Math.random() * 20,
                        repeat: Infinity,
                        delay: i * 2,
                        ease: "linear"
                    }}
                    className="absolute text-blue-400/50 whitespace-nowrap text-sm"
                >
                    <span className="text-green-500/50">$</span> {cmd}
                </motion.div>
            ))}
        </div>
    );
};

// Helper component for icon used specifically here if not imported
const MailIcon = ({ size, className }: { size?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

export default Hero;
