import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Droplet, BarChart3, Wind } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  accentColor: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, description, accentColor, delay = 0 }) => {
  return (
    <motion.div
      className="glassmorphic p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={`${accentColor} text-3xl mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className={`text-3xl font-bold mb-3 ${accentColor}`}>
        {value}
      </p>
      <p className="text-foreground/70 text-sm">
        {description}
      </p>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <BarChart3 />,
      title: "Annual Waste",
      value: "92M tons",
      description: "Of textiles discarded globally each year, with less than 15% being recycled.",
      accentColor: "neon-text-blue",
    },
    {
      icon: <Droplet />,
      title: "Water Saved",
      value: "2,700 liters",
      description: "Of water saved for each recycled cotton T-shirt compared to virgin materials.",
      accentColor: "neon-text-teal",
    },
    {
      icon: <Wind />,
      title: "CO₂ Reduction",
      value: "75%",
      description: "Lower carbon emissions when using recycled polyester compared to virgin polyester.",
      accentColor: "neon-text-purple",
    },
    {
      icon: <Recycle />,
      title: "Potential Impact",
      value: "$500B",
      description: "Annual value of materials lost due to clothing underutilization and lack of recycling.",
      accentColor: "neon-text-pink",
    },
  ];

  return (
    <section className="section-container">
      <SectionTitle
        title="The Clothing Waste Crisis"
        subtitle="Fast fashion has accelerated the global clothing waste problem. Here's the impact of our current consumption patterns."
        accentColor="blue"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            accentColor={stat.accentColor}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;