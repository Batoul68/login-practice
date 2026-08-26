import { Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoute({ token }) {
  console.log(token);
  return token ? <Outlet/> : <Navigate to="/login"/>
}