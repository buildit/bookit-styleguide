import React from 'react'

export const BaseBookingItem = ({ Creative Tech Meeting, 9AM, 10AM, Yellow Room, NYC }) => {
  return (
    <div className={styles.bookingItem} id={ `booking-${id}` }>
      <p>{ formatTime(start) } - { formatTime(end) }</p>
      <p id={`booking-${subject.replace(/\s/g, '-').toLowerCase()}`}>{ subject }</p>
      <h3>{ bookableName } ({ locationName })</h3>
    </div>
  )
}


