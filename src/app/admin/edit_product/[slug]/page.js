import React from "react";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar";
import EditProduct from "../../../../components/Admin/EditProduct/EditProduct";
import styles from './style.module.css'
const Page = ({params}) => {
  
  return (
    <div className={`${styles.wrapper}`} style={{display: "flex",justifyContent: 'center', padding: "32px 0px 92px 0px"}} >
      <div className={styles.container}>
        <Sidebar />
        <EditProduct slug={params.slug} />
      </div>
    </div>
  );
};

export default Page;
