'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Popular.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import sliderArrow from '../../../assets/icons/sliderArrow.svg'
import CarCard from '../../Common/CarCard/CarCard'
import car1 from '../../../assets/images/carCardExample/bmwe46.jpg'
import car2 from '../../../assets/images/carCardExample/bmwm3nfs.jpg'
import car3 from '../../../assets/images/carCardExample/car1.png'
import car4 from '../../../assets/images/carCardExample/car2.png'
import car5 from '../../../assets/images/carCardExample/car3.png'
import car6 from '../../../assets/images/carCardExample/car4.png'

const SampleNextArrow = ({ className, style, onClick, disabled }) => {
  return (
    <div
      className={`${className} ${styles.customArrowRight} ${
        disabled ? styles.disabled : ''
      } ${styles.customArrow}`}
      style={{ ...style }}
      onClick={disabled ? null : onClick}
    >
      <Image
        src={sliderArrow}
        loading="lazy"
        width={32}
        height={32}
        alt="sliderArrow"
        className="object-cover w-full h-full"
      />
    </div>
  )
}

const SamplePrevArrow = ({ className, style, onClick, disabled }) => {
  return (
    <div
      className={`${className} ${styles.customArrowLeft} ${
        disabled ? styles.disabled : ''
      } ${styles.customArrow}`}
      style={{ ...style }}
      onClick={disabled ? null : onClick}
    >
      <Image
        src={sliderArrow}
        loading="lazy"
        width={32}
        height={32}
        alt="sliderArrow"
        className="object-cover w-full h-full scale-[-1]"
      />
    </div>
  )
}
const Popular = () => {
  const sliderRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideCount, setSlideCount] = useState(0)

  useEffect(() => {
    if (sliderRef.current) {
      setSlideCount(sliderRef.current.innerSlider.props.children.length - 0.3)
    }
  }, [sliderRef.current])

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3.3,
    arrows: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow
        onClick={() => sliderRef.current.slickNext()}
        disabled={currentSlide >= slideCount - 3}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        onClick={() => sliderRef.current.slickPrev()}
        disabled={currentSlide === 0}
      />
    ),
    afterChange: (current) => setCurrentSlide(current),
  }

  return (
    <>
      <div className={styles.widhtLimitContainerLarge}>
        <div
          className={`${styles.sliderContainer} ${styles.widhtLimitContainer}`}
        >
          <div className={styles.title}>
            <h1>Popular maşınlar</h1>
            <div className={styles.arrowContainer}>
              <SamplePrevArrow
                onClick={() => sliderRef.current.slickPrev()}
                disabled={currentSlide === 0}
              />
              <SampleNextArrow
                onClick={() => sliderRef.current.slickNext()}
                disabled={currentSlide >= slideCount - 3}
              />
            </div>
          </div>
          <div className={`${styles.slider} slider-container`}>
            <Slider ref={sliderRef} {...settings}>
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

export default Popular
