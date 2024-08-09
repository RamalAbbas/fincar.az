"use client";
import CarImgSlider from "../../../components/Product/CarImgSlider/CarImgSlider";
import styles from "./product.module.css";
import React, { useState, useEffect } from "react";
import ProductDetail from "../../../components/Product/ProductDetail/ProductDetail";
import Stocks from "../../../components/Product/Stocks/Stocks";
import Profile from "../../../components/Product/Profile/Profile";
import OtherCars from "../../../components/Product/OtherCars/OtherCars";
import BreadCrumb from "../../../components/Common/BreadCrumb/BreadCrumb";
import MobileCarImgSlider from "../../../components/Product/MobileCarImgSlider/MobileCarImgSlider";
import MobileCarDetail from "../../../components/Product/MobileCarDetail/MobileCarDetail";
import MobileCarDescription from "../../../components/Product/MobileCarDescription/MobileCarDescription";
import MobileCarProfile from "../../../components/Common/MobileCarProfile/MobileCarProfile";
import MobileCarList from "../../../components/Common/MobileCarList/MobileCarList";
import { getCarDetail } from "../../../services";

const ProductPage = ({ params }) => {
  const [data, setData] = useState([]);

  const getProductInfo = async () => {
    const response = await getCarDetail(params.slug);
    console.log(response);
    setData(response);
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  return (
    <>
      <BreadCrumb items={["Homepage", "Product page"]} />
      <div className={styles.widhtLimitContainerLarge}>
        <div
          className={`${styles.productContainer} ${styles.widhtLimitContainer}`}
        >
          <div>
            <CarImgSlider images={data?.images} />
            <Stocks optionals={data?.optionals} />
          </div>
          <div>
            <ProductDetail detail={data} />
            <Profile detail={data} />
          </div>
        </div>
      </div>
      <OtherCars />
      {/* mobile design start*/}
      <div className="min-lg:hidden pb-[40px]">
        <MobileCarImgSlider images={data?.images} />
        <MobileCarDetail detail={data} />
        <MobileCarDescription optionals={data?.optionals} />
        <MobileCarProfile detail={data} />
        <div className="px-[15px]">
          <div className="w-full bg-[#DADEF2] h-[1px]"></div>
        </div>
        <MobileCarList />
      </div>
      {/* mobile design end*/}
    </>
  );
};

export default ProductPage;
