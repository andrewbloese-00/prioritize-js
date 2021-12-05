import React, { useState } from 'react'
import '../../css/task.css'
import Details from './Details';


const Task = ({task,click,deleteAction,editAction}) => {
  function calc12hrTime(d)
 {
  let mins = d.getUTCMinutes()
  if (mins < 10){
    mins = "0"+mins
  }
  let hrs = d.getUTCHours();
  let formattedHrs = hrs % 12;
  if (formattedHrs === 0) 
  {
    formattedHrs  = 12;
  }
  let timeString = formattedHrs+":"+mins
  if(hrs > 12)
  {
    timeString+=" PM"
  }
  else{
    timeString+= " AM"
  }
  
  return timeString
  
}
const [comp, setComp] = useState(task.complete); 
let dueAt = calc12hrTime(new Date(task.date))
    /*
    console.log(`
    Task
    ------
    id:   ${task.id}
    name: ${task.name}
    desc: ${task.description}
    date: ${task.date}
    ttc: ${task.ttc}
    completed: ${task.complete}
    `)*/
    
  return (
    <div className='task__wrapper'>
     <div className='task__marker'>
       {!comp && <i onClick={click} className='far fa-square'></i>}
       {comp && <i onClick={click} className='fas fa-square'></i>}
     </div>
     <div className='task__content'>
      <div className='name__desc'>
        <Details title={task.name} details={task.description} due={dueAt} ttc={task.ttc} taskID={task.id} deleteAction={deleteAction} editAction={editAction}/>
      </div>
      
      
     </div>
   </div>
  )
}
export default Task
