import React from 'react'
import Card from '../../components/card/Card'
import styles from './Cardscontainer.module.css'

function Cardscontainer({children}) {
  return (
    <div className={styles.cards_wrapper}>
        {children}
    </div>
  )
}

export default Cardscontainer