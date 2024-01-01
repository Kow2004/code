import React from 'react'
import "../Styles/productcard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Productcard=({filteredname})=> {
    console.log(filteredname)
    
return (
<div className='productcard'>
<h2>Products</h2>
<div className='productcard-cards'>
{
filteredname && filteredname.map((n,index)=>(
<div className='product' key={index}>
<div className='productcard-card'>
{/* <span className='sale'>Sale</span> */}
<img src={n.image} alt=""></img> 
</div>
<div className='productcard-card-content'>
<h2>{n.title}</h2>
<p><span>{n.price}</span>{n.salePrice}</p>
<button className='atc'><FontAwesomeIcon icon={faShoppingCart} className='atc-cart'/>Add to Cart</button>
</div>
</div>
))
}
</div>
</div>
);
}

export default Productcard


