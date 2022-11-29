import { Box, Modal, Typography } from "@mui/material";
import { Container } from "@mui/system";
import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridSortItem,
} from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Meter } from "../api/types";
import EditIcon from "@mui/icons-material/Edit";
import { EditMeterForm, MeterSlim } from "./EditMeterForm";
import { API_URL } from "../utils/constants";
import { useGetUserInfo } from "../hooks/useGetUserInfo";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export const DataTable: React.FC = () => {
  const columns: GridColumns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "owner", headerName: "OWNER", flex: 1 },
    { field: "tenant", headerName: "TENANT", flex: 1 },
    {
      field: "serial_number",
      headerName: "SERIAL NUMBER",
      flex: 1,
    },
    {
      field: "monitored_entity",
      headerName: "MONITORED ENTITY",
      flex: 1,
    },
    {
      field: "note",
      headerName: "NOTE",
      flex: 1,
    },
    {
      field: "actions",
      type: "actions",
      flex: 1,

      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => {
            selectedID.current = Number(params.id);
            handleOpen();
          }}
        />,
      ],
    },
  ];

  const userInfo = useGetUserInfo();
  const selectedID = useRef<number | undefined>(undefined);
  const [tableData, setTableData] = useState<Meter[]>([]);
  const [pageState, setPageState] = useState({
    isLoading: false,
    total: 500,
    page: 0,
    pageSize: 10,
  });
  const [sortState, setSortState] = useState<GridSortItem | undefined>({
    field: "id",
    sort: "asc",
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEditMeter = async (meter: MeterSlim) => {
    if (selectedID.current) {
      await updateMeter(selectedID.current, meter);

      setOpen(false);
      getTableData(pageState.page, pageState.pageSize, sortState);
    }
  };

  const getTableData = async (
    page: number,
    pageSize: number,
    sort: GridSortItem | undefined
  ) => {
    if (!userInfo) {
      return;
    }

    const sortParam = sort ? `&_sort=${sort.field}:${sort.sort}` : "";

    const response = await axios.get<Meter[]>(
      `${API_URL}/inventory-meters?_start=${
        page * pageSize
      }&_limit=${pageSize}${sortParam}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.jwt}`,
        },
      }
    );

    setTableData(response.data);
  };

  const updateMeter = async (id: number, meter: MeterSlim) => {
    try {
      if (!userInfo) {
        return;
      }

      await axios.put<Meter>(`${API_URL}/inventory-meters/${id}`, meter, {
        headers: {
          Authorization: `Bearer ${userInfo.jwt}`,
        },
      });
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getTableData(pageState.page, pageState.pageSize, sortState);
  }, [pageState.page, pageState.pageSize, sortState]);

  const initialData: MeterSlim = tableData.find(
    (x) => x.id === selectedID.current
  ) ?? {
    monitored_entity: "",
    note: "",
    owner: "",
    serial_number: "",
    tenant: "",
  };

  return (
    <Container sx={{ margin: 3 }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Edit meter
          </Typography>
          <EditMeterForm
            onEditMeter={handleEditMeter}
            initialValue={initialData}
            onCancel={handleClose}
          />
        </Box>
      </Modal>
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
