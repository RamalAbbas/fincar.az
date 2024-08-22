"use client";
import line from "../../../assets/images/signin/line/line.png";
import logo from "../../../assets/images/logo/logo.png";
import styles from "./Signin.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { login } from "../../../services";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Signin = () => {
  const { push } = useRouter();
  const [data, setData] = useState({
    fin: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    if (Object.values(data).some((value) => value === "")) {
      toast.error("İnputlari doldrun !");
    } else {
      const res = await login(data);
      if (res?.status == 200) {
        toast.success("Login Olundu");
        Cookies.set("data", JSON.stringify(res?.data));

        setTimeout(() => {
          push("/main");
        }, 1000);
      } else {
        toast.error("Yanliş Fin code və ya nömrə !");
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
            type="number"
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

      <div className={styles.mobileContainer}>
          <p className={styles.mobileLogo} style={{cursor: "pointer"}} onClick={() => push("/main")}>
            Fincar.az
          </p>

          <p className={styles.mobileHeadTitle} >
            Sign in
          </p>

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
            type="number"
            name="phone"
            value={data.phone}
            onChange={handleInputChange}
          />

          <button onClick={sendRequest} className={styles.signin_button}>
            Sign in
          </button>

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
