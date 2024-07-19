'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styles from './CarImgSlider.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ProductDetail1 from '../../../assets/images/carDetailExample/productCard1.png'
import ProductDetail2 from '../../../assets/images/carDetailExample/productCard2.png'
import ProductDetail3 from '../../../assets/images/carDetailExample/productCard3.png'

const CarImgSlider = ({ images }) => {
  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <img
            src={images[i].image}
            loading="lazy"
            width={167}
            height={126}
            alt="productDetail"
            className="w-full h-[126px] object-cover rounded-[10px]"
          />
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
      <p>
        Skoda-nın Azərbaycandakı rəsmi distributoru olan "Skaz Autohouse"
        Şirkəti avtomobillərinə 3 il və ya 100 000 km zəmanət təqdim edir. Bütün
        qiymətlərə 18% ƏDV daxildir. Avtosalonda 10%-dan başlayan ilkin
        ödənişlə, 60 ay müddətinədək, illik 16% olmaqla sərfəli lizinq və bank
        şərtləri mövcuddur. Avtomobillər haqqında daha ətraflı məlumat əldə
        etmək üçün sizi Bakı şəh., Babək pr. 74 ünvanında yerləşən satış
        mərkəzimizə dəvət edirik.
      </p>
    </div>
  )
}

export default CarImgSlider
