import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const faqs = [
    { q: "What is your current availability?", a: "I am currently available for full-time frontend roles and interesting freelance projects." },
    { q: "What tech stack do you specialize in?", a: "My core expertise is in React.js, Tailwind CSS, and Framer Motion for building high-end UIs." },
    { q: "Where are you based?", a: "I am based in India and I'm open to both remote and on-site opportunities." }
  ];

  return (
    <section id="contact" className="py-24 bg-[#0a0d14] relative overflow-hidden">
      
      {/* 🌟 Section Header */}
      <div className="container mx-auto px-6 lg:px-16 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mb-4"
        >
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Connect</span>
        </motion.h2>
        <p className="text-slate-400 text-lg font-light">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl">
        
        {/* ================= LEFT SIDE: CONTACT INFO CARDS ================= */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Contact Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[#0d111a] border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
            <h3 className="text-xl font-bold text-white mb-8 tracking-tight">Contact Info</h3>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white font-medium break-all">akhilanangjha@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-medium">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Availability Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-[#0d111a] border border-white/5 group hover:border-cyan-500/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
               <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <h3 className="text-cyan-400 font-bold tracking-wide">Available for work</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              I'm currently looking for new opportunities as a Frontend Developer.
            </p>
          </motion.div>
        </div>

        {/* ================= RIGHT SIDE: FAQ SECTION (No Backend Needed) ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="lg:col-span-8 p-8 md:p-12 rounded-3xl bg-[#0d111a] border border-white/5 relative overflow-hidden"
        >
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]"></div>
          
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
            <h3 className="text-2xl font-bold text-white tracking-tight">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-6 relative z-10">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#0a0d14] border border-white/5 hover:border-white/10 transition-colors"
              >
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono text-sm">0{index + 1}.</span> {faq.q}
                </h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="text-slate-500 text-sm mb-4">Still have questions?</p>
            <a 
              href="mailto:akhilanangjha@gmail.com" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm tracking-widest hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              SEND ME AN EMAIL
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;