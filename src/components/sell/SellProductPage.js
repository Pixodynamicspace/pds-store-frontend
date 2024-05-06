import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiImageOn } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import axios from 'axios';
import { CategoryDropDown } from '../CategoryDropDown';
import { ADD_IMAGE_TO_PRODUCT, CREATE_PRODUCT } from '../../constants/links';
import { useAuthContext } from '../../context/AuthContext';
import { getConfigure } from '../../constants/details';

export const SellProductPage = () => {
    const { token } = useAuthContext()
    const [newImages, setNewImages] = useState([]);
    const [category, setCategory] = useState();
    const [loading, setLoading] = useState(false);
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('0');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [tags, setTags] = useState([])
    const [tag, setTag] = useState('')


    const setChangeTags = (e) => {
        const value = e.target.value;
        setTag(value)
        if (String(value).endsWith(',') && tags.length < 5) {
            setTags([tag,...tags])
            setTag('')
        }
        if (tags.length > 5) {
            setTag('')
        }
    }

    const sellProduct = (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(newImages, category, productName, price, description, quantity);
        if (!newImages || !category || !productName || !price || !description || !quantity){
            alert('Please fill in all fields')
            setLoading(false);
            return
        }
        const files = newImages;
        const formatedPrice = parseFloat(price).toLocaleString('en-NG', { style: 'currency', currency: 'NGN' });
        const data = { name: productName, description, quantity, price: formatedPrice, tags, category_id: category._id }
        console.log(data);
        const configure1 = getConfigure(token.token)
        console.log(configure1);
        configure1.headers['Content-Type'] = 'application/json'
        console.log(configure1);

        axios.post(CREATE_PRODUCT, data, {...configure1}).then(res=> {
            console.log(res);
            alert('Product created successfully')
            const formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append('images', files[i]);
            }
            formData.append('product_id', res.data?.data?._id)
            const configure = getConfigure(token.token)
            console.log(configure);
            configure.headers['Content-Type'] = 'multipart/form-data'
            console.log(configure);
            axios.post(ADD_IMAGE_TO_PRODUCT, formData, getConfigure(token.token)).then(res=> {
                setLoading(false)
                console.log(res);
            }).catch(error=> {
                setLoading(false)
                console.log(error);
            })
            setNewImages([])
            setCategory('')
            setProductName('')
            setPrice('')
            setDescription('')
            setQuantity(0)
            setTags([])


        }).catch( error=> {
            setLoading(false)
            console.log(error);
        })
    }

    return (
        <div className=' mt-8 mx-8 h-full'>
            <div className=' flex items-center w-full justify-between'>
                <div className='' >
                    <Link to={'/'} className=' flex py-1 px-2 bg-primary-orange-base hover:bg-primary-orange-muted rounded-md w-max' >
                        <div className=' flex items-center justify-center gap-2 text-white'>
                            <p className=' text-lg font-extrabold'>&#8592;</p>
                            <p className=' text-sm'>Go Back</p>
                        </div>
                    </Link>
                </div>
                <p className=' font-bold text-2xl text-primary-orange-base'>Sell Products</p>
                <p></p>
            </div>
            <div className=' lg:flex w-full my-8 '>
                <div className='border border-gray-500 flex flex-col justify-between items-center transition-all ease-in-out duration-150 rounded-md lg:w-1/2 text-gray-400'>
                    {newImages.length > 0? 
                        <div className=' w-96 h-96 border border-black'>
                            {newImages[0]? <img src={URL.createObjectURL(newImages[0])} className=' w-full h-full object-scale-down m-auto' alt='' /> 
                            : <div>
                                <p>o</p>
                                <label htmlFor='main-image' className=' cursor-pointer'> <CiImageOn size={400} /></label>
                                <input
                                    className=' hidden'
                                    name={'main-image'} 
                                    id={'main-image'}
                                    type="file" 
                                    onChange={(e) => setNewImages([e.target.files[0], ...newImages])} />
                                <p></p>
                                </div>}
                        </div>
                        :
                        <CiImageOn size={400} />
                    }
                    <div className=' flex gap-2 items-center w-full overflow-x-auto px-4 my-2'>
                        {newImages.length > 0 ? newImages.map((image, index) => (
                            <div key={index} className='w-20 h-20 relative border border-gray-500 border-dotted'>
                                <p className=' absolute top-0 right-0 cursor-pointer px-2 bg-primary-orange-base hover:bg-primary-orange-muted text-white' onClick={() => setNewImages(newImages.filter((i) => i !== image))}>&times;</p>
                                {image? <img src={URL.createObjectURL(image)} className=' w-20 h-20 object-scale-down' alt='' /> : <CiImageOn size={100} />
                                    }
                            </div>
                        ))
                            : ''}
                        {newImages.length < 9 && 
                        <div className='border-2 border-gray-500 border-dotted flex flex-col justify-center items-center rounded-md text-gray-400'>
                            <div>
                                <label htmlFor={'image'} className=' cursor-pointer'><IoMdAdd size={50}/></label>
                                <input 
                                    className=' hidden'
                                    name={'image'} 
                                    id={'image'}
                                    type="file" 
                                    onChange={(e) => setNewImages([...newImages, e.target.files[0]])} />
                            </div>
                        </div>
                        }
                    </div>
                   
                </div>
                <form className='lg:mt-0 mt-4 w-full lg:w-1/2 h-full overflow-x-auto' onSubmit={sellProduct}>
                    <div className=' flex justify-between w-full gap-2 px-4'>
                        <div className=' w-1/2'>
                            <label htmlFor='itemName'>Name of Item</label>
                            <input type="text"
                                id='itemName' 
                                onChange={(e) => setProductName(e.target.value)}
                                className=' mt-4 w-full focus:outline-none bg-slate-200 p-3'
                                placeholder='Product Name'
                                value={productName}
                                />
                        </div>
                        <div className='  w-1/2'>
                            <p>Category</p>
                            <CategoryDropDown setValue={setCategory}/>
                        </div>
                    </div>
                    <div className=' px-4'>
                        <label htmlFor='description'>Description</label>
                        <textarea 
                            id='description' 
                            className=' bg-slate-200 focus:outline-none mt-4 p-3 w-full'  
                            cols="30" 
                            rows="5"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            >
                        </textarea>
                    </div>
                    <div className=' py-2 px-4'>
                        <label htmlFor='price'>Price</label>
                        <input
                            type="text"
                            pattern="[0-9]*"
                            inputMode="numeric"
                            id='price'
                            placeholder='₦'
                            className='bg-slate-200 focus:outline-none mt-4 w-full p-3'
                            onChange={(e) => {
                                const value = parseFloat(e.target.value) < 0 ? 0 : parseFloat(e.target.value); // Remove non-numeric characters
                                setPrice(value)
                            }}
                            value={isNaN(price)? 0 :price}
                            />
                    </div>
                    <div className=' py-2 px-4'>
                        <label htmlFor='quantity'>Quantity</label>
                        <input
                            type="text"
                            pattern="[0-9]*"
                            inputMode="numeric"
                            id='quantity'
                            placeholder='Quantity'
                            className='bg-slate-200 focus:outline-none mt-4 w-full p-3'
                            onChange={(e) => {
                                const value = parseInt(e.target.value) < 1 ? 0 : parseInt(e.target.value); // Remove non-numeric characters
                                setQuantity(value)
                            }}
                            value={isNaN(quantity)? 0 :quantity}
                            />
                    </div>
                    <div className=' py-2 px-4'>
                        <p className=' mb-1'>{tags.length > 0 ? tags.map((tag, index) => (
                            <span key={index}
                                onClick={(e)=>{
                                    e.preventDefault();
                                    setTags(tags.filter((t) => t !== tag))
                                }}
                                className=' cursor-pointer bg-primary-orange-base text-white rounded-md px-2 py-1 mr-1'
                              >{tag}</span>
                        )): ''}
                        </p>
                        <label htmlFor='tags'>Tags <span className=' border p-1 rounded font-semibold text-gray-500 text-xs'>use comma "," to seperate tags</span></label>
                        <input
                            type="text"
                            id='tags'
                            placeholder='Tags'
                            className='bg-slate-200 focus:outline-none mt-4 w-full p-3'
                            onChange={setChangeTags}
                            value={tag}
                            />
                    </div>

                    <div className=' flex justify-center'>
                        <input type="submit" 
                        className=' rounded-md cursor-pointer disabled:cursor-wait py-2 px-4 bg-primary-orange-base disabled:bg-primary-orange-muted text-white dark:text-white dark:hover:text-orange-300 hover:text-orange-200' 
                        value={'Sell Item'} 
                        disabled={loading}
                        />
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
