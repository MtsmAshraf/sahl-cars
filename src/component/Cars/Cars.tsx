"use client"
import React from 'react'
import styles from "./cars.module.css"

// import Swiper JS
// import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper ,SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import MainHeading from '../MainHeading/MainHeading';
import allCars, { Car } from './allCar';
import { useTranslations } from 'next-intl';

const Cars = ({
    lo
} : {
    lo: string
}) => {
    const t = useTranslations("HomePage.Cars")
  return (
    <section className={lo !== "en" ? styles.cars + " " + styles.ar : styles.cars}>
        <MainHeading>
            {
                t("heading")
            }
        </MainHeading>
        <div className="container">
            <div className={styles.swiper}>
                <Swiper
                    loop
                    autoplay={{
                        delay: 3000
                    }}
                    spaceBetween={50}
                    autoHeight={true}
                    className={styles.carsSwiper}
                    // slidesPerView={3}
                    modules={[Navigation, Pagination, Autoplay]}
                    
                    pagination={{
                        clickable: true,
                        el: `.brandsPagination`
                    }}
                    navigation={{
                        nextEl: '.cars-swiper-button-next',
                        prevEl: '.cars-swiper-button-prev'
                    }}
                        breakpoints={{
                            400: {
                            slidesPerView: 1,
                            spaceBetween: 10
                            },
                            640: {
                            slidesPerView: 1,
                            spaceBetween: 10
                            },
                            768: {
                            slidesPerView: 2,
                            },
                            1024: {
                            slidesPerView: 3,
                            },
                        }}
                    >
                        {
                            allCars.map((car: Car) => {
                                return(
                                <SwiperSlide key={car.id} className={styles.slide}>
                                    <a href="#contact">
                                        <div className={styles.img}>
                                            <span className={styles.spanLink}>
                                                {
                                                    t("imgLink")
                                                }
                                            </span>
                                            <div className={styles.imgOverlay}></div>
                                            <Image src={car.src} alt={car.name}></Image>
                                        </div>
                                        <div className={styles.details}>
                                            <div className={styles.carLogo}>
                                                <Image src={car.carLogo} alt={`${car.name} logo`}></Image>
                                            </div>    
                                            <div className={styles.text}>
                                                <h3>
                                                    {
                                                        car.name
                                                    }
                                                </h3>
                                                <p>
                                                    {
                                                        car.carYear
                                                    }
                                                </p>
                                                <span>
                                                    {
                                                        car.price + ` ${t("currency")}`
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                                )
                            })
                        }
                </Swiper>
                <div className={styles.brandsPagination}>
                    <div className={`brandsPagination`}></div>
                </div>
                <button className='cars-swiper-button-prev'>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className='cars-swiper-button-next'>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    </section>
  )
}

export default Cars