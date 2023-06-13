import React from 'react';
import { DesktopFooter } from './DesktopFooter';
import { MobileFooter } from './MobileFooter';


export const Footer = () => {
    
  return (
    <div>
        <div className=' hidden lg:block'>
            <DesktopFooter/>
        </div>
        <div className=' lg:hidden'>
            <MobileFooter/>
        </div>
    </div>
  )
}
