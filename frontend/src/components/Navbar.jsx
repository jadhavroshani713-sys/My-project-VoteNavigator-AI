import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Vote, Menu, X, Globe, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('EN');
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'registration', label: 'Registration' },
    { id: 'about', label: 'About Us' },
    { id: 'features', label: 'Why Use' },
    { id: 'help', label: 'Help' },
  ];

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'HI', name: 'हिन्दी' },
    { code: 'MR', name: 'मराठी' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'py-4 bg-bg-dark/80 backdrop-blur-xl border-bottom border-glass-border' : 'py-6 bg-transparent'
    }`}>
      <div className="container flex items-center justify-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <div style={{ 
            width: '42px', 
            height: '42px', 
            background: 'var(--primary)', 
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 8px 20px var(--primary-glow)'
          }}>
            <Vote color="white" size={24} />
          </div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
            Vote<span style={{ color: 'var(--primary)' }}>Smart</span>
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8" style={{ display: 'none' /* Handled by CSS Media Query in a real app, here using inline styles for simplicity in this environment if needed, but I'll use a mix */ }}>
           {/* We'll use a standard list and style it */}
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }} className="desktop-nav">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeSection === item.id ? 'var(--primary)' : 'var(--text-dim)',
                    fontSize: '0.95rem',
                    fontWeight: activeSection === item.id ? '600' : '400',
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                  onMouseLeave={(e) => e.target.style.color = activeSection === item.id ? 'var(--primary)' : 'var(--text-dim)'}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="activeNav"
                      style={{
                        position: 'absolute',
                        bottom: '-6px',
                        left: '0',
                        width: '100%',
                        height: '2px',
                        background: 'var(--primary)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Language Selector */}
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--glass)',
                border: '1px solid var(--glass-border)',
                padding: '6px 12px',
                borderRadius: '10px',
                color: 'white',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              <Globe size={14} color="var(--primary)" />
              {language}
              <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {showLangDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  style={{
                    position: 'absolute',
                    top: '120%',
                    right: 0,
                    background: 'var(--bg-card)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '12px',
                    padding: '8px',
                    minWidth: '120px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                    zIndex: 101
                  }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLangDropdown(false);
                      }}
                      style={{
                        display: 'block',
                        width: '100%',
                        padding: '8px 12px',
                        textAlign: 'left',
                        background: language === lang.code ? 'rgba(255,153,51,0.1)' : 'transparent',
                        border: 'none',
                        color: language === lang.code ? 'var(--primary)' : 'white',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.9rem'
                      }}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none', // Shown via media query
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'var(--bg-card)',
              borderBottom: '1px solid var(--glass-border)',
              overflow: 'hidden',
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%'
            }}
          >
            <ul style={{ listStyle: 'none', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: activeSection === item.id ? 'var(--primary)' : 'white',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      width: '100%',
                      textAlign: 'left'
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
