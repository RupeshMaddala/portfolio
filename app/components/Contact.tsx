'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from './SectionHeader';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
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
        type: 'spring',
        stiffness: 50,
        damping: 20
      } 
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: 'fa-envelope',
      title: 'Email',
      content: 'maddalarupeshrupesh@gmail.com',
      link: 'mailto:maddalarupeshrupesh@gmail.com'
    },
    {
      icon: 'fa-phone',
      title: 'Phone',
      content: '+91 9550740301',
      link: 'tel:+919550740301'
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Location',
      content: 'Visakhapatnam, Andhra Pradesh, India',
      link: 'https://maps.google.com/?q=Visakhapatnam,Andhra+Pradesh'
    }
  ];
  
  const socialLinks = [
    {
      icon: 'fa-linkedin',
      link: 'https://www.linkedin.com/in/maddala-rupesh-436b9a254/'
    },
    {
      icon: 'fa-github',
      link: 'https://github.com/RupeshMaddala'
    }
  ];

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <SectionHeader title="Get In Touch" />
        
        <motion.div 
          className="contact-content"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="contact-info"
            variants={containerVariants}
          >
            {contactInfo.map((item, index) => (
              <motion.div 
                className="contact-item"
                key={index}
                variants={itemVariants}
              >
                <i className={`fas ${item.icon}`}></i>
                <div>
                  <h3>{item.title}</h3>
                  {item.link ? (
                    <p><a href={item.link}>{item.content}</a></p>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
            
            <motion.div 
              className="contact-social"
              variants={itemVariants}
            >
              <h3>Connect With Me</h3>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.link} 
                    target="_blank"
                    whileHover={{ y: -5, color: "#6c63ff", backgroundColor: "#fff" }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <i className={`fab ${social.icon}`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="contact-form"
            variants={itemVariants}
          >
            <motion.form 
              onSubmit={handleSubmit}
              variants={containerVariants}
            >
              <motion.div 
                className="form-group"
                variants={itemVariants}
              >
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </motion.div>
              
              <motion.div 
                className="form-group"
                variants={itemVariants}
              >
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </motion.div>
              
              <motion.div 
                className="form-group"
                variants={itemVariants}
              >
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Subject" 
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </motion.div>
              
              <motion.div 
                className="form-group"
                variants={itemVariants}
              >
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your Message" 
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </motion.div>
              
              <motion.button 
                type="submit" 
                className="btn btn-primary"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    marginTop: '20px',
                    padding: '10px', 
                    background: '#e8f5e9', 
                    color: '#388e3c',
                    borderRadius: '5px',
                    textAlign: 'center'
                  }}
                >
                  Thank you for your message! I will get back to you soon.
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 