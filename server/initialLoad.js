const pool = require('./db')
const uploadCSV = require('./utils/uploadCSV.js')

module.exports = async () => {
  // console.log(__dirname)
  uploadCSV('raw_rental', __dirname+'/datapull/rental/rentals1.csv')
};