import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  neonBorder?: 'blue' | 'purple' | 'pink' | 'teal' | 'none';
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  neonBorder = 'none',
  hoverEffect = true,
}) => {
  const neonBorderClasses = {
    blue: 'neon-border-blue',
    purple: 'neon-border-purple',
    pink: 'neon-border-pink',
    teal: 'neon-border-teal',
    none: '',
  };
  
  return (
    <motion.div
      className={`
        glassmorphic p-6 
        ${neonBorderClasses[neonBorder]} 
        ${hoverEffect ? 'hover:scale-[1.02] transition-transform' : ''}
        ${className}
      `}
      whileHover={hoverEffect ? { y: -5 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;