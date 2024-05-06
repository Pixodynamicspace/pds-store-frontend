import React, { useState, useEffect, useCallback } from 'react';
import { GET_ALL_CATEGORIES } from '../constants/links';
import axios from 'axios';
import { config } from '../constants/details';
import { ThreeCircles } from 'react-loader-spinner';
import { CategoryTabItem } from './CategoryTabItem';

export const CategoriesTab = () => {
    const [categories, setCategories] = useState([]);
    const fetchCategories = useCallback(async (signal) => {
        try {
           const result = await axios.get(GET_ALL_CATEGORIES, {signal,...config});
           setCategories(() => [...result.data?.categories]);
        } catch (error) {
           if (!signal.aborted) {
            console.log(error);
           }
        }
     }, []);
    useEffect(() => {
        
        const controller = new AbortController();
        const signal = controller.signal

        try {
            fetchCategories(signal);
        } catch (error) {
            console.log(error);
        }
        return () => controller.abort(signal.reason);
    }, [fetchCategories])

  return (
        <div className=' w-60 h-96 rounded-md overflow-x-hidden overflow-y-auto bg-white'>
            <p className=' bg-primary-orange-base px-10 py-2 text-white text-center'>Categories</p>
            <div className=' text-left text-black text-sm'>
                {categories? categories.map((category) =>(
                        <div key={category._id}><CategoryTabItem id={category._id} category_name={category.category_name} picture_url={category.picture_url}/></div>
                    ))
                :
                <div className=' flex justify-center bg-orange-600 py-1 mx-auto w-1/2 mb-2 '>
                    <ThreeCircles
                        height="30"
                        width="100"
                        color="#ffffff"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="three-circles-rotating"
                        outerCircleColor=""
                        innerCircleColor=""
                        middleCircleColor=""
                        />
                </div>
                }
            </div>
            
        </div>
  )
}
