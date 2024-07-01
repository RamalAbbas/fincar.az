'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styles from './SearchByPrice.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CarCard from '@/components/Common/CarCard/CarCard'
import car1 from '../../../assets/images/carCardExample/bmwe46.jpg'
import car2 from '../../../assets/images/carCardExample/bmwm3nfs.jpg'
import car3 from '../../../assets/images/carCardExample/car1.png'
import car4 from '../../../assets/images/carCardExample/car2.png'
import car5 from '../../../assets/images/carCardExample/car3.png'
import car6 from '../../../assets/images/carCardExample/car4.png'

const SearchByPrice = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2.5,
    arrows: false,
    swipeToSlide: true,
  }

  return (
    <>
      <div className={`${styles.sliderContainer}`}>
        <div className={styles.title}>
          <h1>Məbləğə görə axtarış </h1>
        </div>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <div className="flex flex-col gap-[8px]">
              <input placeholder="Minimal məbləğ" type="text" />
              <input placeholder="Maksimal məbləğ" type="text" />
            </div>
            <button>Nəticə</button>
          </div>
          <div className={`${styles.slider} slider-container max-w-[774px]`}>
            <Slider {...settings}>
              <div className="px-[12px]">
                <CarCard src={car1} />
              </div>
              <div className="px-[12px]">
                <CarCard src={car3} />
              </div>
              <div className="px-[12px]">
                <CarCard src={car4} />
              </div>
              <div className="px-[12px]">
                <CarCard src={car2} />
              </div>
              <div className="px-[12px]">
                <CarCard src={car5} />
              </div>
              <div className="px-[12px]">
                <CarCard src={car6} />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchByPrice
