import { useState } from 'react'
import {TaskOpts} from '../exports'


const Details = ({title, details, due, editAction ,deleteAction}) => {
 const [showDetails, setShowDetails] = useState(false)
 return (
  <div className="details__container">
   <div className='details_header'>
    <h2>{title} - {due}</h2>
    <div className='details_opts'>
     
     <TaskOpts editAction={editAction}toggleAction={()=>setShowDetails(!showDetails)} deleteAction={deleteAction}/>
    </div>
   </div>
   {
   showDetails && 
   <div className='details_content'>
    <p>{details}</p>
   </div>
   }

  </div>
 )
}

export default Details
