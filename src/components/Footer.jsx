import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#0a0d14] pt-16 pb-8 mt-20 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-pink-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8">
          
          {/* Brand Section */}
          <div className="text-center md:text-left md:max-w-xs">
            <h2 className="text-2xl font-bold text-white tracking-widest mb-4">AKHIL ANANG</h2>
            <p className="text-slate-400 font-light text-sm leading-relaxed">
              Crafting modern, high-performance web experiences with clean code and creative design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider">EXPLORE</h3>
            <ul className="space-y-3 text-slate-400 font-light text-sm">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Portfolio</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider">CONNECT</h3>
            <ul className="space-y-3 text-slate-400 font-light text-sm">
              <li>
                <a href="https://github.com/akhil4ph" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors flex items-center justify-center md:justify-start gap-2">
                  <span>GitHub</span> ↗
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/akhil-anang-/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors flex items-center justify-center md:justify-start gap-2">
                  <span>LinkedIn</span> ↗
                </a>
              </li>
              <li>
                <a href="mailto:akhilanangjha@gmail.com" className="hover:text-pink-400 transition-colors flex items-center justify-center md:justify-start gap-2">
                  <span>Email</span> ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} Akhil Anang. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm font-light flex items-center gap-1">
            Designed & Built with <span className="text-pink-500 animate-pulse">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  