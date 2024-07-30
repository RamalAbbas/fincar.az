"use client";

import line from "../../../assets/images/signin/line/line.png";
import logo from "../../../assets/images/logo/logo.png";
import { useRouter } from "next/navigation";
import styles from "./Request.module.css";
import { register } from "../../../services";
import { useState } from "react";
import Image from "next/image";
import { isInvalid } from "../../../utils/regex/index";

const Request = () => {
  const { push } = useRouter();
  const [data, setData] = useState({
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const isValidEmail = isInvalid(data.phone);

    if (Object.values(data).some((value) => value === "")) {
      console.log("Please fill in all fields.");
    } else {
      const res = await register(data);
      if (res?.status == 201) {
        push("/signin");
      }
      console.log("Registration successful:", res);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image src={logo} alt="logo" />
        <div className={styles.box}>
          <p className={styles.headTitle}>Request for registration</p>
          <input
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            className={styles.signin_input}
            type="email"
          />
          <input
            placeholder="Phone Number"
            name="phone"
            value={data.phone}
            onChange={handleInputChange}
            className={styles.signin_input}
            type="text"
          />
          <button onClick={sendRequest} className={styles.signin_button}>
            Request
          </button>
          <Image src={line} alt="line" />
          <p onClick={() => push("/signin")} className={styles.route}>
            Do you have an account?
            <span className={styles.blue}>Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Request;
