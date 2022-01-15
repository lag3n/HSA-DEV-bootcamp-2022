const casual = require('casual')
const userData = require('./users')

casual.define('block', ({ user1, user2 }) => ({
  id: casual.uuid,
  blockingUser: user1,
  blockedUser: user2,
  status: casual.random_element(['active', 'inactive']),
}))

const blockedData = []

for (let i = 0; i < 20; ++i) {
  const user1 = casual.random_element(userData).id
  const user2 = casual.random_element(userData).id
  blockedData.push(casual.block({ user1, user2 }))
}

module.exports = blockedData
