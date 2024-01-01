import React from 'react'
import "../Styles/socialmedia.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Socialmedia=()=>{
  return (
    <div className='footer-socialmedia'>
    <a href="https://live.templately.com/eleshoply/#"> <FontAwesomeIcon icon={faFacebookF} className="icons1" /></a>
    <a href="https://live.templately.com/eleshoply/#"><FontAwesomeIcon icon={faTwitter} className="icons2" /></a>
    <a href="https://live.templately.com/eleshoply/#"><FontAwesomeIcon icon={faLinkedinIn} className="icons3" /></a>
    <a href="https://live.templately.com/eleshoply/#"><FontAwesomeIcon icon={faInstagram} className="icons4" /></a>
</div>
  );
}
export default Socialmedia