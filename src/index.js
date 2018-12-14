import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Hallo from "views/Hallo";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Hallo } />
      </Switch>
    </BrowserRouter>
  );
};

render( <App />, document.getElementById( "m9" ) );
