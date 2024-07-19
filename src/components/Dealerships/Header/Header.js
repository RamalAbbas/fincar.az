"use client"
import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'
import Search from '../../../assets/icons/search/search.svg'
import Image from 'next/image'

const Header = ({ callBackData }) => {
  const [value, setValue] = useState("")
  const searchFunction = (e) => {
    e.preventDefault()
    if (value.trim() === "") {
      alert("Error: Search input cannot be empty!")
    } else {
      callBackData(value) 
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.headTitle}>Salonlar</p>
        <form className="flex w-full justify-end" action="">
          <div className="relative w-full flex justify-end">
            <input
              className={styles.searchInput}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search"
              type="text"
            />
            <Image className={styles.searchIcon} src={Search} alt="Search Icon" />
          </div>
          <button onClick={searchFunction} className={styles.searchButton}>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Header
