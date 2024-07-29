"use client";
import styles from "./Sidebar.module.css";
import { useRouter, usePathname } from "next/navigation";

const Sidebar = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <nav className={styles.sidebar}>
        <ul>
          <li onClick={() => push("/admin/company_information")}>
            {pathname === "/admin/company_information" && (
              <div className={styles.activeLine}></div>
            )}
            <a>Company information</a>
          </li>
          <li onClick={() => push("/admin/products")}>
            {(pathname === "/admin/products" ||
              pathname === "/admin/add_product") && (
              <div className={styles.activeLine}></div>
            )}
            <a>Products</a>
          </li>
          <li onClick={() => push("/admin/change_password")}>
            {pathname === "/admin/change_password" && (
              <div className={styles.activeLine}></div>
            )}
            <a>Change password</a>
          </li>
          <li className={styles.delete_item}>
            <a>Delete account</a>
          </li>
        </ul>
      </nav>
      <div className={styles.border}></div>
    </div>
  );
};

export default Sidebar;