'use client'
import styles from './MobileCarList.module.css'
import CarCard from '../CarCard/CarCard'
import car1 from '../../../assets/images/carCardExample/bmwe46.jpg'
import car2 from '../../../assets/images/carCardExample/bmwm3nfs.jpg'
import car3 from '../../../assets/images/carCardExample/car1.png'
import car4 from '../../../assets/images/carCardExample/car2.png'
import car5 from '../../../assets/images/carCardExample/car3.png'
import car6 from '../../../assets/images/carCardExample/car4.png'
import React, { useEffect,useState } from "react";
import { useSelector } from 'react-redux'
import { useRouter } from "next/navigation";
const MobileCarList = ({ title,popularCars }) => {
  const isMobileFilterActive = useSelector(
    (state) => state.mobileMenuFilter.isMobileFilterActive
  )
  const {push}= useRouter()
  const callBackSlug = (slug) => {
    push(`/product/${slug}`);
  };

  const renderProducts = () => {
    getPopularsCarsData()
  }
  return (
    <div
      className={`${styles.wrapper} ${
        isMobileFilterActive && 'max-h-[200px] overflow-hidden'
      }`}
    >
      {title && <h1>{title}</h1>}
      <div className={styles.list}>
      {popularCars?.map((info, index) => (
         
      <CarCard renderProducts={renderProducts}  data={info} callBackSlug={callBackSlug} key={index}/>
    ))}
      </div>
    </div>
  )
}

export default MobileCarList
