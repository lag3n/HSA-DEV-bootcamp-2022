import gql from 'graphql-tag'

const GET_ADDRESSES = gql`
 	query addresses {
        addresses {
            id
            street
            city
            state
            zip
        }
    }
`

const GET_ADDRESS = gql`
 	query address($id: ID!) {
        address(id: $id) { 
	        id
            street
            city
            state
            zip
        }
    }
`

const ADD_ADDRESS = gql`
    mutation addAddress($input: AddAddress!){
        addAddress(input: $input){
            street
            city
            state
            zip
        }
    }
`

export default GET_ADDRESSES 
export {GET_ADDRESSES, ADD_ADDRESS}
