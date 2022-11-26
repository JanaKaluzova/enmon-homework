import { Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { userInfoStorageKey } from "../utils/constants";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const userInfo = useGetUserInfo();

  if (!userInfo) {
    return null;
  }

  return (
    <Box display="flex" justifyContent="flex-end">
      <Toolbar>
        <Typography
          sx={{ marginRight: 5 }}
        >{`${userInfo.user.username} (${userInfo.user.email})`}</Typography>
        <Button
          onClick={() => {
            localStorage.removeItem(userInfoStorageKey);
            navigate("/login");
          }}
          variant="contained"
          color="primary"
        >
          Log Out
        </Button>
      </Toolbar>
    </Box>
  );
};
