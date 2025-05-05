import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, Html, OrbitControls, useTexture, Cylinder, Box } from '@react-three/drei';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

// Node component representing a recycling process
const ProcessNode = ({ position, title, onClick, isActive, color = '#4cc9f0' }) => {
  const groupRef = useRef();

  return (
    <group 
      ref={groupRef} 
      position={position} 
      onClick={onClick}
    >
      <Cylinder 
        args={[0.8, 0.8, 0.4, 32]} 
        position={[0, 0, 0]}
      >
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={isActive ? 0.5 : 0.2}
          transparent
          opacity={0.8}
        />
      </Cylinder>
      
      <Text
        position={[0, 0, 0.25]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
    </group>
  );
};

// Connection between nodes
const Connection = ({ start, end, color = '#ffffff', opacity = 0.3 }) => {
  // Calculate the midpoint with a slight offset to create a curved path
  const midPoint = [
    (start[0] + end[0]) / 2,
    (start[1] + end[1]) / 2 + 0.5,
    (start[2] + end[2]) / 2,
  ];
  
  // Direction from start to end
  const direction = [
    end[0] - start[0],
    end[1] - start[1],
    end[2] - start[2],
  ];
  
  // Distance between points
  const distance = Math.sqrt(
    direction[0] * direction[0] + 
    direction[1] * direction[1] + 
    direction[2] * direction[2]
  );
  
  // Normalize direction
  const normDirection = [
    direction[0] / distance,
    direction[1] / distance,
    direction[2] / distance,
  ];
  
  return (
    <>
      {/* First half of the connection */}
      <group position={[start[0], start[1], start[2]]}>
        <Box
          args={[0.05, distance / 2, 0.05]}
          position={[
            normDirection[0] * distance / 4,
            normDirection[1] * distance / 4,
            normDirection[2] * distance / 4,
          ]}
          rotation={[
            Math.atan2(
              Math.sqrt(normDirection[0] * normDirection[0] + normDirection[2] * normDirection[2]),
              normDirection[1]
            ) - Math.PI / 2,
            0,
            Math.atan2(normDirection[0], normDirection[2]),
          ]}
        >
          <meshBasicMaterial color={color} transparent opacity={opacity} />
        </Box>
      </group>
      
      {/* Second half of the connection */}
      <group position={[midPoint[0], midPoint[1], midPoint[2]]}>
        <Box
          args={[0.05, distance / 2, 0.05]}
          position={[
            normDirection[0] * distance / 4,
            normDirection[1] * distance / 4,
            normDirection[2] * distance / 4,
          ]}
          rotation={[
            Math.atan2(
              Math.sqrt(normDirection[0] * normDirection[0] + normDirection[2] * normDirection[2]),
              normDirection[1]
            ) - Math.PI / 2,
            0,
            Math.atan2(normDirection[0], normDirection[2]),
          ]}
        >
          <meshBasicMaterial color={color} transparent opacity={opacity} />
        </Box>
      </group>
    </>
  );
};

// Process description panel
const ProcessInfo = ({ process, onClose }) => {
  return (
    <motion.div
      className="absolute top-4 right-4 w-72 glassmorphic p-5 z-10"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 
          className="text-lg font-bold"
          style={{ color: process.color }}
        >
          {process.title}
        </h3>
        <button 
          onClick={onClose}
          className="text-white/70 hover:text-white"
        >
          ✕
        </button>
      </div>
      
      <p className="text-sm text-foreground/90 mb-3">
        {process.description}
      </p>
      
      {process.stats && (
        <div className="mt-4 pt-3 border-t border-white/10 space-y-2">
          {process.stats.map((stat, index) => (
            <div key={index} className="flex justify-between text-xs">
              <span className="text-foreground/70">{stat.label}</span>
              <span className="font-medium">{stat.value}</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

interface RecyclingProcess {
  id: string;
  title: string;
  position: [number, number, number];
  color: string;
  description: string;
  stats?: Array<{ label: string; value: string }>;
}

interface Connection {
  from: string;
  to: string;
  color?: string;
}

const recyclingProcesses: RecyclingProcess[] = [
  {
    id: 'collection',
    title: 'Collection',
    position: [0, 0, 0],
    color: '#4361ee',
    description: 'Textiles are collected from consumers, retailers, and manufacturers. Collection points include recycling centers, donation bins, and in-store take-back programs.',
    stats: [
      { label: 'Collection rate', value: '15-20% globally' },
      { label: 'Annual volume', value: '35M tons' }
    ]
  },
  {
    id: 'sorting',
    title: 'Sorting',
    position: [2, 0, 0],
    color: '#7209b7',
    description: 'Collected textiles are sorted by material type, color, and condition. High-quality items are separated for reuse, while damaged or worn items proceed to recycling.',
    stats: [
      { label: 'Labor required', value: 'High' },
      { label: 'AI sorting adoption', value: 'Growing (35%)' }
    ]
  },
  {
    id: 'mechanical',
    title: 'Mechanical Recycling',
    position: [1, -2, 0],
    color: '#f72585',
    description: 'Fabrics are shredded and broken down into fibers, which can be respun into new yarns. This process shortens the fibers and often requires blending with virgin materials.',
    stats: [
      { label: 'Energy usage', value: 'Medium' },
      { label: 'Material loss', value: '15-25%' }
    ]
  },
  {
    id: 'chemical',
    title: 'Chemical Recycling',
    position: [3, -2, 0],
    color: '#4cc9f0',
    description: 'Uses chemicals to break down polymers into their base molecules. This process can handle blended textiles and creates higher-quality recycled fibers.',
    stats: [
      { label: 'Energy usage', value: 'High' },
      { label: 'Material recovery', value: '90-95%' }
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    position: [2, -4, 0],
    color: '#00b380',
    description: 'Recycled fibers are used to create new fabrics and textiles. These can be used in new clothing items, accessories, household textiles, or industrial applications.',
    stats: [
      { label: 'CO2 reduction', value: '65-80%' },
      { label: 'Water saving', value: 'Up to 95%' }
    ]
  },
  {
    id: 'retail',
    title: 'Retail',
    position: [0, -4, 0],
    color: '#ffa500',
    description: 'Recycled products are sold to consumers through traditional retail channels, online platforms, and specialized eco-friendly marketplaces.',
    stats: [
      { label: 'Price premium', value: '15-30%' },
      { label: 'Consumer awareness', value: 'Increasing (65%)' }
    ]
  },
  {
    id: 'consumer',
    title: 'Consumer',
    position: [-2, -2, 0],
    color: '#9eff32',
    description: 'Consumers use recycled textile products. After use, they can donate or return items to complete the circular textile economy.',
    stats: [
      { label: 'Usage lifespan', value: '2-4 years avg.' },
      { label: 'Return rate', value: '40% for recycling' }
    ]
  }
];

const connections: Connection[] = [
  { from: 'collection', to: 'sorting' },
  { from: 'sorting', to: 'mechanical' },
  { from: 'sorting', to: 'chemical' },
  { from: 'mechanical', to: 'manufacturing' },
  { from: 'chemical', to: 'manufacturing' },
  { from: 'manufacturing', to: 'retail' },
  { from: 'retail', to: 'consumer' },
  { from: 'consumer', to: 'collection', color: '#9eff32' } // Complete the cycle
];

interface FlowChartProps {
  initialFocus?: string;
}

const FlowChart: React.FC<FlowChartProps> = ({ initialFocus }) => {
  const [activeProcess, setActiveProcess] = useState<RecyclingProcess | null>(
    initialFocus ? recyclingProcesses.find(p => p.id === initialFocus) || null : null
  );
  
  const handleProcessClick = (process: RecyclingProcess) => {
    setActiveProcess(process);
  };
  
  const handleCloseInfo = () => {
    setActiveProcess(null);
  };
  
  return (
    <motion.div 
      className="relative w-full h-[600px] md:h-[700px] bg-gradient-to-b from-background/0 to-background/40 rounded-xl overflow-hidden"
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#4cc9f0" intensity={0.5} />
        
        {/* Render connections */}
        {connections.map((connection, index) => {
          const fromProcess = recyclingProcesses.find(p => p.id === connection.from);
          const toProcess = recyclingProcesses.find(p => p.id === connection.to);
          
          if (fromProcess && toProcess) {
            return (
              <Connection 
                key={`${connection.from}-${connection.to}`}
                start={fromProcess.position}
                end={toProcess.position}
                color={connection.color || fromProcess.color}
                opacity={
                  activeProcess && 
                  (activeProcess.id === connection.from || activeProcess.id === connection.to) 
                    ? 0.7 
                    : 0.3
                }
              />
            );
          }
          return null;
        })}
        
        {/* Render process nodes */}
        {recyclingProcesses.map((process) => (
          <ProcessNode 
            key={process.id}
            position={process.position}
            title={process.title}
            color={process.color}
            onClick={() => handleProcessClick(process)}
            isActive={activeProcess?.id === process.id}
          />
        ))}
        
        <OrbitControls 
          enableZoom={true} 
          maxZoom={1.5}
          minZoom={0.5}
          enablePan={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          target={[0, -2, 0]}
        />
      </Canvas>
      
      {activeProcess && (
        <ProcessInfo 
          process={activeProcess} 
          onClose={handleCloseInfo}
        />
      )}
      
      <div className="absolute bottom-4 left-4 glassmorphic p-3 text-xs text-foreground/70">
        <p>Click on a node to view more information</p>
        <p className="mt-1">Drag to rotate | Scroll to zoom</p>
      </div>
    </motion.div>
  );
};

export default FlowChart;