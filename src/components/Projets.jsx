import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "School Management System",
        company: "Comprehensive Platform",
        description: "Developed a complete school management platform handling all administrative tasks and daily school operations efficiently.",
        tech: ["React.js", "Tailwind CSS", "JavaScript"],
        liveLink: "https://school-management-phi-sandy.vercel.app/",
        github: "https://github.com/akhil4ph"
    },
    {
        title: "Clothing Brand E-Commerce",
        company: "AI Virtual Try-On",
        description: "Built a brand-specific e-commerce website integrating a 'Try with AI' functionality, allowing users to upload images for a virtual clothing try-on experience.",
        tech: ["React.js", "Tailwind CSS", "JavaScript"],
        liveLink: "#", 
        github: "https://github.com/akhil4ph"
    },
    {
        title: "Import Export Website",
        company: "VR AND SONS",
        description: "Developed a professional business website to showcase import-export products and services in India and globally. Ensured cross-device compatibility.",
        tech: ["React.js", "Tailwind CSS", "JavaScript"],
        liveLink: "https://www.vrandsons.com/",
        github: "https://github.com/akhil4ph"
    },
    {
        title: "Furniture E-Commerce",
        company: "3D Viewing Experience",
        description: "Built a fully responsive e-commerce platform for furniture utilizing 3D images for an enhanced product viewing experience.",
        tech: ["React.js", "Tailwind CSS", "JavaScript"],
        liveLink: "#",
        github: "https://github.com/akhil4ph"
    },
    {
        title: "Email Verifier",
        company: "Graphura India",
        description: "Engineered a web application to validate email addresses and improve data reliability. Focused on real-time validation, performance optimization, and seamless cross-device compatibility.",
        tech: ["JavaScript", "HTML", "CSS"],
        liveLink: "https://www.graphurahub.in/",
        github: "https://github.com/akhil4ph"
    },
    {
        title: "Fruits Bounty",
        company: "Product-Based Website",
        description: "Created a modern product-based website with an engaging UI design. Used Tailwind CSS for consistent and efficient styling ensuring perfect responsiveness.",
        tech: ["React.js", "Tailwind CSS", "JavaScript"],
        liveLink: "https://www.fruitsbounty.in/",
        github: "https://github.com/akhil4ph"
    }
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="relative w-full min-h-screen bg-[#0a0d14] py-5 px-4 md:px-12 lg:px-20 overflow-hidden">
            
            {/* Header Section */}
            <div className="text-center mb-16 relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
                >
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Projects</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto"
                >
                    A showcase of my recent work, side projects, and web development experiments.
                </motion.p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {projects.map((project, index) => (
                    <motion.article 
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-[#111622] rounded-xl p-6 border border-white/5 hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300 flex flex-col group shadow-lg shadow-black/50"
                    >
                        {/* Card Header (Icons) */}
                        <header className="flex justify-between items-center mb-6">
                            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-cyan-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <nav className="flex gap-4 text-slate-400">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`} className="hover:text-white transition-colors duration-200">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </a>
                                <a href={project.liveLink} target={project.liveLink !== "#" ? "_blank" : "_self"} rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`} className="hover:text-white transition-colors duration-200">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                </a>
                            </nav>
                        </header>

                        {/* Content */}
                        <div className="flex-grow">
                            <h3 className="text-xl font-bold text-slate-200 mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-xs font-mono text-purple-400 mb-4 uppercase tracking-wider">
                                {project.company}
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>
                        </div>

                        {/* Tech Stack Footer */}
                        <footer className="mt-auto">
                            <ul className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <li key={i} className="text-xs font-medium text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </footer>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;