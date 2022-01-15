const casual = require('casual')
const groupMessagesData = require('./group_messages')
const userData = require('./users')

casual.define('reaction', ({ message, user }) => ({
  id: casual.uuid,
  messageId: message,
  reactionerId: user,
  reaction: casual.random_element(['reaction1', 'reaction2', 'reaction3', 'reaction4', 'reaction5']),
  dateReacted: casual.date(),
}))

const messageReactionsData = []

for (let i = 0; i < 20; ++i) {
  const message = casual.random_element(groupMessagesData).id
  const user = casual.random_element(userData).id
  messageReactionsData.push(casual.reaction({ message, user }))
}

module.exports = messageReactionsData
