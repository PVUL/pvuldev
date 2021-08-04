import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Shoe } from './shoe';
import './App.css';

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={null}>
        <Shoe />
      </Suspense>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
}
