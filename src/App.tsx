import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NoMatchPage } from "./components/NoMatchPage";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
