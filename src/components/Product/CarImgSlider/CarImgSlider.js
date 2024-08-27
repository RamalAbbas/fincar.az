'use client'
import Image from 'next/image'
import React from 'react'
import styles from './CarImgSlider.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ProductDetail1 from '../../../assets/images/carDetailExample/productCard1.png'
import ProductDetail2 from '../../../assets/images/carDetailExample/productCard2.png'
import ProductDetail3 from '../../../assets/images/carDetailExample/productCard3.png'

const CarImgSlider = ({ data, images }) => {
  const settings = {
    customPaging: function (i) {
      // Calculate the number of additional images
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

          {i == 2 && (
            <div className={styles.overlay}>
              <p className={styles.overlayText}>+ {additionalImagesCount} more images</p>
            </div>
          )}
        </div>
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className={`${styles.productDetailContainer}`}>
      <div className="slider-container">
        <Slider {...settings}>
          {images?.map((item, index) => (
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
      <p>{data?.description}</p>
    </div>
  )
}

export default CarImgSlider
