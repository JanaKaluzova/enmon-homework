import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userInfoStorageKey } from "../utils/constants";

export const ProtectedRoute: React.FC = () => {
  const apiKey = localStorage.getItem(userInfoStorageKey);

  if (!apiKey) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
