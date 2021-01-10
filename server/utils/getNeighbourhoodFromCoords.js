const axios = require('axios');

module.exports = async (lat, long) => {
  var neighbourhood = ""
  
  await axios({
    method: 'get',
    url: `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}`
  })
    .then(function (response) {
      neighbourhood = response.data?.address?.city_district

    });
    return neighbourhood.replace("-", " - ")
}