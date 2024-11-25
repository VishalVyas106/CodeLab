import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Code, Menu, X, User, LogOut } from 'lucide-react';

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
  const { user, logout } = useAuth();

  const toggleMobileMenu = () => setIsOpen((prev) => !prev);

  const handleNavigation = (href) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <BrandLogo />
          <DesktopNavigation
            navLinks={navLinks}
            user={user}
            onLogin={() => navigate('/login')}
            onSignup={() => navigate('/register')}
            onLogout={handleLogout}
          />
          <MobileMenuToggle isOpen={isOpen} onToggle={toggleMobileMenu} />
        </div>
        {isOpen && (
          <MobileMenu
            navLinks={navLinks}
            user={user}
            onLogin={() => navigate('/login')}
            onSignup={() => navigate('/register')}
            onNavigate={handleNavigation}
            onLogout={handleLogout}
          />
        )}
      </div>
    </nav>
  );
};

const BrandLogo = () => (
  <div className="flex items-center space-x-2">
    <Code className="h-8 w-8 text-blue-600" />
    <span className="text-2xl font-bold text-gray-900">CodeLab</span>
  </div>
);

const DesktopNavigation = ({ navLinks, user, onLogin, onSignup, onLogout }) => (
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
    <div className="flex items-center space-x-4">
      {user ? (
        <>
          <div className="flex items-center space-x-3 p-2 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100">
    <User className="h-5 w-5 text-gray-500" />
  </div>
  <span className="text-gray-800 font-medium truncate" title={user.name}>
    {user.name}
  </span>
</div>



          <button
            onClick={onLogout}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 font-medium"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </>
      ) : (
        <>
          <button
            onClick={onLogin}
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            join us
          </button>
          {/* <button
            onClick={onSignup}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </button> */}
        </>
      )}
    </div>
  </div>
);

const MobileMenuToggle = ({ isOpen, onToggle }) => (
  <button onClick={onToggle} className="md:hidden text-gray-600 hover:text-blue-600">
    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
  </button>
);

const MobileMenu = ({ navLinks, user, onLogin, onSignup, onNavigate, onLogout }) => (
  <div className="md:hidden py-4">
    <div className="flex flex-col space-y-4">
      {navLinks.map((link) => (
        <button
          key={link.name}
          onClick={() => onNavigate(link.href)}
          className="text-gray-600 hover:text-blue-600 font-medium text-left"
        >
          {link.name}
        </button>
      ))}
      <hr className="border-gray-200" />
      {user ? (
        <>
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5 text-gray-600" />
            <span className="text-gray-600 font-medium">{user.name}</span>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 font-medium"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </>
      ) : (
        <>
          <button
            onClick={onLogin}
            className="text-gray-600 hover:text-blue-600 font-medium text-left"
          >
            join us
          </button>
          {/* <button
            onClick={onSignup}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </button> */}
        </>
      )}
    </div>
  </div>
);

export default Navbar;