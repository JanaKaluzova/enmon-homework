import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute: React.FC = () => {
  const apiKey = localStorage.getItem("userInfo");

  if (!apiKey) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
