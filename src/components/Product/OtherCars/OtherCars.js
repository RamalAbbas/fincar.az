"use client"
import React, { useEffect, useState } from 'react'
import styles from './OtherCars.module.css'
import CarCard from '../../../components/Common/CarCard/CarCard'
import { useRouter } from 'next/navigation'
import { getCars } from '../../../services'

const OtherCars = () => {
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

  const renderProducts = () => {
    getCarsData()
  }

  return (
    <div className={`${styles.widhtLimitContainerLarge} lg:hidden`}>
      <div
        className={`${styles.carListContainer} ${styles.widhtLimitContainer}`}
      >
        <span>Salonun digər maşınları</span>
        <div className="flex justify-between items-center gap-[24px] w-full mt-[24px]">
              {
                cars?.slice(0,4)?.map((info,index) => 
                  <CarCard renderProducts={renderProducts} key={index} callBackSlug={callBackSlug} data={info} />
                )
              }
        </div>
      </div>
    </div>
  )
}

export default OtherCars
