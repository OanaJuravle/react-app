import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Grid, Input, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

class UsersIndex extends Component {
  renderTable() {
    return (
      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.users.map(user => (
            <Table.Row key={user.id}>
              <Table.Cell>
                <Link
                  data-testid={`redirect-to-${user.id}`}
                  to={`users/${user.id}`}
                >
                  {user.firstName.concat(" ").concat(user.lastName)}
                </Link>
              </Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.archived ? "Enabled" : "Disabled"}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
  render() {
    return (
      <div>
        <h2>Users</h2>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Input placeholder="Search" />
            </Grid.Column>
            <Grid.Column width={8} textAlign="right">
              <Link to="/users/add">
                <Button data-testid="add-new-button">Add new user</Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {this.renderTable()}
      </div>
    );
  }
}

UsersIndex.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      archived: PropTypes.bool.isRequired,
      email: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      lastName: PropTypes.string.isRequired
    })
  )
};

UsersIndex.defaultProps = {
  onCustomClick: () => {},
  users: []
};

UsersIndex.testProps = {
  users: [
    {
      firstName: "Josh",
      id: 1,
      lastName: "Carter",
      email: "josh.carter@test.co",
      archived: false
    },
    {
      firstName: "Jamie",
      id: 2,
      lastName: "Smith",
      email: "jamie.smith@test.co",
      archived: true
    }
  ]
};

export default UsersIndex;
