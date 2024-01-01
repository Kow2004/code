import React from 'react'
import "../Styles/Collections.css";
function Collections() {
  return (

    <div className='Collections'>
        <div className='Collections-card1'>
           <div className='Collections-content'>
           <div className='Collections-details'>
            <h3>NEW ARRIVALS</h3>
            <h2>THE BLACK BEAUTY</h2>
            <p>Look sophisticated in our new collection of all-black clothing ensemble.</p>
            <button>Browse Collections</button>
            </div> 

           <div className='Collections-image'>
            <img src="https://live.templately.com/wp-content/uploads/2020/06/9ceb18f7-image-b.png" alt=""></img>
           </div>
           </div>
        </div>
    
        <div className='Collections-card2'>
           <div className='Collections-content'>
           <div className='Collections-details'>
            <h3>WINTER COLLECTION</h3>
            <h2>WINTER’S BEST</h2>
            <p>Check out our best winter collection to stay warm in style this season.</p>
            <button>Discover More</button>
            </div> 

           <div className='Collections-image'>
            <img src="https://live.templately.com/wp-content/uploads/2020/06/2f67452f-image-a.png" alt=""></img>
           </div>
         </div>
        </div>
    </div>
  )
}

export default Collections