import React, { Fragment } from "react";
import { render } from "react-dom";

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min'
// import 'jquery'
// import 'popper.js'
import "../includes/bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Me from "../pages/containers/me";

import Home from "../pages/containers/home";
import Portfolio from "../pages/containers/portfolio";

import { createStore } from "redux";
import reducer from "../reducers/index";
import { Provider } from "react-redux";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("imprimiendo estado");
console.log(store.getState());
const App = document.getElementById("App");

render(
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/me" component={Me} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  </Provider>,
  App
);
