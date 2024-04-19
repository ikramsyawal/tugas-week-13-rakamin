import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes() {
  const token = localStorage.getItem('token');
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoutes;
