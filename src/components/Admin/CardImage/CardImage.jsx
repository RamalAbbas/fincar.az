import React, { useState } from 'react'

import styles from './CardImage.module.css'
const CardImage = ({ image , index , deleteImage }) => {
  const [imageDelete, setImageDelete] = useState(false);

  return (
    <div 
        className={styles.cardImage} 
        onMouseEnter={() => setImageDelete(true)}
        onMouseLeave={() => setImageDelete(false)}
    >
            <div
                
                className={styles.imgBody}
            >
                <img
                    key={index}
                    src={image}
                    alt={`Selected preview ${index}`}
                    className={styles.uploadedImage}
                />
            </div>

            {imageDelete ? (
                <div className={styles.imageDelete} onClick={() => deleteImage(image)}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            width="24"
                            height="24"
                            rx="2"
                            fill="#878CA8"
                            fill-opacity="0.55"
                        />
                        <path
                            d="M8 8L16 16"
                            stroke="#141A33"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M16 8L8 16"
                            stroke="#141A33"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            ) : (
                <></>
            )}
    </div>
  )
}

export default CardImage