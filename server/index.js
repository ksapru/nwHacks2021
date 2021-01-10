const express = require("express");
const cors = require("cors");
const calculateSafety  = require("./calculateSafety");
// const calculateRestaurants = require("./etl/Restaurants");
// const calculateStations = require("./calculateStations");
const calculateHouses = require("./calculateHouses.js")
const calculateRating = require("./calculateRating.js")

const initialLoad = require("./initialLoad");
const tempResponse = require("./tempResponse.json");
const calculateRestaurants = require("./calculateRestaurants");

const app = express();
require('dotenv').config();

//const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json()); //req.body
//ss
app.post("/calculate", async (req, res) => {
    let {priceRange, safety, publicTransit, restaurants} = req.body;
    console.log({
      priceRange, safety
    })

    let housing_rating = {}
    let restaurant_rating = {}
    let safety_rating = {}
    let rating = []

    if (typeof priceRange !== 'undefined') {
      housing_rating = await calculateHouses(priceRange[0], priceRange[1]);
    }
    if (typeof restaurants !== 'undefined') {
      restaurant_rating = await calculateRestaurants();
    }
    // value should be from 0 to 100
    if (typeof safety !== 'undefined') {
      for (const [key, value] of Object.entries(housing_rating)) {
        safety_rating[key] = await calculateSafety(key)
      }
      // safety_rating[housing_rating.neighbourhood] = await calculateSafety(housing_rating.neighbourhood)
    }

    rating = await calculateRating(housing_rating, restaurant_rating, safety_rating)

    console.log(req.body)

    console.log("rating", rating)

    if (rating.length == 0) {
      res.status(200).json(tempResponse)
    } else {
      res.status(200).json(rating)
    }
});

//get, put, post, delete stuff
app.listen(8080, () => {
    console.log("server has started on port 8080");
    // initialLoad();
  });