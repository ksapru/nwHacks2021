import './App.css';
import Login from './Login';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Product from "./Product";
import {Box, Button} from '@material-ui/core';

function App() {

  return (
    <Router>
    <div className="App">
    

    
      <Login></Login>   


      <Switch> <Route to="/Product" exact component={Product} /> <Route path="/" exact component={Login} /> Find my neighbourhood </Switch>
      <h2>Top 5 neighbourhoods for you</h2>

         <Product></Product>
         <Product></Product>
         <Product></Product>
         <Product></Product>
         

      </div>
    </Router>
    

  );
}

export default App;
