const { Model, HasManyRelation, ManyToManyRelation, snakeCaseMappers } = require('objection')
const knex = require('../lib/index')

Model.knex(knex)

class User extends Model {
    static get virtualAttributes() {
        return ['fullName', 'isAdult', 'isGmail']
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    get isAdult() {
        return this.age >= 18
    }

    get isGmail() {
        if (this.email.length < 10)
        {
            return false;
        }
        return this.email.substring(this.email.length - 9) === 'gmail.com'
    }
    
    
    static get tableName() 
    {
        return 'users'
    }

    static get relationMappings()
    {
        const Pet = require('./Pet')
        const Relation = require('./Relation')
        return {
            pets: {
                relation: HasManyRelation,
                modelClass: Pet,
                join: 
                {
                    from: 'users.id',
                    to: 'pets.ownerId',
                }
            },
            children: {
                relation: HasManyRelation,
                modelClass: Relation,
                join: 
                {
                    from: 'users.id',
                    to: 'relations.parentId',
                }
            },
            parent: {
                relation: HasManyRelation,
                modelClass: Relation,
                join:
                {
                    from: 'users.id',
                    to: 'relations.childId',
                }
            }
        }
    }
}

module.exports = User
