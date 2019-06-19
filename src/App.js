import React, { Component } from "react";
import { hot } from "react-hot-loader";

import UsersController from "src/components/users/UsersController";

class App extends Component {
  render() {
    return <UsersController />;
  }
}

export default hot(module)(App);
