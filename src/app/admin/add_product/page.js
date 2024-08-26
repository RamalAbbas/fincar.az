import React from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import AddProduct from "../../../components/Admin/AddProduct/AddProduct";
import styles from './style.module.css'

const Page = () => {
  return (
    <div className={`${styles.wrapper}`} style={{display: "flex",justifyContent: 'center', padding: "32px 0px 92px 0px"}} >
      <div className={styles.container}>
        <Sidebar />
        <AddProduct />
      </div>
    </div>
  );
};

export default Page;
