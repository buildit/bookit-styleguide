import React from 'react'

const BookingCard = ({time, title, room }) => {

    return (
        <div className="bookingCard">
            <p>{time}</p>
            <p>{title}</p>
            <h4>{room}</h4>
        </div>
    )
}

export default BookingCard