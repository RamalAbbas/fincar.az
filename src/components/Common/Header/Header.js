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

const Header = ({ isSaved, isNotification }) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
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

                    {localStorage.getItem("access_token") !== null ? (
                      <div
                        className="cursor-pointer"
                        onClick={() => push("/saved")}
                      >
                        <Image src={saved} alt="" />
                      </div>
                    ) : (
                      <></>
                    )}

                    {isNotification ? (
                      <div>
                        <Image src={notification} alt="" />
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
