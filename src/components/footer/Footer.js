import React from 'react';
import { DesktopFooter } from './DesktopFooter';
import { MobileFooter } from './MobileFooter';


export const Footer = () => {
    
  return (
    <div>
        <div className=' hidden md:block'>
            <DesktopFooter/>
        </div>
        <div className=' md:hidden'>
            <MobileFooter/>
        </div>
    </div>
  )
}
