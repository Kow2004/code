import React from 'react'
import Menubar from '../Components/Menubar'
import Collections from '../Layouts/Collections';
import Sessionoffer from '../Layouts/Sessionoffer';
import Productcard from '../Layouts/productcard';
import Trends from '../Components/trends';
import Winterwear from '../Layouts/Winterwear';
import Brands from '../Components/brands';
import Footer from '../Components/footer';
import '../App.css';
const Home=()=>{
  return (
    <>
      <Menubar/>
      <Sessionoffer/>
      <Productcard />
      <Trends/>
      <Collections/>
      <Brands/>
      <Winterwear/>
      <Footer/> 
    </>
  );
}

export default Home