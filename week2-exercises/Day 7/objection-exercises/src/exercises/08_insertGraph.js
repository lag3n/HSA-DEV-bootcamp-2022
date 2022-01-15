const cleanup = require('../lib/cleanup')
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const graph = await User.query().insertGraph({
    email: 'example@example.com',
    firstName: 'Peter',
    lastName: 'Bynum',
    age: 120,
    pets: [
      {
        type: 'DOG',
        name: 'Rocco',
      },
      {
        type: 'DOG',
        name: 'Rosey',
      }
    ]
  }).returning('*')

  console.log(graph)

  // -----
  cleanup()
}

run()
