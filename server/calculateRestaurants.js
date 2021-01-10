const [pgp, db] = require('./db')

module.exports = async () => {
  let ranking = []
  
  var restaurants = await db.many("select neighbourhood, rating from restaurants order by rating desc")

  for (let i = 0; i < restaurants.length; i++) {
    let n = restaurants[i];
    ranking[n.neighbourhood] = {'neighbourhood': n.neighbourhood, 'rating': n.rating}
  } 

  return ranking
  // console.log(neighbourhoods)
  // console.log(ranking)
}