import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../components/home';
import { HomePage } from '../components/pages/HomePage';
import { LoginPage } from '../components/pages/LoginPage';
import { SignupPage } from '../components/pages/SignupPage';

export const IndexRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route path='/' element={<Home/>} />
        </Route>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='*' element={<HomePage/>} />

      </Routes>
    </Router>
  )
}
