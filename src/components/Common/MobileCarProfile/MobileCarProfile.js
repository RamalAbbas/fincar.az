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
          <img src={detail?.cover} className="rounded-lg" width={56} height={56} alt="logo" />
        </div>
        <div>
          <p>{detail?.name}</p>
          <span>{detail?.phone1}</span>
        </div>
      </div>
      <div className={styles.desc}>
        <span>Simply Cleaver</span>
        <p>{detail?.about}</p>
      </div>
    </div>
  );
};

export default MobileCarProfile;
