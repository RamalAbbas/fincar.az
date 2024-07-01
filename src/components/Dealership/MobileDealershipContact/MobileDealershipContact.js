import React from 'react'
import styles from './MobileDealershipContact.module.css'
import Image from 'next/image'
import phone from '../../../assets/icons/contact/phone.svg'
import time from '../../../assets/icons/contact/time.svg'
import location from '../../../assets/icons/contact/location.svg'

const MobileDealershipContact = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Image
          src={phone}
          width={24}
          height={24}
          alt="contact"
          className="self-start"
        />
        <div className="flex flex-wrap gap-[16px] gap-y-[4px]">
          <p>+994 51 656 76 76</p>
          <p>+994 51 656 76 76</p>
          <p>+994 51 656 76 76</p>
        </div>
      </div>
      <div>
        <Image
          src={time}
          width={24}
          height={24}
          alt="contact"
          className="self-start"
        />
        <div className="flex flex-wrap gap-[16px]">
          <span>
            Həftə içi: 09:00–18:30; Şənbə: 10:00–17:00; Bazar: 11:00–16:00
          </span>
        </div>
      </div>
      <div>
        <Image
          src={location}
          width={24}
          height={24}
          alt="contact"
          className="self-start"
        />
        <div className="flex flex-wrap gap-[16px]">
          <h5>Bakı ş., Xətai r., Babək pr., 74</h5>
        </div>
      </div>
    </div>
  )
}

export default MobileDealershipContact
