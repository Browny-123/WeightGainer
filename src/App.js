import React from "react";
import "./App.css";
import NotFound from "./views/NotFound";
import { Switch, Route } from "react-router-dom";

//imports of components and views

import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
