
const {Client} = require("@googlemaps/google-maps-services-js");
const axios = require('axios');

module.exports = (neighbourhood) => {
    const client = new Client({});
    axios({
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${neighbourhood}&location=49.210724,-123.130188&radius=10000&types=restaurant&rankby=prominence&key=AIzaSyBN-304ky5ok_xF0xY2XATTwjA4YxRj7jg`
    })
      .then(function (response) {
        console.log(response.data.results.length)
        console.log(`restaurants in ${neighbourhood}`)
      });


};
