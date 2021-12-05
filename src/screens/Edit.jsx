import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { getTasksFromStorage } from '../helpers/storageManagement';


const Edit = ({history}) => {
 let idMatch = JSON.parse(sessionStorage.getItem('toEdit'))
 
 console.log(idMatch)
 const storageItems = getTasksFromStorage()
 console.log('helper found --> ', storageItems)
 
 const toEdit = storageItems.find(item => item.id === idMatch)
 console.log('editing -> ', toEdit)
 
 //form state
 const [name,setName] = useState(toEdit.name);
 const [description,setDescription] = useState(toEdit.description);
 const [date,setDate] = useState("")
 const [time, setTime] = useState("")
 const [ttc, setTtc] = useState(toEdit.ttc)

 const doEdit = (e)=>{
  e.preventDefault()
  toEdit.name = name;
  toEdit.description = description;
  localStorage.setItem('tasks', JSON.parse(storageItems));
  history.push('/list')

 }





 return (
<form onSubmit={doEdit}>
    <h1>Edit Task</h1>
   <section className='main__create__fields'>
    <div className='form__group'>
     <input
      className='BIG__input'
      type='text' 
      placeholder={'name the task'}
      value={name}
      onChange={e=>setName(e.target.value)}
      />
      <textarea 
        placeholder={'enter a description'}
        cols="30" 
        rows="3"
        value={description}
        onChange={e=>setDescription(e.target.value)}
      ></textarea>
    </div>
   </section>

   <section className='grid divider'>
    <div className='date__time'>
      <i className='fas fa-clock'/>
      <div className="dt__fields">
        <input 
          name='dline' 
          type='date'
          value={date}
          onChange={e=>{
              setDate(e.target.value)
            }
          }
        />
        <input 
          type="time"
          value={time}
          onChange={e=>setTime(e.target.value)}
          />
      </div> 
    </div> 
    <div className="form__group">
     <label>time to complete</label>
     <div className="estimate__group">
      <input
        id='ttc'
        type={'text'}
        value={ttc}
        onChange={e=>setTtc(e.target.value)}
      />
      <label>hours</label>
     </div>
    </div>
   </section>
  

   <section className='btns'>
      <Link 
      className='btn cancel' 
      to="/list"
      >
        Cancel
      </Link>
      <button className='btn primary' type='submit'>Save</button>
   </section>

  </form>
 )
}

export default Edit
