
import './css/App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { Navbar, Backdrop, Sidebar, Footer} from './components/exports';
import {About, List, CreateTask, Home, Edit, Help, Stats} from './screens/exports';




const App = () => {
  
  const [sideToggle, setSideToggle] = useState(false)


  return (
    <Router className='app'>
      <Navbar click={()=>setSideToggle(true)}/>
      <Sidebar show={sideToggle} click={()=>setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={()=>setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path='/' component={Home} props={sideToggle}/>
          <Route exact path='/about' component={About}/>  
          <Route exact path='/create' component={CreateTask}/>
          <Route exact path='/list' component={List}/>
          <Route exact path='/edit' component={Edit}/>
          <Route exact path='/help' component={Help}/>
          <Route exact path='/statistics' component={Stats}/>
        </Switch>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
