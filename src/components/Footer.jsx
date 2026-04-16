import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#0a0d14] pt-20 pb-10 mt-20 relative overflow-hidden">

      {/* 🔥 Background Glow Effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8">

          {/* 🔥 Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left md:max-w-xs"
          >
            <h2 className="text-2xl font-bold text-white tracking-widest mb-4">
              AKHIL ANANG
            </h2>

            <p className="text-slate-400 font-light text-sm leading-relaxed">
              Crafting modern, high-performance web experiences with clean code and creative design.
            </p>

            {/* 🔥 Mini CTA */}
            <a
              href="#contact"
              className="inline-block mt-6 text-sm text-cyan-400 hover:text-white transition-all"
            >
              Let’s Work Together →
            </a>
          </motion.div>

          {/* 🔥 Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider">
              EXPLORE
            </h3>

            <ul className="space-y-3 text-slate-400 font-light text-sm">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-all">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-all">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-400 transition-all">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 🔥 Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider">
              CONNECT
            </h3>

            <ul className="space-y-3 text-slate-400 font-light text-sm">

              <li>
                <a
                  href="https://github.com/akhil4ph"
                  target="_blank"
                  rel="noreferrer"
                  className="group hover:text-purple-400 transition-all flex items-center justify-center md:justify-start gap-2"
                >
                  GitHub
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/akhil-anang-/"
                  target="_blank"
                  rel="noreferrer"
                  className="group hover:text-blue-400 transition-all flex items-center justify-center md:justify-start gap-2"
                >
                  LinkedIn
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:akhilanangjha@gmail.com"
                  className="group hover:text-pink-400 transition-all flex items-center justify-center md:justify-start gap-2"
                >
                  Email
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              </li>

            </ul>
          </motion.div>
        </div>

        {/* 🔥 Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm font-light text-center md:text-left">
            © {new Date().getFullYear()} Akhil Anang. All rights reserved.
          </p>

          
        </div>

      </div>
    </footer>
  );
};

export default Footer;