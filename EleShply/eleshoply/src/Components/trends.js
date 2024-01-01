import React from 'react'
import "../Styles/trends.css";
const Trends=()=> {
  return (
    <div className='trends'>
    <div className='trends-content'>
        <h1>Stay In Trend With EleShoply</h1>
        <div className='trends-content-cards'>
        <div className='trends-content-card1'>
            <img src="https://live.templately.com/wp-content/uploads/2023/01/0ff0fcef-eleshop-icon01.png" alt=""></img>
            <h3>Latest Styles</h3>
            <p>Our designs follow the latest fashion styles to help you stay updated with new trends.</p>
            <h5>Read More</h5>
        </div>
        <div className='trends-content-card2'>
            <img src="https://live.templately.com/wp-content/uploads/2023/01/83a15b18-eleshop-icon02.png" alt=""></img>
            <h3>Best Prices</h3>
            <p>Enjoy the best prices for high quality clothing and accessories.</p>
            <h5>Read More</h5>
        </div>
        <div className='trends-content-card1'>
            <img src="https://live.templately.com/wp-content/uploads/2023/01/3722a515-eleshop-icon03.png" alt=""></img>
            <h3>Free Shipping</h3>
            <p>We provide free shipping worldwide. You can order from anywhere, anytime.</p>
            <h5>Read More</h5>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Trends