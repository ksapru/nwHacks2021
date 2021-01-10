const express = require("express");
const cors = require("cors");
const calculateSafety  = require("./calculateSafety");
const calculateRestaurants = require("./calculateRestaurants");
const initialLoad = require("./initialLoad");

const app = express();
require('dotenv').config();

//const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json()); //req.body
//ss
app.get("/calculate", async (req, res) => {
    let {budget, worklocation} = req.body;
    console.log({
      budget, worklocation
    })

    res.status(400).json("ok")
});

//get, put, post, delete stuff
app.listen(5000, () => {
    console.log("server has started on port 5000");
    initialLoad();
  });