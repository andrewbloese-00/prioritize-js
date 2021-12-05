import React from 'react'

export const taskSorter = (tasks) => {
 //sort the sorter array and store result in sorted
 return tasks.sort(function(a,b){
  //first check if completed 
  if(a.complete && !b.complete){
   return -1
  }
  if(!a.complete && b.complete){
    return 1
  }

  //then sort by date
  if(a.date < b.date){
   return 1;
  }
  if(a.date > b.date){
   return -1;
  }

  //then sort by time
  if(a.time < b.time){ 
   return 1;
  }
  if(a.time > b.time){
   return -1;
  }

  //then sort by name
  if(a.ttc < b.name){
   return 1;
  }
  if(a.ttc > b.name){
   return -1;
  }
  //they are equal 
  return 0
  })
}


