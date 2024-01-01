import React from 'react'
import Menubar from '../Components/Menubar';
import Footer from '../Components/footer';
import MyAccountcontent from '../Layouts/MyAccountcontent';

const MyAccount=()=>{
  return (
    <div className='MyAccount'>
    <Menubar/>
    <MyAccountcontent/>
    <Footer/> 
    </div>
  );
}

export default MyAccount