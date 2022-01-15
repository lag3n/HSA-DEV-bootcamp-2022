import React from 'react'
import { Container, Text } from './styles'
import PublisherItem from '../PublisherItem'

const PublisherTable = (props) => {
  if (props.data.publishers.length === 0)
  {
    return (<Text>No Elements in Table</Text>)
  } else {
    return (
        <Container>
            <Text>Publisher Table!</Text>
            <table>
        <thead>
            <tr>
                <td><Text>Company</Text></td>
                <td><Text>Phone Number</Text></td>
                <td><Text>Books Published</Text></td>
                <td><Text>Address</Text></td>
            </tr>
        </thead>
        <tbody>
          {props.data.publishers.map(publisher => (
            <PublisherItem key={publisher.id} company={publisher.company} phoneNumber={publisher.phoneNumber} numBooksPublished={publisher.numBooksPublished} addressId={publisher.addressId} />
          ))}
    </tbody>
  </table>
        </Container>
    )
  }
}

export default PublisherTable
