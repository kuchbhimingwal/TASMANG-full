import React, { useState, useEffect } from 'react'
import Input from '../components/Input'
import Buttons from '../components/Buttons'
import SignuoImg from "../assets/Group 24@2x.png"
import axios from 'axios';
import { loggeed } from '../Store/slices/userLoggedIn';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state)=> state.loogedIn.value);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  const signUpHandler = async()=>{
    const bodyObj = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password
    }
    try {
      const response = await axios.post('http://localhost:3001//user/signup', bodyObj)
      console.log(response.data.token);
      // localStorage.setItem('Token',response.data.token);
      // dispatch(loggeed());
      navigate("/login")
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
    if(isLogged) navigate('/')
  },[])
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
        <Input placeholder="First Name"  onchange={(e)=>{setFirstName(e)}} value={firstName}/>
        <Input placeholder="Last Name" onchange={(e)=>{setLastName(e)}} value={lastName}/>
        <Input placeholder="Email" onchange={(e)=>{setEmail(e)}} value={email}/>
        <Input placeholder="Password"  type="password" onchange={(e)=>{setPassword(e)}} value={password}/>
        <div className='text-errorRed text-center'>{error}</div>
        <Buttons title="Sign up" onclick={signUpHandler} />
        <div className='text-center text-grayText'>Already have a account?</div>
        <Buttons title="Login" onclick={()=>{navigate("/login")}}/>
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