const [pgp, db] = require('../db');
const getNeighbourhood = require('../utils/getNeighbourhoodFromCoords.js');

module.exports = async () => {
  
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }   

  var rentals = await db.many("select price, lat, long from raw_rental limit 3")

  for (let i = 0; i < rentals.length; i++) {
    let rental = rentals[i]
    console.log(rental)
    rental["neighbourhood"] = await getNeighbourhood(rental.lat, rental.long)
    sleep(2000)
  }

  console.log(rentals)
}