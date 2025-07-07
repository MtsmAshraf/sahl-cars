import React from 'react'
import styles from "./steps.module.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCar, faClock, faSackDollar, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import MainHeading from '../MainHeading/MainHeading'
import { useTranslations } from 'next-intl'

import formSvg from "../../../public/images/formsvg.svg"
import contractSvg from "../../../public/images/contract.svg"
import choiceSvg from "../../../public/images/choice.svg"
import doneSvg from "../../../public/images/donesvg.svg"
import Image from 'next/image'

const Steps = ({
    lo
} : {
    lo: string
}) => {
    const t = useTranslations("HomePage.Steps")
  return (
    <section className={lo === "ar" ? styles.steps + " " + styles.ar : styles.steps}>
        <MainHeading inverted>
            {
                t("heading")
            }
        </MainHeading>
        <div className="container">
            <div className={styles.card}>
                <h5>
                    1
                </h5>
                <span className={styles.icon}>
                    <Image src={formSvg} alt='form svg'></Image>
                    {/* <FontAwesomeIcon icon={faClock} /> */}
                </span>
                <div className={styles.cardText}>
                    <h4>
                        {
                            t("0.heading")
                        }
                    </h4>
                    {/* <p>
                        {
                            t("0.p")
                        }                    
                    </p> */}
                </div>
            </div>
            <div className={styles.card}>
                <h5>
                    2
                </h5>
                <span className={styles.icon}>
                    {/* <FontAwesomeIcon icon={faSackDollar} /> */}
                    <Image src={contractSvg} alt=''></Image>
                </span>
                <div className={styles.cardText}>
                    <h4>
                        {
                            t("1.heading")
                        }
                    </h4>
                    {/* <p>
                        {
                            t("1.p")
                        }                    
                    </p> */}
                </div>
            </div>
            <div className={styles.card}>
                <h5>
                    3
                </h5>
                <span className={styles.icon}>
                    <Image src={choiceSvg} alt=''></Image>
                    {/* <FontAwesomeIcon icon={fa} /> */}
                </span>
                <div className={styles.cardText}>
                    <h4>
                        {
                            t("2.heading")
                        }
                    </h4>
                    {/* <p>
                        {
                            t("2.p")
                        }                    
                    </p> */}
                </div>
            </div>
            <div className={styles.card}>
                <h5>
                    4
                </h5>
                <span className={styles.icon}>
                    <Image src={doneSvg} alt=''></Image>
                </span>
                <div className={styles.cardText}>
                    <h4>
                        {
                            t("3.heading")
                        }
                    </h4>
                    {/* <p>
                        {
                            t("3.p")
                        }                    
                    </p> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Steps