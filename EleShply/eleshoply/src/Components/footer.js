import React from 'react' 
import "../Styles/footer.css";
import Socialmedia from './socialmedia';
const Footer=()=> {
  return (
    <div className='footer'>
        <div className='footer-label'>
            <div className='footer-label-content'>
              <h4>ALL UPS FOR GRABS</h4>
              <h3>Enjoy up to 70% off!</h3>
              <p>Grab your limited-time discount and enjoy 70& off on all our products</p>
              <button>Shop Now</button>
            </div>
            <div className='footer-label-image'>
            <img src="https://live.templately.com/wp-content/uploads/2020/06/15cae33f-cta-image.png" alt=""></img>
            </div>
        </div>
        <div className='footer-info'>
        <div className='footer-copyright'>
            <img src="https://live.templately.com/wp-content/uploads/2020/06/689328fd-eleshoply..png" alt=""/><br></br>
            © Copyright 2020. Powered by WPDeveloper
        </div>
        <div className='footer-socialmedia'>
           <Socialmedia/>
        </div>
        <div className='footer-payment'>
            <img src="https://live.templately.com/wp-content/uploads/2020/06/d84f314a-cards.png" alt=""></img>
        </div>
        </div>
    </div>
  );
}

export default Footer