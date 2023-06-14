import React, { useCallback, useEffect, useState } from 'react'
import { GET_ALL_CATEGORIES } from '../../constants/links';
import { config } from '../../constants/details';
import axios from 'axios';
import { AiFillCaretDown, AiFillCaretUp, AiOutlineSearch } from 'react-icons/ai';
import { useSearchParams } from "react-router-dom";

export const ProductSearch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedOption, setSelectedOption] = useState('all');
    const [query, setQuery] = useState('');
    let [, setSearchParams] = useSearchParams();
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

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
      };

    const handleSearch = (event)=> {
        setQuery(event.currentTarget.value);
        let params = {}
        params[selectedOption] = event.currentTarget.value;
        setSearchParams(params);
    }
  return (
    <div className=' flex lg:justify-center items-center w-3/5 rounded-md lg:w-2/5 mx-auto my-4 z-auto pl-2 lg:pl-0 bg-white'>
            <div className=" relative custom-dropdown hidden lg:block bg-primary-orange-base focus:outline-none hover:bg-primary-orange-muted 
                py-1 text-primary-orange-base w-2/5 text-center cursor-pointer rounded-r-lg transition-all duration-500 ">
                        <div className="selected-option font-bold text-white text-center flex justify-center gap-2 items-center p-2" onClick={() => setIsOpen(!isOpen)}>
                            <p>{ selectedOption[0].toLocaleUpperCase() + selectedOption.toLocaleLowerCase().slice(1)}</p> {isOpen? <AiFillCaretUp/> : <AiFillCaretDown/>}
                        </div>
                        {isOpen && (
                            <ul className=" absolute bg-white options-list text-left py-4 font-bold font-Space-Grotesk rounded-md border border-primary-orange-base w-full shadow-sm shadow-primary-dark">
                            <li
                                className={`${'all' === selectedOption ? 'selected ' : ''} cursor-pointer hover:bg-yellow-300 px-4`}
                                onClick={() => handleOptionClick('all')}
                                >
                                {'All'}
                                </li>
                            {categories? categories.map((category, index) => (
                                <li
                                key={index}
                                className={`${category.category_name === selectedOption ? 'selected ' : ''} cursor-pointer hover:bg-yellow-300 px-4`}
                                onClick={() => handleOptionClick(category.category_name)}
                                >
                                {category.category_name[0].toLocaleUpperCase() + category.category_name.toLocaleLowerCase().slice(1)}
                                </li>
                            )): <li>no categories</li>}
                            </ul>
                        )}
            </div>
            <AiOutlineSearch size={20} className=' lg:hidden'/>
            <input className=' focus:outline-none p-1 w-3/5' type="text" autoComplete='on' name="search" onChange={handleSearch} value={query} placeholder='Search for anything'/>
        </div>
  )
}
