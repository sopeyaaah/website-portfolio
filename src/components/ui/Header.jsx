import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { name: 'Home', path: '#home', icon: 'Home' },
    { name: 'About Me', path: '#about', icon: 'User' },
    { name: 'Featured Projects', path: '#projects', icon: 'Folder' },
    { name: 'Technical Skills', path: '#skills', icon: 'Code' },
    { name: 'Certifications', path: '#certifications', icon: 'Award' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (e, path) => {
    e.preventDefault();
    const target = document.querySelector(path);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-brand-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <a 
            href="#home"
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <span className="text-primary-foreground font-bold text-sm font-mono">ST</span>
              </div>
              <div className="absolute -inset-1 bg-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-200">
                Sophia Tan
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleSmoothScroll(e, item.path)}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-foreground hover:text-accent hover:bg-accent/5"
              >
                <div className="flex items-center space-x-2">
                  <Icon name={item.icon} size={16} className="text-muted-foreground group-hover:text-accent transition-colors duration-200" />
                  <span>{item.name}</span>
                </div>
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="sm" 
                iconName="Download" 
                iconPosition="left" 
                className="text-sm"
              >
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-foreground hover:text-accent hover:bg-accent/5 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} className="transition-transform duration-200" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-6 py-4 bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleSmoothScroll(e, item.path)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-foreground hover:text-accent hover:bg-accent/5"
                >
                  <Icon name={item.icon} size={18} className="text-muted-foreground group-hover:text-accent transition-colors duration-200" />
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="mt-6 pt-4 border-t border-border space-y-3">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Download"
                  iconPosition="left"
                  fullWidth
                  className="text-sm justify-center"
                >
                  Download Resume
                </Button>
              </a>
              <Button
                variant="default"
                size="sm"
                iconName="MessageCircle"
                iconPosition="left"
                fullWidth
                className="text-sm justify-center"
              >
                Start Collaboration
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
