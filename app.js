const _ = require('lodash')
const characters = require('./characters.js')
const quotes = characters.charsAndQuotes
const rick = quotes.rick
const beth = quotes.beth
const morty = quotes.morty

/// could set a variable of the character array length, and the math rand

function quote(quoteArray) {
  return _.sample(quoteArray)
}
//console.log(quote(rick))

//console.log(objArray)

module.exports = {
  quote,
  characters,
  rick,
  beth,
  morty
}
