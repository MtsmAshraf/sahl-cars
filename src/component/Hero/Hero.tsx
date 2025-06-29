import React from 'react'
import styles from "./hero.module.css"
// import Image from 'next/image'
// import heroImg from "../../../public/images/hero.png"
const Hero = () => {
  return (
    <section className={styles.hero}>
        <div className="container">
            <h2>
                تمويل سيارتك أصبح أسهل
            </h2>
            <p>تقسيط بسعر الكاش - شروط وحلول سهلة وميسرة</p>
            <p>تمويل سيارات تويوتا وغير تويوتا بأقل الأسعار وأسهل الإجراءات</p>
            <div className={styles.btns}>
                <a href="#contact-form">احجز استشارتك الآن</a>
                <a href="https://wa.me/+966505638988" target='_blank'>تواصل معنا</a>
            </div>
        </div>
        {/* <div className={styles.img}>
            <Image src={heroImg} alt='Hero car'></Image>
        </div> */}
    </section>
  )
}

export default Hero