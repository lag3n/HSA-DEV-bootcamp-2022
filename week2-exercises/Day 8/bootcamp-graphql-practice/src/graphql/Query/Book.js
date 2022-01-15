const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Publisher = require('../../models/Publisher')

const books = async () => {
  try 
  {
    const book = await Book.query()
    return book
  }
  catch (e)
  {
    throw new Error('Failed to return Books')
  }
}

const book = async (obj, { id }, context) => {
  const book = await Book.query().findOne('id', id)
  return book
}

const resolver = {
  Query: { 
    books,
    book,
   },
}

module.exports = resolver
