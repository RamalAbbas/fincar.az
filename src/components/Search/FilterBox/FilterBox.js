'use client'
import styles from './FilterBox.module.css'
import { useEffect, useState } from 'react';
import {FilterCar} from '../../../services'
const FilterBox =({params}) => {
  const [isLoading,setIsLoading] = useState(false)
  const [filterCar,setCarFilter] = useState([])
  // ! Fetching Data 
  const getCarsData = async () => {
    try{
      setIsLoading(true)
      const response = await FilterCar(params.data)
      setCarFilter(response);
      console.log(response);
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
  return (
    <div className={styles.box}>
      <p className={styles.headTitle}>Filtrlər</p>

      <div className={styles.filter_content}>
        <label htmlFor="">Qiymət</label>

        <div className="flex gap-2 mt-2">
          <input placeholder="Minimum" type="text"/> 

          <input placeholder="Maksimum" type="text" />
        </div>

        <div className="flex gap-2 mt-4">
          <div className={styles.select_wrapper}>
            <select name="" id="banType">
              <option value="" disabled selected>Ban növü</option>
              <option value="Avtobus">Avtobus</option>
              <option value="Fayton">Fayton</option>
            </select>
          </div>

          <div className={styles.select_wrapper}>
            <select name="" id="Sürətqutusu">
              <option value="Sürət qutusu" disabled selected>Sürət qutusu</option>
              <option value="Avtobus">Avtobus</option>
              <option value="Fayton">Fayton</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2 my-4">
            <div className={styles.select_wrapper}>
              <select id="Marka">
                <option value="Marka" disabled selected>Marka</option>
                <option value="Avtobus">Avtobus</option>
                <option value="Fayton">Fayton</option>
              </select>
            </div>

            <div className={styles.select_wrapper}>
              <select id="Model">
                <option value="Model" disabled selected>Model</option>
                <option value="Avtobus">Avtobus</option>
                <option value="Fayton">Fayton</option>
              </select>
            </div>
        </div>

        <label htmlFor="">İstehsal ili</label>

        <div className="flex gap-2 mb-4 mt-1">
          <div className={styles.select_wrapper}>
            <select id="2010">
              <option value="2010" disabled selected>2010</option>
              <option value="Avtobus">Avtobus</option>
              <option value="Fayton">Fayton</option>
            </select>
          </div>

          <div className={styles.select_wrapper}>
            <select id="2023">
              <option value="2023" disabled selected>2023</option>
              <option value="Avtobus">Avtobus</option>
              <option value="Fayton">Fayton</option>
            </select>
      </div>
      </div>

        <label htmlFor="">Güc (a.g.)</label>

        <div className="flex gap-2 mt-1 mb-4">
          <input placeholder="Minimum" type="text" />

          <input placeholder="Maksimum" type="text" />
        </div>

        <label htmlFor="">Motorun həcmi</label>

        <div className="flex gap-2 mb-4 mt-1">
          <div className={styles.select_wrapper}>
            <select id="Minimum">
              <option value="Minimum" disabled selected>Minimum</option>
              <option value="Avtobus">Avtobus</option>
              <option value="Fayton">Fayton</option>
            </select>
          </div>

          <div className={styles.select_wrapper}>
            <select id="Maksimum">
              <option value="Maksimum" disabled selected>Maksimum</option>
              <option value="Avtobus">Avtobus</option>
              <option value="Fayton">Fayton</option>
            </select>
          </div>
        </div>
        <div className={styles.special_select_wrapper}>
          <select
            className={styles.special_select}
            id="Hansı bazar üçün yığılıb"
          >
            <option value="Hansı bazar üçün yığılıb" disabled selected>
              Hansı bazar üçün yığılıb
            </option>
            <option value="Avtobus">Avtobus</option>
            <option value="Fayton">Fayton</option>
          </select>
        </div>


        <div className="flex gap-2 mb-4 mt-4">
            <div className={styles.select_wrapper}>
              <select id="Yanacaq növü">
                <option value="Yanacaq növü" disabled selected>Yanacaq növü</option>
                <option value="Avtobus">Avtobus</option>
                <option value="Fayton">Fayton</option>
              </select>
            </div>

            <div className={styles.select_wrapper}>
                <select id="Rəng">
                <option value="Rəng" disabled selected>Rəng</option>
                <option value="Avtobus">Avtobus</option>
                <option value="Fayton">Fayton</option>
              </select>
            </div>
        </div>

        <button className={styles.searchButton}>Search</button>
      </div>
    </div>
  )
}

export default FilterBox
