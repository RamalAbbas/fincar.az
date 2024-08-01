"use client";
import { useRouter } from "next/navigation";
import styles from "./Products.module.css";
import card_img from "../../../assets/images/admin/card/card.png";
import Image from "next/image";
const Products = () => {
  const { push } = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.top}>
          <div className={styles.filterBody}>
            <span className={styles.filter_title}>All product</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 10L12 14L16 10"
                stroke="#878CA8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div></div>
        </div>

        <button
          onClick={() => push("/admin/add_product")}
          className={styles.add_product_button}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0007 6.66667V13.3333"
              stroke="#505673"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3327 10H6.66602"
              stroke="#505673"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Add product</span>
        </button>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <Image src={card_img} alt="" />
          <p className={styles.name}>
            Changan CS 85, 2.0 L <br></br> 2022 il, 25 000 km
          </p>
          <p className={styles.history}>07.05.2024</p>
          <p className={styles.seenCount}>Baxış sayı: 7489</p>
        </div>

        <div className={styles.card}>
          <Image src={card_img} alt="" />
          <p className={styles.name}>
            Changan CS 85, 2.0 L <br></br> 2022 il, 25 000 km
          </p>
          <p className={styles.history}>07.05.2024</p>
          <p className={styles.seenCount}>Baxış sayı: 7489</p>
        </div>

        <div className={styles.card}>
          <Image src={card_img} alt="" />
          <p className={styles.name}>
            Changan CS 85, 2.0 L <br></br> 2022 il, 25 000 km
          </p>
          <p className={styles.history}>07.05.2024</p>
          <p className={styles.seenCount}>Baxış sayı: 7489</p>
        </div>

        <div className={styles.card}>
          <Image src={card_img} alt="" />
          <p className={styles.name}>
            Changan CS 85, 2.0 L <br></br> 2022 il, 25 000 km
          </p>
          <p className={styles.history}>07.05.2024</p>
          <p className={styles.seenCount}>Baxış sayı: 7489</p>
        </div>

        <div className={styles.card}>
          <Image src={card_img} alt="" />
          <p className={styles.name}>
            Changan CS 85, 2.0 L <br></br> 2022 il, 25 000 km
          </p>
          <p className={styles.history}>07.05.2024</p>
          <p className={styles.seenCount}>Baxış sayı: 7489</p>
        </div>

        <div className={styles.card}>
          <Image src={card_img} alt="" />
          <p className={styles.name}>
            Changan CS 85, 2.0 L <br></br> 2022 il, 25 000 km
          </p>
          <p className={styles.history}>07.05.2024</p>
          <p className={styles.seenCount}>Baxış sayı: 7489</p>
        </div>

        <div className={styles.card}>
          <Image src={card_img} alt="" />
          <p className={styles.name}>
            Changan CS 85, 2.0 L <br></br> 2022 il, 25 000 km
          </p>
          <p className={styles.history}>07.05.2024</p>
          <p className={styles.seenCount}>Baxış sayı: 7489</p>
        </div>

        <div className={styles.card}>
          <Image src={card_img} alt="" />
          <p className={styles.name}>
            Changan CS 85, 2.0 L <br></br> 2022 il, 25 000 km
          </p>
          <p className={styles.history}>07.05.2024</p>
          <p className={styles.seenCount}>Baxış sayı: 7489</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
