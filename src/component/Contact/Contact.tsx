import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./contact.module.css"
import WhatsAppForm from '../WhatsappForm/WhatsappForm'
const Contact = ({
  lo
} : {
  lo: string
}) => {
  return (
    <section id='contact' className={styles.contact}>
        <MainHeading>
            Contact
        </MainHeading>
        <div className="container">
          <WhatsAppForm lo={lo}/>
        </div>
    </section>
  )
}

export default Contact