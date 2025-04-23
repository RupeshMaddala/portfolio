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
        { name: 'Python', level: 'advanced' },
        { name: 'JavaScript', level: 'advanced' },
        { name: 'Java', level: 'intermediate' },
        { name: 'C++', level: 'intermediate' },
        { name: 'HTML5/CSS3', level: 'advanced' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Node.js', level: 'advanced' },
        { name: 'React.js', level: 'intermediate' },
        { name: 'Express.js', level: 'intermediate' },
        { name: 'Next.js', level: 'intermediate' },
        { name: 'PyTorch', level: 'advanced' },
        { name: 'TensorFlow', level: 'intermediate' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'MongoDB', level: 'intermediate' },
        { name: 'MySQL', level: 'intermediate' },
        { name: 'AWS', level: 'intermediate' },
        { name: 'Docker', level: 'intermediate' },
        { name: 'Git', level: 'intermediate' }
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