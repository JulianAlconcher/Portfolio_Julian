import { Github, ExternalLink, Layers } from 'lucide-react';

const projects = [
    {
        title: 'EJCO Website',
        description: 'Official website for EJCO with professional branding and company information.',
        problem: 'Deliver a clear digital presence and an easy way for visitors to discover services.',
        tech: ['Web', 'UI/UX', 'Business Site'],
        role: 'Web Developer',
        github: null,
        demo: 'https://www.ejco.com.ar/',
        image: '/ejco.png',
        type: 'Website'
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
        type: 'Tooling'
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
        type: 'Application'
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
        type: 'Bot'
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
        type: 'System'
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
        type: 'Utility'
    },
    {
        title: 'GymLAB Proyecto Fisica 2024',
        description: 'Physics project for GymLAB, combining software support with experiment or simulation workflows.',
        problem: 'Translate physics concepts into a usable and structured software implementation.',
        tech: ['Physics', 'Simulation', 'Project'],
        role: 'Developer',
        github: 'https://github.com/JulianAlconcher/GymLAB-Proyecto-Fisica-2024',
        demo: null,
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070',
        type: 'Academic'
    },
    {
        title: 'E-commerce NextJS MovieMerch',
        description: 'Next.js e-commerce project for movie merchandise with modern storefront patterns.',
        problem: 'Create a smooth online shopping experience for themed products.',
        tech: ['Next.js', 'E-commerce', 'Frontend'],
        role: 'Developer',
        github: 'https://github.com/JulianAlconcher/E-commerce-NextJS-MovieMerch',
        demo: null,
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2070',
        type: 'Web App'
    },
    {
        title: 'Proyecto Sistemas Operativos',
        description: 'Operating systems project with low-level and systems-focused concepts.',
        problem: 'Apply operating systems theory in a practical implementation.',
        tech: ['Operating Systems', 'Systems', 'C/Concepts'],
        role: 'Developer',
        github: 'https://github.com/JulianAlconcher/proyecto-Sistemas-Operativos',
        demo: null,
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070',
        type: 'Academic'
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
        type: 'Project'
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-900 text-white relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-800/20 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400 text-lg">Real projects, practical engineering, and product-focused development.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group flex flex-col bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10">

                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opactiy-60"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 z-20 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-400 border border-slate-700/50">
                                    {project.type}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 p-6 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mb-4 p-3 bg-slate-900/50 rounded-lg border border-slate-700/30">
                                    <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">Challenge</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        {project.problem}
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="px-2 py-1 text-xs rounded bg-slate-900 text-slate-300 border border-slate-700">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-700/50">
                                    <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                                        <Layers size={14} /> {project.role}
                                    </span>

                                    <div className="flex items-center gap-3">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="View Code">
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="View Live">
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="https://github.com/JulianAlconcher" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors">
                        See more projects on GitHub <ExternalLink size={16} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
