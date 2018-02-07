import React from 'react'

import { getPreviousAndNextWeekDates, formatWeek } from '../../../utils/dates-times.js'

const WeekSpinner = ({ weekOf, onClick }) => {
    const [previousWeek, nextWeek] = getPreviousAndNextWeekDates(weekOf)

    return (
        <div className='container'>
            <div className='controls'>
                <span onClick={() => onClick(previousWeek)} id="previous">&#12296;</span>
            </div>
            <div className='week'>
                <h3>{formatWeek(weekOf)}</h3>
            </div>
            <div className='controls'>
                <span onClick={() => onClick(nextWeek)} id="next">&#12297;</span>
            </div>
        </div>
    )
}

export default WeekSpinner