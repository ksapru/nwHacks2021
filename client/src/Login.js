import React from 'react'; 
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';


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
                    <select><option>Low</option><option>High</option></select><br></br>
                    <label for="">Work/School Location</label><br></br>
                    <input></input><br></br>

                    <h5>How much does the following matter to you?</h5>
                    <label for="">Safety</label><br></br>
                    <select><option>Low</option><option>High</option></select><br></br>
                    <label for="">Public transit</label><br></br>
                    <select><option>Low</option><option>High</option></select><br></br>
                    <label for="">Restaurants</label><br></br>
                    <select><option>10</option><option>High</option></select><br></br>
                        
                </form>
             </div>
        </div>
    )
}
