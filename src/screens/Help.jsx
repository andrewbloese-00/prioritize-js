import React from 'react'
import { Link } from 'react-router-dom'
import '../css/help.css'

import img1 from '../assets/help_img1.png'
import img2 from '../assets/help_img2.png'
import img3 from '../assets/helpimg_3.png'
import img4 from '../assets/helpimg_4.png'
import vid from '../assets/demo.mp4'
const Help = () => {
 return (
  <div className='help__wrapper'>
   <div className='help__head'>
    <h1>User Guide</h1>
   </div>

  <div className='help__body'>
   <div className='help__content'>
    <h2>creating a task</h2>
    <p>
     to create a task, navigate to 'your list' view in the navigation drawer. Then click on the '+' icon on the bottom left of the screen. Input your task's details (name, description, date, time, time to complete) and optionally make the task repeat!
    </p>
    <div className="media__gallery">
     <img src={img1}  alt={'phone'}/>
     <img src={img2}  alt={'phone'}/>
    </div>
   </div>


   <div className='help__content'>
    <h2>managing your tasks</h2>
    <p>
     Prioritize offers you a variety of ways to manage your tasks! You can edit, and delete them as well as mark them as complete. All of these controls are available on the 'your list' page beside each task. When you mark a task as complete, it will move it to the 'completed' section of your list.
    </p>
    <div className="media__gallery">
    <img src={img3}  alt={'phone'}/>
     <img src={img4}  alt={'phone'}/>
    </div>
   </div>
   <div className='help__content'>
    <h2>viewing statistics</h2>
    <p>
     Prioritize also offers a way to quantify your productivity! From the 'your list page' scroll to the bottom and click the 'view my statistics button' to be redirected to your statistics. Or click <Link to='/statistics'>here</Link>
     
    </p>
    <div className='video_player'>
     <video width="600" height="300" autoPlay muted controls>
      <source src={vid} alt={'demonstration of statistics'} type='video/mp4'/>
     </video>
    </div>
   </div>
   <div className='help__content'>
    <h2>my question wasn't answered!</h2>
    <p>
     didn't find the answer to your question above? feel free to contact Prioritize Support via phone or email.
    </p>
    <div id='support'>
     <p>Contact Phone Support!</p>
     <a href='tel:4807372590'> 012.345.6789</a>
     <p>Leave us an email!</p>
     <a href='mailto:andrewbloese@gmail.com'> support@prioritize.io</a>
    </div>

   </div>
  </div>




  </div>
 )
}

export default Help
