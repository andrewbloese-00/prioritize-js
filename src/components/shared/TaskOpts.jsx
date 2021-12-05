import { Link } from "react-router-dom"

const TaskOpts = ({toggleAction,deleteAction,editAction}) => {
 return (
  <div className='opts__container' >
   <div className='opt_icon__wrapper'>
    <i className='fas fa-caret-square-down' onClick={toggleAction}></i>
   </div>

   <div className='opt_icon__wrapper'>
    
    <Link to={`/edit`} onClick={editAction}>
     <i className='fas fa-edit'/>
    </Link>
   </div>
   <div className='opt_icon__wrapper'>
    <i onClick={deleteAction} className='fas fa-trash danger'/>
   </div>
  </div>
 )
}

export default TaskOpts
