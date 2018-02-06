import React from 'react'
import TimePicker from 'rc-time-picker-date-fns';
import 'rc-time-picker-date-fns/assets/index.css'

const onTimeChange = (time) => {
    // console.log(time);
}

const TimePickerInput = ({ }) => (
    <div className="timepicker-field">
        <label>Date</label>
        <div className="tpInput">
            <TimePicker onChange={onTimeChange} showSecond={false} allowEmpty={false} />
        </div>
    </div >
)

export default TimePickerInput