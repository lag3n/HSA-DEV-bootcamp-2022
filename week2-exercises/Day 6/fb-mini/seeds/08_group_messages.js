const groupMessagesData = require('../data/group_messages')

exports.seed = knex => knex('group_messages').del()
  .then(() => knex('group_messages').insert(groupMessagesData))