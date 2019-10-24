import React from 'react'
import { Router, Route } from "react-router"
import createBrowserHistory from "history/createBrowserHistory"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/Home"
import Users from "./components/Users"
import Credits from "./components/Credits"
import Contact from "./components/Contact"
import SignUp from "./components/SignUp"
import './App.scss'

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/credits" component={Credits} />
      <Route path="/contact" component={Contact} />
      <Route path="/sign-up" component={SignUp} />
    </Router>
  )
}

export default App; 
