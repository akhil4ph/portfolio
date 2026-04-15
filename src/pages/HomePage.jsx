import React from 'react';
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projets" 
import Contact from "../components/Contacts"
import Footer from "../components/Footer";   
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="relative w-full">
      
      <Navbar />

    
      <div> 
      
        
       <HeroSection /> 
        <About />
        
        <Projects />
        <Contact />
        <Footer />  
      </div>
    </div>
  );
};

export default HomePage;