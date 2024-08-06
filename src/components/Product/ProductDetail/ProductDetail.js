"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ProductDetail.module.css";
import PaymentModal from "../../../components/Common/PaymentModal/PaymentModal";
import { useSelector, useDispatch } from "react-redux";
import { handlePaymentModal } from "../../../redux/features/paymentModalSlice";

const ProductDetail = ({ detail }) => {
  const [mounthlyPayment, setMounthlyPayment] = useState();
  const [initialPayment, setInitialPayment] = useState();
  const [activeColor, setActiveColor] = useState(24);
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
  useEffect(() => {
    setMounthlyPayment(detail?.payment?.details[1]?.monthly_payment_azn);
  }, [detail?.payment?.details[1]?.monthly_payment_azn]);

  const handlePayment = (item) => {
    setMounthlyPayment(item?.monthly_payment_azn);
    setInitialPayment(item?.initial_payment_azn);
    setActiveColor(item.term);
  };

  useEffect(() => {
    if (detail?.payment?.details[1]) {
      setInitialPayment(
        detail?.payment?.details[1]?.initial_payment_azn.toFixed(0)
      );
    }
  }, [detail]);
  console.log(detail);
  return (
    <div className={`${styles.productDetailContainer}`}>
      <div className={styles.title}>
        <span>
          {detail?.make?.name} {detail?.model?.name}
        </span>
        <p className="mt-3">İlkin ödəniş - {initialPayment} ₼ </p>
        <p className={styles.price_azn}>{detail?.price_azn} AZN</p>

        <div className={styles.months_box}>
          <div className={styles.months_center}>
            {detail?.payment?.details?.map((item) => (
              <div
                style={{
                  background: activeColor == item.term ? "#DADEF2" : "white",
                }}
                className={styles.months}
                onClick={() => handlePayment(item)}
              >
                <p>{item?.term}</p>
              </div>
            ))}
          </div>
          <div className={styles.price_box}>
            <p>Aylıq ödəniş</p>
            <p className={styles.mounthlyPrice}>{mounthlyPayment}</p>
          </div>
        </div>
        <div className={styles.details}>
          <div>
            <p>Şəhər</p>
            <span>Bakı</span>
          </div>
          <div>
            <p>Sürətlər qutusu </p>
            <span>{detail?.gearbox}</span>
          </div>
          <div>
            <p>Marka</p>
            <span>{detail?.make?.name}</span>
          </div>
          <div>
            <p>Ötürücü</p>
            <span>{detail?.drive}</span>
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
            <span>{detail?.year}</span>
          </div>
          <div>
            <p>Yeni</p>
            <span>Bəli</span>
          </div>
          <div>
            <p>Ban növü</p>
            <span>Offroader / {detail?.body}</span>
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
            <span>{detail?.market}</span>
          </div>
          <div>
            <p>Mühərrik</p>
            <span>
              {detail?.volume} L / {detail?.engine_power} .a.g / {detail?.fuel}
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
            <PaymentModal data={detail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
