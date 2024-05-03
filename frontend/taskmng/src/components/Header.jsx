import React from 'react'
import { useState } from 'react'
import logo from '../assets/TASMANG@2x.png'
import Input from './Input'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {navItems} from '../assets/navItems'
import NavList from './NavList'
function Header() {
  const navigate = useNavigate()
  const user = useSelector((state)=> state.user.value);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className='w-full flex justify-between px-10 mb-5'>
        <div  className='w-24 h-auto cursor-pointer' onClick={()=>{navigate("/")}}>
          <img src={logo} alt="logo" className='mt-4'/>
        </div>
        <div className='flex pt-4'>
          <div className="flex">
            {/* <Input classname="h-8 mr-10 hidden sm:block" placeholder="Search"/> */}
            <Link to="/profile" className='text-gray-400 flex'>
              <div className='rounded-full bg-mainColor text-white text-center w-6 h-6 mx-2'>{user.firstname.charAt(0).toUpperCase()}</div>
              {user.firstname}
            </Link>
          </div>
          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <svg
                className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`w-full px-10 md:hidden flex items-center ${isOpen ? "block" : "hidden"}`}>
        <div className="text-sm w-full">
          {navItems.map((item,i)=>(
        <NavList key={i} svg={item.icon} title={item.title} to={item.to} classname="pl-10"/>
      ))}
        </div>
      </div>
    </div>
  )
}

export default Header