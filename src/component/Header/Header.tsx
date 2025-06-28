import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import logo from "../../../public/images/logo.png"
import styles from "./header.module.css"
import LangSwitch from '../LangSwitch'

const Header = async ({
  lo
} : {
  lo: string
}) => {
  return (
    <header className={lo === "ar" ? styles.header + " " + styles.ar : styles.header}>
      <div className="container">
        <Link href={"/"} className={styles.logo}>
          <Image src={logo} alt='Sahl Cars Logo'></Image>
        </Link>
        <div className={styles.links}>
          <LangSwitch lo={lo}></LangSwitch>
          <a href="/">Whatsapp</a>
          <a href="/">Call</a>
        </div>
      </div>
    </header>
  )
}

export default Header