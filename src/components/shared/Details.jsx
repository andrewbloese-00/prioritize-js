import { useState } from 'react'
import {TaskOpts} from '../exports'



const Details = ({title, ttc, details, due, dueDate, editAction ,deleteAction}) => {
 const [showDetails, setShowDetails] = useState(false)
 if(ttc == 1){
  ttc = ttc + ' hour'
 }
 else{
  ttc = ttc+ ' hours'
 }



 return (
  <div className="details__container">
   <div className='details_header'>
    <h2>{title} - {dueDate}</h2>
    <div className='details_opts'>
     
     <TaskOpts editAction={editAction}toggleAction={()=>setShowDetails(!showDetails)} deleteAction={deleteAction}/>
    </div>
   </div>
   {
   showDetails && 
   <div className='details_content'>
    <p>{details}</p>
    <p>Estimated completion time - {ttc} </p>
   </div>
   }

  </div>
 )
}

export default Details
