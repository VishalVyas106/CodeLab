import React, { useState } from 'react';
import { Linkedin, Users, CodeIcon, PaletteIcon, TrendingUp, MessageCircle, BarChart2 } from 'lucide-react';

// Team data with detailed information
const teamData = {
  technical: [
    { 
      name: 'Prince Nai', 
      role: 'Lead Developer',
      image: '/api/placeholder/400/400', 
      linkedin: 'https://www.linkedin.com/in/princenai',
      description: 'Full-stack developer with expertise in modern web technologies.'
    },
    { 
      name: 'Krishna Solanki', 
      role: 'Backend Specialist',
      image: '/api/placeholder/400/400', 
      linkedin: 'https://www.linkedin.com/in/krishnasolanki',
      description: 'Cloud and infrastructure expert with scalable solutions.'
    },
    { 
      name: 'Priyanshu Nagar', 
      role: 'Frontend Engineer',
      image: '/api/placeholder/400/400', 
      linkedin: 'https://www.linkedin.com/in/priyanshunagar',
      description: 'UI/UX focused developer creating intuitive interfaces.'
    }
  ],
  design: [
    { 
      name: 'Hetvi Patel', 
      role: 'Lead Designer',
      image: '/api/placeholder/400/400', 
      linkedin: 'https://www.linkedin.com/in/hetvipatel',
      description: 'Creative director with a passion for innovative design solutions.'
    },
    { 
      name: 'Kariti Varma', 
      role: 'UI/UX Designer',
      image: '/api/placeholder/400/400', 
      linkedin: 'https://www.linkedin.com/in/karitivarma',
      description: 'User experience expert focusing on intuitive design.'
    },
    { 
      name: 'Tanishk Kumar', 
      role: 'Graphic Designer',
      image: '/api/placeholder/400/400', 
      linkedin: 'https://www.linkedin.com/in/tanishkkumar',
      description: 'Visual storyteller bringing brands to life through design.'
    }
  ],
  socialMedia: [
    { 
      name: 'Vishwa Patel', 
      role: 'Social Media Strategist',
      image: '/api/placeholder/400/400', 
      linkedin: 'https://www.linkedin.com/in/vishwapatel',
      description: 'Digital marketing expert crafting engaging social narratives.'
    },
    { 
      name: 'Mayank Kumar', 
      role: 'Content Creator',
      image: '/api/placeholder/400/400', 
      linkedin: 'https://www.linkedin.com/in/mayankkumar',
      description: 'Creative content specialist driving digital engagement.'
    },
    { 
      name: 'Tushya Parmar', 
      role: 'Community Manager',
      image: '/api/placeholder/400/400', 
      linkedin: 'https://www.linkedin.com/in/tushyaparmar',
      description: 'Building and nurturing online communities with passion.'
    }
  ],
  management: [
    { 
      name: 'Krinal Sorathiya', 
      role: 'Project Manager',
      image: '/api/placeholder/400/400', 
      linkedin: 'https://www.linkedin.com/in/krinalsorathiya',
      description: 'Strategic leader driving project success and team efficiency.'
    },
    { 
      name: 'Aayush Thakkar', 
      role: 'Operations Head',
      image: '/api/placeholder/400/400', 
      linkedin: 'https://www.linkedin.com/in/aayushthakkar',
      description: 'Operational excellence through innovative management strategies.'
    }
  ],
  finance: [
    { 
      name: 'Vyas Vishal', 
      role: 'Financial Analyst',
      image: '/api/placeholder/400/400', 
      linkedin: 'https://www.linkedin.com/in/vyasvishal',
      description: 'Strategic financial planning and insightful analysis.'
    },
    { 
      name: 'Lucky Choudhary', 
      role: 'Accounting Specialist',
      image: '/api/placeholder/400/400', 
      linkedin: 'https://www.linkedin.com/in/luckychoudhary',
      description: 'Precision-driven financial management and reporting.'
    }
  ]
};

const TeamPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedTeamMembers, setSelectedTeamMembers] = useState([]);

  const departmentIcons = {
    technical: <CodeIcon className="w-12 h-12 text-blue-500" />,
    design: <PaletteIcon className="w-12 h-12 text-purple-500" />,
    socialMedia: <MessageCircle className="w-12 h-12 text-green-500" />,
    management: <Users className="w-12 h-12 text-orange-500" />,
    finance: <BarChart2 className="w-12 h-12 text-red-500" />
  };

  // Handle department click
  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
    setSelectedTeamMembers(teamData[department]);
  };

  // Close sliding window
  const handleCloseWindow = () => {
    setSelectedDepartment(null);
    setSelectedTeamMembers([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
          CodeLab Team Ecosystem
        </h1>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: 'Technical', key: 'technical' },
            { name: 'Design', key: 'design' },
            { name: 'Social Media', key: 'socialMedia' },
            { name: 'Management', key: 'management' },
            { name: 'Finance', key: 'finance' }
          ].map((dept) => (
            <div 
              key={dept.key}
              onClick={() => handleDepartmentClick(dept.key)}
              className="bg-white shadow-xl rounded-2xl p-6 cursor-pointer 
                         transform transition-all duration-300 
                         hover:scale-105 hover:shadow-2xl 
                         flex flex-col items-center 
                         group border-2 border-transparent 
                         hover:border-blue-300"
            >
              <div className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                {departmentIcons[dept.key]}
              </div>
              <h2 className="text-2xl font-semibold text-center text-gray-700 
                             group-hover:text-blue-600 transition-colors">
                {dept.name} Team
              </h2>
            </div>
          ))}
        </div>

        {/* Sliding Window for Team Members */}
        {selectedDepartment && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-50 
                       flex items-center justify-center 
                       animate-fade-in"
          >
            <div 
              className="bg-white w-11/12 max-w-5xl rounded-3xl 
                         shadow-2xl p-8 relative 
                         transform transition-all duration-500 
                         scale-100 opacity-100
                         animate-slide-up"
            >
              <button 
                onClick={handleCloseWindow}
                className="absolute top-6 right-6 
                           text-gray-500 hover:text-red-500 
                           transition-colors duration-300 
                           text-3xl font-light"
              >
                ✕
              </button>

              <h2 className="text-4xl font-bold mb-12 text-center 
                             text-transparent bg-clip-text 
                             bg-gradient-to-r from-blue-600 to-purple-600">
                {selectedDepartment.charAt(0).toUpperCase() + selectedDepartment.slice(1)} Team
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {selectedTeamMembers.map((member, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 rounded-2xl p-6 
                               text-center transform transition-all 
                               duration-300 hover:scale-105 
                               hover:shadow-xl group"
                  >
                    <div className="relative inline-block mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-40 h-40 rounded-full 
                                   mx-auto object-cover 
                                   shadow-lg border-4 
                                   border-white 
                                   group-hover:border-blue-300 
                                   transition-all"
                      />
                      <div className="absolute bottom-0 right-0 
                                      bg-blue-500 text-white 
                                      rounded-full p-2 
                                      shadow-md text-xs">
                        <Users size={16} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-500 mb-4 italic">
                      {member.description}
                    </p>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center 
                                 text-blue-600 hover:text-blue-800 
                                 transition-colors font-semibold"
                    >
                      <Linkedin className="mr-2" size={20} />
                      Connect
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamPage;