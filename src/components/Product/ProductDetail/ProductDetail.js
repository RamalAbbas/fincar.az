"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "./ProductDetail.module.css";
import PaymentModal from "../../../components/Common/PaymentModal/PaymentModal";
import { useSelector, useDispatch } from "react-redux";
import { handlePaymentModal } from "../../../redux/features/paymentModalSlice";

const ProductDetail = ({ detail }) => {
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
    <div className={`${styles.productDetailContainer}`}>
      <div className={styles.title}>
        <span>
          {detail?.make?.name} {detail?.model?.name}
        </span>
        <p>{detail?.price_azn} AZN</p>
        <div className={styles.details}>
          <div>
            <p>Şəhər</p>
            <span>Bakı</span>
          </div>
          <div>
            <p>Sürətlər qutusu </p>
            <span>{detail.gearbox}</span>
          </div>
          <div>
            <p>Marka</p>
            <span>{detail?.make?.name}</span>
          </div>
          <div>
            <p>Ötürücü</p>
            <span>Arxa</span>
          </div>
          <div>
            <p>Model</p>
            <span>{detail?.model?.name}</span>
          </div>
          <div>
            <p>Yerlərin sayı</p>
            <span>{detail?.volume}</span>
          </div>
          <div>
            <p>Buraxılış ili</p>
            <span>{detail.year}</span>
          </div>
          <div>
            <p>Yeni</p>
            <span>Bəli</span>
          </div>
          <div>
            <p>Ban növü</p>
            <span>Offroader / SUV</span>
          </div>
          <div>
            <p>Vəziyyəti</p>
            <span>Vuruğu yoxdur, rənglənməyib</span>
          </div>
          <div>
            <p>Rəng</p>
            <span>{detail?.color}</span>
          </div>
          <div>
            <p>Yığıldığı bazar</p>
            <span>{detail.market}</span>
          </div>
          <div>
            <p>Mühərrik</p>
            <span>
              {detail?.engine_volume} / {detail?.engine_power} .a.g / Elektro
            </span>
          </div>
          <div>
            <p>Elanın nömrəsi</p>
            <span>8420355</span>
          </div>
          <div>
            <p>Yürüş</p>
            <span>
              {detail?.distance} {detail?.distance_unit}
            </span>
          </div>
        </div>
        <button onClick={() => handleClickPaymentModal()}>Hesabla</button>
        <div
          onClick={handleClickOutside}
          className={`${styles.paymentModal} ${
            !isActivePaymentModal && "!hidden !opacity-0"
          }`}
        >
          <div ref={insideRef}>
            <PaymentModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
