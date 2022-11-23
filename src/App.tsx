import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import { NoMatchPage } from "./components/NoMatchPage";
import { ProtectedRoute } from "./utils/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route index element={<Login />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
