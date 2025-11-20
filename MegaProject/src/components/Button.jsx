/* eslint-disable no-unused-vars */
import React from 'react'
// ? here we have made a common button beacuse we are using it again and again so for reliablity  
function Button({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    ...props
    // ...props is for extra funcnalities then 
}) {
  return (
    // ?here children are properties we are passing it as a object and can change it whenever we want , we can take any name 
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} `} {...props}>
        {children}
    </button>
  )
}

export default Button