import React, { useState, useEffect } from 'react';
import { Github, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Github className="w-6 h-6 mr-2" />
          <span className="text-xl font-medium">raidenprjkts</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white absolute w-full shadow-md transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'max-h-64 opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-gray-700 hover:text-gray-900 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-gray-900 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-gray-900 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;