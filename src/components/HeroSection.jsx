import React, { useState, useEffect, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import akhil from "../assets/akhil.webp";

const HeroSection = () => {
    // ---------------- 1. TYPING ANIMATION LOGIC ----------------
    const roles = ["Frontend Developer", "Web Developer", "UI/UX Enthusiast"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? 40 : 100;
        const currentRole = roles[roleIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting && typedText === currentRole) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause full text
            } else if (isDeleting && typedText === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            } else {
                setTypedText((prev) =>
                    isDeleting
                        ? currentRole.substring(0, prev.length - 1)
                        : currentRole.substring(0, prev.length + 1)
                );
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [typedText, isDeleting, roleIndex]);

    // ---------------- 2. MOUSE PARALLAX LOGIC ----------------
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for parallax
    const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 });

    // Move distances for different layers (Creates 3D depth)
    const moveX = useTransform(mouseXSpring, [-1, 1], [-25, 25]);
    const moveY = useTransform(mouseYSpring, [-1, 1], [-25, 25]);
    const moveXOpposite = useTransform(mouseXSpring, [-1, 1], [25, -25]);
    const moveYOpposite = useTransform(mouseYSpring, [-1, 1], [25, -25]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const mouseY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        x.set(mouseX);
        y.set(mouseY);
    };

    // ---------------- 3. STARFIELD PARTICLES LOGIC ----------------
    const particles = useMemo(() => Array.from({ length: 40 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5
    })), []);

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-4 md:px-12 lg:px-20 pt-24 pb-16 bg-[#0a0d14] overflow-hidden"
        >

            {/* 🌟 STARFIELD PARTICLES LAYER */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full opacity-30"
                        style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
                        animate={{ y: [0, -50, 0], opacity: [0.1, 0.6, 0.1] }}
                        transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
                    />
                ))}
            </div>

            {/* 🖱️ PARALLAX BACKGROUND CODE SNIPPETS */}
            <motion.div
                style={{ x: moveX, y: moveY }}
                className="absolute right-0 md:-right-10 top-1/4 text-[#1e2330] font-mono text-xs md:text-lg select-none z-0 opacity-30 hidden md:block pointer-events-none"
            >
                <p className="mb-6 transform -rotate-2">{'console.log("Hello World");'}</p>
                <p className="mb-6 ml-10 transform rotate-1">$ npm install react</p>
                <p className="mb-8 ml-20 text-purple-900/40">{'<html/>'}</p>
                <p className="mb-6 text-xl">{'class="container"'}</p>
                <p className="mb-6 ml-10">{'/* Mobile First */'}</p>
            </motion.div>

            {/* ---------------- LEFT CONTENT (Text & Buttons) ---------------- */}
            <motion.div
                style={{ x: moveXOpposite, y: moveYOpposite }}
                className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left"
            >

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                    className="text-5xl sm:text-6xl lg:text-[75px] font-bold tracking-tight mb-4 leading-[1.1]"
                >
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 drop-shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                        FRONTEND
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)] mt-1">
                        DEVELOPER
                    </span>
                </motion.h1>

                {/* Subtitle with 🔥 TYPING ANIMATION */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-base md:text-lg text-slate-300 mb-8 max-w-md mx-auto md:mx-0 font-light leading-relaxed min-h-[60px]"
                >
                    I am Akhil – <span className="text-blue-400 font-normal drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
                        {typedText}
                        <span className="animate-pulse border-r-2 border-blue-400 ml-1"></span>
                    </span>
                    <br className="hidden md:block" /> with a passion for creating beautiful websites.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8 w-full sm:w-auto"
                >
                    <a href="#projects" className="relative px-6 py-3 bg-[#0a0d14] rounded-full group w-full sm:w-auto text-center shrink-0">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] -z-10 group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] transition-all duration-300">
                            <div className="w-full h-full bg-[#0a0d14] rounded-full group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        <span className="relative z-10 text-white font-medium tracking-widest text-xs transition-colors duration-300 group-hover:font-bold">
                            VIEW MY PROJECTS
                        </span>
                    </a>

                    <a href="/resume.pdf" target="_blank" className="px-6 py-3 rounded-full border border-white/20 hover:border-blue-400 hover:bg-blue-400/10 text-white font-medium tracking-widest text-xs transition-all duration-300 w-full sm:w-auto text-center flex justify-center items-center gap-2 shrink-0">
                        DOWNLOAD RESUME
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex items-center justify-center md:justify-start gap-5"
                >
                    <a href="https://www.linkedin.com/in/akhil-anang-/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 hover:scale-110 transition-all duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                    <a href="https://github.com/akhil4ph" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </a>
                    <a href="mailto:akhilanangjha@gmail.com" className="text-slate-400 hover:text-pink-500 hover:scale-110 transition-all duration-300">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </a>
                </motion.div>

            </motion.div>

            {/* ---------------- RIGHT CONTENT (IMAGE with Parallax) ---------------- */}
            <motion.div
                style={{ x: moveXOpposite, y: moveYOpposite }}
                className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative w-[260px] sm:w-[320px] md:w-[420px] flex items-center justify-center"
                >
                    {/* Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-600/20 rounded-full blur-[80px] -z-10"></div>

                    {/* Image */}
                    <img
                        src={akhil}
                        alt="Akhil Anang"
                        className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    />
                </motion.div>
            </motion.div>

            {/* 🎯 SCROLL INDICATOR ARROW */}
            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center text-slate-500 hidden md:flex"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-[10px] uppercase tracking-[0.3em] mb-1 font-mono text-slate-400">Scroll</span>
                <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </motion.div>

        </section>
    );
};

export default HeroSection;