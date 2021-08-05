import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { ShoeCustomizer } from './screens/ShoeCustomizer/ShoeCustomizer'
import { Home } from './screens/Home/Home'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shoe" component={ShoeCustomizer} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
