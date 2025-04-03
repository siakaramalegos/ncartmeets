const { CITIES } = require("../_11ty/helpers");

const citiesArr = []

for (const [key, value] of Object.entries(CITIES)) {
  // Skip New Bern since only annual and far away
  if (key !== 'nb') {
    citiesArr.push({
      code: key,
      name: value
    })
  }
}

module.exports = citiesArr
