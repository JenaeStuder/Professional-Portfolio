import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import './App.css';

class App extends Component {
  render() {
    return (
      
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Projects" component={Projects} />
          </Switch>
        </div>
      </Router>
     
  );
  }
}
  export default App;
