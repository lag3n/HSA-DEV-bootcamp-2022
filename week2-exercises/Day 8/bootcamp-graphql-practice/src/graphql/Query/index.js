const merge = require('lodash.merge')
const Welcome = require('./Welcome')
const Author = require('./Author')
const Book = require('./Book')
const Publisher = require('./Publisher')
const Address = require('./Address')

const resolvers = [Welcome, Author, Book, Publisher, Address]

module.exports = merge(...resolvers)
