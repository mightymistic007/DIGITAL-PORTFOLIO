import React from 'react';
import { Brain, Code, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Enthusiast",
      description: "Passionate about exploring machine learning, deep learning, and natural language processing"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Developer",
      description: "Building web applications with modern technologies and best practices"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Continuous Learner",
      description: "Always eager to learn new technologies and stay updated with industry trends"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Focused on creating innovative solutions to real-world challenges"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-[#302f2c]/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase">
            About <span className="text-[#d9fb06]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#d9fb06] mx-auto mb-6"></div>
          <p className="text-xl text-[#888680] max-w-3xl mx-auto">
            A passionate student on a mission to bridge the gap between artificial intelligence and practical applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="bg-[#302f2c]/50 p-8 rounded-lg border border-[#3f4816]/30">
              <h3 className="text-2xl font-semibold text-[#d9fb06] mb-4">My Journey</h3>
              <div className="space-y-4 text-[#888680] leading-relaxed">
                <p>
                  I'm currently a student based in Coimbatore, originally from Hyderabad, with an insatiable 
                  curiosity for artificial intelligence and its transformative potential. My journey into tech 
                  began with a fascination for how machines can learn and make intelligent decisions.
                </p>
                <p>
                  Currently, I'm gaining valuable industry experience as a Salesforce Agentforce Intern at 
                  Valuehub, where I'm applying my technical skills in a real-world business environment. 
                  This role has given me insights into enterprise solutions and customer relationship management.
                </p>
                <p>
                  My technical expertise spans across machine learning, deep learning, natural language processing, 
                  and web development. I'm proficient in Python, C, and database management systems, always 
                  looking for opportunities to build intelligent and efficient solutions.
                </p>
              </div>
            </div>

            {/* Current Status */}
            <div className="bg-[#3f4816]/20 p-6 rounded-lg border border-[#d9fb06]/20">
              <h4 className="text-lg font-semibold text-[#d9fb06] mb-2">Currently</h4>
              <p className="text-[#888680]">
                🎓 Student in Coimbatore<br />
                💼 Salesforce Agentforce Intern at Valuehub<br />
                🏠 Originally from Hyderabad
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-[#302f2c]/50 p-6 rounded-lg border border-[#3f4816]/30 hover:bg-[#3f4816]/20 hover:border-[#d9fb06]/30 transition-all duration-300 group"
              >
                <div className="text-[#d9fb06] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-[#888680] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">What Drives Me</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h4 className="text-[#d9fb06] font-semibold">Innovation</h4>
              <p className="text-[#888680] text-sm">Creating solutions that make a meaningful impact</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[#d9fb06] font-semibold">Learning</h4>
              <p className="text-[#888680] text-sm">Continuously expanding knowledge and skills</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[#d9fb06] font-semibold">Excellence</h4>
              <p className="text-[#888680] text-sm">Striving for quality in every project and endeavor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;