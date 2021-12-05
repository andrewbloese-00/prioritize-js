
import { seed } from '../../assets/data/tasks';
import Week from '../../Classes/Week'
import  { taskSorter } from './useSort';

//used for date math
const DAY_IN_MILLISECONDS = 86400000;
function getWeekStart(day)
{
  let weekStart = null
  switch(day.getDay())
  {
    case 0: //day is sunday
      weekStart = day
      break;
    case 1: //day is monday
      weekStart = new Date(day.getTime() - (1 * DAY_IN_MILLISECONDS))
      break;
    case 2: //day is tuesday
      weekStart = new Date(day.getTime() - (2 * DAY_IN_MILLISECONDS))
      break;
    case 3: //day is wednesday
      weekStart = new Date(day.getTime() - (3 * DAY_IN_MILLISECONDS))
      break;
    case 4: //day is thursday
      weekStart = new Date(day.getTime() - (4 * DAY_IN_MILLISECONDS))
      break;
    case 5: //day is friday
      weekStart = new Date(day.getTime() - (5 * DAY_IN_MILLISECONDS))
      break;
    case 6: //day is saturday
      weekStart = new Date(day.getTime() - (6 * DAY_IN_MILLISECONDS))
      break;
    default:
      weekStart = day;
      break;
  }
  return weekStart;
}

function getWeekEnd(weekStart){
  return new Date(weekStart.getTime() + (7 * DAY_IN_MILLISECONDS))
}

//hook used to render the list page
const usePriorititzed = () => {
 //if user has no saved tasks return empty array
 if(!localStorage.getItem('tasks'))
    seed();
 //otherwise fill the sorter array with the tasks in localstorage
 else{
  let sorter = JSON.parse(localStorage.getItem('tasks'))
  //convert stored date strings into dates for comparisons
  for(const item of sorter){
   let string = item.date
   item.date = new Date(string)
 }


  //get only tasks with date in the range of a week of current date 
  let today = new Date();
  let weekStart = getWeekStart(today);

  //calculate the end date 
  let weekEnd = getWeekEnd(weekStart) 


  //we want to sort the tasks in range of the week
  let tasksInRange =  sorter.filter((task)=> task.date >= weekStart && task.date <= weekEnd)
  let count = 0
  let completedTasks = [];
  let totalOn = [0,0,0,0,0,0,0]
  for (const t of tasksInRange)
  {
    let dayOfWeek = (new Date(t.date)).getDay();
    totalOn[dayOfWeek] += 1;
    count++
  }

  //filter out completed tasks
  completedTasks = tasksInRange.filter((listItem) => listItem.complete)
  

  let completedOn = [0,0,0,0,0,0,0]

  for(const task of completedTasks){
    let taskDay = new Date(task.date).getDay()
    completedOn[taskDay] += 1;
    
  }

  //create a week 
  const thisWeek = new Week(tasksInRange.filter((listItem)=> !listItem.complete))
  let avgTTC = 0;
  for(const task of tasksInRange){
    avgTTC+= Number(task.ttc)
  }
  avgTTC = (avgTTC / count)

  return {
    sunday: taskSorter(thisWeek.sundayTasks),
    monday: taskSorter(thisWeek.mondayTasks),
    tuesday: taskSorter(thisWeek.tuesdayTasks),
    wednesday: taskSorter(thisWeek.wednesdayTasks),
    thursday: taskSorter(thisWeek.thursdayTasks),
    friday: taskSorter(thisWeek.fridayTasks),
    saturday: taskSorter(thisWeek.saturdayTasks),
    completed: completedTasks,
    completedOn: completedOn,
    totalOn: totalOn,
    count: count,
    avgTTC: avgTTC
    
  }


  
 }}

export default usePriorititzed


