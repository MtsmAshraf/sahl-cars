import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./contact.module.css"
import WhatsAppForm from '../WhatsappForm/WhatsappForm'
import { useTranslations } from 'next-intl'
const Contact = ({
  lo
} : {
  lo: string
}) => {
  const t = useTranslations("HomePage.Contact")
  return (
    <section id='contact' className={styles.contact}>
        <MainHeading>
          {
            t("heading")
          }
        </MainHeading>
        <div className="container">
          <WhatsAppForm lo={lo}/>
        </div>
    </section>
  )
}

export default Contact