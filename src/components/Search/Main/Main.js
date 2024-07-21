'use client'
import CarList from '../../../components/Search/CarList/CarList'
import FilterBox from '../FilterBox/FilterBox'
import styles from './Main.module.css'
import { getCarFeature } from '../../../services'
import { useEffect, useState } from 'react'
const Main = ({params}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [carFeature, setCarFeature] = useState([])
  //! Fetching Data 
  const getCarsData = async () => {
    try {
      setIsLoading(true)
      const response = await getCarFeature()
      setCarFeature(response);
      setIsLoading(false)
    }
    catch (err) {
      console.error(err);
    }
  }

 
 
  useEffect(() => {
    getCarsData()
  }, [])
 
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <FilterBox carfeature={carFeature}/>
            <CarList />
        </div>
    </div>
  )
}

export default Main