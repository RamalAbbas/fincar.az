import Image from 'next/image'
import styles from './Content.module.css'
import salon from '../../../assets/images/salons/salon.svg'
import phone from '../../../assets/icons/phone/phone.svg'
import location from '../../../assets/icons/location/location.svg'
const Content = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image className={styles.salonImage} src={salon} alt="" />

          <div className={styles.itemRight}>
            <p className={styles.salonName}>Autolux Azerbaijan - Jaguar</p>

            <div className="flex  gap-2">
              <Image className={styles.phoneImage} src={phone} />

              <div className={styles.numbers}>
                <p className={styles.number}>+994 51 656 76 76</p>
                <p className={styles.number}>+994 51 656 76 76</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Image className={styles.locationImage} src={location} />

              <p className={styles.location}>
                Bakı ş., Xətai r., Babək pr., 74
              </p>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <Image className={styles.salonImage} src={salon} alt="" />

          <div className={styles.itemRight}>
            <p className={styles.salonName}>Autolux Azerbaijan - Jaguar</p>

            <div className="flex  gap-2">
              <Image className={styles.phoneImage} src={phone} />

              <div className={styles.numbers}>
                <p className={styles.number}>+994 51 656 76 76</p>
                <p className={styles.number}>+994 51 656 76 76</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Image className={styles.locationImage} src={location} />

              <p className={styles.location}>
                Bakı ş., Xətai r., Babək pr., 74
              </p>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <Image className={styles.salonImage} src={salon} alt="" />

          <div className={styles.itemRight}>
            <p className={styles.salonName}>Autolux Azerbaijan - Jaguar</p>

            <div className="flex  gap-2">
              <Image className={styles.phoneImage} src={phone} />

              <div className={styles.numbers}>
                <p className={styles.number}>+994 51 656 76 76</p>
                <p className={styles.number}>+994 51 656 76 76</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Image className={styles.locationImage} src={location} />

              <p className={styles.location}>
                Bakı ş., Xətai r., Babək pr., 74
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.item} ${styles.no_border}`}>
          <Image className={styles.salonImage} src={salon} alt="" />

          <div className={styles.itemRight}>
            <p className={styles.salonName}>Autolux Azerbaijan - Jaguar</p>

            <div className="flex  gap-2">
              <Image className={styles.phoneImage} src={phone} />

              <div className={styles.numbers}>
                <p className={styles.number}>+994 51 656 76 76</p>
                <p className={styles.number}>+994 51 656 76 76</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Image className={styles.locationImage} src={location} />

              <p className={styles.location}>
                Bakı ş., Xətai r., Babək pr., 74
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
