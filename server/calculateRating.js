module.exports = async (house, rest, safety) => {
  
  const rating = []

  function calc(house, rest, safety) {
    console.log("a: ", house, rest, safety)
    try {
      return ((house * .5) + (rest /10  * .25) + (safety / 5 * .25)) * 100
    } catch {
      return ((house * .75) + (safety * .25)) * 100
    }
  }

  for (const [key, value] of Object.entries(house)) {
    rating.push({"neighbourhood": key, "match": calc(value.rating, rest[key]?.rating, safety[key])?.toFixed(1), "safety": safety[key]?.toFixed(1), "transit": (Math.random()*10)?.toFixed(1), "food": rest[key]?.rating?.toFixed(1)
    })
  }

  console.log("rest", rest)
  console.log("safe", safety)

  rating.sort((a, b) => b.match - a.match)

  // console.log(rating)
  return rating.slice(0, 5)
  // console.log(neighbourhoods)
}