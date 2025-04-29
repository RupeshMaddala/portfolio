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
        year: '2022-Present',
        description: 'Computer Science and Engineering'
      },
      {
        title: 'Intermediate',
        place: 'Gravity Junior College, Visakhapatnam',
        year: '2020-2022',
        description: 'Science'
      },
      {
        title: 'High School',
        place: 'Bhashyam High School, Visakhapatnam',
        year: '2019-2020',
        description: 'Science'
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
            <span className="detail-title">Data Structures & Algorithms Training</span>
            <span className="detail-place">Chiper Schools</span>
            <span className="detail-year">March 2024 - July 2024</span>
            <span className="detail-description">
              Learned Data Structures and Algorithms using C++ and C. Gained hands-on experience in solving real-world problems using core data structures and advanced algorithmic techniques.
            </span>
          </motion.li>
          <motion.li variants={itemVariants}>
            <span className="detail-title">Cybersecurity Training</span>
            <span className="detail-place">IBM & EC-Council</span>
            <span className="detail-year">2023 - 2024</span>
            <span className="detail-description">
              Completed comprehensive cybersecurity training programs covering network security, digital forensics, and ethical hacking. Gained practical experience in identifying vulnerabilities and implementing security measures.
            </span>
          </motion.li>
        </motion.ul>
      </div>
    );
  };

  const Achievements = () => {
    const achievements = [
      "Among Dean&apos;s top 10% students at University",
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

  // About Me content subsections
  const BackgroundSubsection = () => {
    return (
      <motion.div className="about-subsection" variants={itemVariants}>
        <motion.h3 variants={itemVariants}>Background</motion.h3>
        <motion.p variants={itemVariants}>
          I&apos;m a B.Tech Computer Science student at Lovely Professional University, 
          specializing in Cybersecurity, Network Security, and Digital Forensics. 
          I focus on understanding security vulnerabilities and implementing robust 
          security measures to protect systems and networks.
        </motion.p>
      </motion.div>
    );
  };

  const PassionSubsection = () => {
    return (
      <motion.div className="about-subsection" variants={itemVariants}>
        <motion.h3 variants={itemVariants}>Passion & Interests</motion.h3>
        <motion.p variants={itemVariants}>
          My passion lies in cybersecurity and protecting digital assets. I am particularly interested in 
          network security, ethical hacking, and digital forensics. I enjoy analyzing security systems,
          identifying vulnerabilities, and developing solutions to enhance security measures.
        </motion.p>
      </motion.div>
    );
  };

  const GoalsSubsection = () => {
    return (
      <motion.div className="about-subsection" variants={itemVariants}>
        <motion.h3 variants={itemVariants}>Goals & Aspirations</motion.h3>
        <motion.p variants={itemVariants}>
          I am committed to continuously improving my skills in cybersecurity and information security.
          My goal is to contribute to making the digital world safer by identifying and mitigating
          security threats. I aspire to become a cybersecurity expert who can protect organizations
          from evolving cyber threats and help build secure systems.
        </motion.p>
      </motion.div>
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
            <motion.div 
              className="about-subsections"
              variants={containerVariants}
            >
              <BackgroundSubsection />
              <PassionSubsection />
              <GoalsSubsection />
            </motion.div>
            
            <motion.div className="section-divider" variants={itemVariants}>
              <div className="divider-line"></div>
              <h3>Details & Qualifications</h3>
              <div className="divider-line"></div>
            </motion.div>
            
            <motion.div 
              className="about-details"
              variants={containerVariants}
            >
              <Education />
              <Experience />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 