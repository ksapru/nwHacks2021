import React from 'react'; 
//import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { Slider } from 'material-ui-slider';
import { TextField } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import {BrowserRouter as Route} from 'react-router-dom';
import 'axios' from './axios';

const useStyles = makeStyles((theme) => ({
  }));

const marks = [
    {
      value: 0,
      label: "$600/mo",
    },
    {
      value: 100,
      label: "$2000/mo",
    },
]
const handleCalculations = (budget,workLocation) => async () => {
    try {
      const response = await axios.post('/calculate', {budget,workLocation});
      
    // response type array
    /*[
      {
        "neighbourhood": "University Endowment Lands",
        "match": 99.1,
        "safety": 9.9,
        "transit": 7.1,
        "food": 4.5
      },
      {
      "neighbourhood": "West Point Grey",
      "match": 92.1,
      "safety": 9.9,
      "transit": 7.2,
      "food": 4.1
      }, ...
    */
  } catch (err) {
      console.log("got an error")
  }
}
function valuetext(value) {
    return `$${value.map(0,100,600,2000)}/mo`;
}

export default function Login() {
    const classes = useStyles();
    const [safety, setSafety] = useState(0);
    return (
        <div className="Login">
            <a href="#"><img id="logo-full" src="/images/logo.png" alt="Find my Neighbourhood"></img></a>

            <div class="container">
                <div class="welcome">
                    <h2>WELCOME TO VANCOUVER</h2> 
                    <h4>Find a neighbourhood to settle into.</h4>
                </div>
            
                <form>
                    <h5 class="first">Help us find your new home</h5>
                    <label for="price-range">Price Range</label><br></br>
                    <Slider id="price-range" range={[[0,10],[10,20]]} defaultValue={[30,70]} min={0} max={100} color={"#4B8A44"} step={1}></Slider>

                    <label for="location">Work/School Location</label><br style={{margin: "0px 0px 10px 0px"}}></br>
                    <TextField id="location" variant="outlined" label="Your Work or School Address" helperText="(Optional)"
                    style={{ width: '100%' }}
                    ></TextField>

                    <h5>How much does the following matter to you?</h5>
                    <label for="safety-rating">Safety</label><br></br>
                    <Slider id="safety-rating"  onChange={(event, value) => setSafety(value)} defaultValue={10} min={0} max={100} color={"#4B8A44"} decimals={0}></Slider>

                    <label for="transit-rating">Public transit</label><br></br>
                    <Slider id="transit-rating" defaultValue={10} min={0} max={100} color={"#4B8A44"} decimals={0}></Slider>

                    <label for="food-rating">Restaurants</label><br></br>
                    <Slider id="food-rating" defaultValue={10} min={0} max={100} color={"#4B8A44"} decimals={0}></Slider>

                    <Link to='/Product'>
                        <button type="button" id="search" onClick={() => handleCalculations(budget,workLocation)}>Find my neighbourhood</button>
                    </Link>
                    <Route path="/" component="Product" /> 

                </form>
             </div>
        </div>
    );
}
