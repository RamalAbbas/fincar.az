import React from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import Company from "../../../components/Admin/Company/CompanyInf";
import styles from "./Information.module.css"
const page = () => {
  return (
    <div className={styles.container}>
      <Sidebar/>
      <Company/>
    </div>
  );
};

export default page;
