import React from 'react';
import { ReactComponent as ProductCart  } from '../../assets/product_cart.svg';

export const ProductCard = ({ product }) => {
    return (
        <div className=' relative w-36 bg-white m-2 text-primary-dark group rounded-lg hover:cursor-pointer hover:-translate-x-12  transition-all duration-300 z-50 hover:z-40'>
            <div className=' absolute left-2 rounded-r-md h-full text-white w-full transition-all duration-300 -z-10 group-hover:translate-x-full group-hover:left-0 bg-primary-orange-muted p-2'>
                <p>{product.description}</p>
            </div>
            <div className=' overflow-hidden rounded-l-lg shadow-md bg-inherit p-2 z-40'>
                <div className=' h-32 box-content object-center object-cover rounded-lg overflow-hidden mb-2'>
                    <img className='w-full h-full' src={product.pictures[0]?.picture_url} alt={product?.name} />
                </div>
                <div className=' px-2'>
                    <div className=' flex justify-between'>
                        <p className=' uppercase '>{product?.name}</p>
                        <div>
                            <ProductCart/>
                        </div>
                        
                    </div>
                    <div>
                        <p className=' uppercase font-semibold'>₦{parseFloat(parseFloat(product?.price?.replace(/[^\d.]/g, '')))?.toLocaleString('en-US', { currency: 'NGN' })}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
