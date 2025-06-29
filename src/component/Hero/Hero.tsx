import React from 'react'
import styles from "./hero.module.css"
import { useTranslations } from 'next-intl'
// import Image from 'next/image'
// import heroImg from "../../../public/images/hero.png"
const Hero = () => {
    const t = useTranslations("HomePage")

  return (
    <section className={styles.hero}>
        <div className="container">
            <h2>
                {
                    t("Hero.slogan")
                }
            </h2>
            <p>
                {
                    t("Hero.p1")
                }
            </p>
            <p>
                {
                    t("Hero.p2")
                }
            </p>
            <div className={styles.btns}>
                <a href="#contact">
                    {
                        t("Hero.btns.b1")
                    }
                </a>
                <a href="https://wa.me/+966505638988" target='_blank'>
                    {
                        t("Hero.btns.b2")
                    }
                </a>
            </div>
        </div>
        {/* <div className={styles.img}>
            <Image src={heroImg} alt='Hero car'></Image>
        </div> */}
    </section>
  )
}

export default Hero