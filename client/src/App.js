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
      <Route path="/" exact component={Login} /> 
  

    
      </Switch>
      
    
      
      <h2>Top 5 neighbourhoods for you</h2>

        

         <Product number="1" chosenicon=""/>
         <Product number="2" chosenicon=""/>
         <Product number="3" chosenicon=""/>
         <Product number="4" chosenicon=""/>
         <Product number="5" chosenicon=""/>
         

      </div>
    </Router>
    

  );
}

export default App;
