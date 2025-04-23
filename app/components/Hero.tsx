'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      when: "beforeChildren" 
    } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    } 
  }
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      delay: 0.3 
    } 
  }
};

const nameVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const letterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const Hero = () => {
  const nameText = "Ravi Kiran";
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    setLetters(nameText.split(''));
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="hero-text" variants={containerVariants}>
            <motion.h1 variants={itemVariants}>
              Hi, I&apos;m{" "}
              <motion.span 
                className="animated-name"
                initial="initial"
                animate="animate"
                variants={nameVariants}
              >
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className={letter === " " ? "space" : ""}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>
            <motion.p variants={itemVariants}>
              Computer Science Student &amp; Full-Stack Developer
            </motion.p>
            <motion.p className="subtitle" variants={itemVariants}>
              Specializing in AI, Machine Learning, and Cloud Computing
            </motion.p>
            
            <motion.div className="hero-buttons" variants={itemVariants}>
              <Link href="#contact" className="btn btn-primary">
                Get In Touch
              </Link>
              <Link href="/Resume_Ravi.pdf" target="_blank" className="btn btn-secondary">
                Download CV
              </Link>
            </motion.div>
            
            <motion.div className="social-icons" variants={itemVariants}>
              <motion.a 
                href="https://www.linkedin.com/in/ravi-kiran" 
                target="_blank"
                whileHover={{ y: -5, color: "#6c63ff", backgroundColor: "#fff" }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
              <motion.a 
                href="https://github.com/RaviKiran752" 
                target="_blank"
                whileHover={{ y: -5, color: "#6c63ff", backgroundColor: "#fff" }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <i className="fab fa-github"></i>
              </motion.a>
              <motion.a 
                href="https://medium.com/@ravi742t7p" 
                target="_blank"
                whileHover={{ y: -5, color: "#6c63ff", backgroundColor: "#fff" }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <i className="fab fa-medium"></i>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            variants={imageVariants}
          >
            <Image 
              src="/images/prof_pho/prof.jpeg" 
              alt="Ravi Kiran" 
              width={400} 
              height={400}
              priority
              className="profile-image"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 