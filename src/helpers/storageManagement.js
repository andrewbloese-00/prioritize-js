
export function getTasksFromStorage(){
 let tasks = [];
 let storageTasks = localStorage.getItem('tasks')

 //does ls item 'tasks' exist?
 if(storageTasks){
   //when it does we parse the items
   tasks = JSON.parse(storageTasks);

   //make sure dates are correct data type
   for(const item of tasks){
     item.date = new Date(item.date)
   }
 }
 return tasks
}