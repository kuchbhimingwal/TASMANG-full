import React from 'react'
import Input from '../components/Input'
import Buttons from '../components/Buttons'
import LoginPageImg from "../assets/Group 23@2x.png"
function Login() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 h-screen'>
      <div className='col-span-1 sm:px-20 sm:py-24 px-10 py-14'>
        <div className='text-mainColor font-bold text-xl'>
          TASMANG
        </div>
        <div className='text-black font-bold text-xl mt-4'>
         Log in to your Account
        </div>
        <div className='text-grayText my-1'>
          Welcome back!
        </div>
        <Input placeholder="Email"/>
        <Input placeholder="Password"/>
        <Buttons title="Log in"/>
        <div className='text-center text-grayText'>Don’t have a account?</div>
        <Buttons title="Sign up" />
      </div>
      <div className='col-span-1 bg-mainColor hidden md:block'>
        <div className='p-20'>
          <img src={LoginPageImg} alt="login page img" />
        </div>
        <div className='text-white text-center '>Manage your tasks in collaborative enviourvemt</div>
      </div>
    </div>
  )
}

export default Login