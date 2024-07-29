"use client";
import { useRouter } from "next/navigation";
import styles from "./Products.module.css";

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
    </div>
  );
};

export default Products;
