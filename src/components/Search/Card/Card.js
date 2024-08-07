import Image from "next/image";
import styles from "./Card.module.css";
import save from "../../../assets/icons/save.svg";
import favouriteblack from "../../../assets/icons/favouriteblack.svg";
import { carSave, deleteSavedCar } from "../../../services";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const Card = ({ data, callBackSlug, renderProducts }) => {
  const { slug, cover, make, model } = data;
  const { push } = useRouter();

  const saveCarFunction = async () => {
    const response = await carSave({ car: data.id });
    renderProducts();
  };

  const deleteCarFunction = async () => {
    const response = await deleteSavedCar(data.id);
    renderProducts();
  };

  return (
    <div className={styles.product}>
      <img
        onClick={() => callBackSlug(slug)}
        src={cover}
        className={`${styles.productImage}`}
      />

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
        <Image
          onClick={saveCarFunction}
          src={save}
          className={styles.saveImage}
        />
      )}

      <p onClick={() => callBackSlug(slug)} className={styles.productName}>
        {make.name}
        <span className="ml-1">{model.name}</span>
      </p>

      <p onClick={() => callBackSlug(slug)} className={styles.productTitle}>
        {data?.year}
        <span className="ml-1">{data?.volume}L</span>
        <span className="ml-1">
          {data?.distance}
          {data?.distance_unit}
        </span>
      </p>

      <p className={styles.productPrice}>
        {data?.price}
        <span className="ml-1">{data?.currency}</span>
      </p>
    </div>
  );
};

export default Card;
