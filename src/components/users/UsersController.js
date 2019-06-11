import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UsersContainer from './Users/UsersContainer';
import UserAddContainer from './UserAdd/UserAddContainer';
import UserEditContainer from './UserEdit/UserEditContainer';

const UsersController = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/users" component={UsersContainer} />
        <Route path="/users/add" component={UserAddContainer} />
        <Route path="/users/:id" component={UserEditContainer} />
      </Switch>
    </Router>
  );
};

export default UsersController;
