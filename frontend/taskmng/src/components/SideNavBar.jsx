import React from 'react'
import {navItems} from '../assets/navItems'
import NavList from './NavList'
function SideNavBar() {
  return (
    <div className='xl:px-2 lg:px-1 opacity-80'>
      {navItems.map((item,i)=>(
        <NavList key={i} svg={item.icon} title={item.title} />
      ))}
    </div>
  )
}

export default SideNavBar