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
            <p className={styles.history}>{item?.year}</p>
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
      </>
  );
};

export default Products;
