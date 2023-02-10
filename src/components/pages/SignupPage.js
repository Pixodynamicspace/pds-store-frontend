import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

export const SignupPage = () => {
  
  const [show, setShow] = useState(false);
  const [showPasswordStrength, setShowPasswordStrength] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const eyeStyle = ' hover:bg-gray-200 p-3 cursor-pointer';
  const errStyle = ` text-center -mt-4 text-red-500`;
  
  const [passwordStrength, setPasswordStrength] = useState({
          name: 'weak',
          color: 'red',
          message: 'The string must contain at least 1 lowercase alphabetical character, 1 uppercase alphabetical character, 1 numeric character and at least one special character'
      });
  const [formData, setFormData] = useState({
          email: '',
          password: '',
          confirmPassword: '',
          fullName: '',
          phoneNumber: '',
          sex: ''
      });

      useEffect(() => {
        // eslint-disable-next-line
        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        let mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if (strongRegex.test(formData.password)) {
            setPasswordStrength({
              name: 'Strong',
              color: 'green',
              message: 'Good to go'
            });
          }else if (mediumRegex.test(formData.password)) {
            setPasswordStrength({
              name: 'Medium',
              color: 'yellow',
              message: 'The password must be at least 8 character long.'
            });
          }else if (formData.password.length < 5) {
            setPasswordStrength({
              name: 'Weak',
              color: 'red',
              message: 'The password must contain at least 1 lowercase alphabetical character, 1 uppercase alphabetical character, 1 numeric character and at least one special character'
            });
          }

          return ()=>{mediumRegex = '';strongRegex = '';};
      }, [formData.password])

  const checkPassword = (e) => {
    setFormData({...formData,password: e.currentTarget.value});
    setShowPasswordStrength(true);
    
  }

  useEffect(() => {
    setError(false)
  }, [formData])

  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    if (passwordStrength.name !== 'Strong') {
      setError(true);
      setErrorMessage(passwordStrength.message);
      setLoading(false)
      return;
    }
    if (formData.password!== formData.confirmPassword) {
        setError(true);
        setErrorMessage('Password and Confirm Password do not match');
        setLoading(false)
        return;
    }
    await axios.post("SIGNUP_URL", {
          email: formData.email,
          password: formData.password,
          fullName: formData.fullName,
          sex:formData.sex,
          phoneNumber: formData.phoneNumber
      }).then(res => {
          setLoading(false);
          setError(false)
          console.log(res);
          localStorage.setItem('user',JSON.stringify(res.data.data));
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
      <form onSubmit={handleSubmit}>
          <h2 className='font-bold text-orange-500 text-xl'>Sign Up</h2>
          <p className=' mb-8'>Already have an account? <Link className=' text-orange-500' to='/login'>Sign In</Link></p>

          <div className=' lg:flex justify-between gap-16'>
            <div className=' lg:w-1/2'>
                <label htmlFor="fullName" className=' font-semibold'>Full Name</label>
                <div className=' border-solid border-gray-300 border-2 rounded-lg p-0 overflow-hidden focus:outline-none mx-auto w-full mb-4'>
                  <input type="text" 
                    className=' pl-6 pr-1 py-2 w-full' 
                    disabled={loading} 
                    name="fullName" 
                    id='fullName'
                    value={formData.fullName} 
                    onChange={(e)=> setFormData({...formData,fullName: e.currentTarget.value})} 
                    placeholder='Enter Your Full Name' required/>
                </div>
            </div>
            <div className=' lg:w-1/2'>
                <label htmlFor="email" className=' font-semibold'>Email Address</label>
                <div className=' border-solid border-gray-300 border-2 rounded-lg p-0 overflow-hidden focus:outline-none mx-auto w-full mb-4'>
                  <input type="email" 
                    className=' pl-6 pr-1 py-2 w-full' 
                    disabled={loading} 
                    name="email" 
                    id='email'
                    value={formData.email} 
                    onChange={(e)=> setFormData({...formData,email: e.currentTarget.value})} 
                    placeholder='Enter Your Email' required/>
                </div>
            </div>
          </div>
          <div className=' lg:flex justify-between gap-16'>
            <div className=' lg:w-1/2'>
                <label htmlFor="phoneNumber" className=' font-semibold'>Phone Number</label>
                <div className=' border-solid border-gray-300 border-2 bg-pri-pink rounded-lg p-0 overflow-hidden focus:outline-none w-full mb-4'>
                  <input type="tel" disabled={loading} className=' pl-6 pr-1 py-2 w-full' id='phoneNumber' name="phoneNumber" value={formData.phoneNumber} onChange={(e)=> setFormData({...formData,phoneNumber: e.currentTarget.value})} placeholder='Phone Number' required/>
                </div>
            </div>
            <div className=' lg:w-1/2'>
                <label htmlFor="sex" className=' font-semibold'>Sex</label>
                <div className=' border-solid border-gray-300 border-2 bg-pri-pink rounded-lg p-0 overflow-hidden focus:outline-none w-full mb-4'>
                  <input type="text" disabled={loading} className=' pl-6 pr-1 py-2 w-full' name="sex" id='sex' value={formData.sex} onChange={(e)=> setFormData({...formData,sex: e.currentTarget.value})} placeholder='Sex' required/>
                </div>
            </div>
          </div>
          <div className=' lg:flex justify-between gap-16'>
                <div className=' lg:w-1/2'>
                    <label htmlFor="password" className=' font-semibold'>Password</label>
                    <div className=' flex justify-between items-center border-2 border-solid border-gray-300 rounded-lg p-0 overflow-hidden mx-auto mb-2 focus:outline-none w-full'>
                        <input type={show? 'text': 'password'} 
                            name="password"
                            id='password'
                            className=' pl-6 pr-2 py-2 w-full'
                            value={formData.password}
                            disabled={loading}
                            onChange={(e)=> checkPassword(e)}
                            placeholder='Password' required/>
                        {show? 
                            <div className={eyeStyle} onClick={()=> setShow(!show)}>
                                <AiOutlineEyeInvisible />
                            </div> : 
                            <div className={eyeStyle} onClick={()=> setShow(!show)}>
                                <AiOutlineEye />
                            </div> }
                    </div>
                    {showPasswordStrength && formData.password !== "" && <p className={` w-2/3 -mt-2 text-${passwordStrength.color}-500`}>{passwordStrength.name}</p>}
                    {showPasswordStrength && formData.password !== "" && <p className={` text-xs w-2/3 text-${passwordStrength.color}-300`}>{passwordStrength.message}</p>}
                </div>
                <div className=' lg:w-1/2'>
                    <label htmlFor="confirmPassword" className=' font-semibold'>Confirm Password</label>
                    <div className=' flex justify-between items-center border-2 border-solid border-gray-300 rounded-lg p-0 overflow-hidden mx-auto mb-2 focus:outline-none w-full'>
                        <input type={show? 'text': 'password'} 
                            name="confirmPassword"
                            id='confirmPassword'
                            className=' pl-6 pr-2 py-2 w-full'
                            value={formData.confirmPassword}
                            disabled={loading}
                            onChange={(e)=> setFormData({...formData,confirmPassword: e.currentTarget.value})}
                            placeholder='Password' required/>
                        {show? 
                            <div className={eyeStyle} onClick={()=> setShow(!show)}>
                                <AiOutlineEyeInvisible />
                            </div> : 
                            <div className={eyeStyle} onClick={()=> setShow(!show)}>
                                <AiOutlineEye />
                            </div> }
                    </div>
                </div>
                
          </div>
              
              <div className=' flex justify-start gap-4 my-10 mx-auto'>
                <input type="checkbox" id='TC' disabled={loading} className=' cursor-point' name="TC" value="TC" required/>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor='TC'>I agree to the terms of service and <Link to=''><span className=' text-gray-700 dark:text-blue-500 hover:underline'>privacy policy</span></Link>.</label>
              </div>
            {error && <p className={errStyle}>{errorMessage}</p>}
            <button type="submit" className=' block text-white bg-orange-600 py-2 w-3/6 mx-auto mb-2'>Create Account</button>
            <button type="button" className=' flex justify-center items-center gap-4 py-2 w-3/6 mx-auto border border-solid border-gray-500 '><FcGoogle size={20}/><span className=' lg:block hidden'>Continue with Google</span></button>
      </form>
  </div>
)
}
