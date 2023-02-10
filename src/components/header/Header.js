import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/pds-logo.svg';
import {ThemeToggleBtn} from '../buttons/themeToggle';

export const Header = () => {
    const linkStyle =' hover:border-b-2 transition-all';
  return (
    <div className=' bg-primary-base py-4'>
        <div className=' flex justify-between mb-2 text-white py-0 px-20'>
            <NavLink to='' className=' flex'>
                <div className=' w-16'>
                    <img src={logo} alt='pds logo'/>
                </div>
            </NavLink>
            <div className=' flex justify-center items-center space-x-8 transition-all'>
                <NavLink to="" className={linkStyle} >
                    Home
                </NavLink>
                <NavLink to="" className={linkStyle} >
                    Collections
                </NavLink>
                <NavLink to="" className={linkStyle} >
                    Shop
                </NavLink>
                <NavLink to="" className={linkStyle} >
                    Marketplace
                </NavLink>
                <NavLink to="" className={linkStyle} >
                    Cart
                </NavLink>
            </div>
            <div className=' flex items-center space-x-4'>
                <NavLink to="/signup" className={linkStyle} >
                    Register
                </NavLink>
                <NavLink to="/login" className={linkStyle} >
                    Login
                </NavLink>
                <NavLink to="" className=' bg-primary-orange-base hover:bg-primary-orange-muted text-sm px-4 py-2' >
                    Sell Now
                </NavLink>
                <ThemeToggleBtn/>
            </div>
        </div>
        <div className=' flex justify-center w-2/5 mx-auto'>
            <select className=' bg-primary-orange-base focus:outline-none hover:bg-primary-orange-muted 
            py-2 text-white w-2/5 text-center '>
                <option value="all">All Category</option>
                <option value="all">Electronics</option>
                <option value="all">Funiture</option>
            </select>
            <input className=' focus:outline-none p-1 w-3/5' type="text" name="" placeholder='Search for anything'/>
        </div>
    </div>
    
  )
}
