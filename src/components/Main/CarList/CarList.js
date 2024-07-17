"use client";

import React, { useEffect, useState } from 'react'
import styles from './CarList.module.css'
import CarCard from '@/components/Common/CarCard/CarCard'
import car1 from '../../../assets/images/carCardExample/bmwe46.jpg'
import car2 from '../../../assets/images/carCardExample/bmwm3nfs.jpg'
import car3 from '../../../assets/images/carCardExample/car1.png'
import car4 from '../../../assets/images/carCardExample/car2.png'
import car5 from '../../../assets/images/carCardExample/car3.png'
import car6 from '../../../assets/images/carCardExample/car4.png'
import SearchByPrice from '@/components/Common/SearchByPrice/SearchByPrice'
import { useRouter } from 'next/navigation'
import { getCars } from '@/services'

const CarList = () => {
  const { push } = useRouter();
  const [isLoading,setIsLoading] = useState(false)
  const [cars,setCars] = useState([])

  //! Fetching Data 
  const getCarsData = async () => {
      try{
        setIsLoading(true)
        const response = await getCars()
        setCars(response);
      }
      catch (err) {
        console.error(err);
      }
      finally {
        setIsLoading(false)
      }
  }

  useEffect(() => {
    getCarsData()
  },[])

  const callBackSlug = (slug) => {
    push(`/product/${slug}`);
  }
  return (
    <>
      <div className={styles.widhtLimitContainerLarge}>
        <div
          className={`${styles.carListContainer} ${styles.widhtLimitContainer}`}
        >
          <div className={styles.carList}>
              {
                cars?.slice(0,8)?.map((info,index) => 
                  <CarCard key={index} callBackSlug={callBackSlug} data={info} />
                )
              }
          </div>
          <>
            <SearchByPrice data={cars} />
          </>
          <div className={styles.carList}>
              {
                cars?.slice(8,16)?.map((info,index) => 
                  <CarCard key={index} callBackSlug={callBackSlug} data={info} />
                )
              }
          </div>
        </div>
      </div>
    </>
  )
}

export default CarList
