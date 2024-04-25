import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {loggeed, out} from "../Store/slices/userLoggedIn"
import { useNavigate } from 'react-router-dom';
function Dashboard() {
const isLoogedIn = useSelector((state)=> state.loogedIn.value)
const dispatch = useDispatch();
const navigate = useNavigate();

useEffect(()=>{
  if(!isLoogedIn) navigate("/login");
},[])
  return (
    <div>
      <button onClick={()=>{dispatch(loggeed())}}>click</button>
    </div>
  )
}

export default Dashboard