// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from './components/Nav';
// import Jumbotron from './components/Jumbotron';
// import Search from './pages/Search';
// import Saved from './pages/Saved';
// import NoMatch from './pages/NoMatch';

// class App extends Component {

//   render() {
//     return (
//       <Router>
//       <div>
//         <Nav />
//         <Jumbotron />
//         <Switch>
//         <Route exact path="/" component={Search} />
//         <Route exact path="/search" component={Search} />
//         <Route exact path="/saved" component={Saved} />
//         <Route component={NoMatch} />
//         </Switch>
//       </div>
//       </Router>
//     );
//   }
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
