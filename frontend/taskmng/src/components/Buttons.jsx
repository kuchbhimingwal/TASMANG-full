import React from 'react'

function Buttons({
  onclick,
  className,
  title
}) {
  const clickHandler = ()=>{
    onclick();
  }
  return (
    <>
      <button className={`bg-mainColor text-center p-3 w-full text-white rounded-md my-2 ${className}`} onClick={clickHandler}>{title}</button>
    </>
  )
}

export default Buttons