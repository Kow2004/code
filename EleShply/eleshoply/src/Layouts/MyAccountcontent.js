import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Socialmedia from '../Components/socialmedia'
import "../Styles/MyAccountcontent.css";
const MyAccountcontent=()=>{
  const [eyeopen,seteyeopen]=useState(false)
  const viewpassword=()=>{
      seteyeopen(!eyeopen);
  }
  return (
    <div className='MyAccountcontent'>
    <div> <Socialmedia/></div>
    <div className='MyA-content'>
    <h2>My Account</h2>
    <h3 className='login'>Login</h3> 
    <form>
      <label className='email-label'>Username or email address</label>
      <input type='textarea' className='email'></input>
      <div className='pfield'>
      <label className='password-label'>Password</label>
      <input type={eyeopen ?'password':'text'} className='password'></input><span onClick={viewpassword}>
        {eyeopen?<FaEyeSlash /> : <FaEye />}
      </span>
      </div>
      <div className='cfield'> 
      <input type='checkbox'></input>
      <label className='checkbox-label'> Remember me</label>
      <button>Login</button>
      </div>
      <h4 className='l-label'>Lost your password?</h4>
    </form>
    </div>
    </div>
  )
}

export default MyAccountcontent