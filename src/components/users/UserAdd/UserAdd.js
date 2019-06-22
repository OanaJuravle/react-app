import React, { Component } from "react";
import PropTypes from "prop-types";
import UserForm from "../components/UserForm";

class UserAdd extends Component {
  render() {
    return (
      <div>
        <h3>User Add</h3>
        <UserForm {...this.props} />
      </div>
    );
  }
}

export default UserAdd;
