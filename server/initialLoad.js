const pool = require('./db')
const uploadCSV = require('./utils/uploadCSV.js')
const getNeighbourhood = require('./utils/getNeighbourhoodFromCoords.js')

module.exports = async () => {
  // console.log(__dirname)
  // console.log(await getNeighbourhood(49.269605, -123.044643))
  uploadCSV('raw_rental', __dirname+'/datapull/rental/rentals1.csv')
  uploadCSV('neighbourhoods', __dirname+'/datapull/neighbourhoods/neighbourhoods.csv')
};