import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function AdminAddTask() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state)=> state.adminLoggedin.value);
  const users = useSelector((state)=> state.users.value)
  const projects = useSelector((state)=> state.project.value)
  const [user, setUser] = useState("")
  console.log(users);
  console.log(projects);
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(!isLogged) navigate('/adminlogin')
  },[])
  return (
    <div>
      <div className='grid grid-cols-2'>
        <div className='col-span-1 text-center  text-mainColor border border-mainColor h-10 py-2 cursor-pointer'  onClick={()=>{navigate("/admindashboard")}}>Add Project</div>
        <div className='col-span-1 text-center  h-10 bg-mainColor text-white py-2  cursor-pointer'>Add Task</div>
      </div>

      <select onChange={(e)=>{setUser(e.target.value)}} value={user}>
        {users.map((option, index) => (
          <option key={index} value={option.firstname}>{option.firstname}</option>
        ))}
      </select>
    </div>
  )
}

export default AdminAddTask