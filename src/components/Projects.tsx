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
    'bg-[#f7f0bf] text-black',
    'bg-[#c9f2ff] text-black',
    'bg-[#ffd6b3] text-black',
    'bg-[#fbd2dd] text-black',
    'bg-[#dbd6ff] text-black',
    'bg-[#c8f5d9] text-black',
];

const stickerAngles = ['rotate-[-2deg]', 'rotate-[1.5deg]', 'rotate-[-1deg]', 'rotate-[2deg]', 'rotate-[-1.5deg]'];
const tapeAngles = ['rotate-[-10deg]', 'rotate-[8deg]', 'rotate-[-7deg]', 'rotate-[9deg]'];

const Projects = () => {
    return (
        <section id="projects" className="relative overflow-hidden border-t border-black/20 bg-white py-28 text-black">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_20%_18%,rgba(0,0,0,0.16),transparent_44%),radial-gradient(circle_at_78%_22%,rgba(0,0,0,0.14),transparent_42%),radial-gradient(circle_at_32%_76%,rgba(0,0,0,0.12),transparent_40%),radial-gradient(circle_at_82%_82%,rgba(0,0,0,0.12),transparent_42%)]"></div>
                <div className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(112deg,rgba(0,0,0,0.09)_0px,rgba(0,0,0,0.09)_2px,transparent_2px,transparent_26px),repeating-linear-gradient(-68deg,rgba(0,0,0,0.08)_0px,rgba(0,0,0,0.08)_2px,transparent_2px,transparent_32px)]"></div>
                <div className="absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(to_bottom,transparent_0px,transparent_43px,rgba(0,0,0,0.9)_43px,rgba(0,0,0,0.9)_44px)]"></div>
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(0,0,0,0.9)_1px,transparent_1px)] [background-size:46px_46px]"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <p className="mb-4 inline-flex rotate-[-2deg] items-center gap-2 rounded-md border-2 border-black/40 bg-[#fff4cc] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-black shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
                        Project Experience Lab
                    </p>
                    <h2 className="max-w-4xl text-4xl font-black leading-[0.95] sm:text-6xl">
                        A chaotic wall of products,
                        <span className="text-[#0f3f84]"> experiments, and engineering decisions.</span>
                    </h2>
                    <p className="mt-5 max-w-6xl text-base text-black/80 sm:text-lg">
                        Not a simple gallery. Every card is a project that challenged me to solve problems, learn new skills, and
                        deliver value. From web apps to automation bots, each sticker tells a story of creativity and technical growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 26, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.35, delay: index * 0.04 }}
                            whileHover={{ y: -7, rotate: index % 2 === 0 ? 0.9 : -0.9, scale: 1.01 }}
                            className={`group relative isolate flex h-full flex-col overflow-hidden rounded-[26px] border-2 border-black/30 shadow-[0_14px_0_rgba(0,0,0,0.24),0_20px_35px_rgba(0,0,0,0.22)] ${stickerColors[index % stickerColors.length]} ${stickerAngles[index % stickerAngles.length]} ${layoutVariants[index % layoutVariants.length]}`}
                        >
                            <div className="pointer-events-none absolute left-6 top-[-10px] z-40 h-6 w-16 rounded-sm bg-white/55 shadow-sm backdrop-blur-sm"></div>
                            <div className={`pointer-events-none absolute right-7 top-[-10px] z-40 h-6 w-14 rounded-sm bg-white/50 shadow-sm backdrop-blur-sm ${tapeAngles[index % tapeAngles.length]}`}></div>

                            <div className="pointer-events-none absolute -left-2 top-5 z-30">
                                <div
                                    className="rounded-md border-2 border-black/35 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-black shadow-[0_8px_12px_rgba(0,0,0,0.22)]"
                                    style={{ transform: `rotate(${index % 2 === 0 ? -10 : 10}deg)` }}
                                >
                                    Frame {String(index).padStart(2, '0')}
                                </div>
                            </div>

                            <div className="pointer-events-none absolute right-3 top-[45%] z-30">
                                <div
                                    className="rounded-lg border-2 border-black/30 bg-[#ffe36b] px-2 py-1 text-[10px] font-black uppercase tracking-wider text-black shadow-[0_8px_12px_rgba(0,0,0,0.25)]"
                                    style={{ transform: `rotate(${index % 2 === 0 ? 7 : -7}deg)` }}
                                >
                                    {project.type}
                                </div>
                            </div>

                            <div className="relative m-4 mb-0 overflow-hidden rounded-2xl border-2 border-black/25 bg-black/20 md:h-56">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 md:h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-3 right-4 text-5xl font-black tracking-tight text-white/20 md:text-7xl">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col p-5 md:p-6">
                                <h3 className="text-xl font-black tracking-tight text-black md:text-2xl">{project.title}</h3>
                                <p className="mt-2 text-sm text-black/75">{project.description}</p>

                                <div className="mt-4 rounded-xl border-2 border-black/20 bg-white/45 p-3">
                                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-black/60">Challenge</p>
                                    <p className="mt-1 text-xs leading-relaxed text-black/75">{project.problem}</p>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-black/25 bg-white/70 px-3 py-1 text-[11px] font-black uppercase tracking-wide text-black/80"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex items-end justify-between pt-5">
                                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-black/65">
                                        <Layers size={14} /> {project.role}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 rounded-full border-2 border-black/30 bg-black px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-black/85"
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
                                                className="inline-flex items-center gap-1 rounded-full border-2 border-black/30 bg-[#0f3f84] px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-[#0c3470]"
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
                        className="inline-flex items-center gap-2 rounded-full border-2 border-black/35 bg-[#fff0b3] px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-black transition-colors hover:bg-white"
                    >
                        Explore More on GitHub <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
