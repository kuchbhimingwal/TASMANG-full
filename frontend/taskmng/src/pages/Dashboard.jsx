import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {loggeed, out} from "../Store/slices/userLoggedIn"
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
function Dashboard() {
const isLoogedIn = useSelector((state)=> state.loogedIn.value)
const dispatch = useDispatch();
const navigate = useNavigate();

useEffect(()=>{
  if(!isLoogedIn) navigate("/login");
},[])
  return (
    <div className='mx-10 grid grid-cols-6'>
      <div className='col-span-1 mt-20'>
        <SideNavBar />
      </div>
      <div className='col-span-5 bg-grayText'>

      </div>
    </div>
  )
}

export default Dashboard