import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AdminRoute, ProtectedRoute } from './ProtectedRoute';

import Login from '../components/Login';
import Register from '../components/Register';
import ForgotPassword from '../components/ForgotPassword';
import AdminDashboardWrapper from '../components/AdminDashboardWrapper';
import EmployeeDashboardWrapper from '../components/EmployeeDashboardWrapper';
import ChatWrapper from '../components/ChatWrapper';
import ChatHistoryWrapper from '../components/ChatHistoryWrapper';
import DocumentsWrapper from '../components/DocumentsWrapper';
import UsersWrapper from '../components/UsersWrapper';
import SettingsWrapper from '../components/SettingsWrapper';

function DashboardByRole() {
  const { isAdmin } = useAuth();
  return isAdmin ? <AdminDashboardWrapper /> : <EmployeeDashboardWrapper />;
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Any logged-in user */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardByRole />} />
        <Route path="/chat" element={<ChatWrapper />} />
        <Route path="/history" element={<ChatHistoryWrapper />} />
        <Route path="/settings" element={<SettingsWrapper />} />

        {/* Administrator only (SRS 2.3) */}
        <Route element={<AdminRoute />}>
          <Route path="/documents" element={<DocumentsWrapper />} />
          <Route path="/users" element={<UsersWrapper />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
