import React from 'react'
import { Container, Text } from './styles'
import AuthorItem from '../AuthorItem'

const AuthorTable = (props) => {
  if (props.data.authors.length === 0)
  {
    return (<Text>No Elements in Table</Text>)
  } else {
    return (
        <Container>
            <Text>Author Table!</Text>
            <table>
        <thead>
            <tr>
                <td><Text>First Name</Text></td>
                <td><Text>Last Name</Text></td>
                <td><Text>Age</Text></td>
                <td><Text>Email</Text></td>
                <td><Text>Books Published</Text></td>
            </tr>
        </thead>
        <tbody>
          {props.data.authors.map(author => (
            <AuthorItem key={author.id} firstName={author.firstName} lastName={author.lastName} age={author.age} email={author.email} numBooksPublished={author.numBooksPublished} />
          ))}
    </tbody>
  </table>
        </Container>
    )
  }
}

export default AuthorTable
