import React from 'react';
import { NavBar } from './NavBar';
import { ProductSearch } from './ProductSearch';




export const Header = () => {
  return (
    <div className=' bg-primary-base py-4'>
        <NavBar/>
        <ProductSearch/>
    </div>
    
  )
}
