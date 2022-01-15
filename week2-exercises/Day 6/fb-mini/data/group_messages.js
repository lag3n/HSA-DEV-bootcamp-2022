const casual = require('casual')
const groupsData = require('./groups')
const userData = require('./users')

casual.define('group_msg', ({ group, user }) => ({
  id: casual.uuid,
  groupId: group,
  senderId: user,
  content: casual.description,
  timeSent: casual.date(),
}))

const groupMessagesData = []

for (let i = 0; i < 20; ++i) {
  const group = casual.random_element(groupsData).id
  const user = casual.random_element(userData).id
  groupMessagesData.push(casual.group_msg({ group, user }))
}

module.exports = groupMessagesData
