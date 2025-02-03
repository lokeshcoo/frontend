import React from 'react'

const Textinput = ({ id, label, placeholer = "", type = 'text', disabled = false, readOn }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input

                type='text'></input>
        </div>
    )
}

export default Textinput