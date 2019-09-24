import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Search from './components/Search';
import Results from './pages/Results';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Jumbotron />
        <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
