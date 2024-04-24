import React from 'react'

function Input({
  className = "border border-gray-400 text-gray-400 w-full",
  placeholder,
  type = "text"
}
) {
  return (
    <>
      <input type={type} className={className} placeholder={placeholder}/>
    </>
  )
}

export default Input