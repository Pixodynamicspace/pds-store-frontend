import React, { useState, useEffect, useCallback } from 'react';
import { GET_ALL_CATEGORIES } from '../constants/links';
import axios from 'axios';
import { config } from '../constants/details';

export const CategoriesTab = () => {
    const [categories, setCategories] = useState([]);
    const fetchCategories = useCallback(async (signal) => {
        try {
           const result = await axios.get(GET_ALL_CATEGORIES, {signal,...config});
           setCategories(() => [...result.data.categories]);
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
            <p className=' bg-primary-orange-base px-8 py-2 text-white text-center'>Categories</p>
            <div className=' text-left text-black text-sm'>
                {categories? categories.map((category) =>(
                        <div className=' flex gap-1 items-center mx-auto px-4 py-2' key={category._id}>
                            <div className=' w-1/5'>
                                <img src={category.picture_url} alt={category.category_name}/>
                            </div>
                            <p className=' w-4/5'>{category.category_name}</p>
                        </div>
                    ))
                :
                    <div>
                        no data
                    </div>
                }
            </div>
            
        </div>
  )
}
