import React from 'react'
import styles from "./footer.module.css"
export const Footer = () => {
  return (
    <footer className={styles.footer}>
        by: <a href="https://moatasim-ashraf.netlify.app/" target='_blank'>Moatasim</a> &copy; 2025
    </footer>
  )
}
