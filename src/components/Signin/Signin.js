"use client";
import line from "../../assets/images/signin/line/line.png";
import logo from "../../assets/images/logo/logo.png";
import styles from "./Signin.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { login } from "../../services";
import Cookies from "js-cookie";

const Signin = () => {
  const { push } = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image src={logo} alt="logo" />

        <div className={styles.box}>
          <p className={styles.headTitle} style={{cursor: "pointer"}} onClick={() => push("/main")}>Sign in</p>

          <div onClick={() => push("/signin/user")} className={styles.sigin_button}>
            Sign in as User
          </div>

          <div onClick={() => push("/admin/signin")} className={styles.sigin_business}>
            Sign in as a Business account
          </div>

          <Image src={line} alt="line" />

          <p onClick={() => push("/signin/request")} className={styles.route}>
            New user?
            <span className={styles.blue}>Request for registration</span>
          </p>
        </div>
      </div>

      <div className={styles.mobileContainer}>
          <p className={styles.mobileLogo}>
            Fincar.az
          </p>

          <p className={styles.mobileHeadTitle}>
            Sign in
          </p>

          <div onClick={() => push("/signin/user")} className={styles.sigin_button}>
            Sign in as User
          </div>

          <div onClick={() => push("/admin/signin")} className={styles.sigin_business}>
            Sign in as a Business account
          </div>

          <Image src={line} className={styles.mobileLine} alt="line" />
      
          <p onClick={() => push("/signin/request")} className={styles.route}>
            New user?
            <span className={styles.blue}>Request for registration</span>
          </p>
      </div>
    </div>
  );
};

export default Signin;
