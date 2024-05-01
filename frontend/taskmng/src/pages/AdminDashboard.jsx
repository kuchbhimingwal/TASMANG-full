import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import Buttons from '../components/Buttons'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addProject } from '../Store/slices/projectSlice';
import { useNavigate } from "react-router-dom";
function AdminDashboard() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state)=> state.adminLoggedin.value);
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("")
  const [discription, setDiscription] = useState("")
  const [completionDate, setCompletionDate] = useState("")
  const [error , setError] = useState("");
  const [success, setSuccess] = useState("")
  const clickHandler = async()=>{
    const token = "Bearer" + " " + localStorage.getItem("adminToken");
    const bodyObject = {
      projectName,
      discription,
      completionDate
    }
    const axiosConfig = {
      headers: {
        Authorization: token
      }
    }
    try {
      const response = await axios.post('http://localhost:3000/admin/project',bodyObject,axiosConfig)
      setSuccess(response.data.msg);
      try {
        const response = await axios.get('http://localhost:3000/user/projects', axiosConfig);
        dispatch(addProject(response.data));
        setProjectName("");
        setDiscription("");
        setCompletionDate("");
      } catch (error) {
        setError(error);
        setProjectName("");
        setDiscription("");
        setCompletionDate("");
      }
    } catch (error) {
      setError(error);
      setProjectName("");
      setDiscription("");
      setCompletionDate("");
    }
  }
  useEffect(()=>{
    if(!isLogged) navigate('/adminlogin')
  },[])
  return (
    <div>
      <div className='grid grid-cols-2'>
        <div className='col-span-1 text-center bg-mainColor text-white h-10 py-2 cursor-pointer'>Add Project</div>
        <div className='col-span-1 text-center  h-10 py-2 border text-mainColor border-mainColor cursor-pointer' onClick={()=>{navigate("/addtask")}}>Add Task</div>
      </div>

      <div className='flex justify-center pb-10 mt-10'>
          <div className='lg:w-1/2 md:w-2/3 w-full bg-white m-5 rounded-md shadow-md'> 
            <div className='border-b border-grayText p-5'>
                <h3 className='text-left mb-2 font-bold'>Add a Project</h3>
                <p className='text-grayText text-sm'>Enter the details of the project</p>
                <Input placeholder="Project Name"  onchange={(e)=>{setProjectName(e)}} value={projectName}/>
                <Input placeholder="Discription" onchange={(e)=>{setDiscription(e)}} value={discription}/>
                <Input placeholder="Date" type="date" onchange={(e)=>{setCompletionDate(e)}} value={completionDate}/>
                <div className='text-errorRed text-center'>{error}</div>
                <div className='text-green text-center'>{success}</div>
                <div className='px-20 '>
                <Buttons title="Add projects" onclick={clickHandler} className="h-10 p-0"/>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AdminDashboard