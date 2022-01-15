const Publisher = require('../../models/Publisher')

const addPublisher = async (obj, { input }, context) => {
  try 
  {
    return Publisher.query().insert({
      company: input.company,
      phoneNumber: input.phoneNumber,
      numBooksPublished: input.numBooksPublished,
      addressId: input.addressId
    })
  } 
  catch (e)
  {
    throw new Error('Failed to add Publisher')
  }
}

const resolver = {
  Mutation: { 
    addPublisher,
  }
}

module.exports = resolver
