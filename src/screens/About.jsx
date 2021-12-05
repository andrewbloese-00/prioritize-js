import React from 'react'
import { Link } from 'react-router-dom'
import '../css/about.css'
import img1 from '../assets/featuredimg1.png'


const About = () => {
 
 const img2 = 'https://images.unsplash.com/photo-1623045833000-b77aa0288737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJpb3JpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'

 return (
  <div className='wrapper'> 
 
   <section className='left_align'>
    <div className='text_block'>
     <h3>What is Prioritize?</h3>
     <p>Prioritize is a to do list web application with the goal of simplifying the way you schedule your life. Rather than spending time trying to manage your schedule, prioritize automatically sorts tasks based on their calculated "priority" </p>
    </div>
    <div className='img__wrapper'>
     <img src={img1} alt="featured" />
    </div>
   </section>
   <section className='right_align'>
    <div className='text_block'>
     <h3>How does it work?</h3>
     <p>All you need to do is add tasks to your todo list and prioritize will calculate its priority based on its deadline, and time to complete. Learn more about how to use prioritize <Link to='/help'>here</Link>. For more on how prioritize works, check out the <a target='_blank' rel='noopener noreferer' href='https://github.com/brokegti/prioritize-js'>github</a> page!</p>
    </div>
    <div className='img__wrapper'>
     <img src={img2} alt="featured"/>
    </div>
   </section>
  </div>
 )
}

export default About
