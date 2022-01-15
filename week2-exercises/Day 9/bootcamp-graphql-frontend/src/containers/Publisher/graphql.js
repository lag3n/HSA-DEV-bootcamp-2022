import gql from 'graphql-tag'

const GET_PUBLISHERS = gql`
 	query publishers {
        publishers {
            id
            company
            phoneNumber
            numBooksPublished
            addressId
        }
    }
`

const GET_PUBLISHER = gql`
 	query publisher($id: ID!) {
        publisher(id: $id) { 
	        id
            company
            phoneNumber
            numBooksPublished
            addressId
        }
    }
`

const ADD_PUBLISHER = gql`
    mutation addPublisher($input: AddPublisherInput!){
        addPublisher(input: $input){
            company
            phoneNumber
            numBooksPublished
            addressId
        }
    }
`

export default GET_PUBLISHERS
export { GET_PUBLISHER, ADD_PUBLISHER }
