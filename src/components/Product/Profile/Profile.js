import React from 'react'
import styles from './Profile.module.css'
import Image from 'next/image'
import profile from '../../../assets/images/profile.png'
import phone from '../../../assets/icons/contact/phone.svg'
import time from '../../../assets/icons/contact/time.svg'
import location from '../../../assets/icons/contact/location.svg'

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className="flex gap-[8px]">
            <Image src={profile} height={56} width={56} alt="profile" />
            <div className={`${styles.divarLeft}`}>
              <span>Skoda Azerbaijan</span>
              <p>Rəsmi nümayəndə</p>
            </div>
          </div>
          <div className={styles.divarRight}>
            <Image
              className="self-start"
              src={phone}
              height={24}
              width={24}
              alt="profile"
            />
            <span>+994 51 656 76 76</span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#C0C3D7] rounded my-[16px]"></div>
        <span>Simply Cleaver</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris.
        </p>
        <div className="w-full h-[1px] bg-[#C0C3D7] rounded my-[16px]"></div>
        <div className={styles.divarrrrrrr}>
          <Image src={time} height={24} width={24} alt="time" />
          <span>
            Həftə içi: 09:00–18:30; Şənbə: 10:00–17:00; Bazar: 11:00–16:00
          </span>
        </div>
        <div className={`${styles.divarrrrrrr} mt-[12px]`}>
          <Image src={location} height={24} width={24} alt="location" />
          <span>Bakı ş., Xətai r., Babək pr., 74</span>
        </div>
        <button>Salona keç</button>
      </div>
    </div>
  )
}

export default Profile
