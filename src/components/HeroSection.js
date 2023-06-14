import React from 'react'
import { CategoriesTab } from './CategoriesTab';
import { HeroCarousel } from './HeroCarousel';
import secure_payment_icon from '../assets/secure_payment_icon.png';
import free_gift_icon from '../assets/free_gift-icon.png';
import discount_icon from '../assets/discount_icon.png';
import cash_on_delivery from '../assets/cash_on_delivery.png';


export const HeroSection = () => {
    const discount = 60
  return (
    <section>
        <div className=' lg:flex w-full gap-4 items-start justify-center p-4'>
            <div className=' w-1/5 hidden lg:block'>
                <CategoriesTab/>
            </div>
            <div className=' w-3/5 mx-auto lg:mx-0'>
                <HeroCarousel/>
            </div>
        </div>
        <div className='hidden bg-white mx-auto text-black px-4 py-8 w-4/5 rounded-md lg:flex gap-4 items-center justify-around '>
            <div className=' flex items-center gap-2'>
                <div className=' w-8'>
                    <img src={discount_icon} alt="secure payments"/>
                </div>
                <p>Get up to {discount}% Discount</p>
            </div>
            <div className=' flex items-center gap-2'>
                <div className=' w-8'>
                    <img src={cash_on_delivery} alt="secure payments"/>
                </div>
                <p>Cash on delivery</p>
            </div>
            <div className=' flex items-center gap-2'>
                <div className=' w-8'>
                    <img src={free_gift_icon} alt="secure payments"/>
                </div>
                <p>Free gift box</p>
            </div>
            <div className=' flex items-center gap-2'>
                <div className=' w-8'>
                    <img src={secure_payment_icon} alt="secure payments"/>
                </div>
                <p>Secure Payments</p>
            </div>
        </div>
    </section>
  )
}
