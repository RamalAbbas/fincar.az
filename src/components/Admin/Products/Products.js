"use client";
import { useRouter } from "next/navigation";
import styles from "./Products.module.css";
import card_img from "../../../assets/images/admin/card/card.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { dealerDetailSlug, deleteCar } from "../../../services";
import { toast } from "react-toastify";
import Card from '../Card/Card'
const Products = () => {
  const { push } = useRouter();
  const [isActiveCrud, setIsActiveCrud] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [data, setData] = useState([]);
  const [slug, setSlug] = useState("");
  const [topDropdownMenu, setTopDropdownMenu] = useState(false)
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
  };

  const editProductFunction = (slug) => {
    push(`/admin/edit_product/${slug}`)
  }

  const handleDropdownMenu = () => {
    setTopDropdownMenu(!topDropdownMenu)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.top}>
            <div onClick={handleDropdownMenu} className={styles.filterBody}>
              <span className={styles.filter_title}>All products</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 10L12 14L16 10" stroke="#878CA8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            
            {
              topDropdownMenu && (
                  <div className={styles.dropdownBottom}>
                      <p className={styles.dropdownTitle}>
                        Bütün elanlar
                      </p>
                      <p className={styles.dropdownTitle}>
                        Saytda
                      </p>
                      <p className={styles.dropdownTitle}>
                        Gözləmədə
                      </p>
                      <p className={styles.dropdownTitle}>
                        İmtina olunmuş
                      </p>
                  </div>
              )
            }
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
          <Card item={item} renderDelete={renderProducts} />
        ))}
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
    </div>
  );
};

export default Products;
