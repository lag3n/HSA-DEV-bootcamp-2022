import React from 'react'
import { Container, NavLink } from './styles'

const Nav = () => (
  <Container>
    <NavLink to='/'>Welcome</NavLink>
    <NavLink to='/authors'>Authors</NavLink>
    <NavLink to='/books'>Books</NavLink>
    <NavLink to='/publishers'>Publishers</NavLink>
    <NavLink to='/addresses'>Addresses</NavLink>
    <NavLink to='/WIP'>More</NavLink>
  </Container>
)

export default Nav
