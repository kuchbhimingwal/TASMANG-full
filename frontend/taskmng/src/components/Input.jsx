import React from 'react'

function Input({
  value,
  onchange,
  classname,
  placeholder,
  type
})
{

const changehandler = (e)=>{
  onchange(e.target.value)
}
  return (
    <>
      <input type={type} className={`border border-gray-400 text-gray-400 w-full p-2 border-grayText rounded-md my-2 ${classname}`} placeholder={placeholder} onChange={changehandler} value={value}/>
    </>
  )
}

export default Input