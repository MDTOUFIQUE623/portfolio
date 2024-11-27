declare module '@react-three/fiber' {
  import { Camera, Scene, WebGLRenderer } from 'three';

  export interface ThreeEvent {
    [key: string]: any;
  }

  export interface RootState {
    gl: WebGLRenderer;
    scene: Scene;
    camera: Camera;
    clock: { elapsedTime: number };
  }
} 