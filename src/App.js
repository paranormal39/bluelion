import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import home from './pages/home';
import navbar from './Components/Navbar.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Route exact path = "/" component={home}/>
        </div>

      </Router>
      </div>
    );
  }
}

export default App;
