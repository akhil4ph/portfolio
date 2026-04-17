import React from 'react';
import { motion } from 'framer-motion';

const ExperienceAndSkills = () => {
  return (
    <section id="experience" aria-label="Work Experience and Technical Skills" className="py-5 bg-[#0a0d14] relative overflow-hidden z-0">
      
      <div className="absolute top-20 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-20 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 max-w-7xl">
        
        {/* SECTION HEADER */}
        <header className="text-center md:text-left mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">Skills</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-lg font-light max-w-2xl"
          >
            My professional journey and the technical tools I use to build scalable, responsive web applications.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7 space-y-12">
            
            {/* WORK EXPERIENCE SECTION */}
            <article>
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="p-3 rounded-xl bg-[#111520] border border-white/10 text-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.15)]">
                  <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wide">Work Experience</h3>
              </motion.div>

              {/* Timeline Item */}
              <div className="relative pl-8 border-l border-white/10 ml-5 pb-4 group">
                <div className="absolute w-4 h-4 bg-[#0a0d14] border-2 border-blue-500 rounded-full -left-[8.5px] top-4 ring-4 ring-[#0a0d14] group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300">
                  <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-[#111520]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-8 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.05)] transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                    <h4 className="text-xl font-bold text-white">Frontend Web Developer Intern</h4>
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-medium w-fit whitespace-nowrap">Dec 2025 - March 2026</span>
                  </div>
                  <div className="text-blue-400 font-medium mb-6 tracking-wide drop-shadow-[0_0_8px_rgba(96,165,250,0.4)]">Graphura India Private Limited</div>
                  
                  <ul className="space-y-3 text-slate-400 font-light text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <svg aria-hidden="true" className="w-5 h-5 text-blue-500/70 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      <span>Developed responsive and high-performance user interfaces using <strong>React.js</strong>, JavaScript, HTML, and CSS.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg aria-hidden="true" className="w-5 h-5 text-blue-500/70 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      <span>Built reusable components that improved development speed and maintainability.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg aria-hidden="true" className="w-5 h-5 text-blue-500/70 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      <span>Optimized applications for mobile responsiveness and Core Web Vitals (faster load times).</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </article>

            {/* EDUCATION SECTION */}
            <article className="pt-4">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="p-3 rounded-xl bg-[#111520] border border-white/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                  <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wide">Education</h3>
              </motion.div>

              {/* Timeline Item */}
              <div className="relative pl-8 border-l border-white/10 ml-5 pb-2 group">
                <div className="absolute w-4 h-4 bg-[#0a0d14] border-2 border-cyan-400 rounded-full -left-[8.5px] top-4 ring-4 ring-[#0a0d14] group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300">
                  <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-[#111520]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-8 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.05)] transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                    <h4 className="text-xl font-bold text-white">Bachelor of Technology (B.Tech)</h4>
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-medium w-fit whitespace-nowrap">2023 - 2027</span>
                  </div>
                  <div className="text-cyan-400 font-medium drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">Maharshi Dayanand University (MDU)</div>
                </motion.div>
              </div>
            </article>

          </div>

          {/* RIGHT COLUMN: TECHNICAL ARSENAL */}
          <aside className="lg:col-span-5 relative" aria-label="Technical Skills Summary">
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-[#111520]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 sticky top-28 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Technical Arsenal</h3>
              <p className="text-slate-400 font-light text-sm mb-8 pb-8 border-b border-white/5">Tools and technologies I work with to build modern web solutions.</p>

              <div className="space-y-8"> 
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                  <div className="flex items-center gap-2 mb-4">
                    <svg aria-hidden="true" className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    <h4 className="text-white font-medium tracking-wide">Frameworks & Libraries</h4>
                  </div>
                  <div className="flex flex-wrap gap-3" aria-label="Frontend Frameworks">
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-sm hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white transition-all duration-300 cursor-default">React.js</span>
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-sm hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-white transition-all duration-300 cursor-default">Tailwind CSS</span>
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-sm hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-white transition-all duration-300 cursor-default">Framer Motion</span>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                  <div className="flex items-center gap-2 mb-4">
                    <svg aria-hidden="true" className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                    <h4 className="text-white font-medium tracking-wide">Languages</h4>
                  </div>
                  <div className="flex flex-wrap gap-3" aria-label="Programming Languages">
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-sm hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:text-white transition-all duration-300 cursor-default">JavaScript (ES6+)</span>
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-sm hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-white transition-all duration-300 cursor-default">HTML5</span>
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-sm hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white transition-all duration-300 cursor-default">CSS3</span>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                  <div className="flex items-center gap-2 mb-4">
                    <svg aria-hidden="true" className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
                    <h4 className="text-white font-medium tracking-wide">Core Concepts</h4>
                  </div>
                  <div className="flex flex-wrap gap-3" aria-label="Web Development Concepts">
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-sm hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-white transition-all duration-300 cursor-default">Responsive UI</span>
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-sm hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-white transition-all duration-300 cursor-default">Component Architecture</span>
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-sm hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-white transition-all duration-300 cursor-default">Web Optimization</span>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </aside>

        </div>
      </div>
    </section>
  );
};

export default ExperienceAndSkills;