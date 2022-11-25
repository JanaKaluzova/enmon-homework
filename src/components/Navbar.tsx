import { Box, Button, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginResponse } from "../api/types";

export const Navbar: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const navigate = useNavigate();

  const storedData = localStorage.getItem("userInfo");

  if (!storedData) {
    alert("Data in local storage not found.");
    return null;
  }

  const userInfo: LoginResponse = JSON.parse(storedData);

  return (
    <Box display="flex" justifyContent="flex-end">
      <Toolbar>
        <Typography
          sx={{ marginRight: 5 }}
        >{`${userInfo.user.username} (${userInfo.user.email})`}</Typography>
        <Button
          onClick={() => {
            setLoggedIn(false);
            localStorage.removeItem("userInfo");
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
