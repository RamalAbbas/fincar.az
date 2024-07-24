"use client";
import CarList from "../../../components/Search/CarList/CarList";
import FilterBox from "../FilterBox/FilterBox";
import styles from "./Main.module.css";
import { getCarFeature, getCars, getCarFilter } from "../../../services";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Main = () => {
  const [carFeature, setCarFeature] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const searchParams = useSearchParams();

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

  const getFilteredCars = async () => {
    const queryString = new URLSearchParams(searchParams).toString();
    if (queryString) {
      setIsLoading(true);
      try {
        const response = await getCarFilter(queryString);
        setCars(response);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    } else {
      getCarsData();
    }
  };

  useEffect(() => {
    getCarFeatureData();
    getFilteredCars();
  }, [searchParams]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <FilterBox filterData={setCars} carFeature={carFeature} />
        <CarList isLoading={isLoading} cars={cars} />
      </div>
    </div>
  );
};

export default Main;
