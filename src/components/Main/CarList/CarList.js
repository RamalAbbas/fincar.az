"use client";

import styles from "./CarList.module.css";
import CarCard from "../../Common/CarCard/CarCard";
import { useRouter } from "next/navigation";

const CarList = ({ cars }) => {
  const { push } = useRouter();

  const callBackSlug = (slug) => {
    push(`/product/${slug}`);
  };
  return (
    <>
      <div className={styles.widhtLimitContainerLarge}>
        <div
          className={`${styles.carListContainer} ${styles.widhtLimitContainer}`}
        >
          <div className={styles.carList}>
            {cars?.map((info, index) => (
              <CarCard key={index} callBackSlug={callBackSlug} data={info} />
            ))}

            {cars?.length == 0 ? <p className={styles.noData}>No Data</p> : <></>}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarList;
