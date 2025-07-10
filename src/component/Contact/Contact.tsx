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
    <section id='contact' className={lo !== "en" ? styles.contact + " " + styles.ar : styles.contact}>
        
        <div className="container">
          <div>
              
            <MainHeading>
            {
              t("heading")
            }
            </MainHeading>
              <div className={styles.form}>
                <WhatsAppForm lo={lo}/>
            </div>
          </div>
        <div>
            <MainHeading>
              {
                t("location")
              }
              </MainHeading>
            <div className={styles.location}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1066.5405006360738!2d39.25722663730846!3d21.43282766257138!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1751987610555!5m2!1sen!2seg" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Contact