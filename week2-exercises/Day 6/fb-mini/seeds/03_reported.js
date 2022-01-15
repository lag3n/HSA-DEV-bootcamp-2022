const reportedData = require('../data/reported')

exports.seed = knex => knex('reported').del()
  .then(() => knex('reported').insert(reportedData))