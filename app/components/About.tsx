'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from './SectionHeader';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        stiffness: 50, 
        damping: 20 
      } 
    }
  };

  const Education = () => {
    const eduData = [
      {
        title: 'Bachelor of Technology',
        place: 'Lovely Professional University, Punjab',
        year: '2022-2026',
        description: 'Computer Science and Engineering - CGPA: 7.50'
      },
      {
        title: 'Intermediate (12th)',
        place: 'Sri Chaitanya Junior College, Visakhapatnam',
        year: '2019-2021',
        description: 'Science - Percentage: 93.3%'
      },
      {
        title: 'High School (10th)',
        place: 'Jawahar Navodaya Vidyalaya, Srikakulam',
        year: '2018-2019',
        description: 'Science - Percentage: 88.6%'
      }
    ];

    return (
      <div className="about-detail">
        <motion.h3 variants={itemVariants}>Education</motion.h3>
        <motion.ul variants={containerVariants}>
          {eduData.map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <span className="detail-title">{item.title}</span>
              <span className="detail-place">{item.place}</span>
              <span className="detail-year">{item.year}</span>
              <span className="detail-description">{item.description}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    );
  };

  const Experience = () => {
    return (
      <div className="about-detail">
        <motion.h3 variants={itemVariants}>Experience</motion.h3>
        <motion.ul variants={containerVariants}>
          <motion.li variants={itemVariants}>
            <span className="detail-title">Summer Training Internship</span>
            <span className="detail-place">CSE Pathshala</span>
            <span className="detail-year">June 2023 - July 2023</span>
            <span className="detail-description">
              Built an E-Commerce platform using MERN stack with features like user authentication, 
              product management, and order processing.
            </span>
          </motion.li>
        </motion.ul>
      </div>
    );
  };

  const Achievements = () => {
    const achievements = [
      "Among Dean's top 10% students at University",
      "Participated in Smart India Hackathon (SIH 2024)",
      "HackerRank: Secured silver in SQL (4 stars), Gold in Python (5 stars)",
      "LeetCode: Solved more than 200 problems"
    ];

    return (
      <div className="about-detail">
        <motion.h3 variants={itemVariants}>Achievements</motion.h3>
        <motion.ul variants={containerVariants}>
          {achievements.map((achievement, index) => (
            <motion.li key={index} variants={itemVariants}>
              {achievement}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    );
  };

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <SectionHeader title="About Me" />
        
        <motion.div 
          className="about-content"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="about-text">
            <motion.p variants={itemVariants}>
              I'm a B.Tech Computer Science student at Lovely Professional University, 
              specializing in Full-Stack Development, Artificial Intelligence, and Cloud Computing. 
              I focus on building scalable applications and have a solid foundation in both front-end 
              and back-end development.
            </motion.p>
            <motion.p variants={itemVariants}>
              My passion lies in developing AI-powered applications and creating innovative solutions 
              to real-world problems. I am committed to continuously improving my skills in emerging technologies.
            </motion.p>
            
            <motion.div 
              className="about-details"
              variants={containerVariants}
            >
              <Education />
              <Experience />
              <Achievements />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 