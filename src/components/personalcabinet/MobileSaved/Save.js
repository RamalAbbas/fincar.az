"use client";
import React, { useEffect, useState } from "react";
import styles from "./Save.module.css";
import { useRouter } from "next/navigation";
import { carSaveList, carSave, deleteSavedCar } from "../../../services";
import favouriteblack from "../../../assets/icons/favouriteblack.svg";
import favorite from "../../../assets/icons/favorite.svg";
import Image from "next/image";
import MobileCarList from "../../Common/MobileCarList/MobileCarList";

const Saved = () => {
  const router = useRouter();
  const [carSaved, setCarSaved] = useState([]);
  const renderSavedCars = async () => {
    const response = await carSaveList();
    setCarSaved(response);
  };

  useEffect(() => {
    renderSavedCars();
  }, []);

  const callBackSlug = (slug) => {
    router.push(`/product/${slug}`);
  };

  const saveCarFunction = async (id) => {
    const response = await carSave({ car: id });
    renderSavedCars();
  };

  const deleteCarFunction = async (id) => {
    const response = await deleteSavedCar(id);
    renderSavedCars();
  };

  return (
    <div className={styles.wrapper}>
        <div className="pb-[90px] min-lg:hidden w-full">
          <MobileCarList renderProduct={renderSavedCars} carPopulars={carSaved} />

          {
            carSaved.length == 0 ? "There are no Data" : ""
          }
        </div>
    </div>
  );
};

export default Saved;
