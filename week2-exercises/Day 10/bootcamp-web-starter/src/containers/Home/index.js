import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Text } from './styles'

const Home = () => {
    const history = useHistory()
    const token = localStorage.getItem('token')
    if(!token)
    {
        history.push('/')
    }
    return (
        <Container><Text>Congrats on logging in! Welcome to DEV's Starter!</Text></Container>
    )
}

export default Home
