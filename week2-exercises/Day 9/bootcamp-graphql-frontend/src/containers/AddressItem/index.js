import React from 'react'
import { Text } from './styles'

const AddressItem = (prop) => {
  return (
  <tr>
    <td><Text>{prop.street}</Text></td>
    <td><Text>{prop.city}</Text></td>
    <td><Text>{prop.state}</Text></td>
    <td><Text>{prop.zip}</Text></td>
  </tr>
  )
}

export default AddressItem
