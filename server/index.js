const express = require("express");
const cors = require("cors");
const calculateSafety  = require("./calculateSafety");
const calculateRestaurants = require("./calculateRestaurants");
const calculateStations = require("./calculateStations");

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
    let {budget, worklocation} = req.body;
    console.log({
      budget, worklocation
    })

    console.log(req.body)

    res.status(400).json(tempResponse)
});

//get, put, post, delete stuff
app.listen(5000, () => {
    console.log("server has started on port 5000");
    initialLoad();
  });