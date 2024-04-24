import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {loggeed, out} from "../Store/slices/userLoggedIn"
function Dashboard() {
const isLoogedIn = useSelector((state)=> state.loogedIn.value)
const dispatch = useDispatch()
console.log(isLoogedIn);
  return (
    <div>
      <button onClick={()=>{dispatch(loggeed())}}>click</button>
    </div>
  )
}

export default Dashboard