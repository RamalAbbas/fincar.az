"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import facebook from "../../../assets/icons//contact/facebook.svg";
import instagram from "../../../assets/icons//contact/instagram.svg";
import linkedIn from "../../../assets/icons//contact/linkedIn.svg";
import Link from "next/link";
import languageIcon from "../../../assets/icons/languageIcon.svg";
import rec from "../../../assets/icons/rec/Rectangle 141.svg";
import leftBlue from "../../../assets/icons/arrow/leftBlue.svg";
import saved from "../../../assets/icons/saved/saved.svg";
import notification from "../../../assets/icons/notification/notification.svg";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { getDealerInfo } from "../../../services";

const Header = ({ isSaved, isNotification }) => {
  const pathname = usePathname();
  const { push, back } = useRouter();
  const [isNotificationHover, setIsNotificationHover] = useState(false);
  const [data, setData] = useState([]);
  const [adminData, setAdminData] = useState([]);
  const [isMenu, setIsMenu] = useState(false);
  const [isAdminPage, setIsAdminPage] = useState(false);
console.log();

  useEffect(() => {
    if (
      pathname !== "/admin/products" &&
      pathname !== "/admin/add_product" &&
      pathname !== "/admin/company_information" &&
      pathname !== "/admin/change_password" &&
      pathname.slice(0,19) !== "/admin/edit_product"
    ) {
      Cookies.remove("admin_data");
      const userData = Cookies.get("data");
      if (userData) {
        setData(JSON.parse(userData));
      }
      setIsAdminPage(false);
    } else {
      const adminUserData = Cookies.get("admin_data");
      if (adminUserData) {
        setAdminData(JSON.parse(adminUserData));
      }
      setIsAdminPage(true);
    }
  }, [pathname]);

  const handleSend = () => {
    if (!data?.username && !adminData?.username) {
      push("/signin");
    }
  };

  const exitFunction = () => {
    Cookies.remove("admin_data");
    Cookies.remove("data");
    push("/signin");
  };

  const handleBack = () => {
    if (pathname === "/admin/company_information") {
      window.location.reload();
    } else {
      back();
    }
  };

  const handleBusinesAccount = () => {
      push(`/dealership/${adminData?.slug}`);
  }

  return (
    <div>
      {pathname !== "/main" &&
        pathname !== "/contact" &&
        pathname !== "/signin" &&
        pathname !== "/signin/user" &&
        pathname !== "/admin/signin" &&
        pathname !== "/signin/request" && (
          <div className={pathname !== "/about" ? styles.noAbout : styles.aboutActive}>
            <div className="h-[56px] lg:hidden">
              <div className={styles.widhtLimitContainerLarge}>
                <div className={`${styles.headerContainer} ${styles.widhtLimitContainer}`}>
                  <a onClick={() => push("/main")}>Fincar.az</a>
                  <div className={styles.rightNav}>
                    <a onClick={() => push("/search")}>Bütün Elanlar</a>
                    <a onClick={() => push("/dealerships")}>Salonlar</a>
                    <a onClick={() => push("/about")}>Haqqımızda</a>
                    <a onClick={() => push("/contact")}>Bizimlə əlaqə</a>
                    <a onClick={() => push("/faqs")}>FAQ</a>
                    <a onClick={() => push("/privacypolicy")}>Məxfilik siyasəti</a>
                    <div className={styles.cont}>
                      <Image src={rec} height={24} width={24} alt="languageIcon" className={styles.frame} />
                    </div>
                    {data?.username && (
                      <div className="cursor-pointer" onClick={() => push("/saved")}>
                        <Image src={saved} alt="" />
                      </div>
                    )}
                    <div
                      onMouseEnter={() => setIsMenu(true)}
                      onMouseLeave={() => setIsMenu(false)}
                      className={styles.user_body}
                    >
                      {isAdminPage && adminData?.username ? (
                        <button onClick={handleSend}>{adminData?.username}</button>
                      ) : data?.username ? (
                        <button onClick={handleSend}>{data?.username}</button>
                      ) : (
                        <button onClick={handleSend}>Daxil ol</button>
                      )}

                      {isMenu && (data?.username || adminData?.username) && (
                        <div className={styles.user_menu}>
                          {
                            isAdminPage ? (
                              <p
                                className={styles.userAccontTitle}
                                onClick={handleBusinesAccount}
                              >
                                Business account
                              </p>
                            ) : (
                              <p
                                className={styles.userAccontTitle}
                                onClick={() => push("/personalcabinet")}
                              >
                                User account
                              </p>
                            )
                          }

                          <p className={styles.logout_button} onClick={exitFunction}>
                            Çıxış
                          </p>
                        </div>
                      )} 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`min-lg:hidden ${pathname === "/dealership" ? "h-[44px]" : "h-[44px]"}`}>
              <div className={styles.wrapperMobile}>
                <div className="h-[44px] flex items-center">
                  <div onClick={handleBack} className="ml-[16px]">
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
