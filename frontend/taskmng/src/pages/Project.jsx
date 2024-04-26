import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

function Project() {
  const isLoogedIn = useSelector((state)=> state.loogedIn.value)
  const navigate = useNavigate();
  const location = useLocation();
  const projectId = location.state.projectId;
  const [tasksInProject,setTasksInProjects] = useState([]);
  useEffect(()=>{
    if(!isLoogedIn) navigate("/login");
    const dataFetchin=async()=>{
      const token = "Bearer" + " " + localStorage.getItem("Token");
      const axiosConfig = {
        headers: {
          Authorization: token
        }
      }
      try {
        const response = await axios.get(`http://localhost:3000/user/tasksInProject?projectId=${projectId}`,axiosConfig)
        setTasksInProjects(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    dataFetchin();
  },[])
  return (
    <div>
      <div className='ml-5'>Project</div>
      <div className='bg-dashBoardbg rounded-md h-fit'>
        <div className='p-5 font-bold text-lg'>All Projects</div>
        
        <div className='grid grid-cols-3 '>
          {tasksInProject.map((task) => (
            <div key={task._id} className='col-span-1 bg-white m-5 rounded-md shadow-md'> 
              <h3 className='text-left m-4 font-bold'>{task.taskName}</h3>
              <p className='w-auto bg-opacity-40 bg-pink m-4 rounded-md p-2 text-sm'>{}</p>
              <p className='w-auto bg-opacity-40 bg-yellow m-4 rounded-md p-2 text-sm'>Create on: {task.completionDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project