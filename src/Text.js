import React from 'react'
import musicicon from './IMAGE/icon-music.svg'


const Text = () => {
  return (
    <div className='faith'>
      <h1>Order Summary</h1>
       <p className='temi'>You can now listen to millions of songs,
         Audio books, and podcasts on any device 
         anywhere you like!
       </p>


       <div className='order'> 
         <img className='music' src={musicicon} alt=''></img>
         <div className='annual'>
             <h3 className='plan'>Annual Plan</h3>
             <p className='year'>$59.99/year</p>
         </div>
         
         <a href="">Change</a>
       </div>
        <button className='button'>Proceed to Payment</button>
        <button className='cancel'>Cancel Order</button>
    </div>
  )
}

export default Text