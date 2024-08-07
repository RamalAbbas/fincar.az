"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlePaymentModal } from "../../../redux/features/paymentModalSlice";
import styles from "./PaymentModal.module.css";
import Image from "next/image";
import xmark from "../../../assets/icons/mark.svg";
import { carLoanCalculation } from "../../../services";

const PaymentModal = ({ data }) => {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState("");
  const [initialPrice, setInitialPrice] = useState(0);
  const isActivePaymentModal = useSelector(
    (state) => state.paymentModal.isActivePaymentModal
  );
  const [firstPayment, setFirstPayment] = useState(0);

  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");

  const handleClickPaymentModal = () => {
    dispatch(handlePaymentModal());
  };

  const handleSelectChange = async (e) => {
    setSelectedOption(e.target.value);
    let info = {
      car_slug: data?.slug,
      initial_payment: initialPrice,
    };
    const response = await carLoanCalculation(info);

    let item = response?.details?.filter((item) => item.term == e.target.value);

    setFirstPayment(item[0].initial_payment_azn);
    setPayments(item[0]);
  };

  const handleInitialPaymentChange = async (e) => {
    const value = e.target.value;

    if (value < firstPayment) {
      setError(`İlkin ödəniş minimum ${firstPayment} olmalıdır.`);
    } else if (value > data?.price) {
      setError(`İlkin ödəniş maksimum ${data?.price} olmalıdır.`);
    } else {
      setError("");
      setInitialPrice(value);
      let info = {
        car_slug: data?.slug,
        initial_payment: value,
      };
      const response = await carLoanCalculation(info);

      let item = response?.details?.filter(
        (item) => item.term == payments.term
      );
      setPayments(item[0]);
    }
  };
  console.log(data);
  return (
    <div
      className={`${!isActivePaymentModal && "!translate-y-[-40px]"} ${
        styles.modal
      }`}
    >
      <div
        onClick={() => handleClickPaymentModal()}
        className="flex items-center justify-center absolute top-[16px] right-[16px] cursor-pointer hover:opacity-[0.6] transition duration-[100] ease-in-out"
      >
        <Image src={xmark} width={24} height={24} alt="xmark" />
      </div>
      <h1>
        {data?.make?.name}
        <span> </span>
        {data?.model?.name}
      </h1>
      <p>
        İlkin tələb olunan ödəniş komissiya, sığorta və s. xərclər üçün nəzərdə
        tutulur
      </p>
      <div className={styles.inputContainer}>
        <div className="w-full">
          <label>İlkin ödəniş</label>
          <input
            type="number"
            placeholder={firstPayment}
            onChange={handleInitialPaymentChange}
            max={data?.price}
          />
          {error && <p className={styles.error}>{error}</p>}{" "}
        </div>
        <div className="w-full">
          <label>Kreditin müddəti</label>
          <select
            className={styles.dropdown}
            name="cars"
            id="cars"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option selected>Seçin</option>
            <option value="24">24 ay</option>
            <option value="12">12 ay</option>
            <option value="36">36 ay</option>
          </select>
        </div>
      </div>
      <div className="bg-[#DADEF2] w-full h-[1px] mt-[24px]"></div>
      <div className={styles.calculatedPrice}>
        <div className={styles.firstPrice}>
          <p>Aylıq məbləğ</p>{" "}
          <span>
            {payments?.monthly_payment_azn ? payments?.monthly_payment_azn.toFixed(0)  : 0}
            
            AZN
          </span>
        </div>
        <div className={styles.secondPrice}>
          <p>Ümumi məbləğ</p>{" "}
          <span>{payments?.total ? payments?.total.toFixed(0) : 0}AZN</span>
        </div>
      </div>
      <div className="bg-[#DADEF2] w-full h-[1px] mt-[16px]"></div>

      <div className={styles.contactFooter}>
        <label>Ad, soyad, ata adı</label>
        <input type="text" placeholder="Rahila Mammadli Raşad" />
      </div>
      <div className={styles.contactFooter}>
        <label>Əlaqə Nömrəsi</label>
        <input type="number" placeholder="+994 50 555 55 55" />
      </div>
      <div className={styles.contactFooter}>
        <label>Email</label>
        <input type="mail" placeholder="mmdvrhle@gmail.com" />
      </div>
      <button>Müraciət et</button>
    </div>
  );
};

export default PaymentModal;
