import React from 'react'

function TasksTable({
  tasks
}) {
  return (
    <div className='mx-4 bg-white p-4 rounded-md'>
      <div className='grid grid-cols-5 my-2'>
        <div className='col-span-1 text-grayText'>Project name </div>
        <div className='col-span-1 text-grayText'>Task </div>
        <div className='col-span-1 text-grayText'>Status </div>
        <div className='col-span-1 text-grayText'>Priority </div>
        <div className='col-span-1 text-grayText'>Deadline Date </div>
      </div>
      {tasks.map((task)=> {
        const date = new Date(task.completionDate);
        const formattedDate = date.toDateString();
        return(
        <div className='grid grid-cols-5 my-2'>
          <div className='col-span-1'>{(task.userId).substring(0,10)}</div>
          <div className='col-span-1'>{task.taskName}</div>
          <div className='col-span-1'>{(task.status == true ? "completed": "Not completed")}</div>
          <div className='col-span-1'>{task.priority}</div>
          <div className='col-span-1'>{formattedDate}</div>
        </div>
      )})}
    </div>
  )
}

export default TasksTable