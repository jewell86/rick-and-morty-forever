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

function quote(character) {
  let me = character
  return me[Math.floor(Math.random() * me.length)]
}


console.log(quote(rick))

module.exports = {
  quote
}
