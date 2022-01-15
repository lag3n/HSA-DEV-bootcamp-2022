const Address = require('../../models/Address')

const addAddress = async (obj, { input }, context) => {
  try 
  {
    return Address.query().insert({
      street: input.street,
      city: input.city,
      state: input.state,
      zip: input.zip,
    })
  } 
  catch (e)
  {
    throw new Error('Failed to add Address')
  }
}

const resolver = {
  Mutation: { 
    addAddress,
  }
}

module.exports = resolver
