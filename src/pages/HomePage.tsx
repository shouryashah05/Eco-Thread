import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, ArrowRight } from 'lucide-react';

import Globe from '../components/3d/Globe';
import StatsSection from '../components/sections/StatsSection';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import { fadeIn, staggerContainer } from '../utils/animations';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={staggerContainer(0.2, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="flex flex-col"
            >
              <motion.span 
                variants={fadeIn('right', 0.2)}
                className="text-sm md:text-base font-medium mb-4 flex items-center neon-text-teal"
              >
                <Recycle className="w-5 h-5 mr-2" />
                Revolutionizing Textile Recycling
              </motion.span>
              
              <motion.h1 
                variants={fadeIn('right', 0.3)}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Reducing Fashion's <span className="neon-text-pink">Footprint</span>,<br />
                One Thread at a Time
              </motion.h1>
              
              <motion.p 
                variants={fadeIn('right', 0.4)}
                className="text-foreground/80 text-base md:text-lg mb-8 max-w-lg"
              >
                Join the sustainable fashion revolution. Discover how innovative recycling methods 
                and brand partnerships are transforming the clothing industry and reducing waste globally.
              </motion.p>
              
              <motion.div 
                variants={fadeIn('right', 0.5)}
                className="flex flex-wrap gap-4"
              >
                <Button variant="primary" size="lg" to="/recycling">
                  Explore Recycling Methods
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" to="/partnerships">
                  View Brand Partnerships
                </Button>
              </motion.div>
            </motion.div>
            
            <div className="relative">
              <Globe showStats={true} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* About Section */}
      <section className="section-container">
        <SectionTitle
          title="Our Mission"
          subtitle="We're dedicated to reducing textile waste through innovation, education, and partnerships."
          accentColor="pink"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="glassmorphic p-6 md:p-8 neon-border-pink space-y-4"
          >
            <p className="text-foreground/90">
              The fashion industry is one of the largest polluters globally, responsible for 10% of annual carbon emissions and vast amounts of textile waste.
            </p>
            <p className="text-foreground/90">
              At EcoThreads, we believe that sustainable fashion isn't just a trend—it's the future. By connecting consumers with innovative recycling methods and eco-conscious brands, we're building a circular economy for textiles.
            </p>
            <p className="text-foreground/90">
              Our partnerships with leading fashion brands create accessible recycling options while offering exclusive benefits to environmentally conscious consumers.
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="glassmorphic p-6 neon-border-blue">
                <h3 className="text-xl font-semibold mb-2 neon-text-blue">Education</h3>
                <p className="text-foreground/70 text-sm">
                  Raising awareness about textile waste and empowering consumers to make sustainable choices.
                </p>
              </div>
              
              <div className="glassmorphic p-6 neon-border-purple">
                <h3 className="text-xl font-semibold mb-2 neon-text-purple">Innovation</h3>
                <p className="text-foreground/70 text-sm">
                  Supporting cutting-edge recycling technologies that transform waste into valuable resources.
                </p>
              </div>
              
              <div className="glassmorphic p-6 neon-border-teal">
                <h3 className="text-xl font-semibold mb-2 neon-text-teal">Partnerships</h3>
                <p className="text-foreground/70 text-sm">
                  Collaborating with brands committed to sustainable practices and circular fashion.
                </p>
              </div>
              
              <div className="glassmorphic p-6 neon-border-pink">
                <h3 className="text-xl font-semibold mb-2 neon-text-pink">Community</h3>
                <p className="text-foreground/70 text-sm">
                  Building a global network of environmentally conscious fashion enthusiasts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/80 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 h-[300px] w-[300px] bg-neon-purple/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 h-[300px] w-[300px] bg-neon-blue/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Explore our interactive recycling flowchart to understand how your old clothes can find new life, or browse our partner brands for sustainable shopping options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" to="/recycling">
                Explore Recycling Methods
              </Button>
              <Button variant="secondary" size="lg" to="/partnerships">
                View Partner Brands
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;