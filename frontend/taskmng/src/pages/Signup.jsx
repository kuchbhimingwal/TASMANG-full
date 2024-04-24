import React, { useState } from 'react'
import Input from '../components/Input'
import Buttons from '../components/Buttons'
import SignuoImg from "../assets/Group 24@2x.png"

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const test = ()=>{
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
  }
  return (
    
    <div className='grid md:grid-cols-2 grid-cols-1 h-screen'>
      <div className='col-span-1 sm:px-20 sm:py-24 px-10 py-14'>
        <div className='text-mainColor font-bold text-xl'>
          TASMANG
        </div>
        <div className='text-black font-bold text-xl mt-4'>
        Sign up
        </div>
        <div className='text-grayText my-1'>
          Welcome!
        </div>
        <Input placeholder="First Name" classname="w-1/2" onchange={(e)=>{setFirstName(e)}}/>
        <Input placeholder="Last Name" classname="w-1/2" onchange={(e)=>{setLastName(e)}}/>
        <Input placeholder="Email" onchange={(e)=>{setEmail(e)}}/>
        <Input placeholder="Password"  type="password" onchange={(e)=>{setPassword(e)}}/>
        <Buttons title="Sign up" onclick={test} />
        <div className='text-center text-grayText'>Already have a account?</div>
        <Buttons title="Login" />
      </div>
      <div className='col-span-1 bg-mainColor hidden md:block'>
        <div className='p-20'>
          <img src={SignuoImg} alt="login page img" />
        </div>
        <div className='text-white text-center '>Manage your tasks in collaborative enviourvemt</div>
      </div>
    </div>
  )
}

export default Signup