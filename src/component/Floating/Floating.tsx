import React from 'react'
import styles from "./floating.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'

const Floating = () => {
  return (
    <div className={styles.floating}>
        <a href="https://wa.me/+966550798046" target='_blank'>
            <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="#contact">
            <FontAwesomeIcon icon={faFileLines} />
        </a>
    </div>
  )
}

export default Floating