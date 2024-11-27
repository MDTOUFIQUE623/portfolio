declare module '@react-three/fiber' {
  export { Canvas } from '@react-three/fiber/dist/declarations/src/web/Canvas';
  export { useFrame } from '@react-three/fiber/dist/declarations/src/core/hooks';
}

declare module '@react-three/drei' {
  export { OrbitControls, Stars, useGLTF, Float } from '@react-three/drei/core';
} 