import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        alert('Mensaje enviado (simulación)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">¿Hablamos?</h2>
                    <p className="text-gray-400 text-lg">
                        Estoy siempre interesado en discutir nuevos proyectos, oportunidades o simplemente charlar sobre tecnología.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-800/30 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>

                        <div className="space-y-6">
                            <a href="mailto:julian@example.com" className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group">
                                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <span className="text-lg">julian@example.com</span>
                            </a>

                            <a href="https://linkedin.com/in/julian" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group">
                                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                                    <Linkedin size={24} />
                                </div>
                                <span className="text-lg">linkedin.com/in/julian</span>
                            </a>

                            <a href="https://github.com/julian" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-white/10 transition-colors">
                                    <Github size={24} />
                                </div>
                                <span className="text-lg">github.com/julian</span>
                            </a>
                        </div>

                        <div className="pt-8 border-t border-slate-700/50 mt-8">
                            <p className="text-sm text-gray-400">
                                Respondo generalmente dentro de las 24 horas.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-600"
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-600"
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-600 resize-none"
                                placeholder="¿En qué puedo ayudarte?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-blue-500/20"
                        >
                            Enviar Mensaje <Send size={18} />
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
