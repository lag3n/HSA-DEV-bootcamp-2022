const { Model, BelongsToOneRelation, snakeCaseMappers } = require('objection')
const knex = require('../lib/index')

Model.knex(knex)

class Pet extends Model {
    static get tableName() 
    {
        return 'pets'
    }

    static get relationMappings()
    {
        const User = require('./User')
        return {
            user: {
                relation: BelongsToOneRelation,
                modelClass: User,
                join: 
                {
                    from: 'pets.ownerId',
                    to: 'users.id',
                }
            }
        }
    }
}

module.exports = Pet
