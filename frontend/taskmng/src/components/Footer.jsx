import React from 'react'
import logo from '../assets/TASMANG@2x.png'

function Footer() {
  return (
    <div className='w-full bg-white text-black border border-grayText h-10 flex p-2 justify-between mt-5'>
      <div className='w-20'><img src={logo} alt="logo image" /></div>
      <div className='text-grayText font-thin text-sm'>© 2024 TASMANG. All rights reserved.</div>
    </div>
  )
}

export default Footer