import React from "react";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar";
import EditProduct from "../../../../components/Admin/EditProduct/EditProduct";

const Page = ({params}) => {
  
  return (
    <div style={{ padding: "32px 156px 92px 28px", display: "flex" }}>
      <Sidebar />
      <EditProduct slug={params.slug} />
    </div>
  );
};

export default Page;
