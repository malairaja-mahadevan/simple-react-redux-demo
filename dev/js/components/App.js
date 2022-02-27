import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Redux from "./Redux";

const App = () => (
  <Router>
    <div className="rt-container">
      <Route exact path="/" component={Home} />
      <Route path="/reduxdemo" component={Redux} />
    </div>
  </Router>
);

export default App;
