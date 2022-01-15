exports.up = async knex => knex.schema.createTable('posts', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .uuid('posterID')
      .notNullable()
      .references('users.id')
    
    table
      .text('content')
      .notNullable()

    table
      .datetime('time_posted')
      .notNullable()

    table
      .boolean('friendsOnly')
      .notNullable()
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('posts')
  