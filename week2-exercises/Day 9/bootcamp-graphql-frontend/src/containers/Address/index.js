import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Container, Text } from './styles'
import GET_ADDRESSES, { GET_ADDRESS, ADD_ADDRESS } from './graphql'
import AddressTable from '../AddressTable'

const Address = () => {
    const {loading, error, data} = useQuery(GET_ADDRESSES)
    if (loading) 
    {
        return <Container><Text>Loading...</Text></Container>
    } else if (error)
    {
        return <Container><Text>Error!</Text></Container>
    }
    return (
        <Container>
            <AddressTable data={data} />
        </Container>
    )
}

export default Address
