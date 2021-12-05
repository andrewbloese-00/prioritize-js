import React , { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import usePriorititzed from '../components/hooks/usePriorititzed'
import '../css/stats.css'
const Stats = () => {
 const tasks = usePriorititzed();
 console.log(tasks)
 let completedOn = [...tasks.completedOn]
 let totalOn = [...tasks.totalOn]
 console.log('complete counts: ', completedOn)
 console.log('totals', totalOn)

 function perc( num, den ){
  let calc = (num / den) * 100
  if (isNaN(calc)){
    return 0 + '%'
  }
  return (calc).toFixed(0) + "%"
 }

 const [sundayComplete, setSundayComplete] = useState(completedOn[0])
 const [mondayComplete, setMondayComplete] = useState(completedOn[1])
 const [tuesdayComplete, setTuesdayComplete] = useState(completedOn[2])
 const [wednesdayComplete, setWednesdayComplete] = useState(completedOn[3])
 const [thursComplete, setComplete] = useState(completedOn[4])
 const [fridayComplete, setFridayComplete] = useState(completedOn[5])
 const [saturdayComplete, setSaturdayComplete] = useState(completedOn[6])



 





 
 return (
  <div className='stats__page'>

    <div className='back__container'>
      <Link className='back__link' to='/list'>Back to your list</Link>

    </div>
    <h1>Your Statistics</h1>
    <div className='big__stats'>
      <h1>Weekly Summary</h1>
      <div className='boxes'>
        <div classNam='box' id='statbox1'>
          <h2>Total Tasks</h2>
          <p>{tasks.count}</p>
        </div>

        <div className='box' id='statbox2'>
          <h2>Tasks Completed</h2>
          <p>{tasks.completed.length}</p>
        </div>

        <div className='box' id='statbox3'> 
          <h2>Average Completion Time</h2>
          <p>{tasks.avgTTC.toFixed(1)} hours </p>
        </div>
      </div>

    </div>      
   
   { tasks && 
     <table>
        <thead>
          <td>Day of the Week</td>
          <td>Completed</td>
          <td>Total</td>
          <td>Percent Completion</td>
        </thead>
        <tr> 
          <td>Sunday</td>
          <td>{sundayComplete}</td>
          <td>{totalOn[0]}</td>
          <td>{perc(sundayComplete, totalOn[1])}</td>
        </tr>
        <tr> 
          <td>Monday</td>
          <td>{mondayComplete}</td>
          <td>{totalOn[1]}</td>
          <td>{perc(mondayComplete, totalOn[1])}</td>
        </tr>
        <tr> 
          <td>Tuesday</td>
          <td>{tuesdayComplete}</td>
          <td>{totalOn[2]}</td>
          <td>{perc(tuesdayComplete, totalOn[2])}</td>
        </tr>
        <tbody> 
          <td>Wednesday</td>
          <td>{wednesdayComplete}</td>
          <td>{totalOn[3]}</td>
          <td>{perc(wednesdayComplete, totalOn[3])}</td>
        </tbody>
        <tr> 
          <td>Thursday</td>
          <td>{thursComplete}</td>
          <td>{totalOn[4]}</td>
          <td>{perc(thursComplete, totalOn[4])}</td>
        </tr>
        <tr> 
          <td>Friday</td>
          <td>{fridayComplete}</td>
          <td>{totalOn[5]}</td>
          <td>{perc(fridayComplete, totalOn[5])}</td>
        </tr>
        <tbody> 
          <td>Saturday</td>
          <td>{saturdayComplete}</td>
          <td>{totalOn[6]}</td>
          <td>{perc(saturdayComplete, totalOn[6])}</td>
        </tbody>
     
        
      </table>
      }
  </div>
 )
}

export default Stats
