const { Model, HasManyRelation, snakeCaseMappers } = require('objection')
const knex = require('../lib/index')

Model.knex(knex)

class Relation extends Model {
    static get tableName() 
    {
        return 'relations'
    }

    static get relationMappings()
    {
        const User = require('./User')
        return {
            children: {
                relation: HasManyRelation,
                modelClass: User,
                join: 
                {
                    from: 'relations.parentId',
                    to: 'users.id',
                }
            },
            parent: {
                relation: HasManyRelation,
                modelClass: User,
                join:
                {
                    from: 'relations.childId',
                    to: 'users.id',
                }
            }
        }
    }
}

module.exports = Relation
