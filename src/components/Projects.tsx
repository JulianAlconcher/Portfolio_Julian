import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

type Project = {
    title: string;
    description: string;
    problem: string;
    tech: string[];
    role: string;
    github: string | null;
    demo: string | null;
    image: string;
    type: string;
};

const projects: Project[] = [
    {
        title: 'EJCO Website',
        description: 'Official website for EJCO with professional branding and company information.',
        problem: 'Deliver a clear digital presence and an easy way for visitors to discover services.',
        tech: ['Web', 'UI/UX', 'Business Site'],
        role: 'Web Developer',
        github: null,
        demo: 'https://www.ejco.com.ar/',
        image: '/ejco.png',
        type: 'Website',
    },
    {
        title: 'NetworkMonitor',
        description: 'Network monitoring project focused on visibility, diagnostics, and connectivity checks.',
        problem: 'Track network health and detect issues quickly in a practical, developer-friendly way.',
        tech: ['Networking', 'Monitoring', 'Automation'],
        role: 'Developer',
        github: 'https://github.com/JulianAlconcher/NetworkMonitor',
        demo: null,
        image: '/network.png',
        type: 'Tooling',
    },
    {
        title: 'DuckWallet',
        description: 'Wallet-oriented project exploring secure account handling and transaction-related flows.',
        problem: 'Build reliable wallet functionality with a clean and understandable user experience.',
        tech: ['Fintech', 'Security', 'App Design'],
        role: 'Developer',
        github: 'https://github.com/JulianAlconcher/DuckWallet',
        demo: null,
        image: '/duck.png',
        type: 'Application',
    },
    {
        title: 'Ratitas-Bot',
        description: 'Automation bot project for handling repetitive tasks and command-driven interactions.',
        problem: 'Reduce manual repetitive actions through scriptable bot behavior.',
        tech: ['Bot', 'Automation', 'Scripting'],
        role: 'Developer',
        github: 'https://github.com/JulianAlconcher/Ratitas-Bot',
        demo: null,
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070',
        type: 'Bot',
    },
    {
        title: 'Hospitales2000',
        description: 'Healthcare-oriented software project with focus on management and operational workflows.',
        problem: 'Support structured processes for hospital-related tasks and data handling.',
        tech: ['Healthcare', 'Management', 'Software'],
        role: 'Developer',
        github: 'https://github.com/JulianAlconcher/Hospitales2000',
        demo: null,
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070',
        type: 'System',
    },
    {
        title: 'StudyScript',
        description: 'Utility project designed to improve learning and productivity through scripting.',
        problem: 'Make studying more efficient with simple automation tools.',
        tech: ['Education', 'Productivity', 'Scripts'],
        role: 'Developer',
        github: 'https://github.com/JulianAlconcher/StudyScript',
        demo: null,
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2070',
        type: 'Utility',
    },
    {
        title: 'GymLAB Physics 2024',
        description: 'Physics project for GymLAB, combining software support with experiment and simulation workflows.',
        problem: 'Translate physics concepts into a usable and structured software implementation.',
        tech: ['Physics', 'Simulation', 'Project'],
        role: 'Developer',
        github: 'https://github.com/JulianAlconcher/GymLAB-Proyecto-Fisica-2024',
        demo: null,
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070',
        type: 'Academic',
    },
    {
        title: 'MovieMerch E-commerce',
        description: 'Next.js e-commerce project for movie merchandise with modern storefront patterns.',
        problem: 'Create a smooth online shopping experience for themed products.',
        tech: ['Next.js', 'E-commerce', 'Frontend'],
        role: 'Developer',
        github: 'https://github.com/JulianAlconcher/E-commerce-NextJS-MovieMerch',
        demo: null,
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2070',
        type: 'Web App',
    },
    {
        title: 'Operating Systems Project',
        description: 'Operating systems project with low-level and systems-focused concepts.',
        problem: 'Apply operating systems theory in a practical implementation.',
        tech: ['Operating Systems', 'Systems', 'C/Concepts'],
        role: 'Developer',
        github: 'https://github.com/JulianAlconcher/proyecto-Sistemas-Operativos',
        demo: null,
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070',
        type: 'Academic',
    },
    {
        title: 'tdp-proyecto-3',
        description: 'Software development course project focused on implementation quality and teamwork practices.',
        problem: 'Deliver a complete project under academic constraints and milestones.',
        tech: ['Software Development', 'Teamwork', 'Architecture'],
        role: 'Developer',
        github: 'https://github.com/JulianAlconcher/tdp-proyecto-3',
        demo: null,
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070',
        type: 'Project',
    },
];

const layoutVariants = [
    'md:col-span-7',
    'md:col-span-5',
    'md:col-span-5',
    'md:col-span-7',
    'md:col-span-4',
    'md:col-span-4',
    'md:col-span-4',
    'md:col-span-6',
    'md:col-span-6',
    'md:col-span-12',
];

const stickerColors = [
    'bg-lime-300 text-black',
    'bg-cyan-300 text-black',
    'bg-amber-300 text-black',
    'bg-rose-300 text-black',
    'bg-fuchsia-300 text-black',
    'bg-emerald-300 text-black',
];

const loopWords = ['BUILD', 'SHIP', 'SCALE', 'DEBUG', 'DEPLOY', 'AUTOMATE', 'DESIGN'];

const Projects = () => {
    return (
        <section id="projects" className="relative overflow-hidden bg-black py-28 text-white border-t border-white/10">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[110px]"></div>
                <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-[120px]"></div>
                <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:46px_46px]"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <p className="mb-4 inline-flex rotate-[-2deg] items-center gap-2 rounded-md border-2 border-white bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-black shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
                        Project Experience Lab
                    </p>
                    <h2 className="max-w-4xl text-4xl font-black leading-[0.95] sm:text-6xl">
                        A chaotic wall of products,
                        <span className="text-cyan-300"> experiments, and engineering decisions.</span>
                    </h2>
                    <p className="mt-5 max-w-3xl text-base text-slate-300 sm:text-lg">
                        Not a simple gallery. Every card is designed like a sticker board artifact: loud, tactile, and intentionally playful.
                    </p>
                </motion.div>

                <div className="relative mb-10 overflow-hidden rounded-xl border border-white/15 bg-slate-900/60 py-3">
                    <motion.div
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                        className="flex w-[200%] gap-4 pl-4"
                    >
                        {[...loopWords, ...loopWords, ...loopWords].map((word, i) => (
                            <span
                                key={`${word}-${i}`}
                                className="shrink-0 rounded-full border border-white/20 bg-black/50 px-4 py-1 text-xs font-bold tracking-[0.2em] text-slate-200"
                            >
                                {word}
                            </span>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 26, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.35, delay: index * 0.04 }}
                            whileHover={{ y: -8, rotate: index % 2 === 0 ? 0.55 : -0.55 }}
                            className={`group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-slate-900/75 shadow-[0_18px_35px_rgba(0,0,0,0.38)] backdrop-blur-sm ${layoutVariants[index % layoutVariants.length]}`}
                        >
                            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="absolute -top-8 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-cyan-400/25 blur-2xl"></div>
                            </div>

                            <div className="pointer-events-none absolute -left-2 top-5 z-30">
                                <div
                                    className={`rounded-md border-2 border-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] shadow-[0_10px_18px_rgba(0,0,0,0.4)] ${stickerColors[index % stickerColors.length]}`}
                                    style={{ transform: `rotate(${index % 2 === 0 ? -10 : 10}deg)` }}
                                >
                                    Frame {String(index).padStart(2, '0')}
                                </div>
                            </div>

                            <div className="pointer-events-none absolute right-3 top-[45%] z-30">
                                <div
                                    className="rounded-lg border-2 border-white bg-white px-2 py-1 text-[10px] font-black uppercase tracking-wider text-black shadow-[0_8px_15px_rgba(0,0,0,0.3)]"
                                    style={{ transform: `rotate(${index % 2 === 0 ? 7 : -7}deg)` }}
                                >
                                    {project.type}
                                </div>
                            </div>

                            <div className="relative h-48 overflow-hidden md:h-56">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent"></div>
                                <div className="absolute bottom-3 right-4 text-5xl font-black tracking-tight text-white/10 md:text-7xl">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col p-5 md:p-6">
                                <h3 className="text-xl font-black tracking-tight text-white md:text-2xl">{project.title}</h3>
                                <p className="mt-2 text-sm text-slate-300">{project.description}</p>

                                <div className="mt-4 rounded-xl border border-white/10 bg-black/35 p-3">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300">Challenge</p>
                                    <p className="mt-1 text-xs leading-relaxed text-slate-300">{project.problem}</p>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex items-end justify-between pt-5">
                                    <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400">
                                        <Layers size={14} /> {project.role}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:border-white/40 hover:text-white"
                                                title="View Code"
                                            >
                                                <Github size={14} /> Repo
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-200 transition-colors hover:border-cyan-200 hover:text-cyan-100"
                                                title="View Live"
                                            >
                                                <ExternalLink size={14} /> Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-14 text-center">
                    <a
                        href="https://github.com/JulianAlconcher"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-slate-100 transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
                    >
                        Explore More on GitHub <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
