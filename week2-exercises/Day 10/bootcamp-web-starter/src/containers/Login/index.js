import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from './graphql'
import { Container, Text, Input, Button } from './styles'

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [pass, setPassword] = useState('')

    const [login, {loading, error}] = useMutation(LOGIN, {
        variables: {
            email,
            password: pass,
        },
        onCompleted: ({ login: {token}}) => {
            localStorage.setItem('token', token)
            history.pushState('./home')
        },
    })

    return (
        <Container>
            <Text>Email</Text>
            <Input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <Text>Password</Text>
            <Input type="password" name="password" value={pass} onChange={e => setPassword(e.target.value)}/>
            <Button onClick={() => login()}>Log In</Button>
        </Container>
    )
}

export default Login
