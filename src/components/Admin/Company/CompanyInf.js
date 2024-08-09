"use client";
import React from "react";
import styles from "./Company.module.css";
import Image from "next/image";
import admin from "../../../assets/images/admin/mazda.png";
import upload from "../../../assets/images/upload/Group.svg";
import group from "../../../assets/icons/group/Group.svg";
import Cookies from "js-cookie";
import {
  adminDealerUptade,
  getDealerCity,
  getDealerInfo,
} from "../../../services";
import { useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";
const CompanyInf = () => {
  const inputRef = useRef(null);
  const [cities, setCities] = useState([]);

  const [inputFields, setInputFields] = useState([{ value: "" }]);
  const [dealerInfo, setDealerInfo] = useState([]);

  const [data, setData] = useState({
    name: "",
    opening_time: "",
    city: 0,
    street: "",
  });
  const handleInputChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const DealerCity = async () => {
    try {
      const response = await getDealerCity();
      setCities(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    DealerCity();
  }, []);

  const saveData = async () => {
    const token = Cookies.get("admin_data")
      ? JSON.parse(Cookies.get("admin_data")).access_token
      : "";
    const res = await adminDealerUptade(data, token);
    if(!!res){
      toast.success("Salon yeniləndi")
    }else{
      toast.error("Düzgün Məlumat Daxil edin")
    }
  };

  const renderDetailInfo = async () => {
    const token = Cookies.get("admin_data")
      ? JSON.parse(Cookies.get("admin_data")).access_token
      : "";
    const res = await getDealerInfo(token);
    setDealerInfo(res);
  };

  useEffect(() => {
    renderDetailInfo();
  }, []);

  return (
    <>
      <div className={styles.wraperr}>
        <div className={styles.container}>
          <div className={styles.content_left}>
            <div className={styles.paragraph}>
              <p className={styles.text}>Company information</p>
            </div>
            <div className={styles.img}>
              <img src={dealerInfo?.cover} width={116} height={116} />
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.parent}>
              <div className={styles.inp}>
                <label className={styles.username}>Company name</label>
                <input
                  type="text"
                  placeholder="AutoStar Kaukasus GmbH"
                  className={styles.wraper}
                  name="name"
                  value={data.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inp4}>
                <label className={styles.username}>City</label>
                <select
                  className={styles.wraper}
                  name="city"
                  value={data.city}
                  onChange={handleInputChange}
                >
                  <option value={0}>Select City</option>
                  {cities?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {/* <input type='text' placeholder='Bakı' className={styles.wraper} name='city' value={data.city} onChange={handleInputChange} /> */}
              </div>
              <div className={styles.inp3}>
                <label className={styles.username}>Working hour</label>
                <input
                  type="text"
                  placeholder="09:00  19:00"
                  className={styles.wraper}
                  name="opening_time"
                  value={data.opening_time}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inp6}>
                <label className={styles.username}>Street</label>
                <input
                  type="text"
                  placeholder="Zaur Nudirəliyev 89a"
                  className={styles.wraper}
                  name="street"
                  value={data.street}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                {inputFields.map((field, index) => (
                  <div className={styles.inp5}>
                    <label className={styles.username}>Phone number</label>
                    <input
                      type="text"
                      className={styles.wraper}
                      value={dealerInfo?.phone1}
                      disabled
                    />
                    <input
                      type="text"
                      className={styles.wraper}
                      value={dealerInfo?.phone2}
                      disabled
                    />
                    <input
                      type="text"
                      className={styles.wraper}
                      value={dealerInfo?.phone3}
                      disabled
                    />
                  </div>
                ))}
                <div className={styles.inp7}>
                  <label className={styles.username}>About your company</label>
                  <input
                    type="text"
                    disabled
                    className={styles.wraper1}
                    name="about"
                    value={dealerInfo?.about}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.saveBody}>
                  <div className={styles.save}>
                    <button onClick={saveData} className={styles.btn1}>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.responsive}></div>
    </>
  );
};

export default CompanyInf;
