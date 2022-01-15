const messageReactionsData = require('../data/message_reactions')

exports.seed = knex => knex('message_reactions').del()
  .then(() => knex('message_reactions').insert(messageReactionsData))