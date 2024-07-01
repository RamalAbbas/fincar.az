import Image from 'next/image'
import styles from './Card.module.css'
import save from '../../../assets/icons/save.svg'

const Card = ({ data , callBackSlug }) => {
  const { slug , cover , make , model } = data

  return (
    <div onClick={() => callBackSlug(slug)} className={styles.product}>
        <img 
            src={cover}
            className={styles.productImage}
        />

        <Image 
            src={save}
            className={styles.saveImage}
        />

        <p className={styles.productName}>
            {
              make.name
            }
            {
              model.name
            }
        </p>

        <p className={styles.productTitle}>
            {
              slug
            }
        </p>

        <p className={styles.productPrice}>

        </p>
    </div>
  )
}

export default Card