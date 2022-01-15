const Author = require('../../models/Author')
const Book = require('../../models/Book')

const authors = async () => {
  try 
  {
    const author = await Author.query()
    return author
  } 
  catch (e)
  {
    throw new Error('Failed to return Authors')
  }
}

const author = async (obj, { id }, context) => {
  const author = await Author.query().findOne('id', id)
  return author
}

const books = async (obj, { id }, context) => {
  const book = await Book.query().where('authorId', id)
  return book
}

const resolver = {
  Query: { 
    authors,
    author,
   },
   Author: {
     books,
   },
}

module.exports = resolver
