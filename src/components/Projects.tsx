import React from 'react';
import { Github, ExternalLink, Code, Layers, Server } from 'lucide-react';

const projects = [
    {
        title: 'Enterprise Analytics Dashboard',
        description: 'Plataforma de visualización de datos en tiempo real para métricas empresariales críticas. Redujo el tiempo de generación de reportes en un 80% mediante procesamiento asíncrono.',
        problem: 'La empresa necesitaba monitorear KPIs en tiempo real desde múltiples fuentes de datos dispares.',
        tech: ['React', 'TypeScript', 'D3.js', 'Node.js', 'GraphQL'],
        role: 'Frontend Lead',
        github: 'https://github.com/julian/analytics',
        demo: 'https://analytics-demo.julian.dev',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
        type: 'Frontend & Visualization'
    },
    {
        title: 'Microservices E-commerce API',
        description: 'Arquitectura de microservicios escalable para gestión de inventario y pedidos de alto volumen. Soporta picos de 10k req/s.',
        problem: 'Monolito legacy colapsaba bajo alta demanda durante eventos de ventas.',
        tech: ['Node.js', 'Express', 'Docker', 'Kubernetes', 'Redis', 'PostgreSQL'],
        role: 'Backend Architect',
        github: 'https://github.com/julian/ecommerce-api',
        demo: null,
        image: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=2668',
        type: 'Backend & DevOps'
    },
    {
        title: 'Collaborative Code Editor',
        description: 'Editor de código colaborativo en tiempo real tipo Google Docs, con ejecución remota y resaltado de sintaxis.',
        problem: 'Equipos remotos necesitaban una herramienta ligera para pair programming sin configurar entornos locales.',
        tech: ['Next.js', 'Socket.io', 'Monaco Editor', 'WebRTC', 'AWS Lambda'],
        role: 'Full Stack Engineer',
        github: 'https://github.com/julian/collab-editor',
        demo: 'https://editor.julian.dev',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2070',
        type: 'Full Stack System'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-900 text-white relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-800/20 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Proyectos Destacados</h2>
                    <p className="text-gray-400 text-lg">Soluciones técnicas a problemas reales. Código limpio, arquitecturas sólidas y enfoque en el usuario.</p>
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
                                    <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">El Desafío</h4>
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
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Ver Código">
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Ver Demo">
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
                    <a href="https://github.com/julian" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors">
                        Ver más proyectos en GitHub <ExternalLink size={16} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
