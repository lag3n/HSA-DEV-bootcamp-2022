const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
const Relation = require('../models/Relation')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  try {
    const myTransaction = await User.transaction(async trx => {
      const example = await User.query(trx)
      .insert({
        email: 'example@userexample.com',
        firstName: 'Example',
        lastName: 'example',
        age: 323,
      }).returning('*')

      console.log(example)

      const examplePet = await example.$relatedQuery('pets', trx)
      .insert({
        type: 'ALLIGATOR',
        name: 'Chomps 2.0',
      })

      console.log(examplePet)

      const numPets = await Pet.query().resultSize()
      console.log(numPets)
      if (numPets > 15)
      {
        const byeBirds = await Pet.query().delete().where('type', 'BIRD').returning('*')
        console.log(byeBirds)
      } else {
        console.log('Birds live... for now')
      }
    })

    console.log('MY TRANSACTION: ' + myTransaction)

  } catch (e) {
    console.log(e)
    cleanup()
  }

  // -----
  cleanup()
}

run()
