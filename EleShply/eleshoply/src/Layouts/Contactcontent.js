import React from 'react'
import "../Styles/Contactcontent.css";
import Socialmedia from '../Components/socialmedia';
const  Contactcontent=()=>{
  return (
    <div className='contact-content'>

        <div>
            <Socialmedia/>
        </div>

        <div>
        <h2 className='contact-header'>Contact us</h2>
        <form className='contact-form'>

            <div className='name'>

            <div className='firstname'>
            <label className='labelof-firstname'>First Name</label>
            <input className='inputof-firstname' type='text' placeholder='First Name'></input>
            </div>
            <div className='lastname'>
            <label className='labelof-lastname'>Last Name</label>
            <input className='inputof-lastname' type='text' placeholder='Last Name'></input>
            </div>
            </div>

            <label className='labelof-email'>Email</label>
            <input className='inputof-email' type='email' placeholder='Email Address'></input>
            <label className='labelof-subject'>Subject</label>
            <input className='inputof-subject' type='text' placeholder='Subject'></input>
            <label className='labelof-message'>Your Message</label>
            <textarea className='inputof-message' type='textarea' placeholder='Your Message'></textarea>
            <button>Submit Form</button>
     
        </form>
        </div>
        
    </div>
  );
}

export default Contactcontent