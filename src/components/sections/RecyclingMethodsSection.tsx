import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, GanttChart, Shirt } from 'lucide-react';
import { fadeIn } from '../../utils/animations';

interface Method {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  efficiency: number;
  benefits: string[];
  process: string[];
}

const methods: Method[] = [
  {
    id: 'mechanical',
    title: 'Mechanical Recycling',
    description: 'Physical process of breaking down textiles into fibers through cutting, shredding, and carding.',
    icon: <Factory className="w-6 h-6" />,
    efficiency: 75,
    benefits: [
      'Lower energy consumption',
      'Widely available technology',
      'Cost-effective process',
      'Suitable for natural fibers'
    ],
    process: [
      'Sorting by material and color',
      'Shredding into fibers',
      'Cleaning and decontamination',
      'Fiber processing and spinning'
    ]
  },
  {
    id: 'chemical',
    title: 'Chemical Recycling',
    description: 'Breaking down polymers into base molecules using chemical processes for high-quality recycled materials.',
    icon: <GanttChart className="w-6 h-6" />,
    efficiency: 90,
    benefits: [
      'High-quality output',
      'Can process blended fabrics',
      'Produces virgin-quality fibers',
      'Better color control'
    ],
    process: [
      'Chemical separation',
      'Depolymerization',
      'Purification',
      'Repolymerization'
    ]
  },
  {
    id: 'upcycling',
    title: 'Upcycling',
    description: 'Creative transformation of waste textiles into higher-value products through redesign.',
    icon: <Shirt className="w-6 h-6" />,
    efficiency: 95,
    benefits: [
      'Minimal processing needed',
      'Creates unique products',
      'Preserves original materials',
      'Supports local crafts'
    ],
    process: [
      'Material selection',
      'Design planning',
      'Deconstruction',
      'Reconstruction'
    ]
  }
];

const RecyclingMethodsSection: React.FC = () => {
  const [activeMethod, setActiveMethod] = useState(methods[0]);

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="flex space-x-2">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => setActiveMethod(method)}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all ${
              activeMethod.id === method.id
                ? 'bg-neon-green text-background'
                : 'bg-white/5 hover:bg-white/10 text-foreground'
            }`}
          >
            {method.icon}
            <span>{method.title}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMethod.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="glassmorphic p-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neon-green flex items-center">
                {activeMethod.icon}
                <span className="ml-2">{activeMethod.title}</span>
              </h3>
              <p className="text-foreground/80">{activeMethod.description}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Process Steps</h4>
              <ul className="space-y-2">
                {activeMethod.process.map((step, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-neon-green/20 text-neon-green flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    <span className="text-foreground/80">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Key Benefits</h4>
              <ul className="grid grid-cols-2 gap-2">
                {activeMethod.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-foreground/80">
                    <span className="text-neon-green">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glassmorphic p-6">
            <h4 className="text-lg font-semibold mb-6">Process Efficiency</h4>
            <div className="space-y-4">
              <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-neon-green"
                  initial={{ width: '0%' }}
                  animate={{ width: `${activeMethod.efficiency}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-foreground/60">Process Efficiency</span>
                <span className="text-neon-green font-semibold">{activeMethod.efficiency}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RecyclingMethodsSection;