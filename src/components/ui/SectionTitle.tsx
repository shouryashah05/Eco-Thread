import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  accentColor?: 'blue' | 'purple' | 'pink' | 'teal';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  accentColor = 'teal',
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };
  
  const accentClasses = {
    blue: 'neon-text-blue',
    purple: 'neon-text-purple',
    pink: 'neon-text-pink',
    teal: 'neon-text-teal',
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };
  
  return (
    <motion.div
      className={`max-w-3xl mb-12 ${alignClasses[align]}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${accentClasses[accentColor]}`}
        variants={titleVariants}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-foreground/80 text-lg max-w-2xl mx-auto"
          variants={subtitleVariants}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className={`h-1 w-20 mt-6 bg-gradient-to-r ${
          accentColor === 'blue' ? 'from-neon-blue to-neon-purple' :
          accentColor === 'purple' ? 'from-neon-purple to-neon-pink' :
          accentColor === 'pink' ? 'from-neon-pink to-neon-purple' :
          'from-neon-teal to-neon-blue'
        } rounded-full ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 80, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

export default SectionTitle;