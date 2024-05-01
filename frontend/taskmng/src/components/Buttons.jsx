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
      <button className={`bg-mainColor text-center p-2 w-full text-white rounded-md my-2 hover:bg-opacity-90 transition transition-opacity${className}`} onClick={clickHandler}>{title}</button>
    </>
  )
}

export default Buttons