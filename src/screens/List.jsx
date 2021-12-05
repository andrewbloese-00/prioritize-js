import React from 'react'
import usePriorititzed from '../components/hooks/usePriorititzed';
import { CreateButton, Day} from '../components/exports';
import { Link } from 'react-router-dom';

const List = ({history: {push}}) => {
  
 const tasks = usePriorititzed()
  
 let today = new Date().getDay();
 
 let possibleDays = [
   {
     day: "Sunday",
     list: tasks.sunday
   },
   {
     day: "Monday",
     list: tasks.monday
   },
   {
     day: "Tuesday",
     list: tasks.tuesday
   },
   {
     day: "Wednesday",
     list: tasks.wednesday
   },
   {
     day: "Thursday",
     list: tasks.thursday
   },
   {
     day: "Friday",
     list: tasks.friday
   },
   {
     day: "Saturday",
     list: tasks.saturday
   },
   {
     day: "Completed",
     list: tasks.completed
   }
 ]
 
 return (
  <div className='list__page'> 
    <CreateButton/>
    <div className='list__wrapper'>
      {tasks.length < 1 && (
        
        <div>
          <h3>looks like you dont have any tasks saved. </h3>
          <p>To create your first task, click the '+' button on the bottom right of the screen</p>
        </div>
      )}
      {possibleDays.map((item, index) => (<Day key={index} dayOfWeek={item.day} tasks={item.list} current={index===today}/>))}
      <div className='stats__link'>
        <Link to='/statistics'>View Your Statistics</Link>
      </div>

    </div>

  </div>
 )
}

export default List
