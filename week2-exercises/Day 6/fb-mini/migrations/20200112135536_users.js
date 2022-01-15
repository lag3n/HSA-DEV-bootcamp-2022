exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('name')
    .notNullable()
  
  table
    .datetime('DateOfBirth')
    .notNullable()

  table
    .string('email')
    .unique()
    .notNullable()

  table
    .string('password')
    .unique()
    .notNullable()
  
  table
    .text('description')
    .notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('users')