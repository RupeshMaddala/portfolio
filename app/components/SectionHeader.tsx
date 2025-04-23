'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div 
      className="section-header"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="underline"
        initial={{ width: 0 }}
        animate={isInView ? { width: 70 } : { width: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      ></motion.div>
    </motion.div>
  );
};

export default SectionHeader; 