import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Search />
      </div>
    );
  }
}

export default App;
