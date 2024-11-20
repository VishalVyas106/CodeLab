import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Code, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'Community', href: '/community' },
  { name: 'Events', href: '/events' },
  { name: 'About', href: '/about' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (href) => {
    navigate(href);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">CodeLab</span>
          </div>

          <DesktopNavigation 
            navLinks={navLinks} 
            onLogin={login} 
            onSignup={() => navigate('/signup')} 
          />

          <MobileMenuToggle 
            isOpen={isOpen} 
            onToggle={toggleMobileMenu} 
          />
        </div>

        {isOpen && (
          <MobileMenu 
            navLinks={navLinks} 
            onLogin={login} 
            onNavigate={handleNavigation} 
          />
        )}
      </div>
    </nav>
  );
};

const DesktopNavigation = ({ navLinks, onLogin, onSignup }) => (
  <>
    <div className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
        >
          {link.name}
        </a>
      ))}
    </div>

    <div className="hidden md:flex items-center space-x-4">
      <button
        onClick={onLogin}
        className="text-gray-600 hover:text-blue-600 font-medium"
        to="/login"
      >
        Sign In
      </button>
      <button
        onClick={onSignup}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        to="/Register"
      >
        Sign Up
      </button>
    </div>
  </>
);

const MobileMenuToggle= ({ isOpen, onToggle }) => (
  <div className="md:hidden">
    <button
      onClick={onToggle}
      className="text-gray-600 hover:text-blue-600"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  </div>
);

const MobileMenu = ({ navLinks, onLogin, onNavigate }) => (
  <div className="md:hidden py-4">
    <div className="flex flex-col space-y-4">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
          onClick={() => onNavigate(link.href)}
        >
          {link.name}
        </a>
      ))}
      <hr className="border-gray-200" />
      <button
        onClick={onLogin}
        className="text-gray-600 hover:text-blue-600 font-medium text-left"
      >
        Sign In
      </button>
      <button
        onClick={() => onNavigate('/signup')}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Sign Up
      </button>
    </div>
  </div>
);

export default Navbar;