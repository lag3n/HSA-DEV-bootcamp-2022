exports.up = async knex => knex.schema.createTable('group_membership', table => {
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
      .uuid('memberId')
      .notNullable()
      .references('users.id')

    table
      .datetime('joined')
      .notNullable()

    table
      .enum('status', ['admin', 'member'])
      .notNullable()
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('group_membership')
  