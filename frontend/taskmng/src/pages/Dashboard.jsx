import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {loggeed, out} from "../Store/slices/userLoggedIn"
import { addProject } from '../Store/slices/projectSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProjectCards from '../components/ProjectCards';

function Dashboard() {
const isLoogedIn = useSelector((state)=> state.loogedIn.value)
const dispatch = useDispatch();
const navigate = useNavigate();
const [projects,setPorjects] = useState([]);

useEffect(()=>{
  if(!isLoogedIn) navigate("/login");
  const fethData = async()=>{
    const token = "Bearer" + " " + localStorage.getItem("Token");
    const axiosConfig = {
      headers: {
        Authorization: token
      }
    }
    try {
      const response = await axios.get('https://tasmang-backend.kuchbhimingwal.com/user/projects', axiosConfig);
      setPorjects(response.data);
      dispatch(addProject(response.data));
    } catch (error) {
      console.error(error);
    }
  }
  fethData();
},[])
  return (
    <div className=''>
      <div className='ml-5'>Dashboard</div>
      <div className='bg-dashBoardbg rounded-md h-fit'>
        <div className='p-5 font-bold text-lg'>All Projects</div>
        <ProjectCards posts={projects}/>
      </div>
    </div>
  )
}

export default Dashboard