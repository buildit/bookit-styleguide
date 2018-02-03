import React from 'react'

const errorInput = ({label='Event Name', type='text'}) => (
    <div className="errorInput">    
        <label id={label.replace(/\s/g, '-').toLowerCase()}>{label}</label>
            <div>
              <input placeholder={label} type={type} />
            </div>
    </div>
)

export default errorInput
