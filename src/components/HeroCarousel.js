import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { config } from '../constants/details';
import { GET_ALL_CAROUSEL_IMAGES } from '../constants/links';

export const HeroCarousel = () => {
    const [images, setImages] = useState([]);
    const [selected, setSelected] = useState(0)
    const fetchImages = useCallback(async (signal) => {
        try {
           const result = await axios.get(GET_ALL_CAROUSEL_IMAGES, {signal,...config});
           setImages(() => [...result.data.data]);
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
            fetchImages(signal);
        } catch (error) {
            console.log(error);
        }
        return () => controller.abort(signal.reason);
    }, [fetchImages])


    const setPreviousImage = () =>{
        if(selected === 0){
            setSelected(images.length - 1);
        }
        else{
            setSelected(selected - 1);
        }
    }

    const setNextImage = () =>{
        if(selected === images.length - 1){
            setSelected(0);
        }
        else{
            setSelected(selected + 1)
        }
    }
  return (
        <div className="relative max-w-7xl h-96 w-full" >
            {/* <!-- Carousel wrapper --> */}
            <div style={{backgroundImage: `url(${images[selected]?.picture_url})`}} className="w-full h-full rounded-2xl bg-center duration-500">
                
            </div>
            <div className="absolute z-10 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                {images? images.map((image,index) =>(
                        <button type="button" style={{backgroundColor: index === selected? "white" : "transparent"}} className="w-3 h-3 rounded-full border " onClick={()=> setSelected(+index) } key={image._id}></button>
                    ))
                :
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="" data-carousel-slide-to=""></button>
                }
            </div>
            
            <button type="button" onClick={setPreviousImage} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" onClick={setNextImage} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
    </div>
  )
}
