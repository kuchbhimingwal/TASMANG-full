import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input';
import Buttons from '../components/Buttons';
import { addUser } from '../Store/slices/userSclice';
import { addUsers } from '../Store/slices/users';
import { adminOut } from '../Store/slices/adminLoggedin';
import { addProject } from '../Store/slices/projectSlice';
import axios from 'axios';
function AdminAddTask() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state)=> state.adminLoggedin.value);
  const users = useSelector((state)=> state.users.value)
  const projects = useSelector((state)=> state.project.value)
  const priorities = ["High", "Med", "Low"];
  const [pri, setPri] = useState("");
  const [user, setUser] = useState("");
  const [project, setProject] = useState("");
  const [taskname, setTaskname] = useState("");
  const [discription, setDiscription] = useState("");
  const [completiondate, setCompletiondate] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("")
  // console.log(users);
  // console.log(projects);
  const navigate = useNavigate();
  const logoutHandler = ()=>{
    dispatch(adminOut());
    dispatch(addUsers([]));
    dispatch(addUser({}));
    dispatch(addProject([]));
    navigate("/adminlogin");
  }
  const clickHandler = async()=>{
    const token = "Bearer" + " " + localStorage.getItem("adminToken");
    const bodyObject = {
      taskName : taskname,
      status: false,
      priority: pri,
      discription: discription,
      completionDate: completiondate
    }
    const userId = users.find(e=> e.firstname == user)._id
    const projectId = projects.find(e=> e.projectName == project)._id

    const axiosConfig = {
      headers: {
        Authorization: token,
        projectid: projectId,
        assignto: userId
      }
    }

    try {
      const response = await axios.post('https://tasmang-backend.kuchbhimingwal.com/admin/task', bodyObject, axiosConfig)
      // console.log(response);
      setPri(priorities[0]);
      setUser(users[0].firstname);
      setProject(projects[0].projectName);
      setTaskname("");
      setDiscription("");
      setCompletiondate("");
      setSuccess(response.data.msg);
    } catch (error) {
      setPri(priorities[0]);
      setUser(users[0].firstname);
      setProject(projects[0].projectName);
      setTaskname("");
      setDiscription("");
      setCompletiondate("");
      setError(error.response.data.msg);
    }
  }
  useEffect(()=>{
    if(!isLogged) navigate('/adminlogin');
    setPri(priorities[0]);
    setUser(users[0].firstname);
    setProject(projects[0].projectName);
  },[])
  return (
    <div>
      <div className='grid grid-cols-2'>
        <div className='col-span-1 text-center  text-mainColor border border-mainColor h-10 py-2 cursor-pointer'  onClick={()=>{navigate("/admindashboard")}}>Add Project</div>
        <div className='col-span-1 text-center  h-10 bg-mainColor text-white py-2  cursor-pointer'>Add Task</div>
      </div>

      <div className='flex justify-center pb-10 mt-10'>
          <div className='lg:w-1/2 md:w-2/3 w-full bg-white m-5 rounded-md shadow-md'> 
            <div className='border-b border-grayText p-5'>
                <h3 className='text-left mb-2 font-bold'>Add Task</h3>
                <p className='text-grayText text-sm'>Enter the details of the Tasks</p>
                <Input placeholder="Task Name"  onchange={(e)=>{setTaskname(e)}} value={taskname}/>
                <Input classname="h-20" placeholder="Discription" onchange={(e)=>{setDiscription(e)}} value={discription}/>
                <Input placeholder="Date" type="date" onchange={(e)=>{setCompletiondate(e)}} value={completiondate}/>
                <select onChange={(e)=>{setUser(e.target.value)}} value={user} className='border border-grayText rounded-md p-1 text-grayText'>
                  {users.map((option, index) => (
                    <option key={index} value={option.firstname}>{option.firstname}</option>
                  ))}
                </select>
                <select onChange={(e)=>{setProject(e.target.value)}} value={project} className='mx-2 border border-grayText rounded-md p-1 text-grayText'>
                  {projects.map((option, index) => (
                    <option key={index} value={option.projectName}>{option.projectName}</option>
                  ))}
                </select>
                <select onChange={(e)=>{setPri(e.target.value)}} value={pri} className='border border-grayText rounded-md p-1 text-grayText'>
                  {priorities.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
                <div className='text-errorRed text-center'>{error}</div>
                <div className='text-green text-center'>{success}</div>
                <div className='px-20 '>
                <Buttons title="Add Task" onclick={clickHandler} className="h-10 p-0"/>
                <Buttons title="Log Out" onclick={logoutHandler}/>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AdminAddTask