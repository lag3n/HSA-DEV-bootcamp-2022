const casual = require('casual')
const userData = require('./users')

casual.define('friend', ({ user1, user2 }) => ({
  id: casual.uuid,
  requestingUser: user1,
  receivingUser: user2,
  status: casual.random_element(['accepted', 'rejected', 'pending']),
}))

const friendsData = []

for (let i = 0; i < 20; ++i) {
  const user1 = casual.random_element(userData).id
  const user2 = casual.random_element(userData).id
  friendsData.push(casual.friend({ user1, user2 }))
}

module.exports = friendsData
