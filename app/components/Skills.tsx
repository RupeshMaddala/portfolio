'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from './SectionHeader';

interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const skillsData: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C++', level: 'intermediate' },
        { name: 'C', level: 'intermediate' },
        { name: 'Python', level: 'intermediate' },
        { name: 'HTML', level: 'intermediate' },
        { name: 'CSS', level: 'intermediate' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Wireshark', level: 'intermediate' },
        { name: 'Unity', level: 'intermediate' },
        { name: 'Blender', level: 'intermediate' },
        { name: 'Metasploit', level: 'intermediate' },
        { name: 'Linux', level: 'intermediate' }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 'intermediate' },
        { name: 'Adaptability', level: 'intermediate' },
        { name: 'Communication', level: 'intermediate' },
        { name: 'Time Management', level: 'intermediate' },
        { name: 'Quick Learning', level: 'intermediate' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 50,
        damping: 20,
        staggerChildren: 0.1
      } 
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 10
      } 
    }
  };

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <SectionHeader title="My Skills" />
        
        <motion.div 
          className="skills-content"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {skillsData.map((category, catIndex) => (
            <motion.div 
              className="skill-category"
              key={catIndex}
              variants={categoryVariants}
            >
              <motion.h3 variants={skillItemVariants}>{category.title}</motion.h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    className="skill-item"
                    key={skillIndex}
                    variants={skillItemVariants}
                    whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}
                  >
                    <span>{skill.name}</span>
                    <div className={`skill-level ${skill.level}`}>
                      <span>{skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 