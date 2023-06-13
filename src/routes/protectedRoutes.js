import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { checkAuth } from '../hooks/checkAuth';


export const ProtectedRoutes = () => {
  return (checkAuth()?
    <Outlet/>
    : <Navigate to="/signin"/>
  )
}
