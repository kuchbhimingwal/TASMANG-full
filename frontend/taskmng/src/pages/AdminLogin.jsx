import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import Buttons from '../components/Buttons'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addUser } from '../Store/slices/userSclice';
import { addUsers } from '../Store/slices/users';
import { addProject } from '../Store/slices/projectSlice';
import { loged } from '../Store/slices/adminLoggedin';
function AdminLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("mingishubham@gmail.com");
  const [password, setPassword] = useState("123456");
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
      const response = await axios.get('http://tasmang-backend.kuchbhimingwal.com/admin/signin',axiosConfig);
      // console.log(response.data.token);
      localStorage.setItem('adminToken',response.data.token);
      const token = "Bearer" + " " + response.data.token;
      const axiosConfig2 = {
        headers: {
          Authorization: token
        }
      }
      try {
        const users = await axios.get('http://tasmang-backend.kuchbhimingwal.com/user/getUsers', axiosConfig2);
        const user = await axios.get('http://tasmang-backend.kuchbhimingwal.com/admin/getadmin', axiosConfig2);
        const response = await axios.get('http://tasmang-backend.kuchbhimingwal.com/user/projects', axiosConfig2);
        // console.log(user.data);
        dispatch(loged());
        dispatch(addUsers(users.data));
        dispatch(addUser(user.data));
        dispatch(addProject(response.data));
        navigate("/admindashboard")
      } catch (error) {
        console.error(error)
      }
    } catch (error) {
      setError(error.response.data.mssg)
    }
  }
  return (
    <div className='flex justify-center items-center h-screen sm:px-20 sm:py-24 px-10 py-14'>
      <div className='w-1/2'>
        <div className='text-black font-bold text-xl mt-4'>Admin Login Page</div>

        <Input placeholder="Email" onchange={setEmail} value={email}/>
        <Input placeholder="Password" onchange={setPassword} type="password" value={password}/>
        <div className='text-errorRed text-center'>{error}</div>
        <Buttons title="Log in" onclick={loginHandler}/>
        <div className='text-center text-grayText' onClick={()=>{navigate("/login")}}>User?</div>
      </div>
    </div>
  )
}

export default AdminLogin