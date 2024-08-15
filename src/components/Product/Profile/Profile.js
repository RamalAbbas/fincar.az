import React from "react";
import styles from "./Profile.module.css";
import Image from "next/image";
import profile from "../../../assets/images/profile.png";
import phone from "../../../assets/icons/contact/phone.svg";
import time from "../../../assets/icons/contact/time.svg";
import location from "../../../assets/icons/contact/location.svg";
import { useRouter } from "next/navigation";

const Profile = ({ detail }) => {
  const { push } = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className="flex gap-[8px]">
            <img
              src={detail?.dealer?.cover}
              height={56}
              width={56}
              alt="profile"
              style={{ borderRadius: "10px" }}
            />
            <div className={`${styles.divarLeft}`}>
              <span>{detail?.dealer?.name}</span>
              <p>Rəsmi nümayəndə</p>
            </div>
          </div>
          <div className={styles.divarRight}>
            <Image
              className="self-start"
              src={phone}
              height={24}
              width={24}
              alt="profile"
            />
            <span>{detail?.dealer?.phone1}</span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#C0C3D7] rounded my-[16px]"></div>
        <span>Simply Cleaver</span>
        <p>{detail?.dealer?.about}</p>
        <div className="w-full h-[1px] bg-[#C0C3D7] rounded my-[16px]"></div>
        <div className={styles.divarrrrrrr}>
          <Image src={time} height={24} width={24} alt="time" />
          <span>{detail?.dealer?.opening_time}</span>
        </div>
        <div className={`${styles.divarrrrrrr} mt-[12px]`}>
          <Image src={location} height={24} width={24} alt="location" />
          <span>{detail?.dealer?.address}</span>
        </div>
        <button onClick={() => push(`/dealership/${detail?.dealer?.slug}`)}>
          Salona daxil ol
        </button>
      </div>
    </div>
  );
};

export default Profile;
