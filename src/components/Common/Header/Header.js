"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import facebook from "../../../assets/icons//contact/facebook.svg";
import instagram from "../../../assets/icons//contact/instagram.svg";
import linkedIn from "../../../assets/icons//contact/linkedIn.svg";
import Link from "next/link";
import languageIcon from "../../../assets/icons/languageIcon.svg";
import { usePathname } from "next/navigation";
import leftBlue from "../../../assets/icons/arrow/leftBlue.svg";
import saved from "../../../assets/icons/saved/saved.svg";
import notification from "../../../assets/icons/notification/notification.svg";
import searchInput from "../../../assets/icons/mobileHeader/searchInput.svg";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Header = ({ isSaved, isNotification }) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const [isNotificationHover, setIsNotificationHover] = useState(false);
  const [data, setData] = useState([]);
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
  return (
    <>
      {pathname !== "/main" &&
        pathname !== "/signin" &&
        pathname !== "/signin/user" &&
        pathname !== "/admin/signin" &&
        pathname !== "/signin/request" && (
          <>
            <div className="h-[56px] lg:hidden">
              <div className={styles.widhtLimitContainerLarge}>
                <div
                  className={`${styles.headerContainer} ${styles.widhtLimitContainer}`}
                >
                  <a onClick={() => push("/main")}>Fincar.az</a>
                  <div className={styles.rightNav}>
                    <a onClick={() => push("/search")}>Bütün Elanlar</a>
                    <a onClick={() => push("/dealerships")}>Salonlar</a>
                    <div className={styles.language}>
                      EN
                      <Image
                        src={languageIcon}
                        height={24}
                        width={24}
                        alt="languageIcon"
                      />
                    </div>

                    {Cookies.get("data") !== undefined ? (
                      <div
                        className="cursor-pointer"
                        onClick={() => push("/saved")}
                      >
                        <Image src={saved} alt="" />
                      </div>
                    ) : (
                      <></>
                    )}

                    {Cookies.get("data") !== undefined ? (
                      <div className={styles.notificationBody}>
                        <Image
                          onMouseLeave={() => setIsNotificationHover(false)}
                          onMouseEnter={() => setIsNotificationHover(true)}
                          src={notification}
                          alt=""
                        />

                        {isNotificationHover ? (
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
                        ) : (
                          <></>
                        )}
                      </div>
                    ) : (
                      <></>
                    )}

                    <button onClick={handleSend}>
                      {data?.username ? data?.username : "Daxil ol"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`min-lg:hidden ${
                pathname === "/dealership" ? "h-[44px]" : "h-[96px]"
              }`}
            >
              <div className={styles.wrapperMobile}>
                <div className="h-[44px] flex items-center">
                  <div className="ml-[16px]">
                    <Image src={leftBlue} width={10} height={15} alt="arrow" />
                  </div>
                </div>
                <div
                  className={`${styles.mobileHeaderSecond} ${
                    pathname === "/dealership" && "hidden"
                  }`}
                >
                  <div className={styles.mobileSearchInput}>
                    <Image
                      src={searchInput}
                      width={25}
                      height={22}
                      alt="search"
                    />
                    <input type="text" placeholder="Search" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
    </>
  );
};

export default Header;
