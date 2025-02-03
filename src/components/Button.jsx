import React from 'react'

const Button = ({ disabled = false, children }) => {
  return (
    <button
      disabled={disabled}
      className='p-4 py-2 bg-blue-600 hover: bg-blue-800 disabled : opacity-50 text-white rounded-md'>Submit
      {children}
    </button>
  )
}

export default Button;