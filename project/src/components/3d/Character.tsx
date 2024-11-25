import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, MeshDistortMaterial } from '@react-three/drei';
import { Group } from 'three';

interface CharacterProps {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export function Character(props: CharacterProps) {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={group} {...props}>
      <Box args={[1, 1, 1]}>
        <MeshDistortMaterial
          color="#4c1d95"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Box>
    </group>
  );
} 