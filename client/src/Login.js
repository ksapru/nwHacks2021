import React from 'react'; 
import ReactDOM from 'react-dom';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import {BrowserRouter as Route} from 'react-router-dom';

const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#0063cc',
      borderColor: '#0063cc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);


export default function Login() {
    return (
        <div className="Login">
            <a href="#"><img id="logo-full" src="/images/logo.png" alt="Find my Neighbourhood"></img></a>

            <div class="container">
                <div class="welcome">
                    <h2>WELCOME TO VANCOUVER</h2> 
                    <h4>Find a neighbourhood to settle into.</h4>
                </div>
            
                <form>
                    <h5>Help us find your new home</h5>
                    <label for="">Price Range</label><br></br>
                    <input type="range" min="0" max="100" step="1"></input>
                    <select><option>Low</option><option>High</option></select><br></br>
                    <label for="">Work/School Location</label><br></br>
                    <input type="text" id="location"></input><br></br>

                    <h5>How much does the following matter to you?</h5>
                    <label for="">Safety</label><br></br>
                    <select><option>Low</option><option>High</option></select><br></br>
                    <label for="">Public transit</label><br></br>
                    <select><option>Low</option><option>High</option></select><br></br>
                    <label for="">Restaurants</label><br></br>
                    <select><option>10</option><option>High</option></select><br></br>
                    <Link to='/Product'>
                    <button type="button" id="search">Find my neighbourhood</button>
                    </Link>
                    <Route path="/" component="Product" /> 
                </form>
             </div>
        </div>
    )
}
