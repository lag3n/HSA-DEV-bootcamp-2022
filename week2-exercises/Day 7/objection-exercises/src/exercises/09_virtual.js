const cleanup = require('../lib/cleanup')
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const user = await User.query().first()
  console.log('Full Name: ' + user.fullName)
  console.log('Are they an adult? ' + user.isAdult)
  console.log('Do they have Gmail? ' + user.isGmail)  

  // -----
  cleanup()
}

run()
