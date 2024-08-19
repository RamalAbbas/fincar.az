 "use client";
import React from 'react'
import styles from "./About.module.css";
import Image from "next/image";
import headerBg from "../../assets/images/headerBg.png";
import azFlag from "../../assets/icons/azFlag.svg";
import mobileMenu from "../../assets/icons/mobileHeader/menu.svg";
import { useRouter } from 'next/router';
const page = () => {
 
  return (
    <>
    <div
    className={`${styles.headerContainer} ${styles.widhtLimitContainer}`}
  >
    <Image src={headerBg} width={1440} height={580} alt="header-bg" />
    <div className={`${styles.content} ${styles.widhtLimit}`}>
      <nav className={`${styles.navbar} `}>
        <div onClick={() => push("/main")} className={styles.leftLogo}>
          <a>Fincar.az</a>
        </div>
        <div className={styles.rightNav}>
          <a onClick={() => push("/search")}>Bütün Elanlar</a>
          <a onClick={() => push("/dealerships")}>Salonlar</a>
          <div className={styles.languageDivar}>
            AZ
            <Image src={azFlag} width={20} height={15} alt="header-bg" />
          </div>
          <div
           
            className={styles.user_body}
          >
            <button >
              "Daxil ol"
            </button>
            
              <div className={styles.user_menu}>
                {/* <p onClick={() => push("/personalcabinet")}>User account</p>
                <p>Exit</p> */}
              </div>
              <></>
          </div>
        </div>
      </nav>
      <h1 className={styles.desc}>Vaxtınıza qənaət edin, vasitəçisiz ən yaxşı təklif alın</h1>
      </div>
      </div>

      <div className={styles.main}>
        <p className={styles.text}>Haqqımızda</p>
      </div>
      <div className={styles.contents}>
        <p className={styles.texts}>Fincar avtomobil alqı-satqısı və icarəsi sahəsində inqilabi bir addımdır. Biz, müştərilərimizin avtomobil sahəsində bütün ehtiyaclarını qarşılamaq üçün buradayıq. Fincar komandası, geniş seçim imkanı və etibarlı xidmətlərlə sizin avtomobil təcrübənizi ən yüksək səviyyəyə çatdırmağa sadiqdir.</p>
      </div>
     </>
  )
}

export default page