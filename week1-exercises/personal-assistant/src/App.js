import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ToDoListPage from './ToDoListPage'
import WeatherPage from './WeatherPage'
import BreakPage from './BreakPage'
import Nav from './Nav'

const App = () => (
  <div>
    <BrowserRouter basename="/personal-assistant">
      <Nav />
      <Switch>
        <Route path="/todo">
          <ToDoListPage />
        </Route>
        <Route path="/relax">
          <BreakPage />
        </Route>
        <Route path="/">
          <WeatherPage />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
)

export default App