import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./partners.module.css"
import Image from 'next/image'
import ryadthBank from "../../../public/images/logos/Riyad-Bank-Logo.svg"

const Partners = () => {
  return (
    <section className={styles.partners}>
        <MainHeading>
            شركاء النجاح
        </MainHeading>
        <div className={styles.cards}>
            <div className="container">
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={ryadthBank} alt='al Ryadth Bank logo'></Image>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Partners