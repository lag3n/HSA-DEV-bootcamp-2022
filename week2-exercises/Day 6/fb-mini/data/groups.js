const casual = require('casual')

casual.define('group', () => ({
  id: casual.uuid,
  groupName: casual.string,
  privacyStatus: casual.random_element(['private', 'public']),
}))

const groupsData = []

for (let i = 0; i < 20; ++i) {
  groupsData.push(casual.group)
}

module.exports = groupsData
