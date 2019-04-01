import React, { Component } from 'react';
// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// When we want to use a component that we created we need to import it.
import Navbar from './components/layout/Navbar.js';
import Dashboard from './components/dashboard/Dashboard.js';
// We use a route for the Dashboard as it shouldn't be showed on all pages. 
// The Switch-component ensures that the component is only shown on the first matching route.
// The Route exact path means it has to be an exact match
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">       
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
