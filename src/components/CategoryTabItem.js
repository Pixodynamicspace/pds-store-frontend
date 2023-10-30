import React from 'react'

export const CategoryTabItem = ({ id, category_name, picture_url, }) => {
    return (
        <div className=' flex gap-1 justify-center items-center mx-auto px-4 py-2 hover:bg-primary-orange-base cursor-pointer hover:text-white ' key={id}>
            <div className=' object-scale-down box-border w-1/5 h-8 p-1'>
                <img className=' m-auto' src={picture_url} alt={category_name}/>
            </div>
            <p className=' w-4/5 text-lg'>{category_name}</p>
        </div>
    )
}
