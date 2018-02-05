import React from 'react'
import closeSrc from './static/close.svg' 

const ActiveHeader = ({}) =>
<div className="bookings">
        <div className="heading">
          <h2 className="title">My Bookings</h2>
          <Link to="/home" className="cancel">
            <img src={closeSrc} alt="Closing booking form and go home"/>
          </Link>
        </div>
    
    
    
    
export default ActiveHeader
