const groupsData = require('../data/groups')

exports.seed = knex => knex('groups').del()
  .then(() => knex('groups').insert(groupsData))