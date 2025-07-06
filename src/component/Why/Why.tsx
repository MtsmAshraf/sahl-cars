import React from 'react'
import styles from "./why.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faClock, faSackDollar, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import MainHeading from '../MainHeading/MainHeading'
import { useTranslations } from 'next-intl'
const Why = () => {
    const t = useTranslations("HomePage.Why")
  return (
    <section className={styles.why}>
        <MainHeading inverted>
            {
                t("heading")
            }
        </MainHeading>
        <div className="container">
            <div className={styles.card}>
                <span className={styles.icon}>
                    <FontAwesomeIcon icon={faClock} />
                </span>
                <div className={styles.cardText}>
                    <h4>
                        {
                            t("0.heading")
                        }
                    </h4>
                    <p>
                        {
                            t("0.p")
                        }                    
                    </p>
                </div>
            </div>
            <div className={styles.card}>
                <span className={styles.icon}>
                    <FontAwesomeIcon icon={faSackDollar} />
                </span>
                <div className={styles.cardText}>
                    <h4>
                        {
                            t("1.heading")
                        }
                    </h4>
                    <p>
                        {
                            t("1.p")
                        }                    
                    </p>
                </div>
            </div>
            <div className={styles.card}>
                <span className={styles.icon}>
                    <FontAwesomeIcon icon={faShieldAlt} />
                </span>
                <div className={styles.cardText}>
                    <h4>
                        {
                            t("2.heading")
                        }
                    </h4>
                    <p>
                        {
                            t("2.p")
                        }                    
                    </p>
                </div>
            </div>
            <div className={styles.card}>
                <span className={styles.icon}>
                    <FontAwesomeIcon icon={faCar} />
                </span>
                <div className={styles.cardText}>
                    <h4>
                        {
                            t("3.heading")
                        }
                    </h4>
                    <p>
                        {
                            t("3.p")
                        }                    
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Why