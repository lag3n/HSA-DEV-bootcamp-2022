const casual = require('casual')
const userData = require('./users')

casual.define('report', ({ user1, user2 }) => ({
  id: casual.uuid,
  reportingUser: user1,
  reportedUser: user2,
  reason: casual.description,
  timeReported: casual.date(),
}))

const reportedData = []

for (let i = 0; i < 20; ++i) {
  const user1 = casual.random_element(userData).id
  const user2 = casual.random_element(userData).id
  reportedData.push(casual.report({ user1, user2 }))
}

module.exports = reportedData
