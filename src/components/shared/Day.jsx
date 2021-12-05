import React  from 'react'
import {Task} from '../exports'

import '../../css/day.css'

const Day = ({tasks, dayOfWeek, current, history}) => {

 //get the tasks from localStorage
 let storageTasks = JSON.parse(localStorage.getItem('tasks'))
 
 //function to toggle the complete status of a task
 function toggleComplete(item){ 
  //toggle the task found in storage
  let toUpdate = storageTasks.find(listItem => listItem.id === item.id)
  toUpdate.complete = !(toUpdate.complete)

  //update localstorage
  localStorage.setItem('tasks', JSON.stringify(storageTasks))
  
  //refresh to reflect changes
  setTimeout(()=>{
   window.location.reload()
  }, 50)
 }

 //function to remove a task from the list
 function deleteTask(item){
  let taskID = item.id;
  let matched = storageTasks.find(element => element.id === taskID);
  let indexMatched = storageTasks.indexOf(matched)
  console.log(matched)
  
  //if it wasn't found (-1 returned) we do nothing
  if(indexMatched < 0){
   return;
  }

  //if the element is the first, we just need to shift the array
  if(storageTasks.indexOf(matched) === 0){
   storageTasks.shift()
  }
  //otherwise we splice
  else{
   storageTasks.splice(indexMatched,1)
  }

  //update local storage to reflect deleted tasks
  localStorage.setItem('tasks', JSON.stringify(storageTasks))


  //refresh so the list reflects deletion
  setTimeout(()=>{
   window.location.reload()
  },50)

 }


 function goEdit(item){
  sessionStorage.setItem('toEdit', JSON.stringify(item.id))
 }


 //used for highlighting current day
 const dayWrapperClass = ['day__wrapper']
 if(current){
  dayWrapperClass.push('current')
 }

 return (
  tasks 
  ? (
  <div className={dayWrapperClass.join(" ")}>
   <div className='day__heading'>
    <h2>{current && "👉 "}{dayOfWeek}</h2>
   </div>
   <div className='day__tasks_wrapper'>
    {tasks.length < 1 && (<h2 className='allclear_msg'>All clear!</h2>)}
    {
     tasks.length >= 1 && tasks.map((item)=>(
      <Task key={item.id} task={item} click={()=>toggleComplete(item)} deleteAction={()=>deleteTask(item)} editAction={()=>goEdit(item)}/>
     ))
    }
   </div>
  </div>
  )
  :(
   <></>
  )
 )
}

export default Day


/*
 LOCAL STORAGE EXAMPLE
 '[{"id":113200206442297440000,"name":"Work | Ironwood","date":"2021-11-21T09:30:00.000Z","ttc":"6","description":"Sunday football games","complete":false,"isRepeating":true},{"id":25062197884895750000,"name":"Work | Ironwood","date":"2021-11-28T09:30:00.000Z","ttc":"6","description":"Sunday football games","complete":false,"isRepeating":true},{"id":9063806220957946000,"name":"Work | Ironwood","date":"2021-12-05T09:30:00.000Z","ttc":"6","description":"Sunday football games","complete":false,"isRepeating":true},{"id":2409666741375894000,"name":"Work | Ironwood","date":"2021-12-12T09:30:00.000Z","ttc":"6","description":"Sunday football games","complete":false,"isRepeating":true},{"id":54083478620652580000,"name":"CSE Exam ","date":"2021-11-22T10:30:00.000Z","ttc":"2","description":"Exam II for CSE310: \\nGraphs, DFS, Trees, and algorithms","isRepeating":false},{"id":91059482079001460000,"name":"Work | Stone and Barrell","date":"2021-11-24T15:00:00.000Z","ttc":"5","description":"Expo Shift at stone and barrel","complete":false,"isRepeating":true},{"id":88376439652364190000,"name":"Work | Stone and Barrell","date":"2021-12-01T15:00:00.000Z","ttc":"5","description":"Expo Shift at stone and barrel","complete":false,"isRepeating":true},{"id":54891417031868840000,"name":"Work | Stone and Barrell","date":"2021-12-08T15:00:00.000Z","ttc":"5","description":"Expo Shift at stone and barrel","complete":false,"isRepeating":true},{"id":104747288283795540000,"name":"Work | Stone and Barrell","date":"2021-12-15T15:00:00.000Z","ttc":"5","description":"Expo Shift at stone and barrel","complete":false,"isRepeating":true},{"id":136502899112746600000,"name":"Work | Stone and Barrell","date":"2021-12-22T15:00:00.000Z","ttc":"5","description":"Expo Shift at stone and barrel","complete":false,"isRepeating":true},{"id":10200430330493716000,"name":"Work | Ironwood","date":"2021-11-26T15:00:00.000Z","ttc":"5","description":"Serving shift, fish platter special. Live music","complete":false,"isRepeating":true},{"id":83704467786330870000,"name":"Work | Ironwood","date":"2021-12-03T15:00:00.000Z","ttc":"5","description":"Serving shift, fish platter special. Live music","complete":false,"isRepeating":true},{"id":61291420598468610000,"name":"Work | Ironwood","date":"2021-12-10T15:00:00.000Z","ttc":"5","description":"Serving shift, fish platter special. Live music","complete":false,"isRepeating":true},{"id":63402457071604950000,"name":"Work | Ironwood","date":"2021-12-17T15:00:00.000Z","ttc":"5","description":"Serving shift, fish platter special. Live music","complete":false,"isRepeating":true},{"id":64853519563522785000,"name":"Work | Ironwood","date":"2021-12-24T15:00:00.000Z","ttc":"5","description":"Serving shift, fish platter special. Live music","complete":false,"isRepeating":true},{"id":43643156726502700000,"name":"Work | Ironwood","date":"2021-11-27T10:30:00.000Z","ttc":"10","description":"Serving shift at ironwood. NDSU game in the AM. Rib Special PM","complete":false,"isRepeating":true},{"id":43699049232319390000,"name":"Work | Ironwood","date":"2021-12-04T10:30:00.000Z","ttc":"10","description":"Serving shift at ironwood. NDSU game in the AM. Rib Special PM","complete":false,"isRepeating":true},{"id":42621755205452590000,"name":"Work | Ironwood","date":"2021-12-11T10:30:00.000Z","ttc":"10","description":"Serving shift at ironwood. NDSU game in the AM. Rib Special PM","complete":false,"isRepeating":true},{"id":16058395806634820000,"name":"Work | Ironwood","date":"2021-12-18T10:30:00.000Z","ttc":"10","description":"Serving shift at ironwood. NDSU game in the AM. Rib Special PM","complete":false,"isRepeating":true},{"id":50392124793320880000,"name":"Work | Ironwood","date":"2021-12-25T10:30:00.000Z","ttc":"10","description":"Serving shift at ironwood. NDSU game in the AM. Rib Special PM","complete":false,"isRepeating":true},{"id":135357884160768850000,"name":"Study Stuff","date":"2021-11-21T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":46742570025588154000,"name":"Study Stuff","date":"2021-11-22T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":95119738041175030000,"name":"Study Stuff","date":"2021-11-23T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":95721131849350800000,"name":"Study Stuff","date":"2021-11-24T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":119992006565095280000,"name":"Study Stuff","date":"2021-11-25T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":41718954597313380000,"name":"Study Stuff","date":"2021-11-26T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":30677184389144416000,"name":"Study Stuff","date":"2021-11-27T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":138842435654229970000,"name":"Study Stuff","date":"2021-11-28T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":42505569232336260000,"name":"Study Stuff","date":"2021-11-29T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":7666214507458916000,"name":"Study Stuff","date":"2021-11-30T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":116935527140741700000,"name":"Study Stuff","date":"2021-12-01T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":77950918063524220000,"name":"Study Stuff","date":"2021-12-02T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":75450389449515200000,"name":"Study Stuff","date":"2021-12-03T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":135376562239412580000,"name":"Study Stuff","date":"2021-12-04T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":57548739648814570000,"name":"Study Stuff","date":"2021-12-05T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":118171465081216270000,"name":"Study Stuff","date":"2021-12-06T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":95455295655981760000,"name":"Study Stuff","date":"2021-12-07T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":139069837726714660000,"name":"Study Stuff","date":"2021-12-08T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true},{"id":121685757891556900000,"name":"Study Stuff","date":"2021-12-09T18:00:00.000Z","ttc":"4","description":"study for exams","complete":false,"isRepeating":true}]'

*/