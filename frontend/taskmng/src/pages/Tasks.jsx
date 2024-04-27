import React from 'react'

function Tasks() {
  return (
    <div className=''>
      <div className='ml-5'>All Tasks</div>
      <div className='bg-dashBoardbg rounded-md h-fit'>
        <div className='p-5 font-bold text-lg'>Tasks list</div>
        <ProjectCards posts={projects}/>
      </div>
    </div>
  )
}

export default Tasks