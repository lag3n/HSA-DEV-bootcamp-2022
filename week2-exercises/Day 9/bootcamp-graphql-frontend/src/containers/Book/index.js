import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Container, Text } from './styles'
import GET_BOOKS, { GET_BOOK, ADD_BOOK } from './graphql'
import BookTable from '../BookTable'

const Book = () => {
    const {loading, error, data} = useQuery(GET_BOOKS)
    if (loading) 
    {
        return <Container><Text>Loading...</Text></Container>
    } else if (error)
    {
        return <Container><Text>Error!</Text></Container>
    }
    return (
        <Container>
            <BookTable data={data} />
        </Container>
    )
}

export default Book
