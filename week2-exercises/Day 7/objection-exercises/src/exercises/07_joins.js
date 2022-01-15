const cleanup = require('../lib/cleanup')
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const userPet = await User.query().withGraphFetched('pets')
  console.log(userPet)

  // Get all users, their pets, AND their children
  const userPetChild = await User.query().withGraphFetched('[pets, children]')
  console.log(userPetChild)

  // Get all users, their parents, and their grandparents
  const userThreeGen = await User.query().withGraphFetched('parent').withGraphFetched('parent.parent')
  console.log(userThreeGen)

  // Get all users, their pets, their chilren, and their childrens' pets
  const userTwoGenPets = await User.query().withGraphFetched('pets').withGraphFetched('children').withGraphFetched('pets')
  console.log(userTwoGenPets)

  // -----
  cleanup()
}

run()
