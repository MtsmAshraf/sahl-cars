"use client"
import React, { useRef } from 'react'
import styles from "./testimonials.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
import 'swiper/css';
import 'swiper/css/navigation'; // If using navigation module
import 'swiper/css/pagination'; // If using pagination module
import MainHeading from '../MainHeading/MainHeading'

import allTestimonials, { Testimonial } from './allTestimonials'



const Testimonials = ({
        lo,
    }: {
        lo: string
    }) => {
  const t = useTranslations("HomePage.Testimonials")
 
  return (
    <section className={lo === "ar" ? styles.testimonials + " " + styles.ar : styles.testimonials}>
        <div className={styles.overlay}></div>
            <MainHeading>
                {t("Heading")}
            </MainHeading>
            <div className="container">
                <ul>
                    {
                        allTestimonials.map((testimonial: Testimonial) => {
                            return(
                                <li key={testimonial.id} className='stagger-text'>
                                    <div className={styles.stars}>
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <p>
                                        {testimonial.textAr}
                                    </p>
                                    <h4>
                                        {testimonial.name}
                                    </h4>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
    </section>
  )
}

export default Testimonials