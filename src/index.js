import React, { useState, useEffect } from 'react'

import Home from './pages/Home'
import ReactDOM from 'react-dom'
import {Navbar, Nav} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import ReactGA from 'react-ga';



const App = () => {
  const padding = {
    padding: 5
  }

  ReactGA.initialize('UA-200757435-1');
  ReactGA.pageview(window.location.pathname + window.location.search);


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" as="span">
              <Link to="/" className="link">Home</Link>
            </Nav.Link>          
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)