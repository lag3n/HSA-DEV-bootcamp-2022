const groupMembershipData = require('../data/group_membership')

exports.seed = knex => knex('group_membership').del()
  .then(() => knex('group_membership').insert(groupMembershipData))