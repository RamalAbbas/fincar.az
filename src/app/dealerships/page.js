"use client";
import BreadCrumb from "../../components/Common/BreadCrumb/BreadCrumb";
import Content from "../../components/Dealerships/Content/Content";
import Header from "../../components/Dealerships/Header/Header";
import React from "react";
import { getDealerList, getDealerSearch } from "../../services";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import searchInput from "../../assets/icons/mobileHeader/searchInput.svg";
import { usePathname } from "next/navigation";

const page = () => {
  const pathname = usePathname();
  const [dealerList, setDealerList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [value, setValue] = useState("");
  const searchFunction = (e) => {
    callBackData(e);
  };
  //! Fetching Data
  const getCarsData = async () => {
    try {
      setIsloading(true);
      const response = await getDealerList();
      setDealerList(response);
      setIsloading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCarsData();
  }, []);

  const callBackData = async (value) => {
    if (value.trim() === "") {
      getCarsData();
    } else {
      setIsloading(true);

      const response = await getDealerSearch(value);
      setDealerList(response);
      setIsloading(false);
    }
  };

  return (
    <div>
      <div
        className={`${styles.mobileHeaderSecond} ${
          pathname === "/dealership" && "hidden"
        }`}
      >
        <div className={styles.mobileSearchInput}>
          <img src={searchInput} width={25} height={22} alt="search" />

          <input
            type="text"
            placeholder="Search"
            onChange={(e) => searchFunction(e.target.value)}
          />
        </div>
      </div>
      <BreadCrumb items={["Ana Səhifə", "Məhsul Səhifəsi", "Avtomobil Salonları"]}/>
      <Header callBackData={callBackData} />
      <Content isLoading={isLoading} dealerList={dealerList} />
    </div>
  );
};

export default page;
