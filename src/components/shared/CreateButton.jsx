import React from 'react'
import { Link } from 'react-router-dom'

const CreateButton = () => {
 return (
  <div id='addWrapper'>
   <Link id='addBtn' to='/create'>
    <i id='addIcn' className='fas fa-plus'/>
   </Link>
  </div>
 )
}

export default CreateButton
