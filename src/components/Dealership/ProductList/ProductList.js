import React from 'react'
import styles from './ProductList.module.css'
import Image from 'next/image'
import hyundaiLogo from '../../../assets/images/hyundaiLogo.png'
import eye from '../../../assets/icons/eye.svg'
import phone from '../../../assets/icons//contact/phone.svg'
import location from '../../../assets/icons//contact/location.svg'
import time from '../../../assets/icons//contact/time.svg'
import CarCard from '@/components/Common/CarCard/CarCard'
import car1 from '../../../assets/images/carCardExample/bmwe46.jpg'
import car2 from '../../../assets/images/carCardExample/bmwm3nfs.jpg'
import car3 from '../../../assets/images/carCardExample/car1.png'
import car4 from '../../../assets/images/carCardExample/car2.png'
import car5 from '../../../assets/images/carCardExample/car3.png'
import car6 from '../../../assets/images/carCardExample/car4.png'

const ProductList = () => {
  return (
    <div className="px-[15px]">
      <div className={styles.titleContainer}>
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

export default ProductList
