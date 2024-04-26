import React from 'react'

function ProjectCards({posts}) {
  return (
    <div className='grid grid-cols-3 '>
      {posts.map((post) => { 
        const date = new Date(post.createdAt);
        const formattedDate = date.toDateString();
        return(
        <div key={post._id} className='col-span-1 bg-white m-5 rounded-md shadow-md'> 
          <h3 className='text-left m-2'>{post.projectName}</h3>
          <p className='w-auto bg-pink-200 m-8 rounded-md'>{post.discription}</p>
          <p className='w-auto bg-yellow-200 m-8 rounded-md'>{formattedDate}</p>
        </div>
      )}
      )}
    </div>
  )
}

export default ProjectCards