import React, { useState } from 'react'
import Input from '../components/Input'
import Buttons from '../components/Buttons';
function ProfileEdit() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const clickHandler = ()=>{
    const updateObj = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password
    }
    console.log(updateObj);
  }
  return (
    <div>
      <div className='bg-dashBoardbg rounded-md h-fit mt-5'>
        <div className='p-5 font-bold text-lg'>Edit My Profile</div>
        
        <div className='flex justify-center pb-10'>
            <div className='lg:w-1/2 md:w-2/3 w-full bg-white m-5 rounded-md shadow-md'> 
              <div className='border-b border-grayText'>
                <h3 className='text-left m-4 font-bold'>Edit Profile</h3>
                <Input placeholder="First Name"  onchange={(e)=>{setFirstName(e)}} value={firstName}/>
                <Input placeholder="Last Name" onchange={(e)=>{setLastName(e)}} value={lastName}/>
                <Input placeholder="Email" onchange={(e)=>{setEmail(e)}} value={email}/>
                <Input placeholder="Password"  type="password" onchange={(e)=>{setPassword(e)}} value={password}/>
                <div className='px-20 mb-4'>
                <Buttons title="Edit" onclick={clickHandler} className="h-10 p-0"/>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileEdit