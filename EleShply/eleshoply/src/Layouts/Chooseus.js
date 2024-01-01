import React from 'react'
import "../Styles/Chooseus.css";
const Chooseus=()=>{
  return (
    <div className='Chooseus'>
        <h2>Why Choose Us?</h2>
        <div className='Chooseus-cards'>

            <div className='Chooseus-cards-guarantee'>
                <h4>100% Guarantee</h4>
                <p>Not happy with your purchase? Get 100% money back by returning within 7 days of purchase</p>
                <h5>Read More</h5>
            </div>

            <div className='Chooseus-cards-shipping'>
                <h4>Worldwide Free Shipping</h4>
                <p>We don’t charge extra to get your products delivered to your doorstep. Order from anywhere around the world.</p>
                <h5>Read More</h5>
            </div>

            <div className='Chooseus-cards-support'>
                <h4>24/7 Support</h4>
                <p>We have the friendliest and most dedicated customer support who stay online 24/7 to help you with your needs.</p>
                <h5>Read More</h5>
            </div>

        </div>
    </div>
  );
}

export default Chooseus