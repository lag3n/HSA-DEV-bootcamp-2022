const Author = require('../../models/Author')

const addAuthor = async (obj, { input }, context) => {
  try 
  {
    return Author.query().insert({
      firstName: input.firstName,
      lastName: input.lastName,
      age: input.age,
      email: input.email,
      numBooksPublished: input.numBooksPublished,
    })
  } 
  catch (e)
  {
    throw new Error('Failed to add Author')
  }
}

const resolver = {
  Mutation: { 
    addAuthor,
  }
}

module.exports = resolver
