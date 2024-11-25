import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';

const FloatingElement = ({ className = "" }) => (
  <motion.div
    className={`absolute w-16 h-16 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-full blur-xl ${className}`}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: Math.random() * 3 + 2,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
);

const CodeBackground = () => (
  <div className="fixed inset-0 pointer-events-none opacity-10">
    <img 
      src="/images/code-bg.jpg" 
      alt="Code Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-transparent to-[#030014]" />
  </div>
);

const TechPattern = () => (
  <div 
    className="fixed inset-0 pointer-events-none opacity-5"
    style={{
      backgroundImage: 'url(/images/tech-pattern.png)',
      backgroundRepeat: 'repeat',
    }}
  />
);

export default function FloatingElements() {
  return (
    <>
      <CodeBackground />
      <TechPattern />
      <div className="fixed inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars 
            radius={100} 
            depth={50} 
            count={3000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1}
          />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>
      
      <FloatingElement className="top-20 left-1/4" />
      <FloatingElement className="top-40 right-1/4" />
      <FloatingElement className="bottom-40 left-1/3" />
      <FloatingElement className="bottom-20 right-1/3" />
      
      {/* Tech-themed geometric shapes */}
      <motion.div 
        className="absolute top-1/4 left-1/3 w-72 h-72"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-violet-500/10 to-transparent blur-2xl transform rotate-45" />
      </motion.div>
    </>
  );
}