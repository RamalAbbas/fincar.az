import React from "react";
import styles from "./CarCard.module.css";
import Image from "next/image";
import car from "../../../assets/images/carCardExample/bmwm3nfs.jpg";
import favorite from "../../../assets/icons/favorite.svg";
import favouriteblack from "../../../assets/icons/favouriteblack.svg";
import { carSave, deleteSavedCar } from "../../../services";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CarCard = ({ data, callBackSlug , renderProducts }) => {
  const { push } = useRouter();
  const saveCarFunction = async () => {
    const response = await carSave({ car: data.id });
    renderProducts()
  };

  const deleteCarFunction = async () => {
    const response = await deleteSavedCar(data.id);
    renderProducts()
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.img}>
          <img
            onClick={() => callBackSlug(data.slug)}
            src={data?.cover}
            loading="lazy"
            width={264}
            height={238}
            alt="car"
            className="h-full object-cover rounded-t-[10px]"
          />
          <div className={styles.price}>
            {data?.payment?.details[2].initial_payment_azn?.toFixed(0)} ₼ / ilkin
          </div>
          {data?.is_saved ? (
            <div onClick={deleteCarFunction} className={styles.fav_disabled}>
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
          )}
        </div>
        <div
          onClick={() => callBackSlug(data.slug)}
          className={styles.bottomContent}
        >
          <h1 className="flex">
            {data?.make.name}
            <p className="ml-1">{data?.model.name}</p>
          </h1>
          <div className={styles.totalPrice}>
            {data?.price}
            <p className="ml-1">{data?.currency}</p>
          </div>
          <h2 className="flex">
            {data?.year}, 
            <p className="ml-1">{data?.volume}L</p>, 
            <p className="ml-1">
              {data?.distance}
              {data?.distance_unit}
            </p>
          </h2>
        </div>
      </div>
    </>
  );
};

export default CarCard;
