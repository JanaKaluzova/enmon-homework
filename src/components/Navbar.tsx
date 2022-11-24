import { Box, Button, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <Box display="flex" justifyContent="flex-end">
      <NavLink to={"/login"} style={{ textDecoration: "none" }}>
        <Toolbar>
          <Button
            onClick={() => {
              setLoggedIn(false);
              localStorage.clear();
            }}
            variant="contained"
            color="primary"
          >
            Log Out
          </Button>
        </Toolbar>
      </NavLink>
    </Box>
  );
};
