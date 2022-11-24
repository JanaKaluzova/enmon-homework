import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { DataGrid, GridColDef, GridSortItem } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { LoginResponse, Meter } from "../api/types";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "owner", headerName: "OWNER", width: 150 },
  { field: "tenant", headerName: "TENANT", width: 150 },
  { field: "serial_number", headerName: "SERIAL NUMBER", width: 150 },
  { field: "meter_type", headerName: "METER TYPE", width: 150 },
  { field: "monitored_entity", headerName: "MONITORED ENTITY", width: 180 },
  { field: "accessibility", headerName: "ACCESSIBILITY", width: 150 },
];

export const DataTable: React.FC = () => {
  const [tableData, setTableData] = useState<Meter[]>([]);
  const [pageState, setPageState] = useState({
    isLoading: false,
    total: 500,
    page: 0,
    pageSize: 10,
  });
  const [sortState, setSortState] = useState<GridSortItem>({
    field: "id",
    sort: "asc",
  });

  const getTableData = async (
    page: number,
    pageSize: number,
    sort: GridSortItem
  ) => {
    try {
      const storedData = localStorage.getItem("userInfo");

      if (!storedData) {
        alert("Data in local storage not found.");
        return;
      }

      const userInfo: LoginResponse = JSON.parse(storedData);

      const repsonse = await axios.get<Meter[]>(
        `https://tools.dev.enmon.tech/api/inventory-meters?_start=${
          page * pageSize
        }&_limit=${pageSize}&_sort=${sort.field}:${sort.sort}`,
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
    getTableData(pageState.page, pageState.pageSize, sortState);
  }, [pageState.page, pageState.pageSize, sortState]);

  return (
    <Container sx={{ margin: 3 }}>
      <Box style={{ height: 700, width: "100%" }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={pageState.pageSize}
          loading={pageState.isLoading}
          page={pageState.page}
          paginationMode="server"
          rowCount={pageState.total}
          rowsPerPageOptions={[10, 50, 100]}
          onPageChange={(newPage) =>
            setPageState((old) => ({ ...old, page: newPage }))
          }
          onPageSizeChange={(newPageSize) =>
            setPageState((old) => ({ ...old, pageSize: newPageSize }))
          }
          sortingMode="server"
          onSortModelChange={(newSort) => setSortState(newSort[0])}
        />
      </Box>
    </Container>
  );
};
