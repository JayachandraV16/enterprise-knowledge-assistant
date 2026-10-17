import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminSidebarOverlay from '../components/AdminSidebarOverlay';
import EmployeeSidebarOverlay from '../components/EmployeeSidebarOverlay';

/** Any logged-in user (Employee or Admin). */
export function ProtectedRoute() {
  const { user, isAdmin } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // /register is a dedicated full-page form, so skip the sidebar overlay there
  const showSidebar = location.pathname !== '/register';

  return (
    <div className="size-full relative">
      <Outlet />
      {showSidebar && (isAdmin ? <AdminSidebarOverlay /> : <EmployeeSidebarOverlay />)}
    </div>
  );
}

/** Administrator only: documents, users, user registration. */
export function AdminRoute() {
  const { isAdmin } = useAuth();
  return isAdmin ? <Outlet /> : <Navigate to="/dashboard" replace />;
}
