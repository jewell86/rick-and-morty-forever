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
  return character[Math.floor(Math.random() * character.length)]
}


console.log(quote(rick))

module.exports = {
  rick,
  morty,
  beth,
  quote
}
