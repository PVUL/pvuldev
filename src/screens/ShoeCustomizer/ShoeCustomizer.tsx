import React, { Suspense } from 'react'
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { Shoe } from '../../shoe'
import { Picker } from '../../components/Picker/Picker'

export const ShoeCustomizer = () => (
  <>
    <Canvas style={{ height: '100vh' }} camera={{ zoom: 2.2, position: [5, 2.5, -5] }}>
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.3} position={[5, 20, 20]} />
      <Suspense fallback={null}>
        <Shoe />
        <Environment files="hdr.hdr" />
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -0.8, 0]}
          opacity={0.25}
          width={10}
          height={10}
          blur={2}
          far={1}
        />
      </Suspense>
      <OrbitControls />
    </Canvas>
    <Picker />
  </>
)
