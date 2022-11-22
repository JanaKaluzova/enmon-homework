import { Box, responsiveFontSizes } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { LoginResponse, Meter } from "../api/types";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "inventory_location.name", headerName: "name", width: 150 },
  { field: "serial_number", headerName: "serial_number", width: 150 },
  { field: "meter_type", headerName: "meter_type", width: 150 },
];

export const DataTable = () => {
  const [tableData, setTableData] = useState<Meter[]>([]);

  const getTableData = async () => {
    try {
      const u = localStorage.getItem("userInfo");

      if (!u) {
        alert("nejsou data");
        return;
      }

      const userInfo: LoginResponse = JSON.parse(u);

      const repsonse = await axios.get<Meter[]>(
        "https://tools.dev.enmon.tech/api/inventory-meters",
        {
          headers: {
            Authorization: `Bearer ${userInfo.jwt}`,
          },
        }
      );

      setTableData(repsonse.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <Box style={{ height: 700, width: "100%" }}>
      <DataGrid rows={tableData} columns={columns} pageSize={50} />
    </Box>
  );
};
