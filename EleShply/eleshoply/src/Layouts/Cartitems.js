import React from 'react'
import '../Styles/Cartitems.css';
import Socialmedia from '../Components/socialmedia';
const Cartitems=()=>{
  return (
    <div className='Cart-box'>
        <div><Socialmedia/></div>
        <div className='Cart-item'>
        <input type='textarea' className='cartinput' placeholder='Your cart is currently empty.'></input>
        <button className='cartbutton'>Return to Shop</button>
        </div>
    </div>
  );
}

export default Cartitems 