import gql from 'graphql-tag'

const GET_BOOKS = gql`
 	query books {
        books {
            id
            title
            language
            numPages
            datePublished
        }
    }
`

const GET_BOOK = gql`
 	query book($id: ID!) {
        book(id: $id) { 
	        id
            title
            language
            numPages
            datePublished
        }
    }
`

const ADD_BOOK = gql`
    mutation addBook($input: AddBookInput!){
        addBook(input: $input){
            title
            language
            numPages
            datePublished
    		authorId
    		publisherId
        }
    }
`

export default GET_BOOKS
export {GET_BOOK, ADD_BOOK}
