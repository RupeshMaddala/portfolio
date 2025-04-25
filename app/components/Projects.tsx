'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from './SectionHeader';

interface Project {
  title: string;
  date: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
}

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const projectsData: Project[] = [
    {
      title: 'ComfyUI-Based AI Image Generation',
      date: 'Jan 2025 - March 2025',
      description: 'Developed an AI-powered image generation system using ComfyUI and LoRA tuning. Created photorealistic portraits and artistic compositions with Stable Diffusion XL models, custom VAE and LoRA fine-tuning for stunning image quality and detail.',
      image: '/images/proj_pho/comfyui_generated.png',
      technologies: ['Python', 'PyTorch', 'ComfyUI', 'SDXL', 'FastAPI'],
      githubLink: 'https://github.com/RaviKiran752/comfypy'
    },
    {
      title: 'Crop Disease Prediction System',
      date: '2024',
      description: 'A full-stack web application that empowers farmers to detect crop diseases in real-time by uploading images of affected plants. The backend leverages a PyTorch-based CNN with a RESNET architecture to classify diseases with 92% accuracy.',
      image: '/images/proj_pho/crop-disease-detection.webp',
      technologies: ['Python', 'PyTorch', 'React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/RaviKiran752'
    },
    {
      title: 'Deep Learning for Market Prediction',
      date: 'Dec 2023 - April 2024',
      description: 'Designed a deep learning-based trading model to forecast stock market trends using LSTM and RNN architectures. Enhanced prediction accuracy with an attention-based Bi-LSTM model, achieving an R² score of 0.85.',
      image: '/images/proj_pho/market-prediction.png',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'NumPy'],
      githubLink: 'https://github.com/RaviKiran752/Deep-Learning'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      } 
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 50,
        damping: 20
      } 
    }
  };

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <SectionHeader title="My Projects" />
        
        <motion.div 
          className="projects-content"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {projectsData.map((project, index) => (
            <motion.div 
              className="project-card"
              key={index}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="project-img">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={600} 
                    height={300}
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
              </div>
              
              <div className="project-details">
                <h3>{project.title}</h3>
                <span className="project-date">{project.date}</span>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href={project.githubLink} 
                      target="_blank" 
                      className="btn btn-small"
                    >
                      View Code
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 