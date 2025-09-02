import React from 'react';
import { 
  Brain, 
  Code, 
  Database, 
  Globe, 
  Zap, 
  Cpu,
  MessageSquare,
  BarChart3 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Artificial Intelligence",
      skills: [
        { name: "Machine Learning", icon: <Brain className="w-5 h-5" />, level: 85 },
        { name: "Deep Learning", icon: <Cpu className="w-5 h-5" />, level: 80 },
        { name: "Natural Language Processing", icon: <MessageSquare className="w-5 h-5" />, level: 75 }
      ]
    },
    {
      title: "Programming & Development",
      skills: [
        { name: "Python", icon: <Code className="w-5 h-5" />, level: 90 },
        { name: "C Programming", icon: <Code className="w-5 h-5" />, level: 85 },
        { name: "Web Development", icon: <Globe className="w-5 h-5" />, level: 80 }
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "DBMS", icon: <Database className="w-5 h-5" />, level: 85 },
        { name: "Data Analysis", icon: <BarChart3 className="w-5 h-5" />, level: 80 },
        { name: "Salesforce", icon: <Zap className="w-5 h-5" />, level: 70 }
      ]
    }
  ];

  const technicalTools = [
    "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", 
    "React", "Node.js", "JavaScript", "HTML/CSS", "Git",
    "MySQL", "MongoDB", "Salesforce CRM", "Jupyter Notebooks"
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase">
            Skills & <span className="text-[#d9fb06]">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-[#d9fb06] mx-auto mb-6"></div>
          <p className="text-xl text-[#888680] max-w-3xl mx-auto">
            A comprehensive toolkit spanning artificial intelligence, software development, and data management
          </p>
        </div>

        {/* Main Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-[#302f2c]/50 p-8 rounded-lg border border-[#3f4816]/30 hover:border-[#d9fb06]/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#d9fb06] mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-[#d9fb06]">
                          {skill.icon}
                        </div>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-[#888680] text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#1a1c1b] rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#d9fb06] to-[#3f4816] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Tools */}
        <div className="bg-[#302f2c]/30 p-8 rounded-lg border border-[#3f4816]/30">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technicalTools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#3f4816]/40 text-[#d9fb06] rounded-full text-sm font-medium hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Focus */}
        <div className="mt-12 text-center">
          <div className="bg-[#3f4816]/20 p-6 rounded-lg border border-[#d9fb06]/20 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-[#d9fb06] mb-3">Currently Learning</h4>
            <p className="text-[#888680]">
              Advanced Deep Learning architectures, MLOps practices, and Enterprise Salesforce solutions. 
              Always exploring new frameworks and staying updated with the latest AI research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;