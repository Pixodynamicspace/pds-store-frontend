import React from 'react';
import { ReactComponent as ProductCart  } from '../../assets/product_cart.svg';

export const ProductCard = ({ product }) => {
    return (
        <div className=' w-36 bg-white m-2 text-primary-dark rounded-lg overflow-hidden'>
            <div className=' h-32 box-content object-center object-cover rounded-lg overflow-hidden'>
                <img className='w-full h-full' src={product.pictures[0]?.picture_url} alt={product?.name} />
            </div>
            <div className=' px-2'>
                <div className=' flex justify-between'>
                    <p className=' uppercase'>{product?.name}</p>
                    <div>
                        <ProductCart/>
                    </div>
                    
                </div>
                <div>
                    <p className=' uppercase font-semibold'>₦{parseFloat(product?.price)?.toLocaleString('en-US', { currency: 'NGN' })}</p>
                </div>
            </div>
        </div>
    )
}
