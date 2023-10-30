import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../footer/Footer';
import { Header } from '../header/MainHeader';

export const DashboardPage = () => {
  return (
    <div className=' flex flex-col min-h-screen dark:bg-primary-dark justify-between'>
      <Header/>
      <div className=' overflow-y-auto h-full bg-inherit dark:text-white'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}