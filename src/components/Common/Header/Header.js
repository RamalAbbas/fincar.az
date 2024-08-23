"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import facebook from "../../../assets/icons//contact/facebook.svg";
import instagram from "../../../assets/icons//contact/instagram.svg";
import linkedIn from "../../../assets/icons//contact/linkedIn.svg";
import Link from "next/link";
import languageIcon from "../../../assets/icons/languageIcon.svg";
import  rec from "../../../assets/icons/rec/Rectangle 141.svg";
import { usePathname } from "next/navigation";
import leftBlue from "../../../assets/icons/arrow/leftBlue.svg";
import saved from "../../../assets/icons/saved/saved.svg";
import notification from "../../../assets/icons/notification/notification.svg";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Header = ({ isSaved, isNotification }) => {
  const { push , back } = useRouter();
  const pathname = usePathname();
  const [isNotificationHover, setIsNotificationHover] = useState(false);
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
    <div>
    {pathname !== "/main" &&
    pathname !== "/contact" &&
      pathname !== "/signin" &&
      pathname !== "/signin/user" &&
      pathname !== "/admin/signin" &&
      pathname !== "/signin/request" && (
      <div className={pathname !== "/about" ? styles.noAbout: styles.aboutActive}>
          <div className="h-[56px] lg:hidden">
            <div className={styles.widhtLimitContainerLarge}>
              <div
                className={`${styles.headerContainer} ${styles.widhtLimitContainer}`}
              >
                <a onClick={() => push("/main")}>Fincar.az</a>
                <div className={styles.rightNav}>
                  <a onClick={() => push("/search")}>Bütün Elanlar</a>
                  <a onClick={() => push("/dealerships")}>Salonlar</a>
                  <a onClick={() => push("/about")}>Haqqımızda</a>
                  <a onClick={() => push("/contactus")}>Bizimlə əlaqə</a>
                  <a onClick={() => push("/faqs")}>FAQ</a>
                  {/* <div className={styles.language}>
                    AZ
                    <Image
                      src={languageIcon}
                      height={24}
                      width={24}
                      alt="languageIcon"
                    
                    />
                  </div> */}
                  <div className={styles.cont}>
                  <Image
                      src={rec}
                      height={24}
                      width={24}
                      alt="languageIcon"
                      className={styles.frame}
                    />
                  
                  </div>
                  {data && (
                    <div
                      className="cursor-pointer"
                      onClick={() => push("/saved")}
                    >
                      <Image src={saved} alt="" />
                    </div>
                  )}

                  {/* {data && (
                    <div className={styles.notificationBody}>
                      <Image
                        onMouseLeave={() => setIsNotificationHover(false)}
                        onMouseEnter={() => setIsNotificationHover(true)}
                        src={notification}
                        alt=""
                      />

                      {isNotificationHover && (
                        <div className={styles.notification_box}>
                          <div className={styles.top}>Your notification</div>
                          <div className={styles.border}></div>
                          <div className={styles.items}>
                            <div className={styles.item}>
                              <div className={styles.item_top}>
                                <p className={styles.item_left}>
                                  Payment Received !
                                </p>
                                <p className={styles.item_right}>Jun 19</p>
                              </div>
                              <p className={styles.bottom}>
                                We’re encountering issues with connecting to
                                our system’s database at the moment.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )} */}

                  
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
              </div>
            </div>
          </div>
          <div
            className={`min-lg:hidden ${
              pathname === "/dealership" ? "h-[44px]" : "h-[44px]"
            }`}
          >
            <div className={styles.wrapperMobile}>
              <div className="h-[44px] flex items-center">
                <div onClick={() => back()} className="ml-[16px]">
                  <Image src={leftBlue} width={10} height={15} alt="arrow" />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
  </div>
  );
};

export default Header;
