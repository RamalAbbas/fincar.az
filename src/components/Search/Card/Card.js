import Image from "next/image";
import styles from "./Card.module.css";
import save from "../../../assets/icons/save.svg";
import favouriteblack from "../../../assets/icons/favouriteblack.svg";
import { carSave, deleteSavedCar } from "../../../services";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const Card = ({ data, callBackSlug }) => {
  const { slug, cover, make, model } = data;

  const { push } = useRouter();
  const saveCarFunction = async () => {
    const response = await carSave({ car: data.id });
    if (!!response) {
      toast.success("Elave Olundu");

      setTimeout(() => {
        push("/saved");
      }, 1000);
    }
  };

  const deleteCarFunction = async () => {
    const response = await deleteSavedCar(data.id);
    if (response.length == 0) {
      toast.success("Silindi.");

      setTimeout(() => {
        push("/main");
      }, 1000);
    }
  };

  return (
    <div className={styles.product}>
      <img src={cover} className={`${styles.productImage} cursor-no-drop`} />

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
        {model.name}
      </p>

      <p onClick={() => callBackSlug(slug)} className={styles.productTitle}>
        {slug}
      </p>

      <p className={styles.productPrice}></p>
    </div>
  );
};

export default Card;
