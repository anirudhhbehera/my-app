// import logo from './logo.svg';
import './App.css';
// import About from './components/About';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';  
import React,{ useState } from 'react';
import Alert from './components/Alert';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route, 
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode]= useState('light');
  const[alert,setAlert]= useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
     
  }
  const toggleMode = ()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#343a40bf';
      showAlert("Dark mode has been enabled","success")

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
   <>
    {/* <Router> */}
    <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
    
    <div className="container my 3">
    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter text below" mode={mode} />
          </Route>
    </Switch> */}
    <TextForm showAlert={showAlert} heading="Enter text below" mode={mode} />
    <Alert alert={alert}></Alert>
    </div>
    {/* </Router> */}
   </>
  );
}

export default App; 
