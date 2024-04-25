import React from 'react'
import logo from '../assets/TASMANG@2x.png'
import Input from './Input'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='w-full flex justify-between mx-10'>
      <div  className='w-1/12 h-auto'>
        <img src={logo} alt="logo" className='mt-4'/>
      </div>
      <div className="w-1/4 flex">
        <Input classname="h-8 mb-5 mr-10" placeholder="Search"/>
        <Link to="#" className='text-gray-400 mt-4'>
          name
        </Link>
      </div>
    </div>
  )
}

export default Header