'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styles from './SearchByPrice.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CarCard from '../../Common/CarCard/CarCard'
import { useRouter } from 'next/navigation'
import { filterCar } from '../../../services'

const SearchByPrice = ({ data }) => {
    const { push } = useRouter();
    const [priceData, setPriceData] = useState({
        min_price: "",
        max_price: ""
    });

    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 2.5,
      arrows: false,
      swipeToSlide: true,
    }

    const callBackSlug = (slug) => {
      push(`/product/${slug}`);
    }

    const handleInputChange = (e) => {
        setPriceData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const result = async () => {
        const response = await filterCar(priceData)
        console.log(response);
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
                <input name='min_price' value={priceData.min_price} onChange={handleInputChange}  placeholder="Minimal məbləğ" type="number" />
                <input name='max_price' value={priceData.max_price} onChange={handleInputChange} placeholder="Maksimal məbləğ" type="number" />
              </div>
              <button onClick={result}>Nəticə</button>
            </div>
            <div className={`${styles.slider} slider-container max-w-[774px] w-full`}>
              <Slider {...settings}>
                {
                  data?.map((info, index) => (
                    <div className="px-[12px]">
                      <CarCard key={index} callBackSlug={callBackSlug} data={info} />
                    </div>
                  ))
                }
              </Slider>
            </div>
          </div>
        </div>
      </>
    )
}

export default SearchByPrice
