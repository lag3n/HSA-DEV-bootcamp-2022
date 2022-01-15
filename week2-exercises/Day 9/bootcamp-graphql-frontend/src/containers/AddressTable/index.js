import React from 'react'
import { Container, Text } from './styles'
import AddressItem from '../AddressItem'

const AddressTable = (props) => {
  if (props.data.addresses.length === 0)
  {
    return (<Text>No Elements in Table</Text>)
  } else {
    return (
        <Container>
            <Text>Address Table!</Text>
            <table>
        <thead>
            <tr>
                <td><Text>Street</Text></td>
                <td><Text>City</Text></td>
                <td><Text>State</Text></td>
                <td><Text>Zip</Text></td>
            </tr>
        </thead>
        <tbody>
          {props.data.addresses.map(address => (
            <AddressItem key={address.id} street={address.street} city={address.city} state={address.state} zip={address.zip} />
          ))}
    </tbody>
  </table>
        </Container>
    )
  }
}

export default AddressTable
