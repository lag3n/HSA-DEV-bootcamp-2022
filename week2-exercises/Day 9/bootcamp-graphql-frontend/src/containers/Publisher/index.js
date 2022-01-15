import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Container, Text } from './styles'
import GET_PUBLISHERS, { GET_PUBLISHER, ADD_PUBLISHER } from './graphql'
import PublisherTable from '../PublisherTable'

const Publisher = () => {
    const {loading, error, data} = useQuery(GET_PUBLISHERS)
    if (loading) 
    {
        return <Container><Text>Loading...</Text></Container>
    } else if (error)
    {
        console.log(error)
        return <Container><Text>Error!</Text></Container>
    }
    return (
        <Container>
            <PublisherTable data={data} />
        </Container>
    )
}

export default Publisher
