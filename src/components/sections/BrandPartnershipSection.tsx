import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { fadeIn } from '../../utils/animations';
import Button from '../ui/Button';

interface BrandProps {
  name: string;
  logo: string;
  description: string;
  discount: string;
  index: number;
}

const BrandCard: React.FC<BrandProps> = ({ name, logo, description, discount, index }) => {
  return (
    <motion.div 
      variants={fadeIn('up', index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="overflow-hidden rounded-xl bg-background border border-white/10 transition-all duration-300 group-hover:border-neon-green">
        <div className="aspect-[16/9] relative overflow-hidden">
          <img 
            src={logo} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-neon-green text-background font-semibold px-3 py-1 rounded-full text-sm">
            {discount} OFF
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-foreground/70 text-sm mb-4">{description}</p>
          
          <div className="flex justify-between items-center">
            <Button variant="outline" size="sm" className="group-hover:border-neon-green group-hover:text-neon-green">
              Find Stores
            </Button>
            <Button variant="ghost" size="sm" className="group-hover:text-neon-green">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BrandPartnershipSection: React.FC = () => {
  const brands = [
    {
      name: "H&M",
      logo: "/src/assets/hnmlogo.jpeg",
      description: "Return your old clothes and get a discount on sustainable fashion items.",
      discount: "15%",
      index: 0,
    },
    {
      name: "Levi's",
      logo: "/src/assets/levislogo.png",
      description: "Bring your old jeans for recycling and save on your next sustainable denim purchase.",
      discount: "20%",
      index: 1,
    },
    {
      name: "Patagonia",
      logo: "/src/assets/patalogo.jpg",
      description: "Trade in your worn Patagonia gear for store credit on eco-friendly alternatives.",
      discount: "25%",
      index: 2,
    },
    {
      name: "The North Face",
      logo: "/src/assets/NFlogo.png",
      description: "The North Face Renewed program gives worn gear new life through cleaning and repair.",
      discount: "10%",
      index: 3,
    },
    {
      name: "Adidas",
      logo: "/src/assets/adidaslogo.jpg",
      description: "Adidas builds products with recycled ocean plastic and sustainable materials.",
      discount: "16%",
      index: 4,
    },
    {
      name: "Eileen Fisher",
      logo: "/src/assets/EFlogo.png",
      description: "Eileen Fisher's Renew program takes back used clothing and transforms them into new designs.",
      discount: "$5",
      index: 5,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {brands.map((brand, index) => (
        <BrandCard
          key={index}
          name={brand.name}
          logo={brand.logo}
          description={brand.description}
          discount={brand.discount}
          index={index}
        />
      ))}
    </div>
  );
};

export default BrandPartnershipSection;