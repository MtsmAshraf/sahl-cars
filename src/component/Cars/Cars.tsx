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

import test from "../../../public/images/imgi_14_800_677fd5ca4e432.png"
import Image from 'next/image';
import MainHeading from '../MainHeading/MainHeading';
import allCars, { Car } from './allCar';

const Cars = ({
    lo
} : {
    lo: string
}) => {
  return (
    <section className={lo === "ar" ? styles.cars + " " + styles.ar : styles.cars}>
        <MainHeading>
            بعض الموديلات
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
                    slidesPerView={3}
                    modules={[Navigation, Pagination, Autoplay]}
                    
                    pagination={{
                        clickable: true,
                        el: `.brandsPagination`
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation={{
                        nextEl: '.cars-swiper-button-next',
                        prevEl: '.cars-swiper-button-prev'
                    }}
                    >
                        {
                            allCars.map((car: Car) => {
                                return(
                                <SwiperSlide key={car.id} className={styles.slide}>
                                    <a href="#contact">
                                        <div className={styles.img}>
                                            <span className={styles.spanLink}>
                                                التواصل للطلب
                                            </span>
                                            <Image src={car.src} alt='test'></Image>
                                        </div>
                                        <div className={styles.text}>
                                            <h3>
                                                هيونداي إلنترا 2025
                                            </h3>
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