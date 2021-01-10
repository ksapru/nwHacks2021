module.exports = async (house, rest, safety) => {
  
  const rating = []

  function calc(house, rest, safety) {
    console.log("a: ", house, rest, safety)
    try {
      return (house * .5) + (rest /10  * .25) + (safety / 5 * .25)
    } catch {
      return (house * .75) + (safety * .25)
    }
  }

  for (const [key, value] of Object.entries(house)) {
    rating.push({"neighbourhood": key, "match": calc(value.rating, rest[key]?.rating, safety[key]), "safety": safety[key]?.rating, "transit": Math.random()*10, "food": rest[key]?.rating
    })
  }

  console.log("rest", rest)
  console.log("safe", safety)

  rating.sort((a, b) => b.match - a.match)

  // console.log(rating)
  return rating.slice(0, 5)
  // console.log(neighbourhoods)
}