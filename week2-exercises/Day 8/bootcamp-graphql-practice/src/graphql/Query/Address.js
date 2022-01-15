const Author = require('../../models/Author')
const Address = require('../../models/Address')
const Publisher = require('../../models/Publisher')

const addresses = async () => {
  try 
  {
    const address = await Address.query()
    return address
  } 
  catch (e)
  {
    throw new Error('Failed to return Addresses')
  }
}

const address = async (obj, { id }, context) => {
  const address = await Address.query().findOne('id', id)
  return address
}

const authors = async (obj, { id }, context) => {
  const author = await Author.query().where('addressId', id)
  return author
}

const publishers = async (obj, { id }, context) => {
  const publisher = await Publisher.query().where('addressId', id)
  return publisher
}

const resolver = {
  Query: { 
    addresses,
    address,
   },
   Address: {
     authors,
     publishers,
   },
}

module.exports = resolver
