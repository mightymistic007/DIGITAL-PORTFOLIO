import React, { useState } from 'react';
import { Github, ExternalLink, Code, Brain, Globe, Database } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: "AI-Powered Chatbot",
      category: "AI/ML",
      description: "An intelligent conversational AI system built using natural language processing techniques.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "NLP", "Flask"],
      status: "In Development",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Smart Recommendation System",
      category: "AI/ML",
      description: "A machine learning-based recommendation engine that analyzes user behavior patterns.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "Scikit-learn", "Pandas", "React"],
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      category: "Web Development",
      description: "An interactive web application for visualizing complex datasets with dynamic charts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      status: "Completed",
      github: "#",
      demo: "#"
    }
  ];

  const categories = ['All', 'AI/ML', 'Web Development', 'Database'];
  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase">
            Projects & <span className="text-[#d9fb06]">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-[#d9fb06] mx-auto mb-6"></div>
          <p className="text-xl text-[#888680] max-w-3xl mx-auto">
            A showcase of my technical projects spanning AI/ML, web development, and data management
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#d9fb06] text-[#1a1c1b]'
                  : 'bg-[#302f2c]/50 text-[#888680] hover:bg-[#3f4816]/40 hover:text-[#d9fb06] border border-[#3f4816]/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-[#302f2c]/50 rounded-lg border border-[#3f4816]/30 hover:border-[#d9fb06]/30 transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-[#888680] text-sm mb-4">{project.description}</p>
                <div className="flex space-x-3">
                  <a href={project.github} className="flex-1 flex items-center justify-center space-x-2 bg-[#3f4816]/40 hover:bg-[#d9fb06] hover:text-[#1a1c1b] text-[#d9fb06] py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} className="flex-1 flex items-center justify-center space-x-2 bg-[#d9fb06] hover:bg-[#d9fb06]/80 text-[#1a1c1b] py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
