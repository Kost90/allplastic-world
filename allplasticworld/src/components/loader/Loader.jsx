import React from 'react'
import styles from './Loader.module.css'

function Loader() {
  return (
    <div className={styles.bouncing_loader}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Loader