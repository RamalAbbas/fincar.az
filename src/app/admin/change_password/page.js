import React from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ChangePassword from "../../../components/Admin/ChangePassword/ChangePassword";

const Page = () => {
  return (
    <div style={{ padding: "32px 156px 92px 28px", display: "flex" }}>
      <Sidebar />
      <ChangePassword />
    </div>
  );
};

export default Page;
