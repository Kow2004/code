import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes,faSearch,faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Productcard from '../Layouts/productcard';
import "../Styles/menubar.css";
import "../Styles/Searchbar.css";
import {Link } from "react-router-dom";

const Menubar=()=>{
const [isMenuOpen, setMenuOpen] = useState(false);
const [isSearchOpen,setSearchOpen] = useState(false);
const[SearchQuery,setSearchQuery]=useState('');
const[isProductopen,setProductopen]=useState(false);
const [products,setproduct] =useState([
    { id: 1, title: 'Learn Python Programming Masterclass', price: '$89.99', salePrice: '$44.99', image: 'https://live.templately.com/wp-content/uploads/2021/06/297c6a78-image0.png' },
    {id:2,title:'Learn Python Programming Masterclass',price:'$89.99',salePrice:'$44.99',image:'https://live.templately.com/wp-content/uploads/2021/06/076ccfe0-image9.png'},
    {id:3,title:'Learn Python Programming Masterclass',price:'$89.99',salePrice:'$44.99',image:'https://live.templately.com/wp-content/uploads/2021/06/b32321a0-image8.png'},
    {id:4,title:'Learn Python Programming Masterclass',price:'$89.99',salePrice:'$44.99',image:'https://live.templately.com/wp-content/uploads/2021/06/d1c94ad0-image11.png'},
    {id:5,title:'Parlor Palm',price:'$89.99',salePrice:'$49.99',image:'https://live.templately.com/wp-content/uploads/2021/06/1b967317-image5-216x300.png'},
    {id:6,title:'Parlor Palm',price:'$89.99',salePrice:'$49.99',image:'https://live.templately.com/wp-content/uploads/2021/06/fb12d250-image4-216x300.png'},
    {id:7,title:'Parlor Palm',price:'$89.99',salePrice:'$49.99',image:'https://live.templately.com/wp-content/uploads/2021/06/4a7618ad-image3-216x300.png'},
    {id:8,title:'Parlor Palm',price:'$89.99',salePrice:'$49.99',image:'https://live.templately.com/wp-content/uploads/2021/06/763891b6-image2-216x300.png'},
    {id:9,title:'Parlor Palm',price:'$89.99',salePrice:'$49.99',image:'https://live.templately.com/wp-content/uploads/2021/06/a7fcc1b9-image1-216x300.png'},
    {id:10,title:'Parlor Palm',price:'$89.99',salePrice:'$49.99',image:'https://live.templately.com/wp-content/uploads/2021/06/5b8ab031-image33-216x300.png'},
    {id:11,title:'Parlor Palm',price:'$89.99',salePrice:'$49.99',image:'https://live.templately.com/wp-content/uploads/2021/06/939de1ca-image22-216x300.png'},
    {id:12,title:'Parlor Palm',price:'$89.99',salePrice:'$49.99',image:'https://live.templately.com/wp-content/uploads/2021/06/f26aaa8f-image11-216x300.png'}
  ])

  const filterName = products.filter((n) => n.title.toLowerCase().includes(SearchQuery.toLowerCase()));
const handleMenuToggle = () => {
setMenuOpen(!isMenuOpen);
};
const handleMenuItemClick = () => {
setMenuOpen(false);
};
const handleSearchToggle=()=>{
setSearchOpen(!isSearchOpen);
}
const handleProductClick=()=>{
    setProductopen(!isProductopen);
}
return(
<>
<div className="bars">

<div className="menubar" onClick={handleMenuToggle}>

{isMenuOpen?(<FontAwesomeIcon icon={faTimes} style={{ color: 'white', width: '43px', height: '25px' }}/>):
(<FontAwesomeIcon icon={faBars} style={{ color: 'white', width: '43px', height: '25px' }} />)}
</div>

<div className="title">
<img src="https://live.templately.com/wp-content/uploads/2020/06/689328fd-eleshoply..png" alt=""/>
</div>

<div className="navbar">
<FontAwesomeIcon icon={faSearch} className="icon" onClick={handleSearchToggle}/>

{
isSearchOpen&&(
<div className="Searchbar">
<input type='text' placeholder='Search products' className='Searchbar-input'value={SearchQuery} onChange={(e)=>setSearchQuery(e.target.value)}></input>
<FontAwesomeIcon icon={faTimes} className='Searchbar-icon' onClick={handleSearchToggle} style={{ color: 'white', width: '43px', height: '25px' }}/>
</div>
)}

<FontAwesomeIcon icon={faHeart} className="icon"/>
<FontAwesomeIcon icon={faShoppingCart} className="icon"/> 
<button>Login</button>
</div>
</div>
{isMenuOpen&&(<div className="menubar-content">
<ul>
<li onClick={handleMenuItemClick}><Link to='/'>Home</Link></li>
<li onClick={handleMenuItemClick}><Link to='/about'>About us</Link></li>
<li  onClick={handleProductClick}>Product Collections</li>
 {isProductopen && <li className='Single-products' onClick={handleMenuItemClick}><a href='#'>Parlor Palm</a></li>}
<li onClick={handleMenuItemClick}><Link to='/cart'>Cart</Link></li>
<li onClick={handleMenuItemClick}><Link to='/account'>My Account</Link></li>
<li onClick={handleMenuItemClick}><Link to='/checkout'>Checkout</Link></li>
<li onClick={handleMenuItemClick}><Link to='/contact'>Contact us</Link></li>
</ul> 
</div>)}
{isSearchOpen && <Productcard filteredname={filterName}/>}
</>
);
}
export default Menubar;