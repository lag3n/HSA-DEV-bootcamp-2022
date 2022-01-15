const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
const Relation = require('../models/Relation')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)

  const jed = await User.query().findById('b105f424-a77c-44aa-8def-e91517e36f3f')
  console.log(jed)

  // Use that instance to create a new pet related that user

  const change = await jed.$relatedQuery('pets').insert({
    type: 'ALLIGATOR',
    name: 'Chomps'
  }).returning('*')
  console.log(change)

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph

  const pullInfo = await (await jed.$fetchGraph('children')).$fetchGraph('pets')
  console.log(pullInfo)

  // -----
  cleanup()
}

run()
