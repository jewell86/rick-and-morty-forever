const _ = require('lodash')
const characters = require('./characters.js')


/// could set a variable of the character array length, and the math rand

function quote(character) {
  return _.sample(character)
}

function rick() {
  quote(rick)
}

//console.log(quote(rick))

module.exports = {
  rick,
  beth,
  morty,
  quote
}
