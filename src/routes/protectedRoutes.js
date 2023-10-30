import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


export const ProtectedRoutes = () => {
  return (useAuth()?
    <Outlet/>
    : <Navigate to="/login"/>
  )
}
