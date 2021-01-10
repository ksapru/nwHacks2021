const express = require("express");
const app = express();
const cors = require("cors");
const calculateSafety  = require("./calculateSafety");
const calculateRestaurants = require("./calculateRestaurants")
//const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json()); //req.body

app.get("/calculate", async (req, res) => {
    let {budget, worklocation} = req.body;
    console.log({
      budget, worklocation
    })
    calculateRestaurants("central business district");
    safetyStars = calculateSafety(worklocation)
    res.status(400).json(safetyStars)
  });
//get, put, post, delete stuff
app.listen(5000, () => {
    console.log("server has started on port 5000");
  });