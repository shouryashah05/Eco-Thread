import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-background bg-gradient-radial from-background/70 to-background" />
          
          {/* Background effects */}
          <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-neon-purple/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-neon-blue/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] bg-neon-teal/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;