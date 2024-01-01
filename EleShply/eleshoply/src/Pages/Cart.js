import React from 'react'
import Menubar from '../Components/Menubar';
import Footer from '../Components/footer';
import Socialmedia from '../Components/socialmedia';
import Cartitems from '../Layouts/Cartitems';

const Cart=()=>{
  return (
   <>
    <Menubar/>
    <Cartitems/>
    {/* <Socialmedia/> */}
    <Footer/>
   </>
  );
}

export default Cart