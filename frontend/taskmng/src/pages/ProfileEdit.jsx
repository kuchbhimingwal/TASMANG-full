import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import Buttons from '../components/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loggeed } from '../Store/slices/userLoggedIn';
import { addUser } from '../Store/slices/userSclice';
import { addUsers } from '../Store/slices/users';

function ProfileEdit() {
  const dispatch = useDispatch();
  const isLoogedIn = useSelector((state)=> state.loogedIn.value);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const clickHandler = async()=>{
    let updateObj = {
    }
    if(firstName != "") updateObj.firstname = firstName;
    if(lastName != "") updateObj.lastname = lastName;
    if(email != "") updateObj.email = email;
    if(password != "") updateObj.password = password;
    
    const token = "Bearer" + " " + localStorage.getItem("Token");
    const axiosConfig = {
      headers: {
        Authorization: token
      }
    }

    try {
      const response = await axios.post('http://localhost:3000/user/userUpdate',updateObj,axiosConfig);
      try {
        const users = await axios.get('http://localhost:3000/user/getUsers', axiosConfig)
        const user = await axios.get('http://localhost:3000/user/getuser', axiosConfig)
        dispatch(addUsers(users.data));
        dispatch(addUser(user.data));
        navigate("/profile")
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.error(error.response.data.msg)
      setError(error.response.data.msg)
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  }
  useEffect(()=>{
  if(!isLoogedIn) navigate("/login");
  },[])
  return (
    <div>
      <div className='bg-dashBoardbg rounded-md h-fit mt-5'>
        <div className='p-5 font-bold text-lg'>Edit My Profile</div>
        
        <div className='flex justify-center pb-10'>
            <div className='lg:w-1/2 md:w-2/3 w-full bg-white m-5 rounded-md shadow-md'> 
              <div className='border-b border-grayText p-5'>
                <h3 className='text-left mb-2 font-bold'>Edit Profile</h3>
                <p className='text-grayText text-sm'>Enter any input field to update the info</p>
                <Input placeholder="First Name"  onchange={(e)=>{setFirstName(e)}} value={firstName}/>
                <Input placeholder="Last Name" onchange={(e)=>{setLastName(e)}} value={lastName}/>
                <Input placeholder="Email" onchange={(e)=>{setEmail(e)}} value={email}/>
                <Input placeholder="Password"  type="password" onchange={(e)=>{setPassword(e)}} value={password}/>
                <div className='text-errorRed text-center'>{error}</div>
                <div className='px-20 '>
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