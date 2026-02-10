import React from 'react';
import { Terminal, Cpu, Database, Globe } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900 text-white border-t border-slate-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Más que código, <span className="text-blue-500">Ingeniería</span>.
                        </h2>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            Soy Julián, Ingeniero en Sistemas de Información con una pasión por construir software robusto y escalable. Mi enfoque no es solo escribir código que funcione, sino diseñar sistemas que perduren.
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            Combino una sólida formación académica con experiencia práctica en desarrollo full-stack. Me especializo en arquitecturas limpias, optimización de rendimiento y la entrega continua de valor.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                    <Terminal size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Lógica Algorítmica</h4>
                                    <p className="text-sm text-gray-400">Soluciones eficientes y optimizadas.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                                    <Cpu size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Arquitectura</h4>
                                    <p className="text-sm text-gray-400">Diseño escalable y mantenible.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                                    <Database size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Backend Lead</h4>
                                    <p className="text-sm text-gray-400">APIs RESTful y Microservicios.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Frontend Moderno</h4>
                                    <p className="text-sm text-gray-400">React, Next.js, UX/UI.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual Content */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
                            <img
                                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=3540&auto=format&fit=crop"
                                alt="Workspace"
                                className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 to-transparent h-1/2"></div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
