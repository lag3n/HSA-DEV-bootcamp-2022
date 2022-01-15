const Book = require('../../models/Book')
const Publisher = require('../../models/Publisher')

const publishers = async () => {
  try 
  {
    const publisher = await Publisher.query()
    return publisher
  } 
  catch (e)
  {
    throw new Error('Failed to return Publishers')
  }
}

const publisher = async (obj, { id }, context) => {
  const publisher = await Publisher.query().findOne('id', id)
  return publisher
}

const books = async (obj, { id }, context) => {
  const book = await Book.query().where('publisherId', id)
  return book
}

const resolver = {
  Query: { 
    publishers,
    publisher
   },
   Publisher: {
     books,
   },
}

module.exports = resolver
