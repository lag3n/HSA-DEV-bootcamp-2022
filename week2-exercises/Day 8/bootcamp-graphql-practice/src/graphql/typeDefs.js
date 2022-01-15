const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!
    authors: [Author!]!
    author(id: ID!): Author!
    books: [Book!]!
    book(id: ID!): Book!
    publishers: [Publisher!]!
    publisher(id: ID!): Publisher!
    addresses: [Address!]!
    address(id: ID!): Address!
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    addressId: Address
    books: [Book!]
  }

  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int
    datePublished: String
    bestseller: Boolean
    authorId: String!
    publisherId: String!
  }

  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String
    numBooksPublished: Int
    addressId: String
    books: [Book!]
  }

  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
    authors: [Author!]
    publishers: [Publisher!]
  }

  type Mutation {
    addAuthor(input: AddAuthorInput!): Author!
    addBook(input: AddBookInput!): Book!
    addPublisher(input: AddPublisherInput!): Publisher!
    addAddress(input: AddAddress!): Address!
  }

  input AddAuthorInput {
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
  }

  input AddBookInput {
    title: String!
    language: String!
    numPages: Int
    datePublished: String
    bestseller: Boolean
    authorId: String!
    publisherId: String!
  }

  input AddPublisherInput {
    company: String!
    phoneNumber: String
    numBooksPublished: Int
    addressId: String
  }

  input AddAddress {
    street: String!
    city: String!
    state: String!
    zip: String!
  }
`