"use client";
import line from "../../../assets/images/signin/line/line.png";
import logo from "../../../assets/images/logo/logo.png";
import styles from "./Signin.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { dealerLogin } from "../../../services";
import Cookies from "js-cookie";

const Signin = () => {
  const { push } = useRouter();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    if (Object.values(data).some((value) => value === "")) {
      console.log("Please fill in all fields.");
    } else {
      const res = await dealerLogin(data);
      console.log(res);

      if (res?.status == 200) {
        Cookies.set("admin_data", JSON.stringify(res?.data));

        push("/admin/company_information");
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image src={logo} alt="logo" />

        <div className={styles.box}>
          <p className={styles.headTitle}>Sign in as a business account</p>

          <input
            placeholder="User Name"
            className={styles.signin_input}
            type="text"
            name="username"
            value={data.username}
            onChange={handleInputChange}
          />

          <input
            placeholder="Password"
            className={styles.signin_input}
            type="password"
            name="password"
            value={data.password}
            onChange={handleInputChange}
          />

          <button onClick={sendRequest} className={styles.signin_button}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;