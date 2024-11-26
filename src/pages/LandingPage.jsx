import React from 'react';
import { 
  BookOpen, 
  Code, 
  Users, 
  ArrowDownCircle, 
  Zap, 
  Globe, 
  CheckCircle 
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturesSection from '../components/FeaturesSection';
// import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />
      <HeroSection 
        onLogin={login} 
        onExplore={() => navigate('/subjects')}
        onDiscoverMore={scrollToFeatures}
      />
      <FeaturesSection />
      <JoinSection onLogin={()=> navigate('/login')} />
      <Footer />
    </div>
  );
};

const HeroSection = ({ onLogin, onExplore, onDiscoverMore }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="relative min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center"
  >
    <div className="absolute inset-0 bg-noise opacity-20"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-blue-500/30 text-blue-200 px-4 py-2 rounded-full mb-6 text-sm tracking-wide"
        >
          Introducing CodeLab Community • Beta V0.2
        </motion.div>

        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
        >
          Collaborative <span className="text-blue-300">Coding</span> Platform
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto"
        >
          Transform Your Coding Journey Through Community-Driven Learning
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
        >
          <a
             href='https://code-editor-seven-iota.vercel.app/'
             className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl 
             hover:bg-blue-700 transition-all transform hover:scale-105 
             flex items-center justify-center"
             >
             <Code className="mr-2" />
                Start Coding
               </a>
          
          <button
            onClick={onExplore}
            className="w-full md:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white 
            rounded-xl hover:bg-white/20 border border-white/20 flex items-center justify-center"
          >
            <BookOpen className="mr-2" /> Study Material
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex justify-center space-x-6 text-white/80"
        >
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-300" />
            <span>50+ Developers</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5 text-green-300" />
            <span>Ampics Community</span>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const JoinSection = ({ onLogin }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="bg-gradient-to-r from-blue-600 to-purple-700 py-16"
  >
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">
        Your Coding Journey Starts Here
      </h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Join a vibrant community of developers, learn cutting-edge technologies, and turn your programming dreams into reality.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onLogin}
        className="bg-white text-blue-700 px-10 py-4 rounded-xl font-semibold 
        hover:bg-blue-50 shadow-2xl transition-all"
      >
        Join CodeLab Now
      </motion.button>

        

    </div>
  </motion.div>



);

export default LandingPage;