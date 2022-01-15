import React from 'react'
import { Container, NavLink } from './styles'

const Nav = () => (
  <Container>
    <NavLink to='/'>Welcome</NavLink>
    <NavLink to='/todo'>Tasks</NavLink>
    <NavLink to='/relax'>Break</NavLink>
  </Container>
)

export default Nav
