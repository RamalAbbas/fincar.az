'use client'
import React, { useEffect, useRef } from 'react'
import styles from './MobileCarDetail.module.css'
import PaymentModal from '../../../components/Common/PaymentModal/PaymentModal'
import { useSelector, useDispatch } from 'react-redux'
import { handlePaymentModal } from '../../../redux/features/paymentModalSlice'

const MobileCarDetail = () => {
  const insideRef = useRef(null)
  const isActivePaymentModal = useSelector(
    (state) => state.paymentModal.isActivePaymentModal
  )

  const dispatch = useDispatch()

  const handleClickPaymentModal = () => {
    dispatch(handlePaymentModal())
  }

  useEffect(() => {
    if (isActivePaymentModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isActivePaymentModal])

  const handleClickOutside = (e) => {
    if (insideRef.current && !insideRef.current.contains(e.target)) {
      handleClickPaymentModal()
    }
  }
  return (
    <div className={`${styles.wrapper}`}>
      <h1>46 900 AZN</h1>
      <h2>FORD Mustang, 1.4 L, 2023 il, 14 630 km</h2>
      <button onClick={() => handleClickPaymentModal()}>Hesabla</button>
      <div
        onClick={handleClickOutside}
        className={`${styles.paymentModal} ${
          !isActivePaymentModal && '!hidden !opacity-0'
        }`}
      >
        <div ref={insideRef}>
          <PaymentModal />
        </div>
      </div>
      <div className={styles.content}>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Şəhər</span> <p>Bakı</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Marka</span> <p>Ford Mustang</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Model </span> <p>ID.6</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Buraxılış ili</span> <p>2023</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Ban növü</span> <p>Offroader / SUV</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Rəng</span> <p>Qara</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Mühərrik</span> <p>0.0 L / 250 a.g./ Elektro</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Yürüş</span> <p>0 km</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Sürətlər qutusu </span> <p>Avtomat</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Ötürücü</span> <p>Arxa</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Yerlərin sayı</span> <p>7</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Yeni </span> <p>Bəli</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Vəziyyəti</span> <p>Vuruğu yoxdur, rənglənməyib </p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Yığıldığı bazar</span> <p>Çin</p>
        </div>
        <div className="flex justify-between items-center w-full gap-[50px]">
          <span>Elanın nömrəsi</span> <p>8420355</p>
        </div>
      </div>
    </div>
  )
}

export default MobileCarDetail
