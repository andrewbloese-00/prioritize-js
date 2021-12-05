  const DAY_IN_MILLISECONDS = 86400000;

export default function Week(tasks){
 //init lists for each day of the week 
 this.sundayTasks = [];
 this.mondayTasks = [];
 this.tuesdayTasks = [];
 this.wednesdayTasks = [];
 this.thursdayTasks = [];
 this.fridayTasks = []; 
 this.saturdayTasks = [];

 
 //assign tasks to day of the week
 for(const task of tasks)
 {
  let dayOfWeek = task.date.getDay()
   
  //switch day of week 
  //   0    ----->     6
  // sunday         saturday

  //check if ttc is "to long" for one day
  if(Number(task.ttc) > 5 && task.isRepeating == false)
  {
   dayOfWeek -= 1;
  }

  switch(dayOfWeek)
  {
   case 0: 
    this.sundayTasks.push(task)
    break;
   case 1: 
    this.mondayTasks.push(task)
    break;
   case 2: 
    this.tuesdayTasks.push(task)
    break;
   case 3:
    this.wednesdayTasks.push(task)
    break;
   case 4: 
    this.thursdayTasks.push(task)
    break;
   case 5:
    this.fridayTasks.push(task)
    break;
   case 6: 
    this.saturdayTasks.push(task)
  }

 }

}