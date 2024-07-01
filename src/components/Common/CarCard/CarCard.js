import React from 'react'
import styles from './CarCard.module.css'
import Image from 'next/image'
import car from '../../../assets/images/carCardExample/bmwm3nfs.jpg'
import favorite from '../../../assets/icons/favorite.svg'

const CarCard = ({ src }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Image
          src={src}
          loading="lazy"
          width={264}
          height={238}
          alt="car"
          className="h-full object-cover rounded-t-[10px]"
        />
        <div className={styles.price}>753 ₼ / ay</div>
        <div className={styles.fav}>
          <Image
            src={favorite}
            loading="lazy"
            width={20}
            height={20}
            alt="car"
            className="h-full w-full object-cover rounded-t-[10px]"
          />
        </div>
      </div>
      <div className={styles.bottomContent}>
        <h1>FORD Mustang</h1>
        <h2>2023, 3.4L, 0 km</h2>
        <h3>Bakı, bugün 16:51</h3>
      </div>
    </div>
  )
}

export default CarCard
