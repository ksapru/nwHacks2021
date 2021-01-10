const express = require("express");
const cors = require("cors");
const calculateSafety  = require("./calculateSafety");
const calculateRestaurants = require("./calculateRestaurants");
const calculateStations = require("./calculateStations");
const calculateHouses = require("./calculateHouses.js")

const initialLoad = require("./initialLoad");
const tempResponse = require("./tempResponse.json")

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
      budget, worklocation
    })

    let housing = []

    if (priceRange.length == 2) {
      housing = calculateHouses(priceRange[0], priceRange[1]);
    }

    console.log(req.body)

    res.status(200).json(tempResponse)
});

//get, put, post, delete stuff
app.listen(5000, () => {
    console.log("server has started on port 5000");
    initialLoad();
  });