import React from 'react'
import { NavLink } from 'react-router-dom';
import {AiOutlineLogout} from 'react-icons/ai';
import profile_image from '../../assets/profile_image.png';
import {ThemeToggleBtn} from '../buttons/themeToggle';
import logo from '../../assets/pds-logo.svg';
import { useUserContext } from '../../context/UserContext';
import useLogOut from '../../hooks/useLogOut';
import useAuth from '../../hooks/useAuth';

export const NavBar = () => {
    const linkStyle =' hover:border-b-2 transition-all';
    const loggedIn = useAuth();
    const { user } = useUserContext();

    const logOut = useLogOut()
    
  return (
    <div className=' flex justify-between items-center mb-2 text-white py-0 px-20'>
            <NavLink to='' className=''>
                <div className=' w-16'>
                    <img src={logo} alt='pds logo'/>
                </div>
            </NavLink>
            <div className='hidden lg:flex justify-center items-center space-x-8 transition-all'>
                <NavLink to="/" className={linkStyle} >
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
                <div className={`${loggedIn? 'flex ': 'hidden '} items-center space-x-2`}>
                    <div className=' w-6'>
                        <img src={user? user?.profile_pic : profile_image} alt=""/>
                    </div>
                    <NavLink to="/dashboard" className={linkStyle} >
                        {user? user?.fullName : 'User'}
                    </NavLink>
                </div>
                <div className={`${loggedIn? 'hidden ': 'block '} items-center space-x-2`}>
                    <NavLink to="/signup" className={linkStyle} >
                        Register
                    </NavLink>
                    <NavLink to="/login" className={linkStyle} >
                        Login
                    </NavLink>
                </div>
                
                <NavLink to="/dashboard/sell" className=' bg-primary-orange-base hover:bg-primary-orange-muted text-sm px-4 py-2' >
                    Sell Now
                </NavLink>
                <ThemeToggleBtn/>
                <div onClick={logOut} className=' p-2 rounded-lg cursor-pointer hover:bg-slate-300 hover:text-red-600 text-white' >
                    <AiOutlineLogout />
                </div>
            </div>
        </div>
  )
}
