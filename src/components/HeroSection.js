import React from 'react'
import { CategoriesTab } from './CategoriesTab'
import { HeroCarousel } from './HeroCarousel'

export const HeroSection = () => {
  return (
    <section>
        <div className=' md:flex w-full items-start justify-center p-4'>
            <div className=' w-1/5 hidden md:block'>
                <CategoriesTab/>
            </div>
            <div className=' w-3/5 mx-auto md:mx-0'>
                <HeroCarousel/>
            </div>
        </div>
        <div>
            features
        </div>
    </section>
  )
}
