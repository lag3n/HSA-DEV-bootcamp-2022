const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const userEleazar = await User.query().where('firstName', 'Eleazar').where('lastName', 'Lueilwitz' )
  console.log(userEleazar)

  // Do the same with object notation
  const userQuinn = await User.query().where({ firstName: 'Quinn', lastName: 'Johnson' })
  console.log(userQuinn)

  // Get all DOGS and BIRDS
  const pupperFlaps = await Pet.query().whereIn('type', ['DOG', 'BIRD'])
  console.log(pupperFlaps)

  // -----
  cleanup()
}

run()
