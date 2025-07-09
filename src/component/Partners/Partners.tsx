import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./partners.module.css"
import Image from 'next/image'
import allBanks, { Bank } from './allBanks'

const Partners = () => {
  return (
    <section className={styles.partners}>
        <MainHeading>
            شركاء النجاح
        </MainHeading>
        <div className={styles.cards}>
            <div className="container">
                {
                    allBanks.map((bank: Bank) => {
                        return(
                            <div className={styles.card} key={bank.id}>
                                <div className={styles.img}>
                                    <Image src={bank.src} alt='A bank logo'></Image>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Partners