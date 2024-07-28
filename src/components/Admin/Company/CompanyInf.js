import React from 'react'
import styles from "./Company.module.css";
import Image from "next/image";
import admin from '../../../assets/images/admin/mazda.png'
import upload from '../../../assets/images/upload/Group.svg'
const CompanyInf = () => {
  return (
      <>
    <div className={styles.container}>
    <div className={styles.paragraph}>
    <p className={styles.text}>Company information</p>
    </div>
    <div className={styles.img}>
    <Image src={admin}/>
    </div>
    <div className={styles.uploadbtn}>
          <button className={styles.button}> 
           <Image src={upload} className={styles.upload}/>
            <p className={styles.textt}>Replace</p> 
           </button> 
    </div>
    <div className={styles.inp}>
          <label className={styles.username}>Company name</label>
          <input type='text' placeholder='AutoStar Kaukasus GmbH' className={styles.wraper} />
    </div>
    <div className={styles.inp2}>
          <label className={styles.username}>Address title</label>
          <input type='text' placeholder='Bakı ş. Abşeron r. Xətai pr. ' className={styles.wraper} />
    </div>
    <div className={styles.inp3}>
          <label className={styles.username}>Working hour</label>
          <input type='text' placeholder='09:00  19:00' className={styles.wraper} />
    </div>
    <div className={styles.inp4}>
          <label className={styles.username}>City</label>
          <input type='text' placeholder='Bakı' className={styles.wraper} />
    </div>
    <div className={styles.inp5}>
          <label className={styles.username}>Phone number</label>
          <input type='text' placeholder='+994 55 654 76 78' className={styles.wraper} />
    </div>
    <div className={styles.inp6}>
          <label className={styles.username}>Street</label>
          <input type='text' placeholder='Zaur Nudirəliyev 89a' className={styles.wraper} />
    </div>
    <div className={styles.inp7}>
          <label className={styles.username}>About your company</label>
          <input type='text' placeholder='"AutoStar Kaukasus GmbH" MMC - Fiat avtomobillərinin Azərbaycanda rəsmi düstribüteri. 20% ilkin ödəniş,10% illik bank faizi, 5 illik kredit, yürüşdən asılı olmayaraq 2 il zəmanət.' className={styles.wraper1} />
    </div>
    <div className={styles.save}>
          <button className={styles.btn1}>Save</button>
        </div>
    </div>
    <div className={styles.responsive}>

    </div>
    </>
  )
}

export default CompanyInf