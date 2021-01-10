const express = require("express");
const app = express();
const cors = require("cors");
const calculateSafety  = require("./calculateSafety");
const calculateRestaurants = require("./calculateRestaurants")
require('dotenv').config();
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'C:/Users/corby/nwHacks2021/server/restaurants.csv',
    header: [
        {id: 'neighbourhood', title: 'NEIGHBOURHOOD'},
        {id: 'rating', title: 'RATING'}
    ]
});
let neighbourhoodStrings=[
"arbutus ridge",  
"central business district",
"dunbar - southlands", 
"fairview", 
"grandview - woodland",
"hastings - sunrise", 
"kensington - cedar cottage", 
"kerrisdale", 
"killarney", 
"kitsilano", 
"marpole", 
"mount pleasant", 
"musqueam",  
"oakridge", 
"renfrew - collingwood", 
"riley park", 
"shaughnessy", 
"south cambie",   
"stanley park", 
"strathcona", 
"sunset", 
"victoria - fraserview", 
"west end", 
"west point grey"]
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
    const records = [] ;
    for(const neighbourhood of neighbourhoodStrings) { 
        let {numberOfRestaurants,averageRating} = await calculateRestaurants(neighbourhood)
        records.push({neighbourhood,rating: averageRating * 2})
    }
    console.log(records)
    csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
    res.status(400).json("ok")
});
//get, put, post, delete stuff
app.listen(5000, () => {
    console.log("server has started on port 5000");
  });