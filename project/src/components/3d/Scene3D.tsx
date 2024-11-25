import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stage } from '@react-three/drei';
import { Laptop, Spaceship, Island } from './Models';
import { Suspense } from 'react';

interface Scene3DProps {
  type?: 'laptop' | 'spaceship' | 'island';
}

const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-purple-400">Loading 3D Model...</div>
  </div>
);

export function Scene3D({ type = 'laptop' }: Scene3DProps) {
  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Float
              speed={2}
              rotationIntensity={1}
              floatIntensity={1}
            >
              {type === 'laptop' && <Laptop scale={0.5} />}
              {type === 'spaceship' && <Spaceship scale={0.3} />}
              {type === 'island' && <Island scale={0.4} />}
            </Float>
          </Stage>
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none">
        <LoadingFallback />
      </div>
    </div>
  );
} 