import React from 'react';
import { NavBar } from './NavBar';
import { ProductSearch } from './ProductSearch';




export const Header = () => {
  return (
    <div className=' bg-primary-base py-4 z-50'>
        <NavBar/>
        <ProductSearch/>
    </div>
    
  )
}
