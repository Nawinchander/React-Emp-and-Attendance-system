import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ApplyLeave from "../pages/ApplyLeave";
import ManagerPanel from "../pages/ManagerPanel";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/apply-leave"
        element={
          <ProtectedRoute>
            <ApplyLeave />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manager"
        element={
          <ProtectedRoute role="manager">
            <ManagerPanel />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

