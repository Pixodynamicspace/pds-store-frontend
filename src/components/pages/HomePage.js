import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../footer/Footer';
import { Header } from '../header/MainHeader';

export const HomePage = () => {
  return (
    <div className=' flex flex-col min-h-screen justify-between'>
      <Header/>
      <div className=' overflow-y-auto dark:bg-primary-dark bg-slate-300 dark:text-white'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}