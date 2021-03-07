import React from "react"
import { Router } from "react-router-dom"
import { createBrowserHistory } from "history"
import Routes from "./Routes"

import Auth from "./components/Auth"
import ScrollReset from "./components/ScrollReset"

const history = createBrowserHistory()

const App = () => (
  <Router history={history}>
    <Auth>
      <ScrollReset />
      <Routes />
    </Auth>
  </Router>
)

export default App
