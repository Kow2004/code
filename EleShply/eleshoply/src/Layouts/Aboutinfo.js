import React from 'react'
import "../Styles/Aboutinfo.css";
import Socialmedia from '../Components/socialmedia';
const Aboutinfo=()=>{
  return (
    <>
    
    <div className='Aboutinfo'>
    <div className='Aboutinfo-media'>
    <Socialmedia/>
    </div>
    <div className='Aboutinfo-image'>
    <h2>About Us</h2>
    <img src='https://live.templately.com/wp-content/uploads/2020/06/0da463c0-image-x.png' alt=''></img>
    </div>
    <div className='Aboutinfo-content'>
    <h3>Our Mission & Vision</h3>   
    <p>We are a team of dedicated, hard-working individuals with a passion for fashion and providing quality products and services to our customers. We believe that fashion is simply a medium for self-expression and strive to help our customers express themselves with our trendy,
       stylish designs made from only the best quality fabric.</p><br></br>
    <br></br><p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen remaining essentially unchanged.</p>
    </div>

    </div>
    </>
  );
}

export default Aboutinfo