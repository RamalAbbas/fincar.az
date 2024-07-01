import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import facebook from '../../../assets/icons//contact/facebook.svg'
import instagram from '../../../assets/icons//contact/instagram.svg'
import linkedIn from '../../../assets/icons//contact/linkedIn.svg'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.divarrrrrrrrr}>
      <div className={styles.widhtLimitContainerLarge}>
        <div
          className={`${styles.footerContainer} ${styles.widhtLimitContainer}`}
        >
          <div className={styles.footerFirst}>
            <a>
              <h1>Fincar.az</h1>
            </a>
          </div>
          <div className={styles.footerRight}>
            <div>
              <a>
                <p>Haqqımızda</p>
              </a>
              <a>
                <p>Məxfilik siyasəti</p>
              </a>
              <a>
                <p>FAQ</p>
              </a>
            </div>
            <div>
              <a>
                <p>Bütün avtomobillər</p>
              </a>
              <a>
                <p>Salonlar</p>
              </a>
              <a>
                <p>Bizimlə əlaqə</p>
              </a>
            </div>

            <div>
              <h1>Sosial şəbəkələr</h1>
              <div className="flex gap-[16px]">
                <a>
                  <Image
                    src={facebook}
                    loading="lazy"
                    width={20}
                    height={20}
                    alt="contact"
                  />
                </a>

                <a>
                  <Image
                    src={instagram}
                    loading="lazy"
                    width={20}
                    height={20}
                    alt="contact"
                  />
                </a>
                <a>
                  <Image
                    src={linkedIn}
                    loading="lazy"
                    width={20}
                    height={20}
                    alt="contact"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
