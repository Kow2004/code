import React from 'react'
import '../App.css';
import Menubar from '../Components/Menubar';
import Aboutinfo from '../Layouts/Aboutinfo';
import Trends from '../Components/trends';
import Brands from '../Components/brands';
import Footer from '../Components/footer';
import Chooseus from '../Layouts/Chooseus';
const About=()=>{
  return (
   <>
   <Menubar/> 
   <Aboutinfo/>
   <Trends/>
   <Chooseus/>
   <Brands/>
   <Footer/>
   </>
  );
}

export default About