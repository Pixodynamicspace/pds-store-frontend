import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const useAuth = ()=>{
    const token = JSON.parse(localStorage.getItem('token'));
    return token? true : false;
}
export const ProtectedRoutes = () => {
  return (useAuth()?
    <Outlet/>
    : <Navigate to="/signin"/>
  )
}
