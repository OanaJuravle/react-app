import React, { Component } from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";

import UsersController from "src/components/users/UsersController";

const StyledDiv = styled.div`
  padding: 30px 50px 0 50px;
`;

class App extends Component {
  render() {
    return (
      <StyledDiv>
        <UsersController />
      </StyledDiv>
    );
  }
}

export default hot(module)(App);
