import React from 'react';
import { motion } from 'framer-motion';
import { Recycle } from 'lucide-react';
import RecyclingMethodsSection from '../components/sections/RecyclingMethodsSection';
import SectionTitle from '../components/ui/SectionTitle';
import { fadeIn, staggerContainer } from '../utils/animations';

const RecyclingPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <motion.div
          variants={staggerContainer(0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span 
            variants={fadeIn('down', 0.2)}
            className="text-sm md:text-base font-medium mb-4 inline-flex items-center text-neon-green"
          >
            <Recycle className="w-5 h-5 mr-2" />
            Recycling Innovation
          </motion.span>
          
          <motion.h1 
            variants={fadeIn('down', 0.3)}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Textile Recycling <span className="text-neon-green">Methods</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeIn('down', 0.4)}
            className="text-foreground/80 text-base md:text-lg mb-8"
          >
            Discover the innovative processes transforming textile waste into valuable resources.
          </motion.p>
        </motion.div>
      </section>
      
      {/* Recycling Methods Section */}
      <section className="section-container">
        <SectionTitle
          title="Innovative Recycling Methods"
          subtitle="From mechanical shredding to chemical decomposition, explore the technologies turning old clothes into new treasures."
          accentColor="green"
        />
        
        <RecyclingMethodsSection />
      </section>
    </div>
  );
};

export default RecyclingPage;