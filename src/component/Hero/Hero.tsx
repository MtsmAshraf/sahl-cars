"use client"
import React from 'react'
import styles from "./hero.module.css"
import { useTranslations } from 'next-intl'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'


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
            <div className={styles.img}>
                <DotLottieReact 
                // src="https://lottie.host/cbab1bf0-9443-4f8d-8fa7-46489702ba56/xVHiC3sM2T.json" 
                // src="https://lottie.host/5fe284c4-cfee-4d60-8d30-e6b4a11c89d9/v1W3TAjATe.lottie"
                // src="https://lottie.host/a3947af8-c0f4-441f-acca-ea58103508c8/gDpkHmD0bg.lottie"
                // src="https://lottie.host/3a20c431-7c70-4a9c-99ad-8de45d81059f/f6YXjvbjfH.lottie"
                // src="https://lottie.host/34e99b35-c67b-4d9f-b801-bfe7aa53d4a6/7QrwMwQvdK.lottie"
                // src="https://lottie.host/34e99b35-c67b-4d9f-b801-bfe7aa53d4a6/7QrwMwQvdK.lottie"
                src="https://lottie.host/238ba0cf-59df-434b-a65b-8b7bfb6a3edf/3d9L2RYgTm.lottie"
                speed={1}
                style={{width: "100%",height: "100%"}}
                loop 
                backgroundColor='transparent'
                autoplay></DotLottieReact>

            </div>
        </div>
        <div className={styles.overlay}>
        </div>
    </section>
  )
}

export default Hero