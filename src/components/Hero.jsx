import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d9fb06]/10 to-transparent"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#3f4816]/30 text-[#d9fb06] rounded-full text-sm font-semibold uppercase tracking-wider">
              Welcome to my portfolio
            </span>
          </div>

          {/* Name */}
          <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            <span className="text-white">GANJIKUNTA</span>
            <br />
            <span className="text-[#d9fb06]">MOHAN KRISHNA</span>
          </h1>

          {/* Title & Tagline */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#888680] mb-2">
              STUDENT & AI ENTHUSIAST
            </h2>
            <p className="text-lg md:text-xl text-[#888680] max-w-2xl mx-auto">
              Passionate about Machine Learning, Deep Learning, and building intelligent solutions. 
              Currently exploring the frontiers of AI while honing my development skills.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 uppercase tracking-wide"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary border-2 border-[#d9fb06] text-[#d9fb06] px-8 py-4 rounded-full font-semibold hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300 uppercase tracking-wide"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/mohan-krishna-a05893292/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mohankrishnaganjikunta@gmail.com"
              className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
            <a
              href="#"
              className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;