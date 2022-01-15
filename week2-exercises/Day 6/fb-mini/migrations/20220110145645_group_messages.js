exports.up = async knex => knex.schema.createTable('group_messages', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .uuid('groupId')
      .notNullable()
      .references('groups.id')
    
    table
      .uuid('senderId')
      .notNullable()
      .references('users.id')
    
    table
      .text('content')
      .notNullable()

    table
      .datetime('timeSent')
      .notNullable()
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('group_messages')
  