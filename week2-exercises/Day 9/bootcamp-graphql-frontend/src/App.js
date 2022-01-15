import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import Book from './containers/Book'
import Author from './containers/Author'
import Publishers from './containers/Publisher'
import Addresses from './containers/Address'
import WIP from './containers/WIP'
import Nav from './containers/Nav'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/WIP" component={WIP}/>
            <Route path="/authors" component={Author}/>
            <Route path="/books" component={Book}/>
            <Route path="/publishers" component={Publishers}/>
            <Route path="/addresses" component={Addresses}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
