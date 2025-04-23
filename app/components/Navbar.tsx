'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Get all sections and determine which one is currently in view
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      className="navbar"
      initial="hidden"
      animate="visible"
      variants={navVariants}
      style={{
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="container">
        <motion.div 
          className="logo"
          variants={linkVariants}
        >
          <h2>Ravi<span>Kiran</span></h2>
        </motion.div>
        
        <motion.div 
          className="menu-toggle"
          variants={linkVariants}
          onClick={toggleMenu}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </motion.div>
        
        <motion.ul 
          className={`nav-menu ${isOpen ? 'active' : ''}`}
        >
          {['home', 'about', 'skills', 'projects', 'certifications', 'contact'].map((item) => (
            <motion.li key={item} variants={linkVariants}>
              <Link 
                href={`#${item}`} 
                className={activeSection === item ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar; 