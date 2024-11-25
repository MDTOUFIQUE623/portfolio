import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Float } from '@react-three/drei';
import { Suspense } from 'react';

function Model({ url }: { url: string }) {
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} />;
}

export function Scene({ modelUrl, scale = 1, position = [0, 0, 0] }) {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Float
          speed={4}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <Model url={modelUrl} />
        </Float>
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
} 