import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import './App.css';

class App extends Component {

  
  render() {
    return (
      
      <HashRouter>
        <div>
          <Switch>
          {/* <Link to='/'>Home</Link>
            <Link to='/Contact'>Contact</Link>
            <Link to='/Projects'>Projects</Link> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Projects" component={Projects} />
          </Switch>
          </div>
          </HashRouter>  
  );
  }
}
  export default App;
