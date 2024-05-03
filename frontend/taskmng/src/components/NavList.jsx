import React from 'react'
import { useNavigate } from 'react-router-dom'
function NavList({
  classname,
  svg,
  title,
  to
})
{
  const navigate = useNavigate();
  return (
    
    <div className={`xl:px-5 lg:px-4 p-2 mr-2 cursor-pointer border border-white hover:border-grayText rounded-md mt-5 ${classname}`}>
      <div className='flex' onClick={()=>{navigate(to)}}>
      <div dangerouslySetInnerHTML={{ __html: svg }} />
        <div className='pl-2 font-bold text-sm'>{title}</div>
      </div>
    </div>
  )
}

export default NavList