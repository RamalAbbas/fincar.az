"use client";

import { getCars } from "../../../services/index";
import { useEffect, useState } from "react";
import styles from "./CarList.module.css";
import { useRouter } from "next/navigation";
import Card from "../Card/Card";

const CarList = ({ cars, isLoading }) => {
  const { push } = useRouter();

  const callBackSlug = (slug) => {
    push(`/product/${slug}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardBody}>
        {isLoading ? <span class={styles.loader}></span> : <></>}

        {cars?.map((info, index) => (
          <Card key={index} callBackSlug={callBackSlug} data={info} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
