import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import TasksTable from '../components/TasksTable';

function Tasks() {
  const isLoogedIn = useSelector((state)=> state.loogedIn.value)
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    if(!isLoogedIn) navigate("/login");
    const token = "Bearer" + " " + localStorage.getItem("Token");
    const axiosConfig = {
      headers: {
        Authorization: token
      }
    }
    const dataFetching = async()=>{
      try {
        const tasks = await axios.get('http://tasmang-backend.kuchbhimingwal.com/user/tasks', axiosConfig)
        setTasks(tasks.data);
      } catch (error) {
        console.error(error)
      }
    }
    dataFetching();
  },[])
  return (
    <div className=''>
      <div className='ml-5'>All Tasks</div>
      <div className='bg-dashBoardbg rounded-md h-fit p-4'>
        <div className='p-5 font-bold text-lg'>Tasks list</div>
        <TasksTable tasks={tasks}/>
      </div>
    </div>
  )
}

export default Tasks