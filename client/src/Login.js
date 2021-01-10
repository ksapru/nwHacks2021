import React from 'react'; 
import {useState,useEffect} from 'react'; 
//import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { Slider } from 'material-ui-slider';
import { TextField } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import {BrowserRouter as Route, useHistory} from 'react-router-dom';
import axios from './axios';
import Product from './Product';
import PriceSlider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  }));



  const marks = [
    {
      value: 300,
      label: '$300',
    },
    {
      value: 600,
      label: '$600',
    },
    {
      value: 900,
      label: '$900',
    },
    {
      value: 1200,
      label: '$1200',
    },
    {
      value: 1500,
      label: '$1500',
    },
  ];
  
  function valuetext(value) {
    return `${value}°C`;
  }
  

const dummy = (priceRange,safety,publicTransit,restaurants) => {
  console.log('dsa')
}
const handleCalculations = async(priceRange,safety,publicTransit,restaurants) =>  {
  console.log("sddasdsa")
    try {
      const response = await axios.post('/calculate',{priceRange,safety,publicTransit,restaurants});

      return response.data 
     // response.body.data // array
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



export default function Login() {
    const classes = useStyles();

    const [priceRange, setPriceRange] = useState([0,100]);
    const [safety, setSafety] = useState(0);
    const [publicTransit, setPublicTransit] = useState(0);
    const [restaurants, setRestaurants] = useState(0);
    const [responseArray, setResponseArray] = useState([]);
    const [loading,setLoading] = useState([true]); 
    const history = useHistory();
    useEffect(() => {
      // Update the document title using the browser API
      console.log("useEffect",responseArray)
    });
    

    return (
        <div className="Login">
            <a href="#"><img id="logo-full" src="/images/logo.png" alt="Find my Neighbourhood"></img></a>

            <div class="container">
                <div class="welcome">
                    <h2>WELCOME TO VANCOUVER</h2> 
                    <h3>Find a neighbourhood to settle into.</h3>
                </div>
            
                <form>
                    <h4 class="first">Help us find your new home</h4>
                    <label for="price-range">Price Range</label><br></br>
                    <PriceSlider
        defaultValue={[500,700]}
 
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={100}
        valueLabelDisplay="auto"
        marks={marks}
        min={300}
        max={1500}
      />

                    <label for="location">Work/School Location</label><br style={{margin: "0px 0px 10px 0px"}}></br>
                    <TextField id="location" variant="outlined" 
                    style={{ width: '100%' }}
                    ></TextField>
                    
                    <h4>How much does the following matter to you?</h4>
                    <label for="safety-rating">Safety</label><br></br>
                    <Slider id="safety-rating"  onChange={(value, event) => setSafety(value)} defaultValue={10} min={0} max={100} color={"#4B8A44"} decimals={0}></Slider>

                    <label for="transit-rating">Public transit</label><br></br>
                    <Slider id="transit-rating" onChange={(value, event) => setPublicTransit(value)}defaultValue={10} min={0} max={100} color={"#4B8A44"} decimals={0}></Slider>

                    <label for="food-rating">Restaurants</label><br></br>
                    <Slider id="food-rating" onChange={(value, event) => setRestaurants(value)} defaultValue={10} min={0} max={100} color={"#4B8A44"} decimals={0}></Slider>
 
                    
                        <button type="button" id="search" onClick={() => {
                          handleCalculations(priceRange,safety,publicTransit,restaurants).then(function(result) {
                            setResponseArray(result)
                            setLoading(false)
                            history.push({
                              pathname: "/product",
                              state: {  // location state
                                responseArray: result, 
                              },
                            }); 
                        });
                          }}>Find my neighbourhood</button>
                </form>
             </div>
        </div>
    );
}
