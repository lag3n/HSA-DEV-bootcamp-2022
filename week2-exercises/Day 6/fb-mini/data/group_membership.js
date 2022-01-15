const casual = require('casual')
const groupsData = require('./groups')
const userData = require('./users')

casual.define('group_mem', ({ group, user }) => ({
  id: casual.uuid,
  groupId: group,
  memberId: user,
  joined: casual.date(),
  status: casual.random_element(['admin', 'member']),
}))

const groupMembershipData = []

for (let i = 0; i < 20; ++i) {
  const group = casual.random_element(groupsData).id
  const user = casual.random_element(userData).id
  groupMembershipData.push(casual.group_mem({group, user}))
}

module.exports = groupMembershipData
