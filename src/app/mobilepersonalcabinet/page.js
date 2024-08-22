"use client";
import { useRouter } from "next/navigation";
import styles from './style.module.css'
const Page = () => {
  const { push } = useRouter();

  return (
    <>
    <div
        className={`${
        styles.mobileMenuOutSide
        }`}
        >
          <div
            className={`${styles.mobileMenu} `}
          >
            <div className={styles.mobileList}>
              <div className="">
                <a  onClick={() => push("/personalcabinet")}>
                  <span>My profile</span>
                </a>
                <div className="h-[1px] w-full bg-[#D9D9D9] mt-[18px]"></div>
              </div>
              <div className="pt-[18px]">
                <a onClick={() => push("/saved")}>
                  <span>Saved</span>
                </a>
                <div className="h-[1px] w-full bg-[#D9D9D9] mt-[18px]"></div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Page;
