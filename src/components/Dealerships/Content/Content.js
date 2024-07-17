"use client"
import Image from 'next/image'
import styles from './Content.module.css'
import salon from '../../../assets/images/salons/salon.svg'
import phone from '../../../assets/icons/phone/phone.svg'
import location from '../../../assets/icons/location/location.svg'
import { getDealerList } from '../../../services'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
const Content = () => {
    const { push } = useRouter();
    const [isLoading,setIsLoading] = useState(false)
    const [dealerList,setDealerList] = useState([])

    //! Fetching Data 
    const getCarsData = async () => {
        try{
          setIsLoading(true)
          const response = await getDealerList()
          console.log(response);
          setDealerList(response);
        }
        catch (err) {
          console.error(err);
        }
        finally {
          setIsLoading(false)
        }
    }

    useEffect(() => {
      getCarsData()
    },[])

    const callBackSlug = (slug) => {
      push(`/dealership/${slug}`);
    }


  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
          {
            dealerList?.map((item) => (
              <div onClick={() => callBackSlug(item.slug)} className={styles.item}>
                <img className={styles.salonImage} src={item.cover} alt="" />

                <div className={styles.itemRight}>
                  <p className={styles.salonName}>
                    {
                      item.name
                    }
                  </p>

                  <div className="flex  gap-2">
                    <Image className={styles.phoneImage} src={phone} />

                    <div className={styles.numbers}>
                      <p className={styles.number}>{item.phone1}</p>
                      <p className={`${styles.number} ml-3`}>{item.phone2}</p>
                      <p className={styles.number}>{item.phone3}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Image className={styles.locationImage} src={location} />

                    <p className={styles.location}>
                        {
                          item.address
                        }
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default Content
