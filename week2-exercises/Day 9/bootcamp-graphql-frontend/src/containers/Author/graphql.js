import gql from 'graphql-tag'

const GET_AUTHORS = gql`
 	query authors {
        authors {
            id
            firstName
            lastName
            age
            email
            numBooksPublished
        }
    }
`

const GET_AUTHOR = gql`
 	query author($id: ID!) {
        author(id: $id) { 
	        id
	        firstName
            lastName
            age
            email
            numBooksPublished
        }
    }
`

const ADD_AUTHOR = gql`
    mutation addAuthor($input: AddAuthorInput!){
        addAuthor(input: $input){
            firstName
            lastName
            age
            email
            numBooksPublished
        }
    }
`

export default GET_AUTHORS
export {GET_AUTHOR, ADD_AUTHOR}
