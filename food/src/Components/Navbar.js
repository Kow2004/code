import { useState } from "react";
import {faHome,faList,faCog} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./sidebar";
const Navbar=()=>{
   const[showsidebar,setshowsidebar]=useState(false);
   
   const links=[
    {
    name:"Home",
    path:"/",
    icon:faHome
    },

    {
     name:"Recipies",
     path:"/recipies",
     icon:faList
    },

    {
        name:"Settings",
        path:"/settings",
        icon:faCog
    }
]
  function closesidebar(){
    setshowsidebar(false)
  }
    return(
    <>  
     <div className="navbar">

     <a href="#!" className="logo">F<span>oo</span>dieshub</a>

     <div className="nav-l  inks">
        {links.map(link=>(
            <a href="#!"key={link.name} className="active">{link.name}</a>
        ))}
        {/* <a href="#!"className="active">Home</a>
        <a href="#!"className="active">Recipies</a>
        <a href="#!"className="active">Settings</a> */}
     </div>

     <div onClick={()=>setshowsidebar(true)} className={showsidebar?"sidebar active":"sidebar"}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
     </div>
     </div>
    {showsidebar &&<Sidebar links={links} close={closesidebar}/>}
    </>
    );
}
export default Navbar;