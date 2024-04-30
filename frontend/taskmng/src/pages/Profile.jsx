import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Buttons from '../components/Buttons';
import { out } from '../Store/slices/userLoggedIn';
import { addUser } from '../Store/slices/userSclice';
import { addUsers } from '../Store/slices/users';
import { addProject } from '../Store/slices/projectSlice';
function Profile() {
  const isLoogedIn = useSelector((state)=> state.loogedIn.value);
  const user = useSelector((state)=> state.user.value)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const logOutHandler =()=>{
    dispatch(out());
    dispatch(addUser({}));
    dispatch(addUsers([]));
    dispatch(addProject([]));
    navigate("/login")
  }
  useEffect(()=>{
  if(!isLoogedIn) navigate("/login");
  },[])
  return (
    <div>
      <div className='bg-dashBoardbg rounded-md h-fit mt-5'>
        <div className='p-5 font-bold text-lg'>My Profile</div>
        
        <div className='flex justify-center pb-10'>
            <div className='lg:w-1/2 md:w-2/3 w-full bg-white m-5 rounded-md shadow-md'> 
              <div className='border-b border-grayText'>
                <h3 className='text-left m-4 font-bold'>{user.firstname.toUpperCase()}</h3>
                <p className='w-auto bg-opacity-40 bg-dashBoardbg m-4 rounded-md p-2 text-sm'>First Name: {user.firstname}</p>
                <p className='w-auto bg-opacity-40 bg-dashBoardbg m-4 rounded-md p-2 text-sm'>Last Name: {user.lastname}</p>
                <p className='w-auto bg-opacity-40 bg-dashBoardbg m-4 rounded-md p-2 text-sm'>Email: {user.email}</p>
                <div className='px-20 mb-4'>
                <Buttons title="Edit" onclick={()=>{navigate("/profileedit")}} className="h-10 p-0"/>
                <Buttons title="Log Out" onclick={logOutHandler} className="h-10 p-0"/>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile