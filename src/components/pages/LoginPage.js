import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
// import { LOGIN_URL } from '../../constants/links';

export const LoginPage = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const eyeStyle = ' hover:bg-gray-200 p-3 cursor-pointer';
    const errStyle = ` mx-auto w-2/3 -mt-4 text-red-500`;
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
  
        await axios.post("LOGIN_URL", {
              email: email,
              password: password
          }).then(res => {
              setLoading(false);
              console.log(res);
              setError(false)
              localStorage.setItem('token',JSON.stringify(res.data.token));
              localStorage.setItem('user',JSON.stringify(res.data.data));
              navigate('/dashboard');
          }).catch(err => {
              setLoading(false);
              setError(true);
              setErrorMessage(err.response.data.message)
              console.log(err);
          });
      }
  return (
    <div className=' lg:px-32 px-10'>
        <header className=' text-center my-8'>
            <h1 className=' font-bold text-orange-500 text-3xl'>Welcome to PDS Store</h1>
            <p className=' font-semibold text-sm'>Your online patform to buy and sell anything </p>
        </header>
        <form onSubmit={handleSubmit} className=' lg:w-2/3 mx-auto'>
            <h2 className='font-bold text-orange-500 text-xl'>Sign In</h2>
            <p className=' mb-6'>Don't have an account? <Link className=' text-orange-500' to='/signup'>Sign Up</Link></p>
            <label for="email">Email Address</label>
            <div className=' border border-solid border-gray-500 rounded-lg p-0 overflow-hidden focus:outline-none w-full mb-6'>
                    <input type="email" id='email' className=' pl-6 pr-1 py-2 w-full' name="email" disabled={loading} value={email} onChange={(e)=> setEmail( e.target.value)} placeholder='Enter Your Email' required/>
            </div>
            <label for="password">Password</label>
            <div className=' flex justify-between items-center border border-solid border-gray-500 rounded-lg p-0 overflow-hidden focus:outline-none w-full mb-4'>
                    <input type={show? 'text': 'password'} 
                        name="password"
                        id='password'
                        className=' pl-6 pr-2 py-2 w-full'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        disabled={loading}
                        required
                        placeholder='Password'/>
                    {show? 
                        <div className={eyeStyle}>
                            <AiOutlineEyeInvisible onClick={()=> setShow(!show)}/>
                        </div> : 
                        <div className={eyeStyle}>
                            <AiOutlineEye onClick={()=> setShow(!show)}/>
                        </div> }
                </div>
                <p className=' mb-8'>Don’t remember your password, <Link className=' text-orange-500' to=''>Reset password now!</Link></p>
              {error && <p className={errStyle}>{errorMessage}</p>}
              <button type="submit" className=' block text-white bg-orange-600 py-2 w-3/6 mx-auto mb-2'>Sign In</button>
              <button type="button" className=' flex justify-center items-center gap-4 py-2 w-3/6 mx-auto border border-solid border-gray-500 '><FcGoogle size={20}/><span className=' lg:block hidden'>Continue with Google</span></button>
        </form>
    </div>
  )
}
