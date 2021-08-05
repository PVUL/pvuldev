import React from 'react'
import { Link } from 'react-router-dom'
import { useGLTF } from '@react-three/drei'

import styles from './Home.module.scss'

export const Home = () => (
  <div className={styles.home}>
    <h1>Projects:</h1>
    <ul>
      <li>
        <Link to="/shoe">Shoe Customizer</Link>
      </li>
    </ul>
  </div>
)

useGLTF.preload('/shoe.glb')
