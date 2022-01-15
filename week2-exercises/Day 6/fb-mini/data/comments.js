const casual = require('casual')
const postsData = require('./posts')
const userData = require('./users')

casual.define('comment', ({ comment, user }) => ({
  id: casual.uuid,
  postId: comment,
  commenterId: user,
  content: casual.description,
  dateCommented: casual.date(),
}))

const commentsData = []

for (let i = 0; i < 20; ++i) {
  const comment = casual.random_element(postsData).id
  const user = casual.random_element(userData).id
  commentsData.push(casual.comment({comment, user}))
}

module.exports = commentsData
