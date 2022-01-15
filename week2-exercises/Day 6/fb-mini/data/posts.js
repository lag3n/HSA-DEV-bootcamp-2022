const casual = require('casual')
const userData = require('./users')

casual.define('post', ({ user }) => ({
  id: casual.uuid,
  posterID: user,
  content: casual.description,
  time_posted: casual.date(),
  friendsOnly: casual.boolean,
}))

const postsData = []

for (let i = 0; i < 20; ++i) {
  const user = casual.random_element(userData).id
  postsData.push(casual.post({user}))
}

module.exports = postsData
