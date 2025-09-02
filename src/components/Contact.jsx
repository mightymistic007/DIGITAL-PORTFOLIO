import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Phone, 
  Send, 
  Github,
  MessageSquare,
  User,
  FileText
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "mohankrishnaganjikunta@gmail.com",
      href: "mailto:mohankrishnaganjikunta@gmail.com",
      description: "Best way to reach me for professional inquiries"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Mohan Krishna",
      href: "https://www.linkedin.com/in/mohan-krishna-a05893292/",
      description: "Connect with me professionally"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Coimbatore / Hyderabad",
      href: "#",
      description: "Currently in Coimbatore, originally from Hyderabad"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "View Projects",
      href: "#",
      description: "Check out my code repositories"
    }
  ];

  const quickLinks = [
    { label: "Download Resume", icon: <FileText className="w-4 h-4" />, href: "#" },
    { label: "Schedule a Call", icon: <Phone className="w-4 h-4" />, href: "#" },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#302f2c]/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase">
            Get In <span className="text-[#d9fb06]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#d9fb06] mx-auto mb-6"></div>
          <p className="text-xl text-[#888680] max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities in AI and software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#d9fb06] mb-6">Let's Connect</h3>
              <p className="text-[#888680] text-lg mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about the latest developments in AI and technology. Whether you're 
                looking for an intern, a project collaborator, or just want to connect, I'd love to hear from you!
              </p>
              
              {/* Quick Links */}
              <div className="flex flex-wrap gap-4 mb-8">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center space-x-2 bg-[#3f4816]/40 hover:bg-[#d9fb06] hover:text-[#1a1c1b] text-[#d9fb06] px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="block bg-[#302f2c]/50 p-6 rounded-lg border border-[#3f4816]/30 hover:border-[#d9fb06]/30 hover:bg-[#3f4816]/20 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-[#d9fb06] group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">{contact.label}</h4>
                      <p className="text-[#d9fb06] font-medium mb-2">{contact.value}</p>
                      <p className="text-[#888680] text-sm">{contact.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Available For */}
            <div className="bg-[#3f4816]/20 p-6 rounded-lg border border-[#d9fb06]/20">
              <h4 className="text-lg font-semibold text-[#d9fb06] mb-4">Currently Available For:</h4>
              <ul className="space-y-2 text-[#888680]">
                <li className="flex items-center">
                  <span className="text-[#d9fb06] mr-2">•</span>
                  Internship opportunities in AI/ML or Software Development
                </li>
                <li className="flex items-center">
                  <span className="text-[#d9fb06] mr-2">•</span>
                  Collaborative projects and hackathons
                </li>
                <li className="flex items-center">
                  <span className="text-[#d9fb06] mr-2">•</span>
                  Freelance web development projects
                </li>
                <li className="flex items-center">
                  <span className="text-[#d9fb06] mr-2">•</span>
                  Technical discussions and knowledge sharing
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#302f2c]/50 p-8 rounded-lg border border-[#3f4816]/30">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#d9fb06] mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1c1b] border border-[#3f4816]/50 rounded-lg text-white placeholder-[#888680] focus:border-[#d9fb06] focus:outline-none transition-colors duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#d9fb06] mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1c1b] border border-[#3f4816]/50 rounded-lg text-white placeholder-[#888680] focus:border-[#d9fb06] focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#d9fb06] mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1c1b] border border-[#3f4816]/50 rounded-lg text-white placeholder-[#888680] focus:border-[#d9fb06] focus:outline-none transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#d9fb06] mb-2">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1a1c1b] border border-[#3f4816]/50 rounded-lg text-white placeholder-[#888680] focus:border-[#d9fb06] focus:outline-none transition-colors duration-300 resize-vertical"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-[#888680] text-[#302f2c] cursor-not-allowed'
                    : 'bg-[#d9fb06] text-[#1a1c1b] hover:scale-105 hover:bg-[#d9fb06]/90'
                }`}
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>

            {/* Response Time */}
            <div className="mt-6 text-center">
              <p className="text-[#888680] text-sm">
                ⚡ I typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;