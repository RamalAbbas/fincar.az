"use client";
import React, { useEffect, useState } from "react";
import styles from "./Save.module.css";
import { useRouter } from "next/navigation";
import { carSaveList } from "../../../services";
const Saved = () => {
  const router = useRouter();
  const [carSave, setCarSave] = useState([]);
  const renderSavedCars = async () => {
    const response = await carSaveList();
    setCarSave(response);
  };

  useEffect(() => {
    renderSavedCars();
  }, []);

  const callBackSlug = (slug) => {
    router.push(`/product/${slug}`);
  };
  return (
    <>
      <div className={styles.testclass}>
        <button
          className={styles.navbar}
          onClick={() => router.push("/personalcabinet")}
        >
          My Profile
        </button>
        <button className={styles.btn}>Saved</button>
      </div>
      <div className={styles.grid}>
        <div className={styles.container}>
          {carSave?.map((item) => (
            <div className={styles.card}>
              <div className={styles.img}>
                <img
                  src={item?.cover}
                  loading="lazy"
                  width={264}
                  height={238}
                  alt="car"
                  className="h-full object-cover rounded-t-[10px] w-[100%]"
                />
                <div className={styles.price}>
                  {item?.payment?.initial_payment_azn?.toFixed()} ₼ / ilkin
                </div>
              </div>
              <div
                onClick={() => callBackSlug(item.slug)}
                className={styles.bottomContent}
              >
                <h1>
                  {item?.make.name}
                  {item?.model.name}
                </h1>
                <h2>{item?.slug}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Saved;
