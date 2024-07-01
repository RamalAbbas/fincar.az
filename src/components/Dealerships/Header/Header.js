import React from 'react'
import styles from './Header.module.css'
import Search from '../../../assets/icons/search/search.svg'
import Image from 'next/image'
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.headTitle}>Salonlar</p>

        <form className="flex w-full justify-end" action="">
          <div className="relative w-full flex justify-end">
            <input
              className={styles.searchInput}
              placeholder="Search"
              type="text"
            />
            <Image className={styles.searchIcon} src={Search} />
          </div>
          <button className={styles.searchButton}>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Header
