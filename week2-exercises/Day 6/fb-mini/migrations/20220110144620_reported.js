exports.up = async knex => knex.schema.createTable('reported', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .uuid('reportingUser')
      .notNullable()
      .references('users.id')
    
    table
      .uuid('reportedUser')
      .notNullable()
      .references('users.id')
  
    table
      .text('reason')
      .notNullable()

    table
      .datetime('timeReported')
      .notNullable()
  })

exports.down = async knex => knex.schema.dropTableIfExists('reported')