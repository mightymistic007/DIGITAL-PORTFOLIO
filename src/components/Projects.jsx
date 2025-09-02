import React, { useState } from 'react';
import { Github, ExternalLink, Code, Brain, Globe, Database, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: "AI-Powered Chatbot",
      category: "AI/ML",
      description: "An intelligent conversational AI system built using natural language processing techniques. Features include intent recognition, context awareness, and multi-turn conversations.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "NLP", "Flask", "JavaScript"],
      features: [
        "Natural language understanding",
        "Context-aware responses",
        "Multi-language support",
        "Real-time conversation"
      ],
      status: "In Development",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Smart Recommendation System",
      category: "AI/ML",
      description: "A machine learning-based recommendation engine that analyzes user behavior patterns to provide personalized suggestions with high accuracy.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "React"],
      features: [
        "Collaborative filtering",
        "Content-based recommendations",
        "Real-time analysis",
        "User preference learning"
      ],
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      category: "Web Development",
      description: "An interactive web application for visualizing complex datasets with dynamic charts, filters, and real-time updates for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Chart.js"],
      features: [
        "Interactive charts",
        "Real-time data updates",
        "Custom filtering",
        "Export functionality"
      ],
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Predictive Analytics Tool",
      category: "AI/ML",
      description: "A comprehensive tool for predictive modeling and time series analysis, helping businesses forecast trends and make data-driven decisions.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=300&fit=crop",
      technologies: ["Python", "PyTorch", "Jupyter", "FastAPI", "Docker"],
      features: [
        "Time series forecasting",
        "Multiple ML models",
        "Model comparison",
        "Automated reporting"
      ],
      status: "In Development",
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A full-stack e-commerce solution with modern UI/UX, secure payment integration, and comprehensive admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      features: [
        "User authentication",
        "Payment integration",
        "Order management",
        "Admin dashboard"
      ],
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "Database Management System",
      category: "Database",
      description: "A custom database management interface with advanced querying capabilities, data visualization, and automated backup systems.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      technologies: ["Python", "MySQL", "PostgreSQL", "Django", "React"],
      features: [
        "Advanced querying",
        "Data visualization",
        "Automated backups",
        "User management"
      ],
      status: "Planning",
      github: "#",
      demo: "#"
    }
  ];

  const categories = ['All', 'AI/ML', 'Web Development', 'Database'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Development':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Planning':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI/ML':
        return <Brain className="w-4 h-4" />;
      case 'Web Development':
        return <Globe className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase">
            Projects & <span className="text-[#d9fb06]">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-[#d9fb06] mx-auto mb-6"></div>
          <p className="text-xl text-[#888680] max-w-3xl mx-auto">
            A showcase of my technical projects spanning AI/ML, web development, and data management
          </p>
        </div>

        {/* Category Filter */}
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#302f2c]/50 rounded-lg border border-[#3f4816]/30 hover:border-[#d9fb06]/30 transition-all duration-300 group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1 bg-[#1a1c1b]/80 px-3 py-1 rounded-full">
                    {getCategoryIcon(project.category)}
                    <span className="text-[#d9fb06] text-xs font-medium">{project.category}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-[#888680] text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#d9fb06] mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="text-[#888680] text-xs flex items-start">
                        <ChevronRight className="w-3 h-3 text-[#d9fb06] mr-1 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#3f4816]/40 text-[#d9fb06] rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-[#888680]/20 text-[#888680] rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center space-x-2 bg-[#3f4816]/40 hover:bg-[#d9fb06] hover:text-[#1a1c1b] text-[#d9fb06] py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center space-x-2 bg-[#d9fb06] hover:bg-[#d9fb06]/80 text-[#1a1c1b] py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-[#302f2c]/30 p-8 rounded-lg border border-[#3f4816]/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Want to See More?</h3>
            <p className="text-[#888680] mb-6">
              These are just a few highlights from my portfolio. I'm constantly working on new projects 
              and exploring innovative solutions in AI, web development, and data science.
            </p>
            <a
              href="https://www.linkedin.com/in/mohan-krishna-a05893292/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#d9fb06] text-[#1a1c1b] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              <span>Connect With Me</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;