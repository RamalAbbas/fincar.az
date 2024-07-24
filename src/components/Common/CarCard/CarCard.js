import React from "react";
import styles from "./CarCard.module.css";
import Image from "next/image";
import car from "../../../assets/images/carCardExample/bmwm3nfs.jpg";
import favorite from "../../../assets/icons/favorite.svg";
import { carSave } from "../../../services";
import { useRouter } from "next/navigation";

const CarCard = ({ data, callBackSlug }) => {
  const { push } = useRouter();
  const saveCarFunction = async () => {
    const response = await carSave({ car: data.id });
    if (!!response) {
      push("/saved");
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img
          src={data?.cover}
          loading="lazy"
          width={264}
          height={238}
          alt="car"
          className="h-full object-cover rounded-t-[10px]"
        />
        <div className={styles.price}>
          {data?.payment?.initial_payment_azn.toFixed()} ₼ / ilkin
        </div>
        <div onClick={saveCarFunction} className={styles.fav}>
          <Image
            src={favorite}
            loading="lazy"
            width={20}
            height={20}
            alt="car"
            className="h-full w-full object-cover rounded-t-[10px]"
          />
        </div>
      </div>
      <div
        onClick={() => callBackSlug(data.slug)}
        className={styles.bottomContent}
      >
        <h1>
          {data?.make.name}
          {data?.model.name}
        </h1>
        <h2>{data?.slug}</h2>
      </div>
    </div>
  );
};

export default CarCard;
