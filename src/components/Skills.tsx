import React from 'react';
import { Database, Code, Layout, Cloud, Smartphone, GitBranch } from 'lucide-react';

const skills = [
    {
        category: 'Backend',
        icon: <Database />,
        items: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
    },
    {
        category: 'Frontend',
        icon: <Layout />,
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'HTML5/CSS3', 'Framer Motion']
    },
    {
        category: 'Cloud & DevOps',
        icon: <Cloud />,
        items: ['AWS (Lambda, S3, EC2)', 'Docker', 'Kubernetes', 'CI/CD (GitHub Actions)', 'Terraform', 'Nginx']
    },
    {
        category: 'Tools & Others',
        icon: <GitBranch />,
        items: ['Git', 'Jira', 'Agile/Scrum', 'Linux', 'Unit Testing (Jest)', 'E2E Testing (Cypress)']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-950 text-white relative border-t border-slate-900">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                        Stack Tecnológico
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Herramientas y tecnologías que utilizo para construir soluciones robustas y escalables.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:bg-slate-800/80 group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-slate-800 rounded-lg text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/10 transition-colors">
                                    {skillGroup.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors">{skillGroup.category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item) => (
                                    <span key={item} className="px-3 py-1 text-sm bg-slate-800 text-gray-400 rounded-full border border-slate-700/50 hover:border-blue-500/30 hover:text-gray-200 transition-colors cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
