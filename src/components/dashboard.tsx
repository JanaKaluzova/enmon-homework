import React from "react";
import { DataTable } from "./DataTable";
import { Navbar } from "./Navbar";

const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <DataTable />
    </>
  );
};

export default Dashboard;
