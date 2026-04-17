import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 💡 MINE YAHAN 'FiPhone' ADD KIYA HAI
import { FiMail, FiMapPin, FiPhone, FiPlus, FiArrowRight } from 'react-icons/fi';

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What is your current availability?",
      a: "I am currently available for full-time frontend roles and interesting freelance web development projects."
    },
    {
      q: "What tech stack do you specialize in?",
      a: "My core expertise is in React.js, Tailwind CSS, and Framer Motion for building high-end, responsive UIs."
    },
    {
      q: "Where are you based?",
      a: "I am based in the Delhi NCR region, India, and I'm open to both remote and on-site opportunities."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="contact" aria-label="Contact and FAQ" className="py-5 bg-[#0a0d14] relative overflow-hidden">

      {/* Header Section */}
      <header className="container mx-auto px-6 lg:px-16 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mb-4"
        >
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Connect</span>
        </motion.h2>
        <p className="text-slate-400 text-lg font-light">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
        </p>
      </header>

      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl">

        {/* LEFT SIDE - Info Cards */}
        <address className="lg:col-span-4 space-y-6 not-italic">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[#0d111a] border border-white/5 group hover:border-blue-500/30 transition-all duration-500"
          >
            <h3 className="text-xl font-bold text-white mb-8">Contact Info</h3>
            <div className="space-y-6">

              {/* 📞 CLICKABLE PHONE NUMBER (NEW) */}
              <a
                href="tel:+918541804620"
                aria-label="Call Akhil Anang"
                className="flex items-center gap-4 group/item cursor-pointer hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0a0d14] rounded-lg"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 text-xl group-hover/item:bg-emerald-500/20 transition-all">
                  <FiPhone aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-purple-400 uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <p className="text-white group-hover/item:text-emerald-400 transition-colors">
                    +91 85418 04620
                  </p>
                </div>
              </a>

              {/* ✉️ CLICKABLE EMAIL */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=akhilanangjha@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send an email to Akhil Anang"
                className="flex items-center gap-4 group/item cursor-pointer hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-[#0a0d14] rounded-lg"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 text-xl group-hover/item:bg-blue-500/20 transition-all">
                  <FiMail aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-purple-400 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <p className="text-white break-all group-hover/item:text-cyan-400 transition-colors">
                    akhilanangjha@gmail.com
                  </p>
                </div>
              </a>
              
              {/* 📍 CLICKABLE LOCATION */}
              <div className="flex items-center gap-4 group/item">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 text-xl group-hover/item:bg-cyan-500/20 transition-all">
                  <FiMapPin aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-purple-400 uppercase tracking-wider mb-1">Location</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Delhi+NCR+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View location on Google Maps"
                    className="text-white hover:text-cyan-400 transition-colors focus:outline-none focus:underline"
                  >
                    Delhi NCR, India
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[#0d111a] border border-white/5 hover:border-cyan-500/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-3 w-3 bg-cyan-400 rounded-full animate-pulse" aria-hidden="true"></span>
              <h3 className="text-cyan-400 font-bold">Available for work</h3>
            </div>
            <p className="text-slate-400 text-sm">I'm currently looking for new opportunities as a Frontend Developer. I love building clean, modern interfaces and am ready to take on a fresh role where I can contribute to high-quality web development and innovative projects.</p>
          </motion.div>
        </address>

        {/* RIGHT SIDE - FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8 p-8 md:p-12 rounded-3xl bg-[#0d111a] border border-white/5"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>

          <div className="space-y-4" aria-label="FAQ Accordion">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`rounded-2xl border transition-all duration-500 ${isOpen ? 'bg-[#151b28] border-cyan-400/50 shadow-lg shadow-cyan-500/5' : 'bg-[#0a0d14] border-white/5 hover:border-white/20'}`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-2xl"
                  >
                    <h4 className={`font-semibold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                      {index + 1}. {faq.q}
                    </h4>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0, color: isOpen ? '#22d3ee' : '#94a3b8' }}
                      className="text-xl"
                      aria-hidden="true"
                    >
                      <FiPlus />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden px-6"
                      >
                        <p className="text-slate-400 text-sm pb-6 leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* CTA WITH PRE-FILLED EMAIL */}
          <div className="mt-10 pt-6 border-t border-white/5">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=akhilanangjha@gmail.com&su=Project%20Inquiry:%20Professional%20Website%20Development&body=Hi%20Akhil,%0A%0A%20I%20saw%20your%20portfolio%20and%20was%20really%20impressed%20with%20your%20work.%20I%20am%20looking%20to%20build%20a%20high-end,%20professional%20website%20and%20would%20love%20to%20discuss%20the%20details%20with%20you.%0A%0APlease%20let%20me%20know%20your%20availability%20for%20a%20brief%20discussion.%0A%0ABest%20regards,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:scale-105 transition-all shadow-lg shadow-cyan-500/20 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
            >
              SEND ME AN EMAIL <FiArrowRight aria-hidden="true" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;