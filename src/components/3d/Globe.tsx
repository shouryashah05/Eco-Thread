import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

// This component represents the Earth
const Earth = ({ speed = 0.001, ...props }) => {
  const meshRef = useRef();
  const textures = useTexture({
    map: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    bumpMap: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
    specularMap: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg',
  });

  // Rotate the globe
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += speed;
    }
  });

  return (
    <mesh ref={meshRef} {...props}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial
        map={textures.map}
        bumpMap={textures.bumpMap}
        bumpScale={0.05}
        specularMap={textures.specularMap}
        specular={[0.5, 0.5, 0.5]}
        shininess={5}
      />
    </mesh>
  );
};

// Hotspot component to show waste locations
const Hotspot = ({ position, color, pulsating = false }) => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (pulsating && meshRef.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
};

interface WasteStatPoint {
  position: [number, number, number];
  name: string;
  value: string;
  color: string;
}

interface GlobeProps {
  showStats?: boolean;
}

const Globe: React.FC<GlobeProps> = ({ showStats = false }) => {
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const wasteStatPoints: WasteStatPoint[] = [
    { position: [0, 2, 0], name: "North America", value: "37M tons annually", color: "#4361ee" },
    { position: [1.5, 0.8, 1], name: "Europe", value: "42M tons annually", color: "#f72585" },
    { position: [-1.5, 0.5, 1], name: "Asia", value: "92M tons annually", color: "#4cc9f0" },
    { position: [0, -1.8, 1], name: "Australia", value: "15M tons annually", color: "#7209b7" },
    { position: [-0.8, -0.5, 1.8], name: "South America", value: "28M tons annually", color: "#4cc9f0" },
  ];

  return (
    <motion.div 
      className="relative w-full h-[500px] md:h-[600px]" 
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#4cc9f0" intensity={0.5} />
        
        <Earth />
        
        {wasteStatPoints.map((point, index) => (
          <Hotspot 
            key={index}
            position={point.position}
            color={point.color}
            pulsating={activePoint === index}
          />
        ))}
        
        <Stars radius={100} depth={50} count={1000} factor={4} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      
      {showStats && (
        <div className="absolute top-4 right-4 w-64 glassmorphic p-4 z-10">
          <h3 className="text-lg font-semibold mb-3 neon-text-teal">Global Clothing Waste</h3>
          <ul className="space-y-2">
            {wasteStatPoints.map((point, index) => (
              <motion.li 
                key={index}
                className="flex justify-between items-center text-sm p-2 rounded-md transition-colors cursor-pointer"
                style={{ backgroundColor: activePoint === index ? `${point.color}20` : 'transparent' }}
                whileHover={{ backgroundColor: `${point.color}20` }}
                onHoverStart={() => setActivePoint(index)}
                onHoverEnd={() => setActivePoint(null)}
              >
                <span>{point.name}</span>
                <span
                  className="font-semibold"
                  style={{ color: point.color }}
                >
                  {point.value}
                </span>
              </motion.li>
            ))}
          </ul>
          <div className="mt-4 pt-3 border-t border-white/10">
            <p className="text-xs text-foreground/70">Total annual textile waste: 214M tons</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Globe;