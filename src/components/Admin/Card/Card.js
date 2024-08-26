"use client";
import { useRouter } from "next/navigation";
import styles from "./Card.module.css";
import card_img from "../../../assets/images/admin/card/card.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { dealerDetailSlug, deleteCar } from "../../../services";
import { toast } from "react-toastify";

const Products = ({item,renderDelete}) => {
  const { push } = useRouter();
  const [isActiveCrud, setIsActiveCrud] = useState(false);
  const [isActiveCrudMobile, setIsActiveCrudMobile] = useState(false);
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
    setData(res);
  };

  useEffect(() => {
    renderProducts();
  }, []);

  const handleDelete = (slug) => {
    setDeleteModal(true);
    setIsActiveCrudMobile(false)
    setSlug(slug);
  };

  const deleteCard = async () => {
    const res = await deleteCar(slug, token);
    if (!res) {
      toast.success("Silindi");
      renderProducts();
    } else {
      toast.error("Silinmədi !");
    }
    setDeleteModal(false);
    renderDelete()

  };

  const editProductFunction = (slug) => {
    push(`/admin/edit_product/${slug}`)
  }

  const handleDeleteMobile = () => {
    setIsActiveCrudMobile(!isActiveCrudMobile)
  }

  console.log(item);

  return (
     <>
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
              {item?.make?.name} {item?.model?.name}, {item?.volume} L,{" "}
              {item?.year} il, {item?.distance} {item?.distance_unit}
            </p>

            <p className={styles.history}>
              {item?.year}, 
              <span className="ml-1">{item?.volume}L</span>, 
              <span className="ml-1">
                {item?.distance}
                {item?.distance_unit}
              </span>
            </p>

            <p className={styles.seenCount}>Baxış sayı: {item?.views}</p>

            {isActiveCrud ? (
              <div className={styles.crudBody}>
                <div onClick={() => editProductFunction(item.slug)} className={styles.editButton}>Edit product</div>
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

            {isActiveCrudMobile ? (
              <div onClick={() => setIsActiveCrudMobile(false)} className={styles.overlay}>
                <div className={styles.bg}>
                  <div className={styles.crudBodyMobile}>
                    <div onClick={() => editProductFunction(item.slug)} className={styles.editButtonMobile}>Edit product</div>
                    <div
                      onClick={() => handleDelete(item.slug)}
                      className={styles.deleteButtonMobile}
                    >
                      Delete Car
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}

            <div onClick={handleDeleteMobile} className={styles.mobileCrudButton}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.33268 8.00004C9.33268 8.73642 8.73573 9.33337 7.99935 9.33337C7.26297 9.33337 6.66602 8.73642 6.66602 8.00004C6.66602 7.26366 7.26297 6.66671 7.99935 6.66671C8.73573 6.66671 9.33268 7.26366 9.33268 8.00004Z" fill="#2D264B"/>
                <path d="M9.33268 2.66671C9.33268 3.40309 8.73573 4.00004 7.99935 4.00004C7.26297 4.00004 6.66602 3.40309 6.66602 2.66671C6.66602 1.93033 7.26297 1.33337 7.99935 1.33337C8.73573 1.33337 9.33268 1.93033 9.33268 2.66671Z" fill="#2D264B"/>
                <path d="M9.33268 13.3334C9.33268 14.0698 8.73573 14.6667 7.99935 14.6667C7.26297 14.6667 6.66602 14.0698 6.66602 13.3334C6.66602 12.597 7.26297 12 7.99935 12C8.73573 12 9.33268 12.597 9.33268 13.3334Z" fill="#2D264B"/>
              </svg>
            </div>


          </div>

      {deleteModal ? (
        <div className={styles.deletemodal}>
          <div className={styles.content}>
            <p className={styles.deleteTitle}>Delete Car?</p>
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
      </>
  );
};

export default Products;
