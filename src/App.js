import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import home from './pages/home.jsx';
//import navbar from './Components/Navbar.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route path="/" component={home} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
