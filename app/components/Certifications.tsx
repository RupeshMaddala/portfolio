'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

interface Certificate {
  title: string;
  issuer: string;
  image: string;
  category: string;
}

const Certifications = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // Using the actual certificate images from the correct paths
  const certificatesData: Certificate[] = [
    {
      title: 'Generative AI with Large Language Models',
      issuer: 'Coursera',
      image: '/images/cert_pho/genAI with llms.png',
      category: 'ai'
    },
    {
      title: 'Generative AI for Everyone',
      issuer: 'Coursera',
      image: '/images/cert_pho/gen_AI for everyone.png',
      category: 'ai'
    },
    {
      title: 'Introduction to Generative AI',
      issuer: 'Coursera',
      image: '/images/cert_pho/introduction to generative ai.png',
      category: 'ai'
    },
    {
      title: 'Introduction to Large Language Models',
      issuer: 'Coursera',
      image: '/images/cert_pho/introduction to llms.png',
      category: 'ai'
    },
    {
      title: 'Build AI Apps with ChatGPT',
      issuer: 'Coursera',
      image: '/images/cert_pho/build ai apps with chatgpt.png',
      category: 'ai'
    },
    {
      title: 'ChatGPT for Beginners',
      issuer: 'Coursera',
      image: '/images/cert_pho/chatgpt for beginners.png',
      category: 'ai'
    },
    {
      title: 'Generative AI Primer',
      issuer: 'Coursera',
      image: '/images/cert_pho/generative ai primer.png',
      category: 'ai'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'CSE Pathshala',
      image: '/images/summer_training/WhatsApp Image 2025-04-21 at 09.57.00.jpeg',
      category: 'web'
    }
  ];

  const filteredCertificates = filter === 'all' 
    ? certificatesData 
    : certificatesData.filter(cert => cert.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: 'spring',
        stiffness: 50,
        damping: 10
      } 
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 25
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { 
        duration: 0.2
      } 
    }
  };

  const openModal = (cert: Certificate) => {
    setSelectedCert(cert);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Close modal when ESC key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certifications" className="certifications" ref={sectionRef}>
      <div className="container">
        <SectionHeader title="Certifications" />
        
        <motion.div 
          className="cert-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <button 
            className={`cert-filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`cert-filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI & Generative AI
          </button>
          <button 
            className={`cert-filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Development
          </button>
        </motion.div>
        
        <motion.div 
          className="cert-gallery"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {filteredCertificates.map((cert, index) => (
            <motion.div 
              className="cert-item"
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)' }}
              onClick={() => openModal(cert)}
            >
              <Image 
                src={cert.image} 
                alt={cert.title} 
                width={300} 
                height={200}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                unoptimized={cert.image.startsWith('http')}
              />
              <div className="cert-overlay">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <AnimatePresence>
          {modalOpen && selectedCert && (
            <motion.div 
              className="cert-modal"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              onClick={closeModal}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                zIndex: 1000,
                opacity: 1,
                visibility: 'visible'
              }}
            >
              <motion.div 
                className="cert-modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: 'relative',
                  maxWidth: '90%',
                  maxHeight: '90%'
                }}
              >
                <motion.span 
                  className="cert-modal-close"
                  whileHover={{ scale: 1.2 }}
                  onClick={closeModal}
                  style={{
                    position: 'absolute',
                    top: '-40px',
                    right: '0',
                    fontSize: '40px',
                    color: '#fff',
                    cursor: 'pointer'
                  }}
                >
                  &times;
                </motion.span>
                <Image 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  width={800} 
                  height={600}
                  style={{ 
                    objectFit: 'contain', 
                    maxWidth: '100%',
                    maxHeight: '80vh'
                  }}
                  unoptimized={selectedCert.image.startsWith('http')}
                />
                <div className="cert-modal-info">
                  <h3>{selectedCert.title}</h3>
                  <p>Issued by: {selectedCert.issuer}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certifications; 