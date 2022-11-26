import React from "react";
import { DataTable } from "./DataTable";
import { Navbar } from "./Navbar";

export const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <DataTable />
    </>
  );
};
