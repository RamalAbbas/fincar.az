'use client'
import React from 'react'
import styles from "./Company.module.css";
import Image from "next/image";
import admin from '../../../assets/images/admin/mazda.png'
import upload from '../../../assets/images/upload/Group.svg'
import  group  from '../../../assets/icons/group/Group.svg'
import { adminDealerUptade } from "../../../services";

import {useRef, useEffect,useState } from "react";
const CompanyInf = () => {
  const inputRef =useRef(null)
  const [image,SetImage] =useState("")
  const [upDate,SetUpdate] = useState("")
  //add remove
  const [inputFields, setInputFields] = useState([{ value: '' }]);
  const [tries, setTries] = useState(0);
  const maxTries = 2;
  //
  const [data, setData] = useState({
      cover: "",
      name: "",
      address: "",
      opening_time: "",
      city: 0,
      phone1: "",
      phone2: "",
      phone3: "",
      street: "",
      about: ""
    });
  console.log(data)
    const handleInputChange = (e) => {
      setData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    };
  
const handleImageClick= () =>{
 inputRef.current.click();
}
const handleImageChange = (event) =>{ 
const file =event.target.files[0];
 console.log(file)
 SetImage(event.target.files[0])
}
const  DealerUptade = async () => {
      const response = await adminDealerUptade();
      console.log(response);
      SetUpdate(response);
    };
  
    useEffect(() => {
      DealerUptade();
    }, []);


    const handleAddField = () => {
      if (tries < maxTries) {
        setInputFields([...inputFields, { value: '' }]);
        setTries(tries + 1);
      }
    };
  
    const handleRemoveField = (index) => {
      const fields = [...inputFields];
      fields.splice(index, 1);
      setInputFields(fields);
  
    };
    const handleChange = (index, event) => {
      const newFields = [...inputFields];
      newFields[index].value = event.target.value;
      setInputFields(newFields);
    };
  return (
      <>
    <div className={styles.container}>
    <div className={styles.paragraph}>
    <p className={styles.text}>Company information</p>
    </div>
    <div className={styles.img} onClick={handleImageClick}>
    {image?(
    <Image src={URL.createObjectURL(image)} width={116} height={116}/>
    )
    :(<Image src={admin} className={styles.url}/>)}
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
          <input type='text' placeholder='AutoStar Kaukasus GmbH' className={styles.wraper} name='name' value={data.name} onChange={handleInputChange}/>
    </div>
    <div className={styles.inp3}>
          <label className={styles.username}>Working hour</label>
          <input type='text' placeholder='09:00  19:00' className={styles.wraper} name='opening_time' value={data.opening_time} onChange={handleInputChange}/>
    </div>
    <div className={styles.inp4}>
          <label className={styles.username}>City</label>
          <select className={styles.wraper}> 
          <option  name='city' value={data.city} onChange={handleInputChange}></option>
            </select>
          {/* <input type='text' placeholder='Bakı' className={styles.wraper} name='city' value={data.city} onChange={handleInputChange} /> */}
    </div> 
    {inputFields.map((field, index) => (
    <div className={styles.inp5}>
          <label className={styles.username}>Phone number</label>
          <input type='text' placeholder='+994 55 654 76 78' className={styles.wraper} name='phone1' value={data.phone1} onChange={handleInputChange}/>
          <button type="submit" className={styles.addImageButton} onClick={handleAddField} disabled={tries >= maxTries}><Image src={group} className={styles.add}/><span>Add phone number</span></button>
    </div>
    ))}
    <div className={styles.inp6}>
          <label className={styles.username}>Street</label>
           <input type='text' placeholder='Zaur Nudirəliyev 89a' className={styles.wraper} name='street' value={data.street} onChange={handleInputChange}/> 
    </div>
    <div className={styles.inp7}>
          <label className={styles.username}>About your company</label>
          <input type='text' placeholder='"AutoStar Kaukasus GmbH" MMC - Fiat avtomobillərinin Azərbaycanda rəsmi düstribüteri. 20% ilkin ödəniş,10% illik bank faizi, 5 illik kredit, yürüşdən asılı olmayaraq 2 il zəmanət.' className={styles.wraper1} name='about' value={data.about} onChange={handleInputChange}/>
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