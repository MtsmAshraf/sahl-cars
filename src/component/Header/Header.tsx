"use client"
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React, { useRef } from 'react'
import logo from "../../../public/images/logo.webp"
import styles from "./header.module.css"
import LangSwitch from '../LangSwitch/LangSwitch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)

const Header = ({
  lo
} : {
  lo: string
}) => {
  const headerRef = useRef(null) 
  
    useGSAP(() => {

      // gsap.to(headerRef.current, {
      //   // backgroundColor: "#ffffff90",
      //   position: "fixed",
      //   borderBottom: "1px solid var(--main-color)",
      //   duration: 0.2,
      //   scrollTrigger: {
      //     trigger: headerRef.current, 
      //     start: "bottom top", 
      //   },
      // })
      // gsap.to("#logo", {
      //   backgroundColor: "#ffffff90",
      //   duration: 0.2,
      //   scrollTrigger: {
      //     trigger: headerRef.current, 
      //     start: "bottom top", 
      //   },
      // })
  
    }, {scope: headerRef}) 
  
  const t = useTranslations("HomePage.Header")
  return (
    <header ref={headerRef} className={lo === "ar" ? styles.header + " " + styles.ar : styles.header}>
      <div className="container">
        <div>
          <LangSwitch lo={lo}></LangSwitch>
        </div>
        <div>
          <Link id="logo" href={"/"} className={styles.logo}>
            <Image src={logo} alt='Sahl Cars Logo'></Image>
          </Link>
        </div>
        <div className={styles.links}>
          <div>
            <a href="https://wa.me/+966550798046" target='_blank'>
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>
                {t("whatsapp")}
              </span>
            </a>
            <a href="tel:+966550798046">
              <FontAwesomeIcon icon={faPhone} />
              <span>
                +966550798046
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header