import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Drum, Music4 } from 'lucide-react';

type DrumId = 'kick' | 'snare' | 'hihat' | 'rackTom' | 'floorTom' | 'crash';

const Hobbies = () => {
    const audioContextRef = useRef<AudioContext | null>(null);
    const noiseBufferRef = useRef<AudioBuffer | null>(null);
    const [isHiddenRoomOpen, setIsHiddenRoomOpen] = useState(false);
    const [activePiece, setActivePiece] = useState<DrumId | null>(null);
    const activeHitTimeoutRef = useRef<number | null>(null);

    const keyMap = useMemo(
        () => ({
            KeyA: 'kick' as DrumId,
            KeyS: 'snare' as DrumId,
            KeyD: 'hihat' as DrumId,
            KeyF: 'rackTom' as DrumId,
            KeyG: 'floorTom' as DrumId,
            KeyH: 'crash' as DrumId,
        }),
        []
    );

    const getAudioContext = useCallback(async () => {
        if (!audioContextRef.current) {
            audioContextRef.current = new window.AudioContext();
        }
        if (audioContextRef.current.state === 'suspended') {
            await audioContextRef.current.resume();
        }
        return audioContextRef.current;
    }, []);

    const getNoiseBuffer = useCallback((ctx: AudioContext) => {
        if (noiseBufferRef.current) return noiseBufferRef.current;
        const buffer = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i += 1) {
            data[i] = Math.random() * 2 - 1;
        }
        noiseBufferRef.current = buffer;
        return buffer;
    }, []);

    const animateHit = useCallback((piece: DrumId) => {
        setActivePiece(piece);
        if (activeHitTimeoutRef.current) {
            window.clearTimeout(activeHitTimeoutRef.current);
        }
        activeHitTimeoutRef.current = window.setTimeout(() => {
            setActivePiece(null);
        }, 120);
    }, []);

    const playKick = useCallback((ctx: AudioContext) => {
        const now = ctx.currentTime;
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(150, now);
        oscillator.frequency.exponentialRampToValueAtTime(45, now + 0.14);
        gain.gain.setValueAtTime(1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        oscillator.connect(gain);
        gain.connect(ctx.destination);
        oscillator.start(now);
        oscillator.stop(now + 0.22);
    }, []);

    const playSnare = useCallback(
        (ctx: AudioContext) => {
            const now = ctx.currentTime;
            const noise = ctx.createBufferSource();
            const noiseFilter = ctx.createBiquadFilter();
            const noiseGain = ctx.createGain();
            const tone = ctx.createOscillator();
            const toneGain = ctx.createGain();
            noise.buffer = getNoiseBuffer(ctx);
            noiseFilter.type = 'highpass';
            noiseFilter.frequency.setValueAtTime(1500, now);
            noiseGain.gain.setValueAtTime(0.55, now);
            noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
            tone.type = 'triangle';
            tone.frequency.setValueAtTime(190, now);
            toneGain.gain.setValueAtTime(0.35, now);
            toneGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
            noise.connect(noiseFilter);
            noiseFilter.connect(noiseGain);
            noiseGain.connect(ctx.destination);
            tone.connect(toneGain);
            toneGain.connect(ctx.destination);
            noise.start(now);
            noise.stop(now + 0.14);
            tone.start(now);
            tone.stop(now + 0.11);
        },
        [getNoiseBuffer]
    );

    const playHiHat = useCallback(
        (ctx: AudioContext) => {
            const now = ctx.currentTime;
            const noise = ctx.createBufferSource();
            const filter = ctx.createBiquadFilter();
            const gain = ctx.createGain();
            noise.buffer = getNoiseBuffer(ctx);
            filter.type = 'highpass';
            filter.frequency.setValueAtTime(7600, now);
            gain.gain.setValueAtTime(0.45, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);
            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start(now);
            noise.stop(now + 0.07);
        },
        [getNoiseBuffer]
    );

    const playTom = useCallback((ctx: AudioContext, startFrequency: number) => {
        const now = ctx.currentTime;
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(startFrequency, now);
        oscillator.frequency.exponentialRampToValueAtTime(startFrequency * 0.45, now + 0.2);
        gain.gain.setValueAtTime(0.8, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        oscillator.connect(gain);
        gain.connect(ctx.destination);
        oscillator.start(now);
        oscillator.stop(now + 0.24);
    }, []);

    const playCrash = useCallback(
        (ctx: AudioContext) => {
            const now = ctx.currentTime;
            const noise = ctx.createBufferSource();
            const filter = ctx.createBiquadFilter();
            const gain = ctx.createGain();
            noise.buffer = getNoiseBuffer(ctx);
            filter.type = 'highpass';
            filter.frequency.setValueAtTime(5200, now);
            gain.gain.setValueAtTime(0.75, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start(now);
            noise.stop(now + 0.5);
        },
        [getNoiseBuffer]
    );

    const triggerDrum = useCallback(
        async (piece: DrumId) => {
            const ctx = await getAudioContext();
            animateHit(piece);

            if (piece === 'kick') playKick(ctx);
            if (piece === 'snare') playSnare(ctx);
            if (piece === 'hihat') playHiHat(ctx);
            if (piece === 'rackTom') playTom(ctx, 240);
            if (piece === 'floorTom') playTom(ctx, 150);
            if (piece === 'crash') playCrash(ctx);
        },
        [animateHit, getAudioContext, playCrash, playHiHat, playKick, playSnare, playTom]
    );

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!isHiddenRoomOpen) return;
            const piece = keyMap[event.code as keyof typeof keyMap];
            if (!piece) return;
            event.preventDefault();
            void triggerDrum(piece);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isHiddenRoomOpen, keyMap, triggerDrum]);

    useEffect(() => {
        return () => {
            if (activeHitTimeoutRef.current) {
                window.clearTimeout(activeHitTimeoutRef.current);
            }
            if (audioContextRef.current) {
                void audioContextRef.current.close();
            }
        };
    }, []);

    const partColor = (id: DrumId, base: string, hit: string) => (activePiece === id ? hit : base);

    return (
        <section id="hobbies" className="relative overflow-hidden border-t border-black/20 bg-white py-24 text-black">
            <div className="pointer-events-none absolute inset-0 opacity-30 bg-[repeating-linear-gradient(112deg,rgba(0,0,0,0.08)_0px,rgba(0,0,0,0.08)_2px,transparent_2px,transparent_30px)]"></div>

            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-[28px] border-2 border-black/25 bg-[#fff8d6] p-7 shadow-[0_16px_0_rgba(0,0,0,0.22),0_24px_34px_rgba(0,0,0,0.2)] sm:p-10">
                    <div className="pointer-events-none absolute left-6 -top-3 h-7 w-20 rotate-[-8deg] rounded-sm bg-white/70"></div>
                    <div className="pointer-events-none absolute right-10 -top-3 h-7 w-24 rotate-[9deg] rounded-sm bg-white/65"></div>

                    <p className="mb-4 inline-flex -rotate-2 items-center gap-2 rounded-md border-2 border-black/35 bg-[#c9f2ff] px-3 py-1 text-xs font-black uppercase tracking-[0.16em]">
                        <Music4 size={14} /> Hobbies
                    </p>
                    <h2 className="max-w-3xl text-4xl font-black leading-[0.95] sm:text-5xl">
                        I recharge with music, rhythm and real drum practice.
                    </h2>
                    <p className="mt-5 max-w-4xl text-base text-black/80 sm:text-lg">
                        Playing drums keeps my timing sharp. It is the same focus loop I use in software:
                        listen, adapt, and hit with precision.
                    </p>

                    <button
                        type="button"
                        onClick={() => setIsHiddenRoomOpen((prev) => !prev)}
                        className="mt-7 inline-flex rotate-[-2deg] rounded-md border-2 border-black/35 bg-[#ffd6b3] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-black transition-transform hover:rotate-0"
                        aria-expanded={isHiddenRoomOpen}
                        aria-controls="hidden-drum-room"
                    >
                        {isHiddenRoomOpen ? 'Close Hidden Room' : 'Secret Door'}
                    </button>
                </div>

                {isHiddenRoomOpen && (
                    <div
                        id="hidden-drum-room"
                        className="relative mt-12 overflow-hidden rounded-[26px] border-2 border-black/30 bg-[#0f172a] p-6 text-white shadow-[0_18px_0_rgba(0,0,0,0.3),0_30px_50px_rgba(0,0,0,0.35)] sm:p-8"
                    >
                        <div className="pointer-events-none absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.5),transparent_45%),radial-gradient(circle_at_80%_22%,rgba(16,185,129,0.4),transparent_42%)]"></div>
                        <div className="relative z-10">
                            <div className="mb-5 flex flex-wrap items-center gap-3">
                                <span className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em]">
                                    <Drum size={14} /> Secret Rehearsal Room
                                </span>
                                <span className="inline-flex rounded-md border border-white/20 bg-black/20 px-3 py-1 text-xs font-semibold text-slate-300">
                                    Click drums or use keys A S D F G H
                                </span>
                            </div>

                            <div className="rounded-2xl border border-white/20 bg-linear-to-b from-slate-900/90 to-black/70 p-3 sm:p-5">
                                <svg viewBox="0 0 900 520" className="h-auto w-full" aria-label="Interactive drum kit">
                                    <line x1="250" y1="110" x2="250" y2="325" stroke="#8b97ad" strokeWidth="7" />
                                    <line x1="650" y1="90" x2="650" y2="315" stroke="#8b97ad" strokeWidth="7" />

                                    <g
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => void triggerDrum('hihat')}
                                        onKeyDown={(e) => e.key === 'Enter' && void triggerDrum('hihat')}
                                        className="cursor-pointer"
                                    >
                                        <ellipse cx="250" cy="110" rx="100" ry="26" fill={partColor('hihat', '#d7c360', '#ffe27d')} stroke="#151515" strokeWidth="4" />
                                        <text x="250" y="116" textAnchor="middle" fontSize="20" fill="#1f2937" fontWeight={800}>HI-HAT (D)</text>
                                    </g>

                                    <g
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => void triggerDrum('crash')}
                                        onKeyDown={(e) => e.key === 'Enter' && void triggerDrum('crash')}
                                        className="cursor-pointer"
                                    >
                                        <ellipse cx="650" cy="90" rx="112" ry="28" fill={partColor('crash', '#d7c360', '#ffe27d')} stroke="#151515" strokeWidth="4" />
                                        <text x="650" y="97" textAnchor="middle" fontSize="20" fill="#1f2937" fontWeight={800}>CRASH (H)</text>
                                    </g>

                                    <g
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => void triggerDrum('rackTom')}
                                        onKeyDown={(e) => e.key === 'Enter' && void triggerDrum('rackTom')}
                                        className="cursor-pointer"
                                    >
                                        <circle cx="450" cy="215" r="76" fill={partColor('rackTom', '#6b8fd6', '#85abf0')} stroke="#151515" strokeWidth="5" />
                                        <circle cx="450" cy="215" r="58" fill="#2d3e5f" stroke="#9fb3da" strokeWidth="4" />
                                        <text x="450" y="222" textAnchor="middle" fontSize="19" fill="#dbeafe" fontWeight={800}>RACK TOM (F)</text>
                                    </g>

                                    <g
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => void triggerDrum('snare')}
                                        onKeyDown={(e) => e.key === 'Enter' && void triggerDrum('snare')}
                                        className="cursor-pointer"
                                    >
                                        <circle cx="300" cy="305" r="68" fill={partColor('snare', '#8ea1c8', '#adc2ed')} stroke="#151515" strokeWidth="5" />
                                        <circle cx="300" cy="305" r="50" fill="#334155" stroke="#bfdbfe" strokeWidth="4" />
                                        <text x="300" y="312" textAnchor="middle" fontSize="18" fill="#dbeafe" fontWeight={800}>SNARE (S)</text>
                                    </g>

                                    <g
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => void triggerDrum('floorTom')}
                                        onKeyDown={(e) => e.key === 'Enter' && void triggerDrum('floorTom')}
                                        className="cursor-pointer"
                                    >
                                        <circle cx="610" cy="318" r="82" fill={partColor('floorTom', '#597ab5', '#769ad8')} stroke="#151515" strokeWidth="5" />
                                        <circle cx="610" cy="318" r="62" fill="#22324a" stroke="#b8ccf2" strokeWidth="4" />
                                        <text x="610" y="326" textAnchor="middle" fontSize="18" fill="#dbeafe" fontWeight={800}>FLOOR TOM (G)</text>
                                    </g>

                                    <g
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => void triggerDrum('kick')}
                                        onKeyDown={(e) => e.key === 'Enter' && void triggerDrum('kick')}
                                        className="cursor-pointer"
                                    >
                                        <circle cx="450" cy="360" r="132" fill={partColor('kick', '#435f93', '#5f7fb8')} stroke="#151515" strokeWidth="7" />
                                        <circle cx="450" cy="360" r="96" fill="#0f172a" stroke="#9fc2ff" strokeWidth="5" />
                                        <circle cx="450" cy="360" r="21" fill="#e2e8f0" />
                                        <text x="450" y="368" textAnchor="middle" fontSize="22" fill="#dbeafe" fontWeight={900}>KICK (A)</text>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hobbies;
