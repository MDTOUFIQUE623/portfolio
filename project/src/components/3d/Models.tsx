import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';

interface ModelProps {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export function Laptop(props: ModelProps) {
  const group = useRef<Group>(null);
  const { nodes } = useGLTF('/models/laptop.glb');

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Laptop} />
    </group>
  );
}

export function Spaceship(props: ModelProps) {
  const group = useRef<Group>(null);
  const { nodes } = useGLTF('/models/spaceship.glb');

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.01;
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Spaceship} />
    </group>
  );
}

export function Island(props: ModelProps) {
  const group = useRef<Group>(null);
  const { nodes } = useGLTF('/models/island.glb');

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Island} />
    </group>
  );
}

useGLTF.preload('/models/laptop.glb');
useGLTF.preload('/models/spaceship.glb');
useGLTF.preload('/models/island.glb'); 