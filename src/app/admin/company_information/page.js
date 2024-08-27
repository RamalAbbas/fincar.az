"use client"
import React, { useState } from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import Company from "../../../components/Admin/Company/CompanyInf";
import styles from "./Information.module.css"
import { useRouter } from "next/navigation";
const page = () => {
  const { push } = useRouter()
  const [menu,setMenu] = useState(true)
  return (
    <div className={styles.container}>
      <Sidebar/>
      <div style={{display: !menu ? "flex" : "none"}} className={styles.company_boody}>
        <Company/>
      </div>

      <div className={`${styles.mobile_company} ${menu && styles.active_mobile_company }`}>
        <p onClick={() => setMenu(!menu)}>
          Company information
        </p>

        <p onClick={() => push("/admin/products")}>
          Products
        </p>
      </div>
    </div>
  );
};

export default page;
