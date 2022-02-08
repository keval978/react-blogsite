import React from 'react';
import Topbar from './componets/Topbar/Topbar';
import './App.css'
import Home from './componets/Page/Home';
import Single from './componets/Page/single/Single';
import Write from './componets/Page/write/Write';
import Setting from './componets/Page/settings/Setting';
import Login from './componets/Page/Login/Login';
import Register from './componets/Page/Register/Register';
import {Routes,Route} from 'react-router-dom';



function App() {
  const currentuser = true;
  return (
    <>
    <Topbar/>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       
       <Route path='/register' element={ currentuser ? <Home/> : <Register/>} >
       </Route>
       <Route path='/login' element={currentuser ? <Home/> : <Login/>}></Route>
       <Route path='/posts' element={<Home/>}></Route>
       <Route path='/write' element={currentuser ? <Write/> : <Login/>}></Route>
       <Route path='/setting' element={currentuser ?  <Setting/> : <Login />}></Route>
       <Route path='/post/:id' element={currentuser ?  <Single/> : <Login />}></Route>

     </Routes>
    </> 
  )
}

export default App;
