import React from 'react'
import styles from './MobileCarProfile.module.css'
import logo from '../../../assets/images/profile.png'
import Image from 'next/image'

const MobileCarProfile = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className=" overflow-hidden">
          <Image src={logo} width={56} height={56} alt="logo" />
        </div>
        <div>
          <p>Skoda Azerbaijan</p>
          <span>+994 51 656 76 76</span>
        </div>
      </div>
      <div className={styles.desc}>
        <span>Simply Cleaver</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris.
        </p>
      </div>
    </div>
  )
}

export default MobileCarProfile
