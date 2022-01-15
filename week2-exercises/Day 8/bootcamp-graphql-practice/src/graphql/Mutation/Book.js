const Book = require('../../models/Book')

const addBook = async (obj, { input }, context) => {
  try 
  {
    return Book.query().insert({
      title: input.title,
      language: input.language,
      numPages: input.numPages,
      datePublished: input.datePublished,
      bestseller: input.bestseller,
      authorId: input.authorId,
      publisherId: input.publisherId
    })
  } 
  catch (e)
  {
    throw new Error('Failed to add Book')
  }
}

const resolver = {
  Mutation: { 
    addBook,
  }
}

module.exports = resolver
