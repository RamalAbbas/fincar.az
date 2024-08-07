"use client";
import { useState, useEffect } from "react";
import MainHeader from "../../components/Main/MainHeader/MainHeader";
import Popular from "../../components/Main/Popular/Popular";
import CarList from "../../components/Main/CarList/CarList";
import MobileCarList from "../../components/Common/MobileCarList/MobileCarList";
import { getCars } from "../../services";

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);

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

  const filterData = (items) => {
    setCars(items);
  };

  const renderProduct = () => {
    getCarsData()
  }
  return (
    <>
      <MainHeader filterData={filterData} />
      <Popular />
      <CarList renderProduct={renderProduct} cars={cars} />
      <div className="pb-[90px] min-lg:hidden">
        <MobileCarList title="Popular maşınlar" />
        <MobileCarList title="Son elanlar" />
      </div>
    </>
  );
};

export default page;
