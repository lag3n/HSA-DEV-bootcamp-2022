import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Container = styled.div`
  height:50px;
  width:100vw;
  display:flex;
  justify-content:center;
  align-items:center;
  background:lightcyan;
`

export const NavLink = styled(Link).attrs()`
  color: darkcyan;
  font-family: 'Times New Roman';
  font-size: 20px;
  text-align: center;
  letter-spacing: auto;
  text-decoration:none;
  margin: 0 15px;
`