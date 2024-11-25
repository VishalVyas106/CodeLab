import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Code, Users, Trophy, ShoppingBag, Brain } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-12 h-12 text-blue-500" />,
    title: "AI Study Tools",
    description: "Personalized AI-driven learning experiences and intelligent tutoring.",
    route: "/ai-tools"
  },
  {
    icon: <Book className="w-12 h-12 text-blue-500" />,
    title: "Study Material",
    description: "Comprehensive resources tailored to your academic journey.",
    route: "/study-materials"
  },
  {
    icon: <Code className="w-12 h-12 text-blue-500" />,
    title: "Code Editor",
    description: "Advanced coding environment with multi-language support.",
    route: "https://code-editor-seven-iota.vercel.app/"
  },
  {
    icon: <Users className="w-12 h-12 text-blue-500" />,
    title: "Guest Lectures",
    description: "Expert-led workshops and industry insights.",
    route: "/guest-lectures"
  },
  {
    icon: <Trophy className="w-12 h-12 text-blue-500" />,
    title: "Competitions",
    description: "Challenging coding contests with real-world rewards.",
    route: "/competitions"
  },
  {
    icon: <ShoppingBag className="w-12 h-12 text-blue-500" />,
    title: "Merchandise",
    description: "Official CodeLab branded gear and collectibles.",
    route: "/merchandise"
  }
];

const FeatureCard = ({ feature }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
    <div className="flex items-center mb-4 space-x-4">
      <div className="bg-blue-50 p-3 rounded-full">
        {React.cloneElement(feature.icon, {
          className: "w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform"
        })}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
        {feature.title}
      </h3>
    </div>
    <p className="text-gray-600 mb-4 min-h-[70px]">
      {feature.description}
    </p>
    <Link 
      to={feature.route} 
      className="flex items-center text-blue-600 hover:text-blue-800 font-medium group/link"
    >
      Explore 
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 ml-2 group-hover/link:translate-x-1 transition-transform" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </Link>
  </div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Join CodeLab?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Accelerate your learning with our comprehensive tech platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;