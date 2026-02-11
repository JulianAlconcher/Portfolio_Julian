import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const [isHeroBlackout, setIsHeroBlackout] = React.useState(false);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white pt-16">

            {/* Background Animation - Crazy Blurred Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-black z-[-2]"></div>

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
                    className="absolute top-1/4 left-1/4 w-125 h-125 bg-blue-600/30 rounded-full blur-[120px]"
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
                    className="absolute bottom-1/4 right-1/4 w-150 h-150 bg-purple-600/20 rounded-full blur-[140px]"
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
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-emerald-500/10 rounded-full blur-[100px]"
                />

                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs z-[-1]"></div>

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
                            Available for new projects
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-100 via-white to-gray-300"
                    >
                        Julian Alconcher
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-2xl mx-auto font-medium"
                    >
                        Software Engineer
                    </motion.p>

                    <MiniLinuxTerminal onBlackoutChange={setIsHeroBlackout} />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/25 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>

                        <a href="#contact" className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-sm">
                            <span className="flex items-center gap-2">
                                Contact Me <MailIcon size={18} />
                            </span>
                        </a>
                    </motion.div>

                </div>
            </div>

            {isHeroBlackout && <div className="absolute inset-0 z-50 bg-black"></div>}
        </section>
    );
};

type TerminalLine = {
    type: 'output' | 'command';
    text: string;
};

type MiniLinuxTerminalProps = {
    onBlackoutChange: (value: boolean) => void;
};

const MiniLinuxTerminal = ({ onBlackoutChange }: MiniLinuxTerminalProps) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const outputRef = React.useRef<HTMLDivElement>(null);
    const blackoutStartTimeoutRef = React.useRef<number | null>(null);
    const blackoutEndTimeoutRef = React.useRef<number | null>(null);

    const [input, setInput] = React.useState('');
    const [commandHistory, setCommandHistory] = React.useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = React.useState<number | null>(null);
    const [demoText, setDemoText] = React.useState('');
    const [isScreenOff, setIsScreenOff] = React.useState(false);
    const [lines, setLines] = React.useState<TerminalLine[]>([
        { type: 'output', text: 'Welcome to julian@portfolio terminal v1.0.0' },
        { type: 'output', text: 'Enjoy some Linux commands. Type "help" to get started.' },
    ]);

    const fileMap = React.useMemo(
        () => ({
            'about.txt': 'Software Engineer focused on frontend architecture, UX, and scalable systems.',
            'skills.txt': 'React, TypeScript, Node.js, Tailwind, PostgreSQL, Docker',
            'contact.txt': 'Email: julianalconcher@gmail.com | LinkedIn: /in/julianalconcher',
        }),
        []
    );

    React.useEffect(() => {
        if (!outputRef.current) return;
        outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }, [lines]);

    React.useEffect(() => {
        const demoCommands = ['ls -la', 'cat about.txt', 'cat skills.txt', 'help'];
        let commandIndex = 0;
        let charIndex = 0;
        let deleting = false;

        const tick = () => {
            const current = demoCommands[commandIndex];
            if (!deleting) {
                charIndex += 1;
                setDemoText(current.slice(0, charIndex));
                if (charIndex >= current.length) {
                    deleting = true;
                }
            } else {
                charIndex -= 1;
                setDemoText(current.slice(0, Math.max(0, charIndex)));
                if (charIndex <= 0) {
                    deleting = false;
                    commandIndex = (commandIndex + 1) % demoCommands.length;
                }
            }
        };

        const interval = window.setInterval(tick, deleting ? 55 : 85);
        return () => window.clearInterval(interval);
    }, []);

    React.useEffect(() => {
        return () => {
            if (blackoutStartTimeoutRef.current !== null) {
                window.clearTimeout(blackoutStartTimeoutRef.current);
            }
            if (blackoutEndTimeoutRef.current !== null) {
                window.clearTimeout(blackoutEndTimeoutRef.current);
            }
        };
    }, []);

    const runCommand = (rawCommand: string) => {
        const command = rawCommand.trim();
        if (!command) return;
        if (isScreenOff) return;

        const [baseCommand, ...args] = command.split(' ');
        const value = args.join(' ');
        const nextLines: TerminalLine[] = [{ type: 'command', text: `julian@portfolio:~$ ${command}` }];
        const lowerCommand = command.toLowerCase();
        const isDangerousCommand =
            lowerCommand.includes('kill') ||
            lowerCommand.includes('shutdown') ||
            lowerCommand.includes('poweroff') ||
            lowerCommand.includes('reboot') ||
            lowerCommand.includes('rm -rf');

        if (isDangerousCommand) {
            setLines((prev) => [...prev, ...nextLines, { type: 'output', text: 'System is shouting down...' }]);
            setCommandHistory((prev) => [...prev, command]);
            setHistoryIndex(null);
            setInput('');
            setIsScreenOff(true);
            blackoutStartTimeoutRef.current = window.setTimeout(() => {
                onBlackoutChange(true);
            }, 800);
            blackoutEndTimeoutRef.current = window.setTimeout(() => {
                onBlackoutChange(false);
                setIsScreenOff(false);
                setLines((prev) => [...prev, { type: 'output', text: 'joke!' }]);
            }, 5800);
            return;
        }

        if (baseCommand === 'help') {
            nextLines.push({
                type: 'output',
                text: 'Commands: help, whoami, uname, pwd, ls, cat <file>, date, echo <text>, clear',
            });
        } else if (baseCommand === 'whoami') {
            nextLines.push({ type: 'output', text: 'julianalconcher' });
        } else if (baseCommand === 'uname') {
            nextLines.push({ type: 'output', text: 'Linux portfolio 6.1.0 x86_64 GNU/Linux' });
        } else if (baseCommand === 'pwd') {
            nextLines.push({ type: 'output', text: '/home/julian' });
        } else if (baseCommand === 'ls') {
            nextLines.push({ type: 'output', text: 'about.txt  skills.txt  contact.txt  projects/' });
        } else if (baseCommand === 'cat') {
            if (!value) {
                nextLines.push({ type: 'output', text: 'usage: cat <file>' });
            } else if (value in fileMap) {
                nextLines.push({ type: 'output', text: fileMap[value as keyof typeof fileMap] });
            } else {
                nextLines.push({ type: 'output', text: `cat: ${value}: No such file or directory` });
            }
        } else if (baseCommand === 'date') {
            nextLines.push({ type: 'output', text: new Date().toString() });
        } else if (baseCommand === 'echo') {
            nextLines.push({ type: 'output', text: value });
        } else if (baseCommand === 'clear') {
            setLines([]);
            setInput('');
            setHistoryIndex(null);
            return;
        } else {
            nextLines.push({ type: 'output', text: `${baseCommand}: command not found` });
        }

        setLines((prev) => [...prev, ...nextLines]);
        setCommandHistory((prev) => [...prev, command]);
        setHistoryIndex(null);
        setInput('');
    };

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            runCommand(input);
            return;
        }

        if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (commandHistory.length === 0) return;
            const nextIndex = historyIndex === null ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
            setHistoryIndex(nextIndex);
            setInput(commandHistory[nextIndex]);
            return;
        }

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            if (commandHistory.length === 0) return;
            if (historyIndex === null) return;
            const nextIndex = historyIndex + 1;
            if (nextIndex >= commandHistory.length) {
                setHistoryIndex(null);
                setInput('');
                return;
            }
            setHistoryIndex(nextIndex);
            setInput(commandHistory[nextIndex]);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mx-auto mb-10 w-full max-w-2xl"
            onClick={() => inputRef.current?.focus()}
        >
            <div className="relative rounded-2xl border border-white/15 bg-black/70 backdrop-blur-md shadow-2xl shadow-black/35 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-white/5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/90"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/90"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90"></span>
                    <span className="ml-3 text-[11px] md:text-xs text-gray-300 font-mono">julian@portfolio:~</span>
                </div>

                <div ref={outputRef} className="h-56 overflow-y-auto px-4 py-3 text-left font-mono text-[12px] md:text-sm">
                    <div className="mb-2 text-blue-200/85">
                        <span className="text-green-300">demo@linux:~$</span> {demoText}
                        <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-blue-200/90 align-middle"></span>
                    </div>

                    {lines.map((line, index) => (
                        <div key={`${line.type}-${index}`} className="mb-1 whitespace-pre-wrap wrap-break-word">
                            {line.type === 'command' ? (
                                <span className="text-green-300">{line.text}</span>
                            ) : (
                                <span className="text-gray-200/90">{line.text}</span>
                            )}
                        </div>
                    ))}

                    <div className="flex items-center gap-2">
                        <span className="text-green-300">julian@portfolio:~$</span>
                        <input
                            ref={inputRef}
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            onKeyDown={handleInputKeyDown}
                            className="flex-1 bg-transparent text-gray-100 outline-none caret-blue-300 disabled:opacity-50"
                            spellCheck={false}
                            autoCapitalize="off"
                            autoComplete="off"
                            autoCorrect="off"
                            aria-label="Linux terminal input"
                            disabled={isScreenOff}
                        />
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

const TerminalCommands = () => {
    const commands = [
        'sudo apt update && sudo apt upgrade -y',
        'sudo systemctl restart nginx',
        'cat /etc/os-release',
        'git commit -m "feat: core architecture"',
        'chmod +x script.sh',
        'docker-compose up -d',
        'npm run build',
        'journalctl -u nginx --since "10 min ago"',
        'ssh root@192.168.1.1',
        'ls -la /var/www/html',
        'grep -r "error" ./logs',
        'find . -type f -name "*.conf"',
        'kubectl apply -f deployment.yaml',
        'mongod --dbpath /data/db',
        'tail -f /var/log/syslog',
        'top -o %CPU'
    ];

    const decorativeCommands = React.useMemo(
        () =>
            Array.from({ length: 72 }, (_, index) => {
                const left = (index * 11 + (index % 3) * 7) % 96;
                const driftX = (index % 2 === 0 ? 1 : -1) * (18 + (index % 5) * 6);
                const startY = 108 + (index % 4) * 10;
                const endY = -20 - (index % 3) * 12;
                return {
                    id: index,
                    command: commands[index % commands.length],
                    left,
                    driftX,
                    startY,
                    endY,
                    duration: 12 + (index % 7) * 1.8,
                    delay: index * 0.45,
                    repeatDelay: (index % 4) * 0.35,
                };
            }),
        []
    );

    return (
        <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden font-mono">
            {decorativeCommands.map((item) => (
                <motion.div
                    key={item.id}
                    style={{ left: `${item.left}%`, top: 0 }}
                    initial={{ opacity: 0, x: 0, y: `${item.startY}vh` }}
                    animate={{
                        opacity: [0, 0.4, 0.4, 0],
                        y: [`${item.startY}vh`, `${item.endY}vh`],
                        x: [0, item.driftX],
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        delay: item.delay,
                        repeatDelay: item.repeatDelay,
                        ease: "linear",
                    }}
                    className="absolute whitespace-nowrap text-[11px] md:text-xs tracking-wide text-white/34 blur-[0.8px]"
                >
                    <span className="text-white/46">$</span> {item.command}
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
