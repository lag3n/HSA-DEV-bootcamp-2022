import React from 'react'
import { Text } from './styles'

const BookItem = (prop) => {
  return (
  <tr>
    <td><Text>{prop.title}</Text></td>
    <td><Text>{prop.language}</Text></td>
    <td><Text>{prop.numPages}</Text></td>
    <td><Text>{prop.datePublished}</Text></td>
  </tr>
  )
}

export default BookItem
