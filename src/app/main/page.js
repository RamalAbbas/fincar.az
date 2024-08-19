"use client";
import { useState, useEffect } from "react";
import MainHeader from "../../components/Main/MainHeader/MainHeader";
import Popular from "../../components/Main/Popular/Popular";
import CarList from "../../components/Main/CarList/CarList";
import MobileCarList from "../../components/Common/MobileCarList/MobileCarList";
import { getPopularCars } from "../../services";
import { getCars } from "../../services";

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const [ carPopulars, setPopularCars] = useState([]);
  // console.log(carPopulars)
  //! Fetching Data
  const getCarsData = async () => {
    try {
      const response = await getCars();
      setCars(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCarsData();
  }, []);
  //mobilecarlist
  const getPopularsCarsData = async () => {
    try {
      setIsLoading(true);
      const response = await getPopularCars();
      setPopularCars(response);
      // console.log(response)
    } catch (err) {
      console.error(err);
    }  
  };

  useEffect(() => {
    getPopularsCarsData([]);
  }, []);

  const filterData = (items) => {
    setCars(items);
  };

  const renderProduct = () => {
    getCarsData()
  }

  const renderProduct2 = () => {
    getPopularsCarsData()
  }
  return (
    <>
      <MainHeader filterData={filterData} />
      <Popular />
      <CarList renderProduct={renderProduct} cars={cars} />
      <div className="pb-[90px] min-lg:hidden">
        <MobileCarList title="Popular maşınlar" renderProduct={renderProduct} carPopulars={cars} />
      </div>
    </>
  );
};

export default page;
