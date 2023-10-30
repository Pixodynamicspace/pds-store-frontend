import React, { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getAllProducts } from '../../hooks/helpers';
import { ProductCard } from './ProductCard';
import { ThreeCircles } from 'react-loader-spinner';

export const HomeProducts = () => {
    let [searchParams] = useSearchParams();
    const [ products, setProducts ] = useState([]);
    const [loading, setLoading ] = useState(false);
    const  getProducts = useCallback(
        async() => {
            setLoading(true)
            let result = await getAllProducts();
            console.log(result.data);
            if (!result.error) {
               setProducts(()=> result.data) 
            }
            searchParams.forEach(async (inpute, keyVa)=> {
                console.log(inpute, keyVa);
            });
            setLoading(false);
        },[searchParams])
    useEffect(() => {
        getProducts()
    }, [getProducts])
   

    return (
        <section className=' w-4/5 mx-auto p-4'>
            <div>
                <h2>Flash Sales</h2>
            </div>
            <div>
                {products? products.map((product)=> (
                    <div key={product._id}>
                        <ProductCard product={product}/>
                    </div>
                    
                )): loading?
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
                    :
                    <p>no products</p>
                }
            </div>
        </section>
    )
}
