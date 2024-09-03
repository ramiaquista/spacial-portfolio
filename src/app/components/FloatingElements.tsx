import React from 'react';
import { motion } from 'framer-motion';

const FloatingElement: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      animate={{
        y: ['-10px', '10px'],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
