import React from 'react';
import { MapPin, Calendar, Building, Award } from 'lucide-react';

const Experience = () => {
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
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">Salesforce Agentforce Intern</h4>
                  <p className="text-[#d9fb06] font-medium">Valuehub</p>
                </div>
                <div className="text-right mt-2 sm:mt-0">
                  <div className="flex items-center text-[#888680] text-sm mb-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    Present
                  </div>
                  <div className="flex items-center text-[#888680] text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    Remote
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#d9fb06]/20 text-[#d9fb06] rounded-full text-xs font-semibold uppercase tracking-wider">
                  Internship
                </span>
              </div>

              <p className="text-[#888680] mb-6">Currently gaining hands-on experience in Salesforce ecosystem, focusing on Agentforce platform and CRM solutions.</p>

              <div className="mb-6">
                <h5 className="text-sm font-semibold text-[#d9fb06] mb-3 flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Key Learning & Achievements
                </h5>
                <ul className="space-y-2">
                  <li className="text-[#888680] text-sm flex items-start">
                    <span className="text-[#d9fb06] mr-2">•</span>
                    Learning enterprise-level CRM implementation and customization
                  </li>
                  <li className="text-[#888680] text-sm flex items-start">
                    <span className="text-[#d9fb06] mr-2">•</span>
                    Working with Salesforce Agentforce platform and automation tools
                  </li>
                  <li className="text-[#888680] text-sm flex items-start">
                    <span className="text-[#d9fb06] mr-2">•</span>
                    Developing understanding of business process optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-[#d9fb06] mb-6 flex items-center">
              <Award className="w-6 h-6 mr-3" />
              Education & Learning
            </h3>

            <div className="bg-[#302f2c]/50 p-8 rounded-lg border border-[#3f4816]/30 hover:border-[#d9fb06]/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">Pursuing Technical Education</h4>
                  <p className="text-[#d9fb06] font-medium">Student in Coimbatore</p>
                </div>
                <div className="text-right mt-2 sm:mt-0">
                  <div className="flex items-center text-[#888680] text-sm mb-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    Present
                  </div>
                </div>
              </div>

              <p className="text-[#888680] mb-6">Focused on building strong foundations in computer science, artificial intelligence, and software development while gaining practical experience through internships and projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
