 'use client'
 import React, { Children } from 'react'
import styles from './User.module.css'
import Image from 'next/image'
import upload from '../../../assets/images/upload/Group.svg'
import personalcabinet from '../../../assets/images/personalcabinet/profil.jpeg'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Link from 'next/link'
const User = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const router=useRouter()
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await res.json();
    setMessage(result.error || 'File uploaded successfully!');
  };
  return (
    <>
      {/* My Profile */}
      <div className={styles.testclass}>
        <button className={styles.navbar}>My Profile</button>
        <button className={styles.btn}  onClick={() => router.push('/saved')}>Saved</button>
      </div>
      {/* Board */}
      <div className={styles.board}>
        <p className={styles.text}>Personal information</p>
        {/* Image */}
        <div className={styles.layout}>
          <Image src={personalcabinet} className={styles.img} onChange={handleFileChange} />
        </div>
        {/* Upload and Replace*/}
        <div className={styles.uploadbtn}>
          <button className={styles.button} onSubmit={handleSubmit}> 
           <Image src={upload} className={styles.upload}/>
            <p className={styles.paragraph}>Replace</p> 
           </button> 
        </div>
        {/* side line */}
        <div className={styles.border}>
        </div>
        {/* Username */}
        <div className={styles.inp}>
          <label className={styles.username}>Full Name</label>
          <input type='text' placeholder='Vusal Əliyev' className={styles.wraper} />
          {/* Pin Code */}
          <div className={styles.inp2}>
            <label className={styles.username}>FIN code</label>
            <input type='text' placeholder='2RH3YDR' className={styles.wraper} disabled/>
          </div>
        </div>
        {/* Email */}
        <div className={styles.inp1}>
          <label className={styles.username}>Email</label>
          <input type='email' className={styles.wraper} />
          {/* Password */}
          <div className={styles.inp3}>
            <label className={styles.password}>Password</label>
            <input type='password' className={styles.wraperr} />
          </div>
          <div className={styles.change}>
         <p className={styles.psw}>Cahnge Password</p>
        </div>
        <div className={styles.save}>
          <button className={styles.btn1}>Save</button>
        </div>
        </div>
      </div>
      {/* Responsive */}
    <div className={styles.responsive}>
      <div className={styles.box}>
     <a className={styles.text}>My Profile</a>
    <div className={styles.border}></div>
    </div>
    <div className={styles.boxed}>
     <a className={styles.saved}>Saved</a>
     <div className={styles.borders}></div>
     </div>
     </div>
    </>
  )
}

export default User