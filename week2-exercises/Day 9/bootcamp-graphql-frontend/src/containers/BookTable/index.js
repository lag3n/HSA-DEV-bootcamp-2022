import React from 'react'
import { Container, Text } from './styles'
import BookItem from '../BookItem'

const BookTable = (props) => {
  if (props.data.books.length === 0)
  {
    return (<Text>No Elements in Table</Text>)
  } else {
    return (
        <Container>
            <Text>Book Table!</Text>
            <table>
        <thead>
            <tr>
                <td><Text>Title</Text></td>
                <td><Text>Language</Text></td>
                <td><Text>Pages</Text></td>
                <td><Text>Date Published</Text></td>
            </tr>
        </thead>
        <tbody>
          {props.data.books.map(book => (
            <BookItem key={book.id} title={book.title} language={book.language} numPages={book.numPages} datePublished={book.datePublished} />
          ))}
    </tbody>
  </table>
        </Container>
    )
  }
}

export default BookTable
