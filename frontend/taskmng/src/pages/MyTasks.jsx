import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Buttons from '../components/Buttons';
function MyTasks() {
  const isLoogedIn = useSelector((state)=> state.loogedIn.value);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([])

  const completedHandler= async(id)=>{
    const token = "Bearer" + " " + localStorage.getItem("Token");
    const axiosConfig = {
      headers: {
        Authorization: token
      }
    }
    const bodyConfig = {
      taskId: id
    }
    console.log(bodyConfig);
    try {
      const response = await axios.post('http://localhost:3001/user/taskcomplete',bodyConfig,axiosConfig);
      setSuccess(response.data.msg);
    } catch (error) {
      console.log(error);
    }
  }
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
        const response = await axios.get(`http://localhost:3001/user/tasksInUser`,axiosConfig)
        setTasks(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    dataFetchin();
  },[success])
  return (
    <div>
      <div className='ml-5'>My Tasks</div>
      <div className='bg-dashBoardbg rounded-md h-fit'>
        <div className='p-5 font-bold text-lg'>My Tasks</div>
        
        <div className='flex justify-center'>
            <div className='lg:w-1/2 md:w-2/3 w-full bg-white m-5 rounded-md shadow-md'> 
          {tasks.map((task) => {
              const date = new Date(task.completionDate);
              const formattedDate = date.toDateString();
            return(
              <div key={task._id} className='border-b border-grayText'>
                <h3 className='text-left m-4 font-bold'>{task.taskName}</h3>
                <p className='w-auto bg-opacity-40 bg-dashBoardbg m-4 rounded-md p-2 text-sm'>Priority: {task.priority}</p>
                <p className='w-auto bg-opacity-40 bg-dashBoardbg m-4 rounded-md p-2 text-sm'>Deadline: {formattedDate}</p>
                <p className='w-auto bg-opacity-40 bg-dashBoardbg m-4 rounded-md p-2 text-sm'>Deatils: {task.discription}</p>
                {task.status == true ?
                  <p className='w-auto bg-opacity-40 bg-green m-4 rounded-md p-2 text-sm'>Completed</p> 
                : 
                  <div className="m-4">
                    <p className='w-auto bg-opacity-40 bg-errorRed rounded-md p-2 text-sm'>Not Completed</p>
                    <Buttons title="Mark Completed" onclick={()=>{completedHandler(task._id)}}/>
                  </div>
                }
              </div>
          )})}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyTasks