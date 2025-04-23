'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];
  
  const socialLinks = [
    { icon: 'fa-linkedin', link: 'https://www.linkedin.com/in/ravi-kiran' },
    { icon: 'fa-github', link: 'https://github.com/RaviKiran752' },
    { icon: 'fa-medium', link: 'https://medium.com/@ravi742t7p' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-logo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Ravi Kiran</h2>
            <p>Full Stack Developer</p>
          </motion.div>
          
          <motion.div 
            className="footer-nav"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Quick Links</h3>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>Contact</h3>
            <p>
              <i className="fas fa-envelope"></i>
              <a href="mailto:ravi742t7p@gmail.com">ravi742t7p@gmail.com</a>
            </p>
            <p>
              <i className="fas fa-phone"></i>
              <a href="tel:+919347280958">+91 9347280958</a>
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              Visakhapatnam, Andhra Pradesh, India
            </p>
          </motion.div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a 
                key={index}
                href={social.link} 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#6c63ff" }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <i className={`fab ${social.icon}`}></i>
              </motion.a>
            ))}
          </div>
          
          <motion.p 
            className="copyright"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            &copy; {currentYear} Ravi Kiran. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 