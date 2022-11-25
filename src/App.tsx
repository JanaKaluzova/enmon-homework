import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import { EditMeterModal } from "./components/EditMeterModal";
import Login from "./components/login";
import { NoMatchPage } from "./components/NoMatchPage";
import { ProtectedRoute } from "./utils/ProtectedRoute";

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
