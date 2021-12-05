import React from 'react'
import {Backdrop} from '../components/exports'
import { Link } from 'react-router-dom'

import '../css/home.css'
import {RotatingCircles} from '../components/exports'
const Home = () => {
  
 return (
  <div className='home__wrapper'>
    
   {/*<RotatingCircles/>*/}
   <div className='big__content'>
    <h1> Prioritize  JS</h1>
    <p>an easy to use, smart to-do list that takes the effort out of planning so you can spend more time doing.</p>
    {
     localStorage.getItem('tasks')
     ? (
       <Link to='/list'>View Your List</Link>
     ) : (
      <Link to='/about'>Learn More</Link>
     )
    }
   </div>
  </div>
 )
}

export default Home
