import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ThreeCircles } from 'react-loader-spinner';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { LOGIN_URL } from '../../constants/links';
import { useAuthContext } from '../../context/AuthContext';
import { useUserContext } from '../../context/UserContext';

export const LoginPage = () => {
    const navigate = useNavigate();
    const { setToken } = useAuthContext();
    const { setUser } = useUserContext();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const eyeStyle = ' hover:bg-gray-200 p-3 cursor-pointer';
    const errStyle = ` text-center w-full -mt-4 text-red-500`;
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
  
        await axios.post(LOGIN_URL, {
              email: email,
              password: password
          }).then(res => {
              setLoading(false);
              console.log(res.data);
              setError(false)
              const tokenData = {
                token: res.data.token,
                expiresIn: res.data.expiresIn,
              }
              setToken(tokenData);
              setUser(res.data.data);
              navigate('/');
          }).catch(err => {
              setLoading(false);
              setError(true);
              setErrorMessage(err.response.data.message)
              console.log(err);
          });
      }
  return (
    <div className=' lg:px-32 px-10 dark:bg-primary-dark h-screen overflow-auto dark:text-slate-100'>
        <div className=' text-center py-8'>
            <h1 className=' font-bold text-orange-500 text-3xl'>Welcome to PDS Store</h1>
            <p className=' font-semibold text-sm'>Your online patform to buy and sell anything </p>
        </div>
        <form onSubmit={handleSubmit} className=' lg:w-2/3 mx-auto'>
            <h2 className='font-bold text-orange-500 text-xl'>Sign In</h2>
            <p className=' mb-6'>Don't have an account? <Link className=' text-orange-500' to='/signup'>Sign Up</Link></p>
            <label htmlFor="email">Email Address</label>
            <div className=' border border-solid border-gray-500 rounded-lg p-0 overflow-hidden focus:outline-none w-full mb-6'>
                    <input type="email" id='email' className=' pl-6 pr-1 py-2 w-full' name="email" disabled={loading} value={email} onChange={(e)=> setEmail( e.target.value)} placeholder='Enter Your Email' required/>
            </div>
            <label htmlFor="password">Password</label>
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

              {loading?
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
                    </div> : 
                    <button type="submit" disabled={loading} className=' block text-white bg-orange-600 py-2 w-3/6 mx-auto mb-2'>Sign In
                        </button>
                    }
              <button type="button" className=' flex justify-center items-center gap-4 py-2 w-3/6 mx-auto border border-solid border-gray-500 '><FcGoogle size={20}/><span className=' lg:block hidden'>Continue with Google</span></button>
        </form>
    </div>
  )
}
