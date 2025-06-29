import React from 'react'
import styles from "./why.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faClock, faSackDollar, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import MainHeading from '../MainHeading/MainHeading'
import { useTranslations } from 'next-intl'
const Why = () => {
  return (
    <section className={styles.why}>
        <MainHeading>
            {/* Why Sahl Cars? */}
            لماذا سهل كارز؟
        </MainHeading>
        <div className="container">
            <div className={styles.card}>
                <span className={styles.icon}>
                    <FontAwesomeIcon icon={faCar} />
                </span>
                <div className={styles.cardText}>
                    <h4>
                        جميع الماركات
                    </h4>
                    <p>
                        تويوتا وغير تويوتا - جديد ومستعمل
                    </p>
                </div>
            </div>
            <div className={styles.card}>
                <span className={styles.icon}>
                    <FontAwesomeIcon icon={faShieldAlt} />
                </span>
                <div className={styles.cardText}>
                    <h4>
                        ضمان وثقة
                    </h4>
                    <p>
                        خدمة موثوقة ومضمونة
                    </p>
                </div>
            </div>
            <div className={styles.card}>
                <span className={styles.icon}>
                    <FontAwesomeIcon icon={faSackDollar} />
                </span>
                <div className={styles.cardText}>
                    <h4>
                        أقساط ميسرة
                    </h4>
                    <p>
                        تقسيط بسعر الكاش مع شروط مرنة
                    </p>
                </div>
            </div>
            <div className={styles.card}>
                <span className={styles.icon}>
                    <FontAwesomeIcon icon={faClock} />
                </span>
                <div className={styles.cardText}>
                    <h4>
                        سرعة في الموافقة
                    </h4>
                    <p>
                        موافقات سريعة خلال 24 ساعة
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Why