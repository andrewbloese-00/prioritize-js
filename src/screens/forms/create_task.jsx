import '../../css/forms.css';

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Task from '../../Classes/Task';
import { getTasksFromStorage } from '../../helpers/storageManagement';



const DAY_IN_MS = 86400000;

let genID = ()=>{
  return new Date() * (Math.random() * DAY_IN_MS);
}
const CreateTask = ({history: {push}}) => {

  //init tasks as empty array
  let tasks = []
  //use hook to get tasks from local storage
  tasks = getTasksFromStorage()
  console.log('from helper -> ', tasks)
 // set a highlight to incorrectly input fields
 function doHighlight(domID)
 {
   document.getElementById(domID).classList.add('input__err')
 }

 function addTask(task)
 {
   tasks.push(task)
   
   //update localStorage after adding a task
   localStorage.setItem('tasks', JSON.stringify(tasks))

 }
 
 function getDate(dateStr){
   let dateToSet = new Date(dateStr);
   let timeArr = time.split(':')
   dateToSet.setUTCHours((timeArr[0]))
   dateToSet.setUTCMinutes((timeArr[1]))
   return dateToSet;
 }

 const doCreateTask = (e) => {
   e.preventDefault();
   let dateToSet = getDate(date)
   //form validation
   if(isNaN(ttc))
   {
     alert("The time to complete must be a valid number")
     doHighlight('ttc')
     return
   }
   let task = {}
   console.log(isRecurring)
   if(recurrence != 0) //when it is a repeating event
   {
    //get start and end day
    let currDate =  dateToSet.getTime()
    let endDate = getDate(reccurEnd)
    let count = 0;
    
    endDate = endDate.getTime()  

    
    while( currDate < endDate) //while we are in the range of dates for the task
    {
      let dateVal = new Date(currDate)
      let recurrID = name+"_"+count
      task = new Task(recurrID, name , dateVal , ttc , description , true)
      //add the task and increment the "current date"
      addTask(task)
      currDate += (recurrence * DAY_IN_MS)      
      count++
    }
   }
   //task is not repeating
   else{
     //add the task to list
     let id = genID()
     task = new Task(id, name, dateToSet, ttc,description, false)
     addTask(task)
   }

   //redirect the user back to the list
   push('/list')

 }

 //state for form
 const [name, setName] = useState("");
 const [description, setDescription] = useState("")
 const [date, setDate] = useState("")
 const [time, setTime]= useState("");
 const [ttc, setTtc] = useState(0);
 const [isRecurring, setIsRecurring] = useState(false)
 const [recurrence, setRecurrence] = useState(0)
 const [reccurEnd, setReccurEnd] = useState("")

 return (
  <form onSubmit={doCreateTask}>
    <h1>Create A Task</h1>
   <section className='main__create__fields'>
    <div className='form__group'>
     <input
      className='BIG__input'
      type='text' 
      placeholder={'name the task'}
      value={name}
      onChange={e=>setName(e.target.value)}
      />
      <textarea 
        placeholder={'enter a description'}
        cols="30" 
        rows="3"
        value={description}
        onChange={e=>setDescription(e.target.value)}
      ></textarea>
    </div>
   </section>

   <section className='grid divider'>
    <div className='date__time'>
      <i className='fas fa-clock'/>
      <div className="dt__fields">
        <input 
          name='dline' 
          type='date'
          value={date}
          onChange={e=>{
              setDate(e.target.value)
            }
          }
        />
        <input 
          type="time"
          value={time}
          onChange={e=>setTime(e.target.value)}
          />
      </div> 
    </div> 
    <div className="form__group">
     <label>time to complete</label>
     <div className="estimate__group">
      <input
        id='ttc'
        type={'text'}
        value={ttc}
        onChange={e=>setTtc(e.target.value)}
      />
      <label>hours</label>
     </div>
    </div>
   </section>
   <section className='grid divider'>
     <div className="estimate__group">
       <label>is this task repeating?</label>
        <span
          id='repeatToggle'
          onClick={()=>setIsRecurring(!isRecurring)}
        >
         {
           isRecurring
           ? (
            <>Yes</>
           ) : (
             <>No</>
           )
         }
        </span>
     </div>
   </section>
   <section className="grid">
   {
    isRecurring && (
      <>
      <div className="form__group">
        <label>How often will this task repeat?</label>
        <select value={recurrence} onChange={e=>setRecurrence(e.target.value)}>
          <option value={0}> </option>
          <option value={1}>Daily</option>
          <option value={2}>Every Other Day</option>
          <option value={7}>Weekly</option>
          <option value={30}>Monthly</option>
        </select>
      </div>
      <div className='form__group'>
      <label>End of reocurrence</label>
      <input 
        value={reccurEnd}
        onChange={e=>setReccurEnd(e.target.value)}
        type='date'/>
      </div>
      </>
    )
    }
  </section>

   <section className='btns'>
      <Link 
      className='btn cancel' 
      to="/list"
      >
        Cancel
      </Link>
      <button className='btn primary' type='submit'>Create</button>
   </section>

  </form>
 )
}

export default CreateTask
