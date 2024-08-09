import React from "react";
import styles from "./MobileDealershipContact.module.css";
import Image from "next/image";
import phone from "../../../assets/icons/contact/phone.svg";
import time from "../../../assets/icons/contact/time.svg";
import location from "../../../assets/icons/contact/location.svg";

const MobileDealershipContact = ({ detail }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Image
          src={phone}
          width={24}
          height={24}
          alt="contact"
          className="self-start"
        />
        <div className="flex flex-wrap gap-[16px] gap-y-[4px]">
          <p>{detail?.phone1}</p>
          <p>{detail?.phone2}</p>
          <p>{detail?.phone3}</p>
        </div>
      </div>
      <div>
        <Image
          src={time}
          width={24}
          height={24}
          alt="contact"
          className="self-start"
        />
        <div className="flex flex-wrap gap-[16px]">
          <span>{detail?.opening_time}</span>
        </div>
      </div>
      <div>
        <Image
          src={location}
          width={24}
          height={24}
          alt="contact"
          className="self-start"
        />
        <div className="flex flex-wrap gap-[16px]">
          <h5>{detail?.addresss}</h5>
        </div>
      </div>
    </div>
  );
};

export default MobileDealershipContact;
