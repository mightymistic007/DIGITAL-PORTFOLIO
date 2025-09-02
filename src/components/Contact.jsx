import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#302f2c]/20">
      <div className="container mx-auto max-w-6xl">
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
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-[#d9fb06] mb-6">Let's Connect</h3>
            <p className="text-[#888680] text-lg mb-8">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply chat about the latest developments in AI and technology.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:mohankrishnaganjikunta@gmail.com" className="block bg-[#302f2c]/50 p-6 rounded-lg border border-[#3f4816]/30 hover:border-[#d9fb06]/30 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-[#d9fb06]" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-[#d9fb06] font-medium">mohankrishnaganjikunta@gmail.com</p>
                  </div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/mohan-krishna-a05893292/" target="_blank" rel="noopener noreferrer" className="block bg-[#302f2c]/50 p-6 rounded-lg border border-[#3f4816]/30 hover:border-[#d9fb06]/30 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <Linkedin className="w-5 h-5 text-[#d9fb06]" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">LinkedIn</h4>
                    <p className="text-[#d9fb06] font-medium">Mohan Krishna</p>
                  </div>
                </div>
              </a>

              <div className="bg-[#302f2c]/50 p-6 rounded-lg border border-[#3f4816]/30">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-[#d9fb06]" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-[#d9fb06] font-medium">Coimbatore / Hyderabad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#302f2c]/50 p-8 rounded-lg border border-[#3f4816]/30">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1c1b] border border-[#3f4816]/50 rounded-lg text-white placeholder-[#888680] focus:border-[#d9fb06] focus:outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1c1b] border border-[#3f4816]/50 rounded-lg text-white placeholder-[#888680] focus:border-[#d9fb06] focus:outline-none"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1c1b] border border-[#3f4816]/50 rounded-lg text-white placeholder-[#888680] focus:border-[#d9fb06] focus:outline-none"
                  placeholder="Subject"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1a1c1b] border border-[#3f4816]/50 rounded-lg text-white placeholder-[#888680] focus:border-[#d9fb06] focus:outline-none resize-vertical"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-semibold bg-[#d9fb06] text-[#1a1c1b] hover:scale-105 transition-transform duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
