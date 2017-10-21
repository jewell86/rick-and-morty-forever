const _ = require('lodash')

const rick = [
  'Wubba lubba dub dub!',
  'Grasssss, tastes baddduh.'
]

const morty = [
  'Aw jeez, Rick',
  'Aw, jeez'
]

const beth = [
  'I squanch my family.'
]

/// could set a variable of the character array length, and the math rand

function quote(character) {
  return _.sample(character)
}


//console.log(quote(rick))

module.exports = {
  rick,
  beth,
  morty,
  quote
}
