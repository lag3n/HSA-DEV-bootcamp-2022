exports.up = async knex => knex.schema.createTable('groups', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .string('groupName')
      .notNullable()
    
    table
      .enum('privacyStatus', ['private', 'public'])
      .notNullable()
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('groups')
  