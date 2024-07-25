import React from "react";
import styles from "./CarCard.module.css";
import Image from "next/image";
import car from "../../../assets/images/carCardExample/bmwm3nfs.jpg";
import favorite from "../../../assets/icons/favorite.svg";
import favouriteblack from "../../../assets/icons/favouriteblack.svg";
import { carSave } from "../../../services";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CarCard = ({ data, callBackSlug }) => {
  const { push } = useRouter();
  const saveCarFunction = async () => {
    const response = await carSave({ car: data.id });
    if (!!response) {
      toast.success("Elave Olundu");

      setTimeout(() => {
        push("/saved");
      }, 2000);
    }
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.img}>
          <img
            src={data?.cover}
            loading="lazy"
            width={264}
            height={238}
            alt="car"
            className="h-full object-cover rounded-t-[10px] cursor-no-drop"
          />
          <div className={styles.price}>
            {data?.payment?.initial_payment_azn.toFixed()} ₼ / ilkin
          </div>
          {data?.is_saved ? (
            <div className={styles.fav_disabled}>
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
          <h1>
            {data?.make.name}
            {data?.model.name}
          </h1>
          <h2>{data?.slug}</h2>
        </div>
      </div>
    </>
  );
};

export default CarCard;
