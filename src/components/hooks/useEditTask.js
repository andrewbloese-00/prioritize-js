import React from 'react'
import useGetFromLocalStorage from './useGetFromLocalStorage';

const useEditTask = () => {

 //get the list of items from localStorage
 const lsItems = useGetFromLocalStorage('tasks')
 //get theID from session storage
 let taskSelectedId = Number(JSON.parse(sessionStorage.getItem('editTask')))
 console.log(taskSelectedId)
 
 
 let results = lsItems.filter((task)=> task.id === taskSelectedId)
 console.log(results)

 console.log('Got task(s) with id: ' + taskSelectedId)
 console.log(results)

 return (
  results
 )
}

export default useEditTask
