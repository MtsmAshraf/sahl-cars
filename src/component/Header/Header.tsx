import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import logo from "../../../public/images/logo.png"
import styles from "./header.module.css"
import LangSwitch from '../LangSwitch/LangSwitch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

const Header = async ({
  lo
} : {
  lo: string
}) => {
  const t = await getTranslations("HomePage.Header")
  return (
    <header className={lo === "ar" ? styles.header + " " + styles.ar : styles.header}>
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