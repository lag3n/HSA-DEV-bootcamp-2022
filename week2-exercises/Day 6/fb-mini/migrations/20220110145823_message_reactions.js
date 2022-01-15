exports.up = async knex => knex.schema.createTable('message_reactions', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .uuid('messageId')
      .notNullable()
      .references('group_messages.id')
    
    table
      .uuid('reactionerId')
      .notNullable()
      .references('users.id')

    table
      .enum('reaction',['reaction1', 'reaction2', 'reaction3', 'reaction4', 'reaction5'])
      .notNullable()

    table
      .datetime('dateReacted')
      .notNullable()
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('message_reactions')
  