
const {Client} = require("@googlemaps/google-maps-services-js");
const axios = require('axios');

module.exports = (neighbourhood) => {
    const client = new Client({});
    axios({
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${neighbourhood}&location=49.210724,-123.130188&radius=10000&types=restaurant&rankby=prominence&key=${process.env.GOOGLE_API_KEY}`
    })
      .then(function (response) {
        let ratingSum = 0;
        for (const restaurant of response.data.results) {
          ratingSum+=restaurant.rating;
        }
        let numberOfRestaurants = response.data.results.length
        rating = ratingSum / response.data.results.length
        console.log(numberOfRestaurants)
        console.log(ratingSum)
        return {"numberOfRestaurants": numberOfRestaurants,"ratingSum": ratingSum};
      });


};
