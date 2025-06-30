"use client"
import React from 'react'
import styles from "./hero.module.css"
import { useTranslations } from 'next-intl'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Hero = ({
  lo
} : {
  lo: string
}) => {
    const t = useTranslations("HomePage")
   useGSAP(() => {
    gsap.from(".stagger-text", {
        y: 100,
        opacity: 0,
        // ease: "circ",
        duration: 0.8, 
        // stagger: 0.1 // this means the delat betweem the staggered elememts is 0.1
        stagger: {
            amount: 0.3,
            grid: [1,1],
            axis: "y",
            // ease: "circ.inOut",
            // from: "random"
        }
    })
     }, [])
  return (
    <section className={lo === "ar" ? styles.hero + " " + styles.ar : styles.hero} id='hero'>
        <div className='container'>
            <div className={styles.text}>
                <h2 className='stagger-text'>
                    {
                        t("Hero.slogan")
                    }
                </h2>
                <p className='stagger-text'>
                    {
                        t("Hero.p1")
                    }
                </p>
                <p className='stagger-text'>
                    {
                        t("Hero.p2")
                    }
                </p>
                <div className={styles.btns + " " + "stagger-text"}>
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
        </div>
    </section>
  )
}

export default Hero