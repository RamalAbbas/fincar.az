import React from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import Products from "../../../components/Admin/Products/Products";
import styles from './style.module.css'
const page = () => {
  return (
    <div style={{ display: "flex",justifyContent: 'center', padding: "0px 0px 92px 0px" }}>
      <div className={styles.container}>
          <Sidebar />

          <Products />
      </div>
    </div>
  );
};

export default page;
