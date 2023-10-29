import React, { useState,useRef } from 'react';
import Header from './Header';
import {validateData} from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
  const[signIn,setsignIn]=useState(true);
  const email=useRef(null);
  const password=useRef(null)
  const[error,setError]=useState(null)

  // SignUP / SignIN 
  const handleSignIn=()=>{
    setsignIn(!signIn)
  }
  // Sign Up/In Button Logic
  const handleSignInbtn=()=>{
    console.log(email.current.value);
    console.log(password.current.value);
    const validateMsg= validateData(email.current.value,password.current.value);
    console.log(validateMsg)
    setError(validateMsg);

    // If any error don't proceed.
    if(validateMsg) return;

    // Sign Up
    if(!signIn){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorCode+" - "+errorMessage)
    });

    // Sign In
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode+" - "+errorMessage);
      });
    }
  }
  
  return (
    <div>
        <Header/>
        <div className='absolute'>
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflix_background"/>

        </div>
        <form onSubmit={(e)=>e.preventDefault()} className=' absolute w-1/3 mx-auto my-36 p-12 right-0 left-0 text-white bg-black rounded-md bg-opacity-80'>
          <p className='text-red-500'>{error}</p>
          <h1 className='font-bold text-3xl py-4 '>
            {signIn?"Sign In":"Sign Up"}
            </h1>
          {!signIn && <input className='p-2 my-2 w-full rounded-md text-black' type="text" placeholder='Your Name'/>}  
          <input ref={email} className='p-2 my-2 w-full rounded-md text-black' type="text" placeholder='Enter Email'/>
          <input ref={password} className='p-2 my-2 w-full rounded-md text-black' type="text" placeholder='Enter Password'/>
          <button className='p-4 my-4 w-full bg-red-700 rounded-md'
          onClick={handleSignInbtn}
          >
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