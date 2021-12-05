import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/sidebar.css'
const Sidebar = ({show,click}) => {
 
 const sidedrawerClass = ["sidedrawer"];
 if(show)
 {
  sidedrawerClass.push("show");
 }

 return (
  <div className={sidedrawerClass.join(" ")}>
   <ul className="sidedrawer__links" onClick={click}>
    <li><Link to = '/'>Home</Link></li>
    <li><Link to = '/about'>About</Link></li>
    <li><Link to='/help'>Help</Link></li>
    <li><Link to='/list'>Your List</Link></li>
   </ul>
  </div>
 )
}

export default Sidebar;
