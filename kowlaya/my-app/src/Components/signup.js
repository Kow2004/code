import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "../Styles/signup.css";
const Signup=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [errors,setErrors]=useState({});
    const [submit,setSubmit]=useState(false);
    const navigate=useNavigate();
    const handleonsubmit=(e)=>{
      e.preventDefault();

      const usernamePattern = /^[a-zA-Z\s_-]{3,16}$/;
      const emailPattern = /^\S+@\S+\.\S+$/;
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

      const newErrors={};

      if(!name.trim()){
         newErrors.name="Name is Required";
      }else if(!usernamePattern.test(name.trim())){
          newErrors.name="Enter Valid Username";
      }

      if(!email.trim()){
        newErrors.email="Email is Required";
      }else if(!emailPattern.test(email.trim())){
        newErrors.email="Enter Valid Email";
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
    if(submit===true){
      setSubmit(false);
      navigate("/");
    }
    }
    return(
        <div className="Form">
          <form >
            <h1>Sign up</h1>
          <div><p>Name</p></div>
          <div><input type="text" className="username" value={name} onChange={(e)=>{
            setName(e.target.value)
          }
          }/></div>
          <div>{errors.name && <div className="error">{errors.name}</div>}</div>

          <div><p>Email</p></div> 
          <div><input type="text" className="email" value={email} onChange={(e)=>{
            setEmail(e.target.value)
          }
          }/></div>
        <div>{errors.email && <div className="error">{errors.email}</div>}</div>
        <div><p>Password</p></div>
        <div><input type="text" className="password"value={password} onChange={(e)=>{
            setPassword(e.target.value)
          }}/></div>
          <div>{errors.password && <div className="error">{errors.password}</div>}</div>
          
          <div> <button onClick={handleonsubmit}>Submit</button></div>
          </form>
        </div>
      );
}
export default Signup;


