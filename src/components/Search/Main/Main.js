"use client";
import CarList from "../../../components/Search/CarList/CarList";
import FilterBox from "../FilterBox/FilterBox";
import styles from "./Main.module.css";
import { getCarFeature, getCars } from "../../../services";
import { useEffect, useState } from "react";
const Main = ({ params }) => {
  const [carFeature, setCarFeature] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);

  //! Fetching Data
  const getCarFeatureData = async () => {
    try {
      const response = await getCarFeature();
      setCarFeature(response);
    } catch (err) {
      console.error(err);
    }
  };

  const getCarsData = async () => {
    try {
      setIsLoading(true);
      const response = await getCars();
      setCars(response);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const filterData = (data) => {
    setCars(data);
  };

  useEffect(() => {
    getCarFeatureData();
  }, []);

  useEffect(() => {
    getCarsData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <FilterBox filterData={filterData} carfeature={carFeature} />
        <CarList isLoading={isLoading} cars={cars} />
      </div>
    </div>
  );
};

export default Main;
