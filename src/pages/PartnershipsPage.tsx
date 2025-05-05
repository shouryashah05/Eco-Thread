import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, MapPin } from 'lucide-react';

import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import BrandPartnershipSection from '../components/sections/BrandPartnershipSection';
import { fadeIn, staggerContainer } from '../utils/animations';

interface City {
  name: string;
  coordinates: [number, number];
  storeCount: number;
}

const PartnershipsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCity, setActiveCity] = useState<string | null>(null);
  
  const cities: City[] = [
    { name: "New York", coordinates: [40.7128, -74.0060], storeCount: 24 },
    { name: "Los Angeles", coordinates: [34.0522, -118.2437], storeCount: 18 },
    { name: "Chicago", coordinates: [41.8781, -87.6298], storeCount: 12 },
    { name: "Miami", coordinates: [25.7617, -80.1918], storeCount: 9 },
    { name: "San Francisco", coordinates: [37.7749, -122.4194], storeCount: 15 },
    { name: "Seattle", coordinates: [47.6062, -122.3321], storeCount: 10 },
    { name: "Boston", coordinates: [42.3601, -71.0589], storeCount: 8 },
    { name: "Austin", coordinates: [30.2672, -97.7431], storeCount: 7 },
    { name: "Denver", coordinates: [39.7392, -104.9903], storeCount: 6 },
    { name: "Portland", coordinates: [45.5051, -122.6750], storeCount: 9 },
  ];
  
  const filteredCities = cities.filter(city => 
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleCityClick = (cityName: string) => {
    setActiveCity(activeCity === cityName ? null : cityName);
  };

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
            className="text-sm md:text-base font-medium mb-4 inline-flex items-center neon-text-pink"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Sustainable Fashion Partners
          </motion.span>
          
          <motion.h1 
            variants={fadeIn('down', 0.3)}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Brand <span className="neon-text-pink">Partnerships</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeIn('down', 0.4)}
            className="text-foreground/80 text-base md:text-lg mb-8"
          >
            We've partnered with leading fashion brands committed to sustainability.
            Bring your old clothes for recycling and enjoy exclusive discounts on new purchases.
          </motion.p>
        </motion.div>
      </section>
      
      {/* Brand Partnerships Grid */}
      <BrandPartnershipSection />
   
      
      {/* Store Locator */}
      <section className="section-container">
        <SectionTitle
          title="Find Recycling Locations"
          subtitle="Locate participating stores near you to drop off your old clothes and receive exclusive discounts."
          accentColor="teal"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="glassmorphic p-6"
          >
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 pl-10 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-neon-teal"
                />
                <Search className="absolute left-3 top-3.5 h-4 w-4 text-foreground/50" />
              </div>
            </div>
            
            <div className="h-[400px] overflow-y-auto pr-2 space-y-2">
              {filteredCities.length > 0 ? (
                filteredCities.map((city) => (
                  <motion.div
                    key={city.name}
                    className={`p-4 rounded-lg cursor-pointer transition-colors flex justify-between items-center ${
                      activeCity === city.name 
                        ? 'bg-neon-teal/20 border border-neon-teal/50' 
                        : 'bg-white/5 hover:bg-white/10 border border-transparent'
                    }`}
                    onClick={() => handleCityClick(city.name)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="flex items-center">
                      <MapPin className={`h-5 w-5 mr-3 ${activeCity === city.name ? 'text-neon-teal' : 'text-foreground/70'}`} />
                      <div>
                        <h3 className="font-medium">{city.name}</h3>
                        <p className="text-sm text-foreground/70">{city.storeCount} partner locations</p>
                      </div>
                    </div>
                    <div className={`text-xs font-medium px-2 py-1 rounded ${
                      activeCity === city.name ? 'bg-neon-teal/30 text-neon-teal' : 'bg-white/10 text-foreground/70'
                    }`}>
                      View
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-8 text-foreground/50">
                  <p>No cities matching your search</p>
                </div>
              )}
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="h-[500px] glassmorphic p-0 overflow-hidden relative neon-border-teal"
          >
            {/* Replace with actual map implementation */}
            <div className="absolute inset-0 bg-gradient-radial from-background/0 to-background/70 z-10" />
            
            <img 
              src="https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Map placeholder" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            <div className="absolute bottom-6 left-6 right-6 glassmorphic p-4 z-20">
              {activeCity ? (
                <div>
                  <h3 className="text-lg font-semibold mb-2 neon-text-teal flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    {activeCity}
                  </h3>
                  <p className="text-sm text-foreground/90 mb-3">
                    {cities.find(c => c.name === activeCity)?.storeCount} participating stores in this area
                  </p>
                  <Button variant="outline" size="sm" className="w-full justify-center">
                    View Detailed Store List
                  </Button>
                </div>
              ) : (
                <p className="text-center text-foreground/70">
                  Select a city to view participating stores
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="section-container">
        <SectionTitle
          title="How It Works"
          subtitle="Recycling your clothes is easy and rewarding with our partner brands."
          accentColor="blue"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="glassmorphic p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-neon-blue/20 rounded-full blur-[30px]" />
            
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-blue/20 text-neon-blue font-bold text-xl mb-4">
              1
            </span>
            
            <h3 className="text-xl font-semibold mb-3">Collect Your Items</h3>
            <p className="text-foreground/70 text-sm">
              Gather your old, worn, or unwanted clothing items. Most partner brands accept any textile items regardless of condition or brand.
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="glassmorphic p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-neon-purple/20 rounded-full blur-[30px]" />
            
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-purple/20 text-neon-purple font-bold text-xl mb-4">
              2
            </span>
            
            <h3 className="text-xl font-semibold mb-3">Visit a Partner Store</h3>
            <p className="text-foreground/70 text-sm">
              Bring your items to any participating store location. Use our store locator to find the most convenient drop-off point near you.
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="glassmorphic p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-neon-pink/20 rounded-full blur-[30px]" />
            
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-pink/20 text-neon-pink font-bold text-xl mb-4">
              3
            </span>
            
            <h3 className="text-xl font-semibold mb-3">Receive Your Discount</h3>
            <p className="text-foreground/70 text-sm">
              After dropping off your items, you'll receive a discount voucher to use on your next purchase at the participating brand's store.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Join The Program */}
      <section className="py-20 bg-gradient-to-b from-background to-background/80 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 h-[300px] w-[300px] bg-neon-pink/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
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
              Are You a Fashion Brand?
            </h2>
            <p className="text-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join our network of sustainable fashion partners and contribute to reducing textile waste while attracting eco-conscious consumers.
            </p>
            <Button variant="primary" size="lg">
              Partner With Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnershipsPage;