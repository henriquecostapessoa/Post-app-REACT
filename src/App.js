import React from 'react';
import './App.css'; 
import Landingpage from './Component/Landingpage';
import Home from './Component/Home';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Component/Login';
import Signin from './Component/Signin';
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Landingpage}/>
      <Route path="/home" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signin" component={Signin}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

