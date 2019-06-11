import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserForm from '../components/UserForm';

class UserEdit extends Component {
  state = { currentUser: {} };
  componentDidMount() {
    const {
      match: { params: id },
    } = this.props;

    const currentUser = this.props.loadUser(id);
    this.setState({
      currentUser,
    });
  }

  render() {
    const { handleFormSubmit } = this.props;
    const { currentUser } = this.state;
    return (
      <div>
        <h3>User Edit</h3>
        <UserForm currentUser={currentUser} handleFormSubmit={handleFormSubmit} {...this.props} />
      </div>
    );
  }
}

UserEdit.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

UserEdit.testProps = {
  handleFormSubmit: () => {},
  loadUser: () => {},
  match: {
    params: {
      id: 1,
    },
  },
};

export default UserEdit;
