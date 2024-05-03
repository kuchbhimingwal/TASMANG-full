import React from 'react'
import { useSelector } from 'react-redux';
function TasksTable({
  tasks
}){
  const projects = useSelector((state)=> state.project.value);
  return (
    <div className='mx-4 bg-white p-4 rounded-md'>
      <div className='grid grid-cols-5 my-2 border-b border-grayText'>
        <div className='col-span-1 text-grayText'>Project name </div>
        <div className='col-span-1 text-grayText'>Task </div>
        <div className='col-span-1 text-grayText'>Status </div>
        <div className='col-span-1 text-grayText'>Priority </div>
        <div className='col-span-1 text-grayText'>Deadline Date </div>
      </div>
      {tasks.map((task,i)=> {
        const date = new Date(task.completionDate);
        const formattedDate = date.toDateString();
        return(
        <div className='hidden sm:grid grid-cols-5 my-2' key={i}>
          <div className='col-span-1 text-xs md:text-sm ld:text-md'>{projects.find(project => task.userId == project._id).projectName}</div>
          <div className='col-span-1 text-xs md:text-sm ld:text-md'>{task.taskName}</div>
          <div className='col-span-1 text-xs md:text-sm ld:text-md'>{(task.status == true ? "completed": "Not completed")}</div>
          {(task.priority == "High" ) ? <div className='bg-errorRed rounded-md text-center w-1/2 text-xs md:text-sm ld:text-md' >{task.priority}</div> : null}
          {(task.priority == "Med" ) ? <div className='bg-yellow rounded-md text-center w-1/2 text-xs md:text-sm ld:text-md' text-xs md:text-sm ld:text-md>{task.priority}</div> : null}
          {(task.priority == "Low" ) ? <div className='bg-green rounded-md text-center w-1/2 text-xs md:text-sm ld:text-md'>{task.priority}</div> : null}
          {/* <div className='col-span-1'>{task.priority}</div> */}
          <div className='col-span-1 text-xs md:text-sm ld:text-md'>{formattedDate}</div>
        </div>
      )})}
    </div>
  )
}

export default TasksTable