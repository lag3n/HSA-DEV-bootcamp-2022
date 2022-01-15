const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const numUser = await User.query().resultSize()
  console.log(numUser)

  // Get the average age of users
  const avgAge = await User.query().avg('age')
  console.log(avgAge)

  // Get the total number of dogs
  const numDog = await Pet.query().where({ type: 'DOG' }).resultSize()
  console.log(numDog)

  // -----
  cleanup()
}

run()
