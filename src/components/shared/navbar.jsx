import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../css/nav.css';

const Navbar = ({click, show}) => {

 const [showLinks, setShowLinks] = useState(false);

 return (
  <nav>
   <h1 className="title">Prioritize</h1>
   <div tabIndex={0}  onClick={click} className='sidebar_opener'>
    <div className='menuline'></div>
    <div className='menuline'></div>
    <div className='menuline'></div>
    
   </div>
  </nav>
 )
}

export default Navbar
