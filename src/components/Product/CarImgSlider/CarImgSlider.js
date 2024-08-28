'use client'
import React, { useState } from 'react'
import Slider from 'react-slick'
import styles from './CarImgSlider.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CarImgSlider = ({ data, images }) => {
  const [bigMenu,setBigMenu] = useState(false)

  const handleMenu = () => {
    setBigMenu(!bigMenu)
  }

  const NextArrow = ({ onClick }) => {
    return (
      <div className={`${styles.arrow} ${styles.nextArrow}`} onClick={onClick}>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.984985" y="0.5" width="23.515" height="23" rx="11.5" stroke="#505673"/>
          <path d="M10.6996 16L14.7854 12L10.6996 8" stroke="#505673" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    )
  }

  const PrevArrow = ({ onClick }) => {
    return (
      <div className={`${styles.arrow} ${styles.prevArrow}`} onClick={onClick}>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.954956" y="0.5" width="23.515" height="23" rx="11.5" stroke="#505673"/>
          <path d="M14.7554 8L10.6696 12L14.7554 16" stroke="#505673" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    )
  }

  const PrevArrowMenu = ({ onClick }) => {
    return (
      <div className={`${styles.arrow} ${styles.prevArrow}`} onClick={onClick}>
        <svg width="40" height="40" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.954956" y="0.5" width="23.515" height="23" rx="11.5" stroke="#fff"></rect><path d="M14.7554 8L10.6696 12L14.7554 16" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </div>
    )
  }

  const NextArrowMenu = ({ onClick }) => {
    return (
      <div className={`${styles.arrow} ${styles.nextArrow}`} onClick={onClick}>
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.984985" y="0.5" width="23.515" height="23" rx="11.5" stroke="#fff"/>
          <path d="M10.6996 16L14.7854 12L10.6996 8" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    )
  }

  const settings = {
    customPaging: function (i) {
      const additionalImagesCount = images.length - (i + 1);

      return (
        <div className={styles.customPaging}>
          <img
            src={images[i].image}
            loading="lazy"
            width={167}
            height={126}
            alt="productDetail"
            className="w-full h-[126px] object-cover rounded-[10px]"
          />
          {additionalImagesCount !== 0 && i === 2 && (
            <div onClick={handleMenu} className={styles.overlay}>
              <p className={styles.overlayText}>+ {additionalImagesCount} more images</p>
            </div>
          )}
        </div>
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    arrows: true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />,
  }

  const bigMenuSettings = {
    customPaging: function (i) {
      return (
        <div className={`${styles.customPaging} ${styles.customPagingMenu}`}>
          <img
            src={images[i].image}
            loading="lazy"
            width={167}
            height={126}
            alt="productDetail"
            className={styles.customPagingImage}
          />
        </div>
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    arrows: true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowMenu />, 
    prevArrow: <PrevArrowMenu />,
  }



  return (
    <div className={`${styles.productDetailContainer}`}>
      <div className="slider-container">
        <Slider {...settings}>
          {images?.map((item) => (
            <div className={styles.sliderPhoto} key={item.id}>
              <img
                src={item.image}
                loading="lazy"
                width={552}
                height={418}
                alt="productDetail"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          ))}
        </Slider>
      </div>

      {
        bigMenu && (
            <div className={styles.menuContainer}>
              <div onClick={handleMenu} className={styles.backTitle}>
                Back
              </div>
              <div className="slider-container sliderMenuContainer">
                <Slider {...bigMenuSettings}>
                  {images?.map((item) => (
                    <div className={styles.sliderPhotoMenu} key={item.id}>
                      <img
                        src={item.image}
                        loading="lazy"
                        width={552}
                        height={418}
                        alt="productDetail"
                        className={styles.menuImage}

                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
        )
      }

      <p>{data?.description}</p>
    </div>
  )
}

export default CarImgSlider
