import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projets";
import Contact from "../components/Contacts";
import Footer from "../components/Footer";
import akhil from "../assets/akhil.webp"; 

const HomePage = () => {
  // 🧠 1. PERSON SCHEMA: Google Knowledge Panel & Social Linking ke liye
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Akhil Anang",
    "jobTitle": "Frontend Web Developer",
    "url": "https://yourdomain.com", // APNA LIVE URL YAHAN DAALNA
    "image": "https://yourdomain.com/akhil.webp", // APNA LIVE URL YAHAN DAALNA
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Maharshi Dayanand University (MDU)"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Graphura India Private Limited"
    },
    "knowsAbout": ["React.js", "Tailwind CSS", "JavaScript", "Frontend Development", "Web Optimization"],
    "sameAs": [
      "https://github.com/akhil4ph",
      "https://www.linkedin.com/in/akhil-anang-/"
    ]
  };

  // 🧠 2. FAQ SCHEMA: Google Search me direct questions/answers dikhane ke liye
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is your current availability?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I am currently available for full-time frontend roles and interesting freelance web development projects."
        }
      },
      {
        "@type": "Question",
        "name": "What tech stack do you specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "My core expertise is in React.js, Tailwind CSS, and Framer Motion for building high-end, responsive UIs."
        }
      },
      {
        "@type": "Question",
        "name": "Where are you based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I am based in the Delhi NCR region, India, and I'm open to both remote and on-site opportunities."
        }
      }
    ]
  };

  return (
    <div className="relative w-full">
      {/* 🔥 THE ULTIMATE SEO HELMET 🔥 */}
      <Helmet>
        {/* 1. Basic & CTR Optimized Tags */}
        <title>Akhil Anang</title>
        <link rel="icon" type="image/webp" href="/akhil.webp" />
        <meta name="description" content="Portfolio of Akhil Anang, a passionate Frontend Web Developer based in Delhi NCR. Specializing in React.js, Tailwind CSS, and high-performance modern UIs." />
        <meta name="keywords" content="Akhil Anang, Frontend Developer, React Developer, Freelance Web Developer Delhi NCR, Tailwind CSS" />
        <meta name="author" content="Akhil Anang" />

        {/* 2. Technical SEO: Canonical Tag (Duplicate content issue avoid karne ke liye) */}
        <link rel="canonical" href="https://yourdomain.com/" /> {/* APNA LIVE URL DAALNA */}

        {/* 3. Off-Page/Social SEO: Open Graph (Facebook/WhatsApp link preview ke liye) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:title" content="Akhil Anang" />
        <meta property="og:description" content="Frontend Web Developer | React.js | Tailwind CSS. Let's build something amazing." />
        <meta property="og:image" content="https://yourdomain.com/akhil.webp" />

        {/* 4. Twitter Cards */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourdomain.com/" />
        <meta property="twitter:title" content="Akhil Anang" />
        <meta property="twitter:description" content="Frontend Web Developer | React.js | Tailwind CSS." />
        <meta property="twitter:image" content="https://yourdomain.com/akhil.webp" />

        {/* 5. Advanced Micro SEO: Structured Data (Schema Markup) */}
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>

        {/* HERO */}
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