const [pgp, db] = require('../db');
const getNeighbourhood = require('../utils/getNeighbourhoodFromCoords.js');

module.exports = async () => {
  
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }   

  var count = await db.one("select count(*) from houses");
  count = count.count
  console.log("count: "+count)
  if(count != 0) {
    // console.log("Already occupied")
    return
  }

  var rentals = await db.many("select price, location_desc, lat, long from raw_rental limit 150")
  var houses = []

  for (let i = 0; i < rentals.length; i++) {
    let rental = rentals[i]
    // console.log(rental)
    let house = {}
    house["neighbourhood"] = await getNeighbourhood(rental.lat, rental.long)
    house["unit_type"] = 0
    house["price"] = rentals[i].price
    house["address"] = rentals[i].location_desc
    house["lat"] = rentals[i].lat
    house["long"] = rentals[i].long
    houses.push(house)
    sleep(50)
  }

  const cs = new pgp.helpers.ColumnSet(["address", "price", "neighbourhood", "unit_type", "lat", "long"], {table: "houses"})
  const query = pgp.helpers.insert(houses, cs)
  await db.none(query);

  console.log("Query done")
}