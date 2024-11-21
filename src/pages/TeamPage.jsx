import React from 'react';
import { 
  User, 
  Code, 
//   PaintBrush,
LoaderPinwheel , 
  Share2, 
  Briefcase 
} from 'lucide-react';
import Navbar from '../components/Navbar';

const TeamPage = () => {
  const teamSections = [
    {
      title: 'Technical Team ',
      icon: <User className="w-8 h-8 text-blue-600" />,
      members: [
        'Vyas Vishal',
        'Krishna Solanki', 
        'Priyanshu Nager'
      ]
    },
    {
      title: 'Design Team',
      icon: <LoaderPinwheel className="w-8 h-8 text-green-600" />,
      members: [
        'Hetvi Patel',
        'Kushal Kumar',
        'Tanishk Kumar'
      ]
    },
    {
      title: 'Social Media',
      icon: <Share2 className="w-8 h-8 text-purple-600" />,
      members: [
        'Vishwa Patel',
        'Lucky Choudhary', 
        'Tushya Kumar'
      ]
    },
    {
      title: 'Management',
      icon: <Briefcase className="w-8 h-8 text-red-600" />,
      members: [
        'Krinal Sorathiya',
        'Aayush Thakker', 
        'Danesh Choudhary'
      ]
    }
  ];

  return (
  <>
        <Navbar />
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto pt-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Awesome Team
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamSections.map((section, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="ml-4 text-xl font-semibold text-gray-700">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-2">
                {section.members.map((member, memberIndex) => (
                  <li 
                  key={memberIndex} 
                    className="text-gray-600 flex items-center"
                  >
                    <span className="mr-2 text-blue-500">•</span>
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
                </>
  );
};

export default TeamPage;