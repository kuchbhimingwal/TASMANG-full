import React from 'react'
import logo from '../assets/TASMANG@2x.png'
import Input from './Input'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='w-full flex justify-between px-10 mb-5'>
      <div  className='w-24 h-auto'>
        <img src={logo} alt="logo" className='mt-4'/>
      </div>
      <div className="flex">
        <Input classname="h-8 mr-10 hidden sm:block" placeholder="Search"/>
        <Link to="#" className='text-gray-400 mt-4'>
          name
        </Link>
      </div>
    </div>
  )
}

export default Header