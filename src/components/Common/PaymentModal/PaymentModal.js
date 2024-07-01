'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handlePaymentModal } from '@/redux/features/paymentModalSlice'
import styles from './PaymentModal.module.css'
import Image from 'next/image'
import xmark from '../../../assets/icons/xmark.svg'

const PaymentModal = () => {
  const isActivePaymentModal = useSelector(
    (state) => state.paymentModal.isActivePaymentModal
  )

  const dispatch = useDispatch()

  const handleClickPaymentModal = () => {
    dispatch(handlePaymentModal())
  }
  return (
    <div
      className={`${!isActivePaymentModal && '!translate-y-[-40px]'} ${
        styles.modal
      }`}
    >
      <div
        onClick={() => handleClickPaymentModal()}
        className="flex items-center justify-center absolute top-[16px] right-[16px] cursor-pointer hover:opacity-[0.6] transition duration-[100] ease-in-out"
      >
        <Image src={xmark} width={24} height={24} alt="xmark" />
      </div>
      <h1>FORD Mustang, 1.4 L, 2023 il, 14 630 km</h1>
      <p>
        İlkin tələb olunan ödəniş komissiya, sığorta və s. xərclər üçün nəzərdə
        tutulur
      </p>
      <div className={styles.inputContainer}>
        <div className="w-full">
          <label>İlkin ödəniş</label>
          <input type="text" placeholder="$ 12.000" />
        </div>
        <div className="w-full">
          <label>Kreditin müddəti</label>
          <select className={styles.dropdown} name="cars" id="cars">
            <option value="volvo">12 ay</option>
            <option value="saab">6 ay</option>
            <option value="opel">3 ay</option>
            <option value="audi">1 ay</option>
          </select>
        </div>
      </div>
      <div className="bg-[#DADEF2] w-full h-[1px] mt-[24px]"></div>
      <div className={styles.calculatedPrice}>
        <div className={styles.firstPrice}>
          <p>Aylıq məbləğ</p> <span>2.240 $</span>
        </div>
        <div className={styles.secondPrice}>
          <p>Ümumi məbləğ</p> <span>120.240 $</span>
        </div>
      </div>
      <div className="bg-[#DADEF2] w-full h-[1px] mt-[16px]"></div>
      <div className={styles.contactFooter}>
        <label>Ad, soyad, ata adı</label>
        <input type="text" placeholder="Rahila Mammadli Raşad" />
      </div>
      <div className={styles.contactFooter}>
        <label>Email</label>
        <input type="mail" placeholder="mmdvrhle@gmail.com" />
      </div>
      <button>Müraciət et</button>
    </div>
  )
}

export default PaymentModal
