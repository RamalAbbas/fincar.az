import React from "react";
import styles from "./Profile.module.css";
import Image from "next/image";
import hyundaiLogo from "../../../assets/images/hyundaiLogo.png";
import eye from "../../../assets/icons/eye.svg";
import phone from "../../../assets/icons//contact/phone.svg";
import location from "../../../assets/icons//contact/location.svg";
import time from "../../../assets/icons//contact/time.svg";
import { getDealerDetail } from "../../../services";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const Profile = ({ dealerdetail }) => {
  console.log(dealerdetail);
  return (
    <div className="px-[15px]">
      <div className={styles.titleContainer}>
        <div>
          <img
            src={dealerdetail.cover}
            height={144}
            width={144}
            alt="logo"
            className="min-w-[144px] object-cover rounded-[10px]"
          />
        </div>
        <div className={styles.contentLeft}>
          <h1>{dealerdetail.name}</h1>
          <p>{dealerdetail.about}</p>
          <div className={styles.eyeCheck}>
            <Image src={eye} height={24} width={24} alt="logo" />
            <span>{dealerdetail?.views}</span>
          </div>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.columnDiv}>
            <Image
              src={phone}
              height={24}
              width={24}
              alt="logo"
              className=" self-start h-[24px]"
            />
            <div className={styles.columnWithGrid}>
              <p>{dealerdetail.phone1}</p>
              <p>{dealerdetail.phone2}</p>
              <p>{dealerdetail.phone3}</p>
            </div>
          </div>
          <div className={styles.columnDiv}>
            <Image
              src={time}
              height={24}
              width={24}
              alt="logo"
              className=" self-start h-[24px]"
            />
            <div>
              <p className=" text-[#8990B9]">{dealerdetail?.opening_time}</p>
            </div>
          </div>
          <div className={styles.columnDiv}>
            <Image
              src={location}
              height={24}
              width={24}
              alt="logo"
              className=" self-start h-[24px]"
            />
            <div>
              <p className=" text-[#505673]">
                Bakı ş., Xətai r., Babək pr., 74
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
