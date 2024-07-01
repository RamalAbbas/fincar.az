import Image from 'next/image'
import React from 'react'
import styles from './CarList.module.css'
import CarCard from '@/components/Common/CarCard/CarCard'
import car1 from '../../../assets/images/carCardExample/bmwe46.jpg'
import car2 from '../../../assets/images/carCardExample/bmwm3nfs.jpg'
import car3 from '../../../assets/images/carCardExample/car1.png'
import car4 from '../../../assets/images/carCardExample/car2.png'
import car5 from '../../../assets/images/carCardExample/car3.png'
import car6 from '../../../assets/images/carCardExample/car4.png'
import SearchByPrice from '@/components/Common/SearchByPrice/SearchByPrice'

const CarList = () => {
  return (
    <>
      <div className={styles.widhtLimitContainerLarge}>
        <div
          className={`${styles.carListContainer} ${styles.widhtLimitContainer}`}
        >
          <div className={styles.carList}>
            <CarCard src={car1} />
            <CarCard src={car3} />
            <CarCard src={car2} />
            <CarCard src={car5} />
            <CarCard src={car6} />
            <CarCard src={car1} />
            <CarCard src={car3} />
            <CarCard src={car2} />
          </div>
          <>
            <SearchByPrice />
          </>
          <div className={styles.carList}>
            <CarCard src={car1} />
            <CarCard src={car3} />
            <CarCard src={car2} />
            <CarCard src={car5} />
            <CarCard src={car6} />
            <CarCard src={car1} />
            <CarCard src={car3} />
            <CarCard src={car2} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CarList
