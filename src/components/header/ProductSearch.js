import React, { useCallback, useEffect, useState } from 'react'
import { GET_ALL_CATEGORIES } from '../../constants/links';
import { config } from '../../constants/details';
import axios from 'axios';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

export const ProductSearch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedOption, setSelectedOption] = useState('all');
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
  return (
    <div className=' flex justify-center w-3/5 rounded-md md:w-2/5 mx-auto my-4 bg-white'>
            <div className=" relative custom-dropdown hidden md:block bg-primary-orange-base focus:outline-none hover:bg-primary-orange-muted 
                py-1 text-primary-orange-base w-2/5 text-center cursor-pointer rounded-r-lg">
                        <div className="selected-option font-bold text-white text-center flex justify-center gap-2 items-center p-2" onClick={() => setIsOpen(!isOpen)}>
                            <p>{ selectedOption[0].toLocaleUpperCase() + selectedOption.toLocaleLowerCase().slice(1)}</p> {isOpen? <AiFillCaretUp/> : <AiFillCaretDown/>}
                        </div>
                        {isOpen && (
                            <ul className=" absolute bg-white options-list text-left py-4 font-bold font-Space-Grotesk rounded-md border border-primary-orange-base w-full">
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
            <input className=' focus:outline-none p-1 w-3/5' type="text" name="" placeholder='Search for anything'/>
        </div>
  )
}