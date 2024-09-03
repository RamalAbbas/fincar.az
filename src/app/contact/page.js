"use client";
import styles from "./Contact.module.css";
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import headerBg from "../../assets/images/headerBg.png";
import { useRouter } from 'next/navigation';
import saved from "../../assets/icons/saved/saved.svg";
import leftBlue from "../../assets/icons/arrow/leftBlue.svg";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
const page = () => {
  const pathname = usePathname();
    const {push} = useRouter()
    const [data, setData] = useState([]);
    const [isMenu, setIsMenu] = useState(false);

    useEffect(() => {
        Cookies.get("data") == undefined
          ? console.log("undefined")
          : setData(JSON.parse(Cookies.get("data")));
      }, []);
    
      const handleSend = () => {
        if (!data?.username) {
          push("/signin");
        }
      };
    
      const exitFunction = () => {
        Cookies.remove("data");
        push("/signin");
      };
  return (

   <>

       <div className={`${styles.headerContainer} ${styles.widhtLimitContainer}`}>
    <Image src={headerBg} width={1440} height={580} alt="header-bg" />
    <div className={`${styles.content} ${styles.widhtLimit}`}>
    <nav className={`${styles.navbar} `}>
            <div onClick={() => push("/main")} className={styles.leftLogo}>
              <a>Fincar.az</a>
            </div>
            <div className={styles.rightNav}>
              <a onClick={() => push("/search")}>Bütün Elanlar</a>
              <a onClick={() => push("/dealerships")}>Salonlar</a>
              <a onClick={() => push("/about")}>Haqqımızda</a>
              <a onClick={() => push("/contact")}>Bizimlə Əlaqə</a>
              <a onClick={() => push("/faqs")}>FAQ</a>
              {data && (
                    <div
                      className="cursor-pointer"
                      onClick={() => push("/saved")}
                    >
                      <Image src={saved} alt="" />
                    </div>
                  )}
              {/* <div className={styles.languageDivar}>
                AZ
                <Image src={azFlag} width={20} height={15} alt="header-bg" />
              </div> */}
              <div
                onMouseEnter={() => setIsMenu(true)}
                onMouseLeave={() => setIsMenu(false)}
                className={styles.user_body}
              >
                <button onClick={handleSend}>
                  {data?.username ? data.username : "Daxil ol"}
                </button>
                {isMenu && data.username ? (
                  <div className={styles.user_menu}>
                    <p className={styles.userAccontTitle} onClick={() => push("/personalcabinet")}>User account</p>
                    <p className={styles.logout_button} onClick={exitFunction}>Çıxış</p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </nav>
      <h1 className={styles.desc}>Bizimlə Əlaqə</h1>
      </div>
      </div>
      <div className={styles.wrapper}>
      <div className={styles.container}>
      <div className={styles.main}>
          <p className={styles.text}>Müştəri xidmətləri</p>
          <p className={styles.textt}>+994 51 678 56 43</p>
          <span className={styles.texts}>Mon-Sat 9am-6pm</span>
        </div>
        <div className={styles.main}>
          <p className={styles.text}>Email</p>
          <p className={styles.textt}>loremipsum@gmail.com</p>
        </div>
        </div>
        </div>
   </>
  )
 }


export default page