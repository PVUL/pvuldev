import React from 'react'
import { HexColorPicker } from 'react-colorful'
import { useSnapshot } from 'valtio'

import { GlobalState } from '../../globalState'
import styles from './Picker.module.scss'

export const Picker = () => {
  const snapshot = useSnapshot(GlobalState)
  return (
    <div className={styles.picker}>
      {snapshot.current && (
        <>
          <div className={styles.text}>{snapshot.current}</div>
          <HexColorPicker
            color={snapshot.items[snapshot.current]}
            onChange={(color) => {
              if (snapshot.current) GlobalState.items[snapshot.current] = color
            }}
          />
        </>
      )}
    </div>
  )
}
