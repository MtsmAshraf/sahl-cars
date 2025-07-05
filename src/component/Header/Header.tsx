"use client"
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React, { useRef } from 'react'
import logo from "../../../public/images/logo.png"
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

      gsap.to(headerRef.current, {
        backgroundColor: "#ffffff90",
        position: "fixed",
        borderBottom: "1px solid var(--main-color)",
        duration: 0.2,
        scrollTrigger: {
          trigger: headerRef.current, 
          start: "bottom top", 
        },
      })
  
    }, {scope: headerRef}) 
  
  const t = useTranslations("HomePage.Header")
  return (
    <header ref={headerRef} className={lo === "ar" ? styles.header + " " + styles.ar : styles.header}>
      <div className="container">
        <Link href={"/"} className={styles.logo}>
          <Image src={logo} alt='Sahl Cars Logo'></Image>
        </Link>
        <div className={styles.links}>
          <LangSwitch lo={lo}></LangSwitch>
          <div>
            <a href="">
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>
                {t("whatsapp")}
              </span>
            </a>
            <a href="tel:+966505638988">
              <FontAwesomeIcon icon={faPhone} />
              <span>
                +966505638988
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header