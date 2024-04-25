import React from 'react'
function NavList({
  svg,
  title
}) {
  return (
    <div className='px-5 py-2 cursor-pointer hover:bg-navHover mt-5'>
      <div className='flex'>
      <div dangerouslySetInnerHTML={{ __html: svg }} />
        <div className='pl-2 font-bold text-sm'>{title}</div>
      </div>
    </div>
  )
}

export default NavList