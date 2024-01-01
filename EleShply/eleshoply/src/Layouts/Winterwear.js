import React from 'react'
import "../Styles/Winterwear.css";
const Winterwear=()=>{
  return (
    <div className='Winterwear'>
        <div className='Winterwear-content'>
            <h2>WINTER WEAR FOR LADIES</h2>
            <p>Ladies, bring out the inner fashionista in you with our beautiful winter collection.</p>
            <p id="price">Price <span>$117.99</span></p>
            <button>Shop NOw</button>
        </div>
        <div className='Winterwear-image'>
            <img src='https://live.templately.com/wp-content/uploads/2020/06/26f3e8ee-product-10.jpg' alt=''></img>
        </div>
    </div>
  );
}

export default Winterwear