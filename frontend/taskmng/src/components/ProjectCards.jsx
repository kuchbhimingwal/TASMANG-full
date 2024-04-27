import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProjectCards({posts}) {
  const navigate = useNavigate();
  const handleCLick=(projectId)=>{
    navigate('/project', {state:{projectId: projectId}})
    console.log(projectId);
  }
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
      {posts.map((post) => { 
        const date = new Date(post.createdAt);
        const formattedDate = date.toDateString();
        return(
        <div key={post._id} className='col-span-1 bg-white m-5 rounded-md shadow-md' onClick={()=>{handleCLick(post._id)}}> 
          <h3 className='text-left m-4 font-bold'>{post.projectName}</h3>
          <p className='w-auto bg-opacity-40 bg-pink m-4 rounded-md p-2 text-sm'>{post.discription}</p>
          <p className='w-auto bg-opacity-40 bg-yellow m-4 rounded-md p-2 text-sm'>Create on: {formattedDate}</p>
        </div>
      )}
      )}
    </div>
  )
}

export default ProjectCards