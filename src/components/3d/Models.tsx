import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';

interface ModelProps {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

type GLTFResult = {
  nodes: any;
  materials: any;
  scene: THREE.Group;
};

export function Laptop(props: ModelProps) {
  const group = useRef<Group>(null);
  const gltf = useGLTF('/models/laptop.glb') as unknown as GLTFResult;

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={group} {...props}>
      <primitive object={gltf.scene} />
    </group>
  );
}

export function Spaceship(props: ModelProps) {
  const group = useRef<Group>(null);
  const gltf = useGLTF('/models/spaceship.glb') as unknown as GLTFResult;

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.01;
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group ref={group} {...props}>
      <primitive object={gltf.scene} />
    </group>
  );
}

export function Island(props: ModelProps) {
  const group = useRef<Group>(null);
  const gltf = useGLTF('/models/island.glb') as unknown as GLTFResult;

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={group} {...props}>
      <primitive object={gltf.scene} />
    </group>
  );
}

useGLTF.preload('/models/laptop.glb');
useGLTF.preload('/models/spaceship.glb');
useGLTF.preload('/models/island.glb'); 