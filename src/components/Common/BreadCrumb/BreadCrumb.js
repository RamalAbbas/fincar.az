"use client"
import Image from "next/image";
import React from "react";
import rightArrow from "../../../assets/icons/arrow/right.svg";
import styles from "./BreadCrumb.module.css";
import { usePathname } from "next/navigation";

const BreadCrumb = ({ items, isPaddding = false }) => {
  const pathname = usePathname();

  return (
    <div  className={`px-[15px] ${pathname === "/saved" ? styles.noBreadCumb : ""}`}>
      <div className={styles.wrapper}>
        <div
          style={{ paddingTop: isPaddding ? "0px" : "24px" }}
          className={styles.container}
        >
          {items.map((item, index) => (
            <div className={styles.box}>
              <span
                key={index}
                className={
                  index < items.length - 1 ? styles.item : styles.activeItem
                }
              >
                {item}
              </span>
              {index < items.length - 1 && (
                <div className="w-[30px] h-[30px]">
                  <Image src={rightArrow} width={30} height={30} alt="arrow" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
