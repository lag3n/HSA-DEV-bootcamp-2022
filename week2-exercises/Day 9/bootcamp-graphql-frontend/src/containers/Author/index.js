import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Container, Text } from './styles'
import GET_AUTHORS, { GET_AUTHOR, ADD_AUTHOR } from './graphql'
import AuthorTable from '../AuthorTable'

const Author = () => {
    const {loading, error, data} = useQuery(GET_AUTHORS)
    if (loading) 
    {
        return <Container><Text>Loading...</Text></Container>
    } else if (error)
    {
        return <Container><Text>Error!</Text></Container>
    }
    return (
        <Container>
            <AuthorTable data={data} />
        </Container>
    )
}

export default Author
