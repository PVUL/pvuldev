import React from 'react'
import { HexColorPicker } from 'react-colorful'
import { useSnapshot } from 'valtio'

import { GlobalState } from '../../globalState'
import styles from './Picker.module.scss'

export const Picker = () => {
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
