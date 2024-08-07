"use client";
import React, { useEffect, useState } from "react";
import styles from "./Save.module.css";
import { useRouter } from "next/navigation";
import { carSaveList, carSave, deleteSavedCar } from "../../../services";
import favouriteblack from "../../../assets/icons/favouriteblack.svg";
import favorite from "../../../assets/icons/favorite.svg";
import Image from "next/image";

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
      <div className={styles.testclass}>
        <button
          className={styles.navbar}
          onClick={() => router.push("/personalcabinet")}
        >
          My Profile
        </button>
        <button className={styles.btn}>Saved</button>
      </div>

      <div className={styles.container}>
        {carSaved?.map((item) => (
          <div className={styles.card}>
            <div className={styles.img}>
              <img
                src={item?.cover}
                loading="lazy"
                width={264}
                height={238}
                alt="car"
                className="h-full object-cover rounded-t-[10px] w-[100%]"
                onClick={() => callBackSlug(item.slug)}
              />
              <div className={styles.price}>
                {item?.payment?.details[2].initial_payment_azn?.toFixed(0)} ₼ /
                ilkin
              </div>

              {item?.is_saved ? (
                <div
                  onClick={() => deleteCarFunction(item.id)}
                  className={styles.fav_disabled}
                >
                  <Image
                    src={favouriteblack}
                    loading="lazy"
                    width={20}
                    height={20}
                    alt="car"
                    className="h-full w-full object-cover rounded-t-[10px]"
                  />
                </div>
              ) : (
                <div
                  onClick={() => saveCarFunction(item.id)}
                  className={styles.fav}
                >
                  <Image
                    src={favorite}
                    loading="lazy"
                    width={20}
                    height={20}
                    alt="car"
                    className="h-full w-full object-cover rounded-t-[10px]"
                  />
                </div>
              )}
            </div>
            <div
              onClick={() => callBackSlug(item.slug)}
              className={styles.bottomContent}
            >
              <h1>
                {item?.make.name}
                {item?.model.name}
              </h1>
              <p className={styles.totalPrice}>
                {item?.price}
                <span className="ml-1">{item?.currency}</span>
              </p>
              <h2 className="flex">
                {item?.year},<span className="ml-1">{item?.volume}L</span>,
                <span className="ml-1">
                  {item?.distance}
                  {item?.distance_unit}
                </span>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;
