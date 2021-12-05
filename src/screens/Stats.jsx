import React from 'react'
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
          <p>{tasks.avgTTC} hours </p>
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
        <tbody> 
          <td>Monday</td>
          <td>{completedOn[1]}</td>
          <td>{totalOn[1]}</td>
          <td>{perc(completedOn[1], totalOn[1])}</td>
        </tbody>
        <tbody> 
          <td>Tuesday</td>
          <td>{completedOn[1]}</td>
          <td>{totalOn[1]}</td>
          <td>{perc(completedOn[2], totalOn[2])}</td>
        </tbody>
        <tbody> 
          <td>Wednesday</td>
          <td>{completedOn[3]}</td>
          <td>{totalOn[3]}</td>
          <td>{perc(completedOn[3], totalOn[3])}</td>
        </tbody>
        <tbody> 
          <td>Thursday</td>
          <td>{completedOn[4]}</td>
          <td>{totalOn[4]}</td>
          <td>{perc(completedOn[4], totalOn[4])}</td>
        </tbody>
        <tbody> 
          <td>Friday</td>
          <td>{completedOn[5]}</td>
          <td>{totalOn[5]}</td>
          <td>{perc(completedOn[5], totalOn[5])}</td>
        </tbody>
        <tbody> 
          <td>Saturday</td>
          <td>{completedOn[6]}</td>
          <td>{totalOn[6]}</td>
          <td>{perc(completedOn[6], totalOn[6])}</td>
        </tbody>
     
        
      </table>
      }
  </div>
 )
}

export default Stats
