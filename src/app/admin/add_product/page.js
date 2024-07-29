"use client";
import React from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import AddProduct from "../../../components/Admin/AddProduct/AddProduct";

const Page = () => {
  return (
    <div style={{ padding: "32px 156px 92px 28px", display: "flex" }}>
      <Sidebar />
      <AddProduct />
    </div>
  );
};

export default Page;
