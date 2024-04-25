import React from 'react'
import {navItems} from '../assets/navItems'
import NavList from './NavList'
function SideNavBar() {
  return (
    <div className='px-2 opacity-80'>
      {navItems.map((item)=>(
        <NavList svg={item.icon} title={item.title} />
      ))}
    </div>
  )
}

export default SideNavBar