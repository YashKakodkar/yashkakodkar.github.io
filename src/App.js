import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LandingPage from './pages/Landing';
import AboutPage from './pages/About';
import ProjectPage from './pages/Projects';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    let bodyStyle = { backgroundColor: '#000000', width: '100vh', height: '100vh' };
    return (
      <Router class="App-body">
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/projects' component={ProjectPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
