const { TYPES } = require("../_11ty/helpers");

const arr = []

for (const [key, value] of Object.entries(TYPES)) {
  arr.push({
    code: key,
    name: value
  })
}

module.exports = arr
