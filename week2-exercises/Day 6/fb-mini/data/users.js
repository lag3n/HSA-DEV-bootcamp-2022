const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  name: casual.name,
  DateOfBirth: casual.date(),
  email: casual.email,
  password: casual.password,
  description: casual.description,
}))

const userData = []

for (let i = 0; i < 30; ++i) {
  userData.push(casual.user)
}

module.exports = userData
