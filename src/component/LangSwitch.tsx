"use client"
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
// import styles from "./lang-switch.module.css"

const LangSwitch = ({
  lo
}: {
  lo: string
}) => {
    const pathname = usePathname()
    const router = useRouter()
    const changeLanguage = () => {
        const nextLocale = lo === "en" ? "ar" : "en";
        const splitPathname = pathname.split("/")
        splitPathname[1] = nextLocale;
        const jointPathname = splitPathname.join("/")
        router.replace(`${jointPathname}`)
    }
  return (
    // <button onClick={changeLanguage} className={lo === "ar" ? styles.ar + " " + styles.langSwitch : styles.langSwitch}>
    <button onClick={changeLanguage}>
      <span className={lo === "ar" ? "hidden" : ""}>Ar</span>
      <span className={lo === "en" ? "hidden" : ""}>En</span>
    </button>
  )
}

export default LangSwitch