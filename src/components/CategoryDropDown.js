import React, { useCallback, useEffect, useState } from 'react'
import { GET_ALL_CATEGORIES } from '../constants/links';
import { config } from '../constants/details';
import axios from 'axios';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

export const CategoryDropDown = ( { setValue } ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedOption, setSelectedOption] = useState();
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

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        setValue(option);
      };
  return (
    <div className=' flex lg:justify-center items-center w-full rounded-md mx-auto my-4 z-auto  bg-white'>
            <div className=" relative custom-dropdown bg-primary-orange-base focus:outline-none hover:bg-primary-orange-muted 
                py-1 text-primary-orange-base w-full text-center cursor-pointer rounded-r-lg transition-all duration-500 ">
                        <div className="selected-option font-bold text-white text-center flex justify-center gap-2 items-center p-2" onClick={() => setIsOpen(!isOpen)}>
                            <p>{ selectedOption?  selectedOption?.category_name[0]?.toLocaleUpperCase() + selectedOption?.category_name?.toLocaleLowerCase().slice(1) : "Select Category"}</p> {isOpen? <AiFillCaretUp/> : <AiFillCaretDown/>}
                        </div>
                        {isOpen && (
                            <ul className=" absolute bg-white options-list text-left py-4 font-bold font-Space-Grotesk rounded-md border border-primary-orange-base w-full shadow-sm shadow-primary-dark">
                            
                            {categories? categories.map((category, index) => (
                                <li
                                key={index}
                                className={`${category.category_name === selectedOption ? 'selected ' : ''} cursor-pointer hover:bg-yellow-300 px-4`}
                                onClick={() => handleOptionClick(category)}
                                >
                                {category.category_name[0].toLocaleUpperCase() + category.category_name.toLocaleLowerCase().slice(1)}
                                </li>
                            )): <li>no categories</li>}
                            </ul>
                        )}
            </div>
        </div>
  )
}
