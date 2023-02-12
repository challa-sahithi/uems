import React from 'react'
import Navbar from './components/Navbar';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';
import Schedule from './pages/Admin/Schedule';
import Login from './pages/Login/Login';
import List from './pages/Admin/list/List';
import Listeve from './pages/Organizer/Listeve';
import Inform from './pages/Organizer/Inform';
import Cards from './components/Cards/Cards';
import Ver from "./components/verticalnav/Verticalnav"
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
       {/* <Routes>
		  <Route path='/' element={<Home/>}/>
			<Route path='/events' element={<Events/>}/>	
			<Route path='/adminlogin' element={<Login title="Admin Login"/>}/>
			<Route path='/orglogin' element={<Login title="Orgnanizer Login"/>}/>	
      <Route path='/admin'	element={<Schedule/>}>
        <Route path='' element={<Schedule/>}/>
        <Route path='approved'element={<List/>} />
      </Route>
      <Route path='/organizer'	element={<Listeve/>}>
        <Route path='' element={<Listeve/>}/>
        <Route path='approved'element={<Inform/>} />
      </Route>
      </Routes> */}
     
    <Home/>
    </div>
  );
}

export default App;
