import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/herologo.webp";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          show ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex justify-between items-center py-4 px-6 md:px-16 bg-[#0a0d14]/80 backdrop-blur-md border-b border-white/5 shadow-lg">

          {/* Logo */}
          <a href="#home" className="cursor-pointer z-50 flex items-center">
            <img
              src={logo}
              alt="Akhil Anang Logo"
              className="h-10 md:h-12 w-auto object-contain invert mix-blend-screen hover:scale-105 transition-all duration-300"
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-sm font-medium text-slate-400">

            <li>
              <a href="#home" className="hover:text-white transition-all">
                HOME
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-white transition-all">
                ABOUT
              </a>
            </li>

            <li>
              <a href="#portfolio" className="hover:text-white transition-all">
                PROJECTS
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-white transition-all">
                CONTACT
              </a>
            </li>

          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white p-2 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0d14]/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <ul className="flex flex-col space-y-8 text-center text-xl font-light text-slate-300">

              <li>
                <a href="#home" onClick={handleLinkClick}>HOME</a>
              </li>

              <li>
                <a href="#about" onClick={handleLinkClick}>ABOUT</a>
              </li>

              <li>
                <a href="#portfolio" onClick={handleLinkClick}>PROJECTS</a>
              </li>

              <li>
                <a href="#contact" onClick={handleLinkClick}>CONTACT</a>
              </li>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;