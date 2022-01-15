import React from 'react'
import { Text } from './styles'

const AuthorItem = (prop) => {
  return (
  <tr>
    <td><Text>{prop.firstName}</Text></td>
    <td><Text>{prop.lastName}</Text></td>
    <td><Text>{prop.age}</Text></td>
    <td><Text>{prop.email}</Text></td>
    <td><Text>{prop.numBooksPublished}</Text></td>
  </tr>
  )
}

export default AuthorItem
