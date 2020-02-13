import React from 'react';
import './App.css';
import Navigation from "./Component/Navigation"  
import Landingpage from './Component/Landingpage';
import Home from './Component/Home';
import {BrowserRouter, Route} from 'react-router-dom'
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Landingpage}/>
      <Route path="/home" component={Home}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

