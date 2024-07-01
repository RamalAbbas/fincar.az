'use client'
import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import facebook from '../../../assets/icons//contact/facebook.svg'
import instagram from '../../../assets/icons//contact/instagram.svg'
import linkedIn from '../../../assets/icons//contact/linkedIn.svg'
import Link from 'next/link'
import languageIcon from '../../../assets/icons/languageIcon.svg'
import { usePathname } from 'next/navigation'
import leftBlue from '../../../assets/icons/arrow/leftBlue.svg'
import searchInput from '../../../assets/icons/mobileHeader/searchInput.svg'

const Header = () => {
  const pathname = usePathname()
  

  return (
    <>
      {pathname !== '/main' && (
        <>
          <div className="h-[56px] lg:hidden">
            <div className={styles.widhtLimitContainerLarge}>
              <div
                className={`${styles.headerContainer} ${styles.widhtLimitContainer}`}
              >
                <a>Fincar.az</a>
                <div className={styles.rightNav}>
                  <a>Bütün Elanlar</a>
                  <a>Salonlar</a>
                  <div className={styles.language}>
                    EN
                    <Image
                      src={languageIcon}
                      height={24}
                      width={24}
                      alt="languageIcon"
                    />
                  </div>
                  <button>Daxil ol</button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`min-lg:hidden ${
              pathname === '/dealership' ? 'h-[44px]' : 'h-[96px]'
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
                  pathname === '/dealership' && 'hidden'
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
  )
}

export default Header
