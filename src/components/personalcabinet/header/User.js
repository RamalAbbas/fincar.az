"use client";
import React, { Children } from "react";
import styles from "./User.module.css";
import Image from "next/image";
import upload from "../../../assets/images/upload/Group.svg";
import personalcabinet from "../../../assets/images/personalcabinet/profil.jpeg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
const User = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    setMessage(result.error || "File uploaded successfully!");
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* My Profile */}
        <div className={styles.testclass}>
          <button className={styles.navbar}>My Profile</button>
          <button className={styles.btn} onClick={() => router.push("/saved")}>
            Saved
          </button>
        </div>
        {/* Board */}
        <div className={styles.board}>
          <div className={styles.boardLeft}>
            <p className={styles.text}>Personal information</p>
            {/* Image */}
            <div className={styles.layout}>
              <Image
                src={personalcabinet}
                className={styles.img}
                onChange={handleFileChange}
              />
            </div>
            {/* Upload and Replace*/}
            <div className={styles.uploadbtn}>
              <button className={styles.button} onSubmit={handleSubmit}>
                <Image src={upload} className={styles.upload} />
                <p className={styles.paragraph}>Replace</p>
              </button>
            </div>
          </div>

          <div className={styles.board_border}>

          </div>

          <div className={styles.boardRight}>
            {/* side line */}
            {/* Username */}
            <div className={styles.topContent}>
              <div className={styles.inp}>
                <label className={styles.username}>Full Name</label>
                <input
                  type="text"
                  placeholder="Vusal Əliyev"
                  className={styles.wraper}
                  disabled
                />
                {/* Pin Code */}
              </div>
              <div className={styles.inp2}>
                <label className={styles.username}>FIN code</label>
                <input
                  type="text"
                  placeholder="2RH3YDR"
                  className={styles.wraper}
                  disabled
                />
              </div>
            </div>

            <div className={styles.bottomContent}>
              <div className={styles.inp1}>
                <label className={styles.usernameactive}>Email</label>
                <input type="email" className={styles.wraper} value={"mmdvrhle@gmail.com"} />
              </div>

              {/* Password */}
              <div className={styles.inp3}>
                <label className={styles.passwordactive}>Password</label>
                <input type="password" className={styles.wraperr} value={"mmdvrhle@gmail.com"} />
              </div>
            </div>
            {/* Email */}

            {/* <div className={styles.change}> */}
              {/* <p className={styles.psw}>Cahnge Password</p> */}
            {/* </div> */}
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
      </div>

      <div className={styles.mobileWrapper}>
          <Image src={personalcabinet} className={styles.mobileImage} alt="" />

          <p className={styles.mobile_name}>
            Vüsal Əliyev
          </p>

          <div className={styles.mobileData}>
              <div className={styles.mobileItem}>
                <input type="text" className={styles.mobileEmailInput} value={"mmdvrhle@gmail.com"} disabled />
              </div>
              <div className={styles.mobileItem}>
                <input type="text" className={styles.mobileFinInput} value={"2RH3YDR"} disabled />
              </div>
              <div className={styles.mobileItem}>
                <input type="password" className={styles.mobilePassInput}  value={"121212"} disabled />
              </div>
          </div>
      </div>
    </div>
  );
};

export default User;
