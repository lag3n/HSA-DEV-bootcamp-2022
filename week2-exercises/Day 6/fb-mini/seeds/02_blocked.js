const blockedData = require('../data/blocked')

exports.seed = knex => knex('blocked').del()
  .then(() => knex('blocked').insert(blockedData))