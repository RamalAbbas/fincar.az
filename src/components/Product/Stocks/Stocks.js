'use client'
import React, { useState } from 'react'
import styles from './Stocks.module.css'

const Stocks = ({ optionals }) => {
  const [appealDiv, setApeealDiv] = useState(false)

  const toggleButtonVisibility = () => {
    setApeealDiv((prevState) => !prevState)
  }

  return (
    <div className={styles.container}>
      <h1>TƏCHİZAT:</h1>
      <div
        className={`${
          appealDiv ? 'max-h-[1000px]' : 'max-h-[358px] '
        } overflow-hidden`}
      >
        {optionals?.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>
      {optionals?.length > 15 && (
        <p onClick={toggleButtonVisibility}>
          {appealDiv ? 'Close' : 'Read more'}
        </p>
      )}
    </div>
  )
}

export default Stocks
