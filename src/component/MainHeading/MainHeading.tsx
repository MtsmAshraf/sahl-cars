import React from 'react'
import styles from "./main-heading.module.css"
const MainHeading = ({
    children
} : {
    children: React.ReactNode
}) => {
  return (
    <div className={styles.mainHeading}>
        <span></span>
        <span></span>
        <h2>
            {children}
        </h2>
    </div>
  )
}

export default MainHeading