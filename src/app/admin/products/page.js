import React from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import Products from "../../../components/Admin/Products/Products";
const page = () => {
  return (
    <div style={{ display: "flex", padding: "32px 291px 92px 28px" }}>
      <Sidebar />

      <Products />
    </div>
  );
};

export default page;
