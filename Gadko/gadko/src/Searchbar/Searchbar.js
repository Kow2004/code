import React from "react";
import {FaSearch} from "react-icons/fa";
import "../Searchbar/Searchbar.css";
const Searchbar=()=>{
 return(
    
    <div className="Searchbar-container">
        <div className="Searchbar">
           <FaSearch className="SearchbarIcon"/>
           <input className="Searching" placeholder="Type for Search"></input>
        </div>
        <div className="Searchbar-results">
         Searchbar-Results
        </div>
    </div>
   
 );
}

export default Searchbar;