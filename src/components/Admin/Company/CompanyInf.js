'use client'
import React from 'react'
import styles from "./Company.module.css";
import Image from "next/image";
import admin from '../../../assets/images/admin/mazda.png'
import upload from '../../../assets/images/upload/Group.svg'
import {useRef, useState } from "react";
const CompanyInf = () => {
  const inputRef =useRef(null)
  const [image,SetImage] =useState("")
const handleImageClick= () =>{
 inputRef.current.click();
}
const handleImageChange = (event) =>{ 
const file =event.target.files[0];
// const imgname =event.target.files[0]
// const reader = new FileReader();
// reader.readAsDataURL(file);
// reader.onloadend = () =>{
// const img = new Image();
// img.src = reader.result;
// img.onloadend = () =>{
// const canvas = document.createElement("canvas")
// const maxSize = Math.max(img.width , img.height);
// canvas.width = maxSize;
// canvas.height = maxSize;
// const ctx = canvas.getContext("2d");
// ctx.drawImage(
// img,
// (maxSize - img.width)/2
// (maxSize - img.height)/2
// );
// canvas.toBlob(
// (blob) =>{
// const file = new File([blob],imgname,{
// type:"image/png",
// lastModified:Date.now()
// })
// }
// )
// }
// }
 console.log(file)
 SetImage(event.target.files[0])
}
  return (
      <>
    <div className={styles.container}>
    <div className={styles.paragraph}>
    <p className={styles.text}>Company information</p>
    </div>
    <div className={styles.img} onClick={handleImageClick}>
    {image?(
    <Image src={URL.createObjectURL(image)} width={116} height={200}/>
    )
    :(<Image src={admin}/>)}
    </div>
    <div className={styles.uploadbtn} onClick={handleImageClick}>
          <button className={styles.button} type='submit'> 
           <Image src={upload} className={styles.upload}/>
           <p className={styles.textt}>Replace</p> 
           <input type='file' ref={inputRef} className={styles.none} onChange={handleImageChange} placeholder='Replace'></input>
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