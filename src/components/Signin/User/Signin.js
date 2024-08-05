"use client";
import line from "../../../assets/images/signin/line/line.png";
import logo from "../../../assets/images/logo/logo.png";
import styles from "./Signin.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { login } from "../../../services";
import Cookies from "js-cookie";

const Signin = () => {
  const { push } = useRouter();
  const [data, setData] = useState({
    fin: "",
    phone: 0,
  });

  const handleInputChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
console.log(data);

  const sendRequest = async () => {
    if (Object.values(data).some((value) => value === "")) {
      console.log("Please fill in all fields.");
    } else {
      const res = await login(data);
      console.log(data);
      console.log(res);
      if (res?.status == 200) {
        Cookies.set("data", JSON.stringify(res?.data));

        push("/main");
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image src={logo} alt="logo" />

        <div className={styles.box}>
          <p className={styles.headTitle}>Sign in</p>

          <input
            placeholder="Fin code"
            className={styles.signin_input}
            type="number"
            name="fin"
            value={data.fin}
            onChange={handleInputChange}
          />

          <input
            placeholder="Phone Number"
            className={styles.signin_input}
            type="text"
            name="phone"
            value={data.phone}
            onChange={handleInputChange}
          />

          <button onClick={sendRequest} className={styles.signin_button}>
            Sign in
          </button>

          <Image src={line} alt="line" />

          <p onClick={() => push("/signin/request")} className={styles.route}>
            New user?
            <span className={styles.blue}>Request for registration</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
