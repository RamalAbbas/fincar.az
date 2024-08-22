"use client";
import React from "react";
import BreadCrumb from "../../components/Common/BreadCrumb/BreadCrumb";
import User from "../../components/personalcabinet/header/User";
import styles from './style.module.css'
const Page = () => {

  return (
    <>
      <div className={styles.breadcrumb_container}>
        <BreadCrumb items={["User Account"]} />
      </div>
      <User />
    </>
  );
};

export default Page;
