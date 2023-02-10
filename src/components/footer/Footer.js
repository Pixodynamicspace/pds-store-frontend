import React from 'react';
import {FiPhone, FiMapPin, FiMail} from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Footer = () => {
    const footerLinkStyle = ' flex space-x-2 items-start mb-4 hover:border-b-2 text-sm transition-all';
    const footerHeadStyle = ' font-semibold text-xl mb-4';
    const iconSize = 20;
  return (
    <div className=' bg-primary-base px-20 py-2 text-white flex justify-between '>
        <div>
            <h3 className={footerHeadStyle}>Bed Side Lamp</h3>
            <div>
                <div className={footerLinkStyle}>
                    <FiMail size={iconSize} />
                    <button onClick={() => window.location = 'mailto:pixodynamicspace@gmail.com'}>pixodynamicspace@gmail.com</button>
                </div>
            </div>
            <div className={footerLinkStyle}>
                <FiPhone size={iconSize} />
                <button onClick={() => window.location = 'tel:+2348073590248'}>+234 807 359 0248</button>
            </div>
            <div className={footerLinkStyle}>
                <FiMapPin size={iconSize} />
                <p className=' text-xs w-48'>PLOT 1, GREAT CRAVIS GLOBAL ENTERPRISES OFF WISDOM IDEAL INTEGRATED FARM LIMITED STREET ALONG OGHIOR ROAD UKPIOVWIN, UDU, DELTA STATE, NIGERIA</p>
            </div>
        </div>
        <div>
            <h3 className={footerHeadStyle}>INFORMATION</h3>
            <div className={footerLinkStyle}>
                <Link to=''>About Us</Link>
            </div>
            <div className={footerLinkStyle}>
                <Link to=''>FAQ</Link>
            </div>
            <div className={footerLinkStyle}>
                <Link to=''>Warranty and Services</Link>
            </div>
            <div className={footerLinkStyle}>
                <Link to=''>Support 24/7</Link>
            </div>
            <div className={footerLinkStyle}>
                <Link to=''>Product resignation</Link>
            </div>
            <div className={footerLinkStyle}>
                <Link to=''>Product Support</Link>
            </div>
        </div>
        <div>
            <h3 className={footerHeadStyle}>MY ACCOUNT</h3>
            <div className={footerLinkStyle}>
                <Link to=''>Brand</Link>
            </div>
            <div className={footerLinkStyle}>
                <Link to=''>Gift Certificates</Link>
            </div>
            <div className={footerLinkStyle}>
                <Link to=''>Affiliates</Link>
            </div>
            <div className={footerLinkStyle}>
                <Link to=''>Specials</Link>
            </div>
            <div className={footerLinkStyle}>
                <Link to=''>FAQs</Link>
            </div>
            <div className={footerLinkStyle}>
                <Link to=''>Custom Link</Link>
            </div>
        </div>
        <div>
            <h3 className={footerHeadStyle}>SERVICES</h3>
            <div className={footerLinkStyle}>
                <Link to=''>Contact Us</Link>
            </div>
            <div className={footerLinkStyle}>
                <Link to=''>Returns</Link>
            </div>
            <div className={footerLinkStyle}>
                <Link to=''>Support</Link>
            </div>
            <div className={footerLinkStyle}>
                <Link to=''>Site Map</Link>
            </div>
            <div className=' bg-orange-500 py-1 px-2 cursor-pointer hover:bg-orange-400'>
                <Link to=''>Make a Gift</Link>
            </div>
        </div>

    </div>
  )
}
