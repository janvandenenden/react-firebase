import React, { Component } from 'react';
// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.
import { BrowserRouter } from 'react-router-dom';
// When we want to use a component that we created we need to import it.
import Navbar from './components/layout/Navbar.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
