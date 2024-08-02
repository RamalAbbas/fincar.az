import React from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import Company from "../../../components/Admin/Company/CompanyInf";
const page = () => {
  return (
    <div style={{padding: "32px 156px 92px 28px",display: "flex" }}>
      <Sidebar/>
      <Company/>
    </div>
  );
};

export default page;
