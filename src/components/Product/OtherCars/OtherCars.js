import React from 'react'
import styles from './OtherCars.module.css'
import CarCard from '@/components/Common/CarCard/CarCard'
import car1 from '../../../assets/images/carCardExample/bmwe46.jpg'
import car2 from '../../../assets/images/carCardExample/bmwm3nfs.jpg'
import car3 from '../../../assets/images/carCardExample/car1.png'
import car4 from '../../../assets/images/carCardExample/car2.png'
import car5 from '../../../assets/images/carCardExample/car3.png'
import car6 from '../../../assets/images/carCardExample/car4.png'

const OtherCars = () => {
  return (
    <div className={`${styles.widhtLimitContainerLarge} lg:hidden`}>
      <div
        className={`${styles.carListContainer} ${styles.widhtLimitContainer}`}
      >
        <span>Salonun digər maşınları</span>
        <div className="flex justify-between items-center gap-[24px] w-full mt-[24px]">
          <CarCard src={car1} />
          <CarCard src={car3} />
          <CarCard src={car2} />
          <CarCard src={car5} />
        </div>
      </div>
    </div>
  )
}

export default OtherCars
