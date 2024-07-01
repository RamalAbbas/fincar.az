'use client'
import React from 'react'
import styles from './MobileCarList.module.css'
import CarCard from '../CarCard/CarCard'
import car1 from '../../../assets/images/carCardExample/bmwe46.jpg'
import car2 from '../../../assets/images/carCardExample/bmwm3nfs.jpg'
import car3 from '../../../assets/images/carCardExample/car1.png'
import car4 from '../../../assets/images/carCardExample/car2.png'
import car5 from '../../../assets/images/carCardExample/car3.png'
import car6 from '../../../assets/images/carCardExample/car4.png'
import { useSelector } from 'react-redux'

const MobileCarList = ({ title }) => {
  const isMobileFilterActive = useSelector(
    (state) => state.mobileMenuFilter.isMobileFilterActive
  )
  return (
    <div
      className={`${styles.wrapper} ${
        isMobileFilterActive && 'max-h-[200px] overflow-hidden'
      }`}
    >
      {title && <h1>{title}</h1>}
      <div className={styles.list}>
        <CarCard src={car1} />
        <CarCard src={car2} />
        <CarCard src={car3} />
        <CarCard src={car4} />
        <CarCard src={car5} />
        <CarCard src={car6} />
        <CarCard src={car1} />
        <CarCard src={car2} />
        <CarCard src={car3} />
        <CarCard src={car4} />
        <CarCard src={car5} />
        <CarCard src={car6} />
      </div>
    </div>
  )
}

export default MobileCarList
