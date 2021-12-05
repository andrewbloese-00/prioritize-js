import React, { useState } from 'react'
import '../../css/task.css'
import Details from './Details';


const Task = ({task,click,deleteAction,editAction}) => {

  function calc12hrTime(d)
  {
    //if the minutes are a one digit number, we need to pad with a 0
    let mins = d.getUTCMinutes()
    if (mins < 10){
      mins = "0" + mins
    }

    //get hours in 12 hour time
    let hrs = d.getUTCHours();
    let formattedHrs = hrs % 12;

    if (formattedHrs === 0) {
      formattedHrs = 12;
    }

    let timeString = formattedHrs+":"+mins
    

    //check if it should be am or pm
    if(hrs > 12)
    {
      timeString+=" PM"
    }
    else{
      timeString+= " AM"
    }
    
    return timeString
    
}


function formattedDate(date){
  const options = {month: 'long'}
  let month = (Intl.DateTimeFormat('en-US', options).format(date))
  let day = date.getDate()

  return month + ' ' + day
  
  
}

//state for completion of task
const [comp, setComp] = useState(task.complete); 
let dueAt = calc12hrTime(new Date(task.date))
let dueDate = formattedDate(new Date(task.date))
    
  return (
    <div className='task__wrapper'>
     <div className='task__marker'>
       {!comp && <i onClick={click} className='far fa-square'></i>}
       {comp && <i onClick={click} className='fas fa-square'></i>}
     </div>
     <div className='task__content'>
      <div className='name__desc'>
        <Details ttc={task.ttc} title={task.name} details={task.description} due={dueAt} dueDate={dueDate} ttc={task.ttc} taskID={task.id} deleteAction={deleteAction} editAction={editAction}/>
      </div>
      
      
     </div>
   </div>
  )
}
export default Task
