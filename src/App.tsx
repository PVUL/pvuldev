import React, { Suspense } from 'react'
import { HexColorPicker } from 'react-colorful'
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useSnapshot } from 'valtio'

import { GlobalState } from './globalState'
import { Shoe } from './shoe'
import styles from './App.module.scss'

const Picker = () => {
  const snap = useSnapshot(GlobalState)
  return (
    <div className={styles.picker}>
      {snap.current && (
        <>
          <div className={styles.text}>{snap.current}</div>
          <HexColorPicker
            color={snap.items[snap.current]}
            onChange={(color) => (GlobalState.items[snap.current] = color)}
          />
        </>
      )}
    </div>
  )
}

export default function App() {
  return (
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
}
