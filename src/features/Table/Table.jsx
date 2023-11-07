/* Core */
import { useState } from 'react'

/* Components */
import { Controls } from '../Controls/Controls'

/* Instruments */
import styles from './table.module.css'
import { useDispatch } from 'react-redux'

export const Table = () => {
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <Controls />
      <table>
        
      </table>
    </div>
  )
}
