import React from "react";
import styles from "./MobileCarProfile.module.css";
import logo from "../../../assets/images/profile.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MobileCarProfile = ({ detail }) => {
  const { push } = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className=" overflow-hidden">
          <img src={detail?.dealer?.cover} width={56} height={56} alt="logo" />
        </div>
        <div>
          <p>{detail?.dealer?.name}</p>
          <span>{detail?.dealer?.phone1}</span>
        </div>
      </div>
      <div className={styles.desc}>
        <span>Simply Cleaver</span>
        <p>{detail?.dealer?.about}</p>
      </div>
    </div>
  );
};

export default MobileCarProfile;
