"use client";

import { useRouter } from "next/navigation";
import styles from "./CarList.module.css";
import Card from "../Card/Card";

const CarList = ({ cars, isLoading }) => {
  const { push } = useRouter();

  const callBackSlug = (slug) => {
    push(`/product/${slug}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardBody}>
        {isLoading ? <span className={styles.loader}></span> : null}

        {cars.map((info, index) => (
          <Card key={index} callBackSlug={callBackSlug} data={info} />
        ))}

        {cars.length === 0 && !isLoading ? (
          <p className={styles.errorMessage}>Axtarisa uygun netice yoxdur</p>
        ) : null}
      </div>
    </div>
  );
};

export default CarList;
