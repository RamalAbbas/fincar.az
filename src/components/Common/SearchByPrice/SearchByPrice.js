"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./SearchByPrice.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarCard from "../../Common/CarCard/CarCard";
import { useRouter, useSearchParams } from "next/navigation";
import { getCarFilter, getCars } from "../../../services";

const SearchByPrice = () => {
  const [cars, setCars] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [priceData, setPriceData] = useState({
    min_price_azn: "",
    max_price_azn: "",
  });

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2.5,
    arrows: false,
    swipeToSlide: true,
  };

  const callBackSlug = (slug) => {
    router.push(`/product/${slug}`);
  };

  const handleInputChange = (e) => {
    setPriceData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const result = async () => {
    const queryString = Object.keys(priceData)
      .filter((key) => priceData[key] !== "")
      .map((key) => `${key}=${priceData[key]}`)
      .join("&");

    router.push(`/main?${queryString}`);
    const response = await getCarFilter(queryString);
    console.log("Filtered Cars:", response); // Debugging

    setCars(response);
  };
  console.log(cars);
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
    const min_price_azn = searchParams.get("min_price_azn") || "";
    const max_price_azn = searchParams.get("max_price_azn") || "";

    setPriceData({
      min_price_azn,
      max_price_azn,
    });

    const queryString = Object.keys({ min_price_azn, max_price_azn })
      .filter((key) => ({ min_price_azn, max_price_azn }[key] !== ""))
      .map((key) => `${key}=${{ min_price_azn, max_price_azn }[key]}`)
      .join("&");

    if (queryString) {
      getCarFilter(queryString).then(setCars).catch(console.error);
    } else {
      getCarsData();
    }
  }, [searchParams]);

  return (
    <>
      <div className={`${styles.sliderContainer}`}>
        <div className={styles.title}>
          <h1>Məbləğə görə axtarış </h1>
        </div>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <div className="flex flex-col gap-[8px]">
              <input
                name="min_price_azn"
                value={priceData.min_price_azn}
                onChange={handleInputChange}
                placeholder="Minimal məbləğ"
                type="number"
              />
              <input
                name="max_price_azn"
                value={priceData.max_price_azn}
                onChange={handleInputChange}
                placeholder="Maksimal məbləğ"
                type="number"
              />
            </div>
            <button type="button" onClick={result}>
              Nəticə
            </button>
          </div>
          <div
            className={`${styles.slider} slider-container max-w-[774px] w-full`}
          >
            <Slider {...settings}>
              {cars?.map((info, index) => (
                <div key={index} className="px-[12px]">
                  <CarCard callBackSlug={callBackSlug} data={info} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchByPrice;
