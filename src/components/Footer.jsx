import React from 'react';
import { Mail, Linkedin, Github, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1c1b] border-t border-[#3f4816]/30 relative">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#d9fb06] mb-2">Mohan Krishna</h3>
            <p className="text-[#888680] mb-6">
              Passionate about creating intelligent solutions and building the future with AI and technology.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/mohan-krishna-a05893292/" target="_blank" rel="noopener noreferrer" className="text-[#888680] hover:text-[#d9fb06] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:mohankrishnaganjikunta@gmail.com" className="text-[#888680] hover:text-[#d9fb06] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#888680] hover:text-[#d9fb06] transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="text-[#888680]">mohankrishnaganjikunta@gmail.com</p>
              <p className="text-[#888680]">Coimbatore / Hyderabad</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Currently</h4>
            <div className="space-y-2 text-sm">
              <p className="text-[#888680]">🎓 Student</p>
              <p className="text-[#888680]">💼 Salesforce Intern at Valuehub</p>
              <p className="text-[#888680]">🚀 Available for opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3f4816]/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#888680] text-sm mb-4 md:mb-0 flex items-center">
            © 2024 Ganjikunta Mohan Krishna. Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> and lots of coffee.
          </p>
          
          <button onClick={scrollToTop} className="flex items-center space-x-2 text-[#888680] hover:text-[#d9fb06] transition-colors">
            <span className="text-sm">Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;import React from 'react';
import { Mail, Linkedin, Github, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/mohan-krishna-a05893292/",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:mohankrishnaganjikunta@gmail.com",
      label: "Email"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "#",
      label: "GitHub"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a1c1b] border-t border-[#3f4816]/30 relative">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-[#d9fb06] mb-2">Mohan Krishna</h3>
              <p className="text-[#888680] text-lg">AI Enthusiast & Developer</p>
            </div>
            <p className="text-[#888680] mb-6 max-w-md">
              Passionate about creating intelligent solutions and building the future with AI and technology. 
              Currently exploring new opportunities and collaborations.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="bg-[#302f2c]/50 p-3 rounded-lg text-[#888680] hover:text-[#d9fb06] hover:bg-[#3f4816]/40 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <p className="text-[#888680]">
                <strong className="text-[#d9fb06]">Email:</strong><br />
                mohankrishnaganjikunta@gmail.com
              </p>
              <p className="text-[#888680]">
                <strong className="text-[#d9fb06]">Location:</strong><br />
                Coimbatore / Hyderabad
              </p>
              <p className="text-[#888680]">
                <strong className="text-[#d9fb06]">Status:</strong><br />
                Available for opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#3f4816]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-[#888680] text-sm mb-4 md:mb-0">
              <p className="flex items-center">
                © {currentYear} Ganjikunta Mohan Krishna. Made with 
                <Heart className="w-4 h-4 mx-1 text-red-500" /> 
                and lots of coffee.
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 group"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-[#888680] text-xs">
            This portfolio is built with React, styled with Tailwind CSS, and deployed with love. 
            Always learning, always building! 🚀
          </p>
        </div>
      </div>

      {/* Floating Action Button - Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#d9fb06] text-[#1a1c1b] p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
