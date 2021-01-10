import './App.css';
import Login from './Login';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Product from "./Product";



 
function App() {

  return (
    <Router>
    <div className="App">
    

    
     


      <Switch> 
      <Route path="/" to exact component={Login} /> 
      <Route path="/Product" to exact component={Product} /> 

  

    
      </Switch>
      
    
  
         

      </div>
    </Router>
    

  );
}

export default App;

