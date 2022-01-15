import React from 'react'
import { Text } from './styles'

const PublisherItem = (prop) => {
  return (
  <tr>
    <td><Text>{prop.company}</Text></td>
    <td><Text>{prop.phoneNumber}</Text></td>
    <td><Text>{prop.numBooksPublished}</Text></td>
    <td><Text>{prop.addressId}</Text></td>
    <td><Text>{prop.bookTitles}</Text></td>
  </tr>
  )
}

export default PublisherItem
