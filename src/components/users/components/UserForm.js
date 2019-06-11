import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, Form, Input, Grid, GridRow } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { isEqual } from 'lodash';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInitialized: false,
      currentUser: {},
      firstName: '',
      lastName: '',
      email: '',
      hobby: '',
      termsAndConditions: false,
      count: 0,
      test: '',
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidUpdate() {
    if (!this.state.formInitialized && !isEqual(this.props.currentUser, this.state.currentUser)) {
      this.setState({ ...this.props.currentUser, formInitialized: true });
    }
  }

  validateEmail(email) {
    console.log(email);
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  handleChange = (e, { name, value }) => {
    if (name === 'termsAndConditions') {
      this.setState({ [name]: !this.state[name] });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleClick1() {
    this.setState({
      test: 'test',
    });
  }

  handleCancel() {
    this.props.history.push('/users');
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { firstName, lastName, email, hobby, termsAndConditions } = this.state;
    console.log('**********SUBMIT', firstName, lastName, email, hobby, termsAndConditions);
    this.props.history.push('/users');
  }

  render() {
    const { firstName, lastName, email, hobby, termsAndConditions } = this.state;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Link to="/users">
              <Button data-testid="handle-click">Handle Click</Button>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Button data-testid="test-button" onClick={this.props.handleFormSubmit}>
              Click!
            </Button>
          </Grid.Column>
          <Grid.Column width={8}>
            <Form onSubmit={this.props.handleFormSubmit} data-testid="sui-form">
              <Form.Input
                required
                label="First Name"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
                data-testid="first-name"
              />
              <Form.Input
                required
                label="Last Name"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
                data-testid="last-name"
              />
              <Form.Input
                required
                type="email"
                label="Email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleChange}
                data-testid="email"
              />
              <Form.Input
                label="Hobby"
                placeholder="Hobby"
                name="hobby"
                value={hobby}
                onChange={this.handleChange}
                data-testid="hobby"
              />
              <Form.Checkbox
                name="termsAndConditions"
                label="I agree to the Terms and Conditions"
                checked={termsAndConditions}
                onChange={this.handleChange}
              />
              <div className="buttons">
                <Button data-testid="submit-button" type="submit">
                  Submit
                </Button>
                <Link to="/users">
                  <Button data-testid="back-to-users">Back to users list</Button>
                </Link>
              </div>
              <pre>
                {JSON.stringify({ firstName, lastName, email, hobby, termsAndConditions }, 0, 2)}
              </pre>
            </Form>
          </Grid.Column>
          <Grid.Column>
            <Button data-testid="test-button1" onClick={this.handleClick1}>
              Click1!
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

UserForm.propTypes = {
  currentUser: PropTypes.shape({
    archived: PropTypes.bool,
    email: PropTypes.string,
    firstName: PropTypes.string,
    id: PropTypes.number,
    lastName: PropTypes.string,
  }),
  handleFormSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

UserForm.defaultProps = {
  currentUser: {},
  history: {
    push: () => {},
  },
};

UserForm.testProps = {
  currentUser: {
    firstName: 'Josh',
    id: 1,
    lastName: 'Carter',
    email: 'josh.carter@test.co',
    archived: false,
  },
  handleFormSubmit: () => {},
};

export default UserForm;
