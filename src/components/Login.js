import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const[signIn,setsignIn]=useState(true)

  const handleSignIn=()=>{
    setsignIn(!signIn)
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflix_background"/>

        </div>
        <form className=' absolute w-1/3 mx-auto my-36 p-12 right-0 left-0 text-white bg-black rounded-md bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4 '>
            {signIn?"Sign In":"Sign Up"}
            </h1>
          {!signIn && <input className='p-2 my-2 w-full rounded-md' type="text" placeholder='Your Name'/>}  
          <input className='p-2 my-2 w-full rounded-md' type="text" placeholder='Enter Email'/>
          <input className='p-2 my-2 w-full rounded-md' type="text" placeholder='Enter Password'/>
          <button className='p-4 my-4 w-full bg-red-700 rounded-md'>
            {signIn?"Sign In":"Sign Up"}
          </button>
          <p className='cursor-pointer' onClick={handleSignIn}>
            {signIn?"New to Netflix? Sign Up here":"Already a User? Sign In"}
          </p>
        </form>
    </div>
  )
}

export default Login