"use client";
import { useRouter } from "next/navigation";
import styles from "./Products.module.css";
import card_img from "../../../assets/images/admin/card/card.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { dealerDetailSlug, deleteCar } from "../../../services";

const Products = () => {
  const { push } = useRouter();
  const [isActiveCrud, setIsActiveCrud] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [data, setData] = useState([]);
  const [slug, setSlug] = useState("");
  const token = Cookies.get("admin_data")
      ? JSON.parse(Cookies.get("admin_data")).access_token
      : "";
  const renderProducts = async () => {
    const slug = Cookies.get("admin_data")
      ? JSON.parse(Cookies.get("admin_data")).slug
      : "";
    const res = await dealerDetailSlug(slug);
    console.log(res?.cars);
    setData(res);
  };

  useEffect(() => {
    renderProducts();
  }, []);

  const handleDelete = (slug) => {
    setDeleteModal(true);
    setSlug(slug);
  };

  const deleteCard = async () => {
    const res = await deleteCar(slug,token);
    setDeleteModal(false)
    renderProducts()
  };

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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3327 10H6.66602"
              stroke="#505673"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Add product</span>
        </button>
      </div>

      <div className={styles.cards}>
        {data?.cars?.map((item) => (
          <div
            onMouseLeave={() => setIsActiveCrud(false)}
            onMouseEnter={() => setIsActiveCrud(true)}
            className={styles.card}
          >
            <div>
              <img
                src={item?.cover}
                style={styles.item_img}
                alt="Product Image"
              />
            </div>
            <p className={styles.name}>
              {item?.make?.name} {item?.model?.name} {item?.volume} L <br />{" "}
              {item?.year} il, {item?.distance} {item?.distance_unit}
            </p>
            <p className={styles.history}>{item?.year}</p>
            <p className={styles.seenCount}>Baxış sayı: {item?.views}</p>

            {isActiveCrud ? (
              <div className={styles.crudBody}>
                <div className={styles.editButton}>Edit product</div>
                <div
                  onClick={() => handleDelete(item.slug)}
                  className={styles.deleteButton}
                >
                  Delete product
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>

      {deleteModal ? (
        <div className={styles.deletemodal}>
          <div className={styles.content}>
            <p className={styles.deleteTitle}>Delete Account?</p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button onClick={deleteCard} className={styles.deleteButtonModal}>
              Delete
            </button>
            <button
              className={styles.cancelButtonModal}
              onClick={() => setDeleteModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Products;
