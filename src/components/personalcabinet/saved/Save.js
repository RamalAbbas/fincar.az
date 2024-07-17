'use client'
import React from 'react'
import styles from './Save.module.css'
import { useRouter } from 'next/navigation'
const Saved = () => {
  const router = useRouter()
  return (
    <>
      <div className={styles.testclass}>
        <button className={styles.navbar} onClick={() => router.push('/personalcabinet')}>My Profile</button>
        <button className={styles.btn}>Saved</button>
      </div>
      <div className={styles.grid}>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.elm}>
              <p className={styles.element}>753 ₼ / ilkin</p>
            </div>
            <div className={styles.item}>
              <div className={styles.text}>
              <p className={styles.paragraph}>FORD Mustang</p>
              </div>
              <div className={styles.text}>
              <p className={styles.paragraphh}>2023, 3.4L, 0 km</p>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.elm}>
              <p className={styles.element}>753 ₼ / ilkin</p>
            </div>
            <div className={styles.item}>
              <div className={styles.text}>
              <p className={styles.paragraph}>FORD Mustang</p>
              </div>
              <div className={styles.text}>
              <p className={styles.paragraphh}>2023, 3.4L, 0 km</p>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.elm}>
              <p className={styles.element}>753 ₼ / ilkin</p>
            </div>
            <div className={styles.item}>
              <div className={styles.text}>
              <p className={styles.paragraph}>FORD Mustang</p>
              </div>
              <div className={styles.text}>
              <p className={styles.paragraphh}>2023, 3.4L, 0 km</p>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.elm}>
              <p className={styles.element}>753 ₼ / ilkin</p>
            </div>
            <div className={styles.item}>
              <div className={styles.text}>
              <p className={styles.paragraph}>FORD Mustang</p>
              </div>
              <div className={styles.text}>
              <p className={styles.paragraphh}>2023, 3.4L, 0 km</p>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.elm}>
              <p className={styles.element}>753 ₼ / ilkin</p>
            </div>
            <div className={styles.item}>
              <div className={styles.text}>
              <p className={styles.paragraph}>FORD Mustang</p>
              </div>
              <div className={styles.text}>
              <p className={styles.paragraphh}>2023, 3.4L, 0 km</p>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.elm}>
              <p className={styles.element}>753 ₼ / ilkin</p>
            </div>
            <div className={styles.item}>
              <div className={styles.text}>
              <p className={styles.paragraph}>FORD Mustang</p>
              </div>
              <div className={styles.text}>
              <p className={styles.paragraphh}>2023, 3.4L, 0 km</p>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.elm}>
              <p className={styles.element}>753 ₼ / ilkin</p>
            </div>
            <div className={styles.item}>
              <div className={styles.text}>
              <p className={styles.paragraph}>FORD Mustang</p>
              </div>
              <div className={styles.text}>
              <p className={styles.paragraphh}>2023, 3.4L, 0 km</p>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.elm}>
              <p className={styles.element}>753 ₼ / ilkin</p>
            </div>
            <div className={styles.item}>
              <div className={styles.text}>
              <p className={styles.paragraph}>FORD Mustang</p>
              </div>
              <div className={styles.text}>
              <p className={styles.paragraphh}>2023, 3.4L, 0 km</p>
              </div>
            </div>
          </div>
          </div>
      </div>
    </>
  )
}

export default Saved