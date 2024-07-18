'use client'
import React from 'react'
import styles from './ProductList.module.css'
import Image from 'next/image'
import hyundaiLogo from '../../../assets/images/hyundaiLogo.png'
import eye from '../../../assets/icons/eye.svg'
import phone from '../../../assets/icons//contact/phone.svg'
import location from '../../../assets/icons//contact/location.svg'
import time from '../../../assets/icons//contact/time.svg'
import CarCard from '../../../components/Common/CarCard/CarCard'
import car1 from '../../../assets/images/carCardExample/bmwe46.jpg'
import car2 from '../../../assets/images/carCardExample/bmwm3nfs.jpg'
import car3 from '../../../assets/images/carCardExample/car1.png'
import car4 from '../../../assets/images/carCardExample/car2.png'
import car5 from '../../../assets/images/carCardExample/car3.png'
import car6 from '../../../assets/images/carCardExample/car4.png'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

const ProductList = ({dealerdetail}) => {
  const { push } = useRouter();
  console.log(dealerdetail)
  const callBackSlug = (slug) => {
    push(`/product/${slug}`);
  }
  return (
    <div className="px-[15px]">
      {
            dealerdetail?.cars?.map((info,index) => (
      <div className={styles.titleContainer}>
      <CarCard key={index} callBackSlug={callBackSlug} data={info} />
      </div>
            ))
          }

    </div>
  )
}

export default ProductList
