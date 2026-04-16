import React from 'react';
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projets";
import Contact from "../components/Contacts";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="relative w-full">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>

        {/* HOME / HERO */}
        <section id="home" className="min-h-screen flex items-center">
          <HeroSection />
        </section>

        {/* ABOUT */}
        <section id="about" className="min-h-screen flex items-center">
          <About />
        </section>

        {/* PROJECTS */}
        <section id="portfolio" className="min-h-screen flex items-center">
          <Projects />
        </section>

        {/* CONTACT */}
        <section id="contact" className="min-h-screen flex items-center">
          <Contact />
        </section>

        {/* FOOTER */}
        <Footer />

      </main>
    </div>
  );
};

export default HomePage;