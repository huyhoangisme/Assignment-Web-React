import React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';
import { useAuthContext } from './AuthContext';
const PrivateOutlet = (path: RouteProps) => {
  const { authenticated, loading } = useAuthContext();
  if (loading) return null;
  return authenticated ? <Route {...path} /> : <Navigate to="/login" replace />;
};
export default PrivateOutlet;
