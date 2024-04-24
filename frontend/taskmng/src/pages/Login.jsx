import React from 'react'
import Input from '../components/Input'
import LoginPageImg from "../assets/Group 23@2x.png"
function Login() {
  return (
    <div className='grid grid-cols-2 h-screen'>
      <div className='col-span-1 p-5'>
        <div>
          TASMANG
        </div>
        <div>
         Log in to your Account
        </div>
        <div>
          Welcome back!
        </div>
        <Input placeholder="Email"/>
        <Input placeholder="Password"/>
      </div>
      <div className='col-span-1 bg-mainColor'>
        <div className='p-10 pt-20'>
          <img src={LoginPageImg} alt="login page img" />
        </div>
        <div className='text-white text-center pt-10'>Manage your tasks in collaborative enviourvemt</div>
      </div>
    </div>
  )
}

export default Login