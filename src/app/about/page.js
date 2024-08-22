 "use client";
import React, { useEffect, useState } from 'react'
import styles from "./About.module.css";
import Image from "next/image";
import headerBg from "../../assets/images/headerBg.png";
import about from "../../assets/icons/about/OheU7K.tif.svg"
import Frame from "../../assets/images/about/Frame 247.png"
import good from "../../assets/icons/about/good.svg"
import call from "../../assets/icons/about/call.svg"
import { useRouter } from 'next/navigation';
import saved from "../../assets/icons/saved/saved.svg";
import Cookies from "js-cookie";

const page = () => {
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
              <a onClick={() => push("/about")}>Haqqımızda</a>
              <a onClick={() => push("/contactus")}>Bizimlə əlaqə</a>
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
      <h1 className={styles.desc}>Vaxtınıza qənaət edin, vasitəçisiz ən yaxşı təklif alın</h1>
      </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
        <div className={styles.main}>
          <p className={styles.text}>Haqqımızda</p>
        </div>
        <div className={styles.contents}>
          <p className={styles.texts}>Fincar avtomobil alqı-satqısı və icarəsi sahəsində inqilabi bir addımdır. Biz, müştərilərimizin avtomobil sahəsində bütün ehtiyaclarını qarşılamaq üçün buradayıq. Fincar komandası, geniş seçim imkanı və etibarlı xidmətlərlə sizin avtomobil təcrübənizi ən yüksək səviyyəyə çatdırmağa sadiqdir.</p>
        </div>
        <div className={styles.iconcontainer}>
        <div className={styles.icon}>
        <Image src={about}></Image>
        <p className={styles.icontxt}>100% Məmnuniyyət</p>
        </div>
        <div className={styles.icon}>
        <Image src={good}></Image>
        <p className={styles.icontxt}>Maliyyələşdirmə Seçimləri</p>
        </div>
        <div className={styles.icon}>
        <Image src={call}></Image>
        <p className={styles.icontxt}>Etibarlılıq</p>
        </div>
        </div>
        </div>
      </div>
      <div className={styles.wrapper}>

      <div className={styles.fincar}>
        <div className={styles.fincarr}>
        <Image src={Frame}></Image>
        </div>
        <div className={styles.box_right}>
          <div className={styles.tak}>
            <p className={styles.paragraph}>Bizim missiyamız</p>
          </div>
          <div className={styles.div}>
            <div className={styles.box}>
              <p className={styles.boxs}>Fincar, ən yaxşı avtomobil təcrübəsini təmin etmək məqsədi ilə yaranıb. Biz, müştərilərimizə keyfiyyətli və etibarlı avtomobillər təqdim edərək, onlara sərfəli qiymətlərlə yüksək xidmət göstərmək üçün çalışırıq. Avtomobil alqı-satqısı və icarəsində inam və rahatlıq yaratmaq əsas məqsədimizdir.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
     </>
  )
}

export default page