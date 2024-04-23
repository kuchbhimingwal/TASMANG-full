import React, { forwardRef } from 'react'

const Input = forwardRef(function input({
  label,
  placeholder,
  type = Text,
  className = '',
  ...props
}, ref){
  return (
    <input type={type} className={`w-full pl-2 mt-5 h-10 m-1 border text-gray-400 border-gray-300 rounded-sm ${className}`} placeholder={placeholder} ref={ref} {...props}/>
  )

})

export default Input