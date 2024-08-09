"use client";
import React, { useEffect, useRef } from "react";
import styles from "./MobileCarDetail.module.css";
import PaymentModal from "../../../components/Common/PaymentModal/PaymentModal";
import { useSelector, useDispatch } from "react-redux";
import { handlePaymentModal } from "../../../redux/features/paymentModalSlice";

const MobileCarDetail = ({ detail }) => {
  const insideRef = useRef(null);
  const isActivePaymentModal = useSelector(
    (state) => state.paymentModal.isActivePaymentModal
  );

  const dispatch = useDispatch();

  const handleClickPaymentModal = () => {
    dispatch(handlePaymentModal());
  };

  useEffect(() => {
    if (isActivePaymentModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActivePaymentModal]);

  const handleClickOutside = (e) => {
    if (insideRef.current && !insideRef.current.contains(e.target)) {
      handleClickPaymentModal();
    }
  };
  return (
    <div className={`${styles.wrapper}`}>
      <h1>{detail?.price_azn} AZN</h1>
      <h2>{detail?.make?.name} {detail?.model?.name}, {detail?.volume} L, {detail?.year} il, {detail?.distance} {detail?.distance_unit}</h2>
      <button onClick={() => handleClickPaymentModal()}>Hesabla</button>
      <div
        onClick={handleClickOutside}
        className={`${styles.paymentModal} ${
          !isActivePaymentModal && "!hidden !opacity-0"
        }`}
      >
        <div ref={insideRef}>
          <PaymentModal data={detail} />
        </div>
      </div>
      <div className={styles.content}>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Şəhər</span> <p>Bakı</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Marka</span> <p>{detail?.make?.name}g</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Model </span> <p>{detail?.model?.name}</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Buraxılış ili</span> <p>{detail?.year}</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Ban növü</span> <p>{detail?.body}</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Rəng</span> <p>{detail?.color}</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Mühərrik</span>{" "}
          <p>
            {detail?.volume} L / {detail?.engine_power} .a.g / {detail?.fuel}
          </p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Yürüş</span> <p>{detail?.distance} {detail?.distance_unit}</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Sürətlər qutusu </span> <p>{detail?.gearbox}</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Ötürücü</span> <p>{detail?.drive}</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Yerlərin sayı</span> <p>{detail?.volume}</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Yeni </span> <p>Bəli</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Vəziyyəti</span> <p>Vuruğu yoxdur, rənglənməyib </p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Yığıldığı bazar</span> <p>{detail?.market}</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Elanın nömrəsi</span> <p>8420355</p>
        </div>
      </div>
    </div>
  );
};

export default MobileCarDetail;
