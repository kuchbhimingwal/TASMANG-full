import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import Buttons from '../components/Buttons'
import LoginPageImg from "../assets/Group 23@2x.png"
import axios from 'axios';
import { loggeed } from '../Store/slices/userLoggedIn';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state)=> state.loogedIn.value);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const loginHandler = async()=>{
    localStorage.clear();
    const axiosConfig = {
      headers: {
        email: email,
        password: password
      }
    }
     
    try {
      const response = await axios.get('http://localhost:3000/user/signin', axiosConfig)
      // console.log(response.data)
      localStorage.setItem('Token',response.data.token);
      dispatch(loggeed());
      navigate("/")
    } catch (error) {
      console.error(error)
      setError(error.response.data.mssg)
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
         Log in to your Account
        </div>
        <div className='text-grayText my-1'>
          Welcome back!
        </div>
        <Input placeholder="Email" onchange={setEmail} value={email}/>
        <Input placeholder="Password" onchange={setPassword} type="password" value={password}/>
        <div className='text-errorRed text-center'>{error}</div>
        <Buttons title="Log in" onclick={loginHandler}/>
        <div className='text-center text-grayText'>Don’t have a account?</div>
        <Buttons title="Sign up" onclick={()=>{navigate("/signup")}} />
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