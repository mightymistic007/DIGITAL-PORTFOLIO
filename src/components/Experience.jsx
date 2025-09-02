import React from 'react';
import { MapPin, Calendar, Building, Award, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experience = {
    company: "Valuehub",
    position: "Salesforce Agentforce Intern",
    duration: "Present",
    location: "Remote",
    type: "Internship",
    description: "Currently gaining hands-on experience in Salesforce ecosystem, focusing on Agentforce platform and CRM solutions.",
    achievements: [
      "Learning enterprise-level CRM implementation and customization",
      "Working with Salesforce Agentforce platform and automation tools",
      "Developing understanding of business process optimization",
      "Collaborating with cross-functional teams in an agile environment"
    ],
    skills: ["Salesforce", "CRM", "Business Process Analysis", "Team Collaboration"]
  };

  const education = {
    institution: "Student in Coimbatore",
    degree: "Pursuing Technical Education",
    focus: "AI & Software Development",
    duration: "Present",
    description: "Focused on building strong foundations in computer science, artificial intelligence, and software development while gaining practical experience through internships and projects."
  };

  return (
    <section id="experience" className="py-20 px-6 bg-[#302f2c]/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase">
            Experience & <span className="text-[#d9fb06]">Education</span>
          </h2>
          <div className="w-24 h-1 bg-[#d9fb06] mx-auto mb-6"></div>
          <p className="text-xl text-[#888680] max-w-3xl mx-auto">
            Building expertise through hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-[#d9fb06] mb-6 flex items-center">
              <Building className="w-6 h-6 mr-3" />
              Professional Experience
            </h3>

            <div className="bg-[#302f2c]/50 p-8 rounded-lg border border-[#3f4816]/30 hover:border-[#d9fb06]/30 transition-all duration-300">
              {/* Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">{experience.position}</h4>
                  <p className="text-[#d9fb06] font-medium">{experience.company}</p>
                </div>
                <div className="text-right mt-2 sm:mt-0">
                  <div className="flex items-center text-[#888680] text-sm mb-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center text-[#888680] text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {experience.location}
                  </div>
                </div>
              </div>

              {/* Type Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#d9fb06]/20 text-[#d9fb06] rounded-full text-xs font-semibold uppercase tracking-wider">
                  {experience.type}
                </span>
              </div>

              {/* Description */}
              <p className="text-[#888680] mb-6">{experience.description}</p>

              {/* Key Achievements */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-[#d9fb06] mb-3 flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Key Learning & Achievements
                </h5>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="text-[#888680] text-sm flex items-start">
                      <span className="text-[#d9fb06] mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Used */}
              <div>
                <h5 className="text-sm font-semibold text-[#d9fb06] mb-3">Technologies & Skills</h5>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#3f4816]/40 text-[#d9fb06] rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-[#d9fb06] mb-6 flex items-center">
              <Award className="w-6 h-6 mr-3" />
              Education & Learning
            </h3>

            {/* Current Education */}
            <div className="bg-[#302f2c]/50 p-8 rounded-lg border border-[#3f4816]/30 hover:border-[#d9fb06]/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">{education.degree}</h4>
                  <p className="text-[#d9fb06] font-medium">{education.institution}</p>
                </div>
                <div className="text-right mt-2 sm:mt-0">
                  <div className="flex items-center text-[#888680] text-sm mb-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    {education.duration}
                  </div>
                  <div className="flex items-center text-[#888680] text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    Coimbatore
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#d9fb06]/20 text-[#d9fb06] rounded-full text-xs font-semibold uppercase tracking-wider">
                  {education.focus}
                </span>
              </div>

              <p className="text-[#888680] mb-6">{education.description}</p>

              {/* Academic Focus Areas */}
              <div>
                <h5 className="text-sm font-semibold text-[#d9fb06] mb-3">Focus Areas</h5>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Deep Learning", "Web Development", "Data Structures", "Algorithms", "Database Systems"].map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#3f4816]/40 text-[#d9fb06] rounded-full text-xs font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Background Info */}
            <div className="bg-[#3f4816]/20 p-6 rounded-lg border border-[#d9fb06]/20">
              <h4 className="text-lg font-semibold text-[#d9fb06] mb-3">Background</h4>
              <div className="space-y-2 text-[#888680] text-sm">
                <p><strong>Current Location:</strong> Coimbatore (Student)</p>
                <p><strong>Home:</strong> Hyderabad</p>
                <p><strong>Focus:</strong> Building a strong foundation in AI and software development while gaining practical industry experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Goals */}
        <div className="mt-16 text-center">
          <div className="bg-[#302f2c]/30 p-8 rounded-lg border border-[#3f4816]/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Career Aspirations</h3>
            <p className="text-[#888680] text-lg leading-relaxed">
              Aspiring to become a versatile AI engineer who can bridge the gap between cutting-edge research and 
              practical business applications. My goal is to contribute to innovative projects that leverage artificial 
              intelligence to solve real-world problems while continuing to grow in both technical expertise and 
              industry knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;