import React, { useState } from 'react';
import './App.css';
import Home from './components/home';
import Navigation from './components/navigation';
import {Route ,Routes} from 'react-router-dom'
import SignIn from './components/signin';
import Forgot from './components/forgot';
import Signup from './components/signup';
import UrlShortner from './components/UrlShortner';
import Summary from './components/summary';
import { useNavigate } from 'react-router-dom'
import RegisterConfirm from './components/registerconfirm';
import ForgotConfirm from './components/forgotconfirm';
function App() {
  const navigate = useNavigate()
  const myStorage = window.localStorage;
  const [logged ,setLogged] = useState(myStorage.getItem('user'))
 
 

  return (
    <>
    <Navigation logged={logged} setLogged={setLogged} myStorage={myStorage}/>
  
  
    <Routes>
       {logged && (
         <>
      <Route path='/summary' element={<Summary myStorage={myStorage}/>}/>
      <Route path='/url' element={<UrlShortner myStorage={myStorage}/>}/>
      </>
      )}
      {!logged &&(<>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn setLogged={setLogged} myStorage={myStorage}/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgot' element={<Forgot/>}/>
      <Route path ='/register-confirm/:token' element={<RegisterConfirm/>}/>
      <Route path='/confirm/:token' element={<ForgotConfirm/>}/>
      </>)}
    </Routes>
 
  
  </>
  );
}

export default App;
