"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ProductDetail.module.css";
import PaymentModal from "../../../components/Common/PaymentModal/PaymentModal";
import { useSelector, useDispatch } from "react-redux";
import { handlePaymentModal } from "../../../redux/features/paymentModalSlice";

const ProductDetail = ({ detail }) => {
  const [isMenu,setIsMenu] = useState(false)
  const [mounthlyPayment, setMounthlyPayment] = useState();
  const [initialPayment, setInitialPayment] = useState();
  const [activeColor, setActiveColor] = useState(24);
  const [isActiveMonth, setIsActiveMonth] = useState("")
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
    setIsMenu(false)
    setMounthlyPayment(item?.monthly_payment_azn);
    setInitialPayment(item?.initial_payment_azn);
    setActiveColor(item.term);
  };

  useEffect(() => {
    if (detail?.payment?.details[1]) {
      setInitialPayment(
        detail?.payment?.details[1]?.initial_payment_azn?.toFixed(0)
      );
    }
  }, [detail]);

  const handleMenu = () => {
    setIsMenu(!isMenu)
  }
  return (
    <div className={`${styles.productDetailContainer}`}>
      <div className={styles.title}>
        <span>
          {detail?.make?.name} {detail?.model?.name}, {detail?.volume} L,{" "}
          {detail?.year} il, {detail?.distance} {detail?.distance_unit}
        </span>
        <p className={styles.price_azn}>İlkin ödəniş <span className={styles.initial_payment_title}>{initialPayment} ₼</span> </p>
        <p className={styles.price_azn}>Ümumi məbləği <span className={styles.price_valditation}>{detail?.price_azn} ₼</span></p>

        <div className={styles.months_box}>
          <div className={styles.months_center}>
            <p className={styles.credit_time}>
              Kredit müddəti
            </p>

            <div className={styles.dropdown_content}>
              <div onClick={handleMenu} className={styles.dropdown_box}>
                  <p className={styles.dropdown_active_title}>
                    {activeColor} ay
                  </p>

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10L12 14L16 10" stroke="#8990B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </div>
              {
                isMenu ? (
                  <div className={styles.dropdown_menu}>
                    {detail?.payment?.details?.map((item) => (
                      <div
                        className={styles.months}
                        onClick={() => handlePayment(item)}
                      >
                        <p>{item?.term} ay</p>
                      </div>
                    ))}
                  </div>
                ) : <></>
              }
              
            </div>
              
          </div>
          <div className={styles.price_box}>
            <p className={styles.montly_title}>Aylıq ödəniş</p>
            <p className={styles.mounthlyPrice}>
              {mounthlyPayment?.toFixed(0)} ₼
            </p>
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
        <button onClick={() => handleClickPaymentModal()}>
          Ətrafli Hesabla
        </button>
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
