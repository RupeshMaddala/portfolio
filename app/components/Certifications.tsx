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
  score?: string;
  date?: string;
  details?: string[];
  isPdf?: boolean;
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
      title: 'Introduction to Cybersecurity Tools & Cyber Attacks',
      issuer: 'IBM',
      image: '/images/cert_pho/cybersecurity-ibm.png',
      category: 'security',
      date: 'Dec 2024'
    },
    {
      title: 'Programming Essentials',
      issuer: 'EC-Council',
      image: '/images/cert_pho/programming.png',
      category: 'programming',
      date: 'Mar 2024'
    },
    {
      title: 'Fundamentals of Management',
      issuer: 'Coursera',
      image: '/images/cert_pho/management.png',
      category: 'management',
      date: 'Nov 2023'
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL - IIT Kharagpur',
      image: '/images/cert_pho/nptel/cloud-computing-nptel.jpg',
      category: 'cloud',
      score: '75%',
      date: 'Jul-Oct 2024',
      details: [
        'Elite certification',
        'Online Assignments: 23.25/25',
        'Proctored Exam: 52.11/75',
        '12-week course'
      ]
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
            className={`cert-filter-btn ${filter === 'security' ? 'active' : ''}`}
            onClick={() => setFilter('security')}
          >
            Cybersecurity
          </button>
          <button 
            className={`cert-filter-btn ${filter === 'programming' ? 'active' : ''}`}
            onClick={() => setFilter('programming')}
          >
            Programming
          </button>
          <button 
            className={`cert-filter-btn ${filter === 'cloud' ? 'active' : ''}`}
            onClick={() => setFilter('cloud')}
          >
            Cloud Computing
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
              {cert.isPdf ? (
                <div className="pdf-placeholder">
                  <div className="pdf-icon">PDF</div>
                  <div className="pdf-title">{cert.title}</div>
                </div>
              ) : (
                <Image 
                  src={cert.image} 
                  alt={cert.title} 
                  width={300} 
                  height={200}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  unoptimized={cert.image.startsWith('http')}
                />
              )}
              <div className="cert-overlay">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                {cert.isPdf && <span className="pdf-badge">PDF</span>}
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
                
                {selectedCert.isPdf ? (
                  <div className="pdf-preview">
                    <div className="pdf-placeholder large">
                      <div className="pdf-icon">PDF</div>
                      <div className="pdf-title">{selectedCert.title}</div>
                    </div>
                    <a 
                      href={selectedCert.image} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="pdf-view-btn"
                    >
                      View PDF Certificate
                    </a>
                  </div>
                ) : (
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
                )}
                
                <div className="cert-modal-info">
                  <h3>{selectedCert.title}</h3>
                  <p>Issued by: {selectedCert.issuer}</p>
                  {selectedCert.date && <p className="cert-date">Completed: {selectedCert.date}</p>}
                  {selectedCert.score && <p className="cert-score">Score: {selectedCert.score}</p>}
                  
                  {selectedCert.details && selectedCert.details.length > 0 && (
                    <div className="cert-details">
                      <ul>
                        {selectedCert.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}
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