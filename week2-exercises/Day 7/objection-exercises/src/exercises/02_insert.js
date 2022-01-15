const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  await User.query().insert({
    email: 'etang@college.harvard.edu',
    firstName: 'Eric',
    lastName: 'Tang',
    age: 18
  })

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  await Pet.query().insert({
    ownerId: '0f28bee1-bced-4a30-ad26-5e62cc42e247',
    type: 'FISH',
    name: 'El Captain',
  })

  // -----
  cleanup()
}

run()
