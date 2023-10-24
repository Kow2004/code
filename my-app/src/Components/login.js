import React, { useState } from "react";
import "../Styles/login.css";
import { BrowserRouter, Routes, Route,Link, useNavigate} from "react-router-dom";

const Signin=()=>{

  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [errors,setErrors]=useState({});
  const [submit,setSubmit]=useState(false);
  const navigate=useNavigate();

  const handleonsubmit=(e)=>{

    e.preventDefault();
    const newErrors={};
    const usernamePattern = /^[a-zA-Z\s_-]{3,16}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
  
    if(!name.trim()){
       newErrors.name="Name is Required";
    }else if(!usernamePattern.test(name.trim())){
      newErrors.name="Enter Valid Username";
    }
    if(!password.trim()){
      newErrors.password="Password is Required";
   }else if(!passwordPattern.test(password.trim())){
     newErrors.password="Enter one uppercase,one lowercase,one digit and more then 8 input combination of letters and numbers" 
   }

   if(Object.keys(newErrors).length===0){
       setSubmit(true);
   }else{
     setErrors(newErrors);
   }
  }
  
  if(submit===true){
    setSubmit(false);
    navigate("/Home")
  }

  return(
    <div className="Form">
      <form onSubmit={handleonsubmit}>
      <div><h1>Login</h1></div>
      <div><p>UserName</p></div>
      <div><input type="text" className="username" value={name} onChange={(e)=>{setName(e.target.value)}}/></div>
      <div>{errors.name && <div className="error">{errors.name}</div>}</div>
      <div><p>Password</p></div>
      <div><input type="text" className="cpassword" value={password} onChange={(e)=>{setPassword(e.target.value)}}/></div>
      <div>{errors.password && <div className="error">{errors.password}</div>}</div>
      <div><button>Submit</button></div>
      <div><h3>Already have an account? <Link to="/signup" className="signup" >Signup</Link></h3></div>
      </form>
    </div>
  );

}

export default  Signin;