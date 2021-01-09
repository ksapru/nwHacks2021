import React from 'react'; 
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';


export default function Login() {
    return (
        <div className="Login">
            <h2><center>Welcome to Vancouver</center></h2> 
            <h4> Find a neighbourhood to settle in to </h4><input></input>  <p></p>
            
             <form>

        
             <h4>Importance of safety: <select><option>Low</option><option>High</option></select> </h4>   <p></p> 
             <h4>Importance of public transit: <select><option>Low</option><option>High</option></select></h4><p></p>   
             <h4>Number of food/restaurants: <select><option>10</option><option>High</option></select></h4> <p></p>  
                
             <center> <h4> If this is a new user, click here: </h4> <button message="newUser" value="newUser"> Create an account </button></center>

             </form>
        </div>
    )
}
