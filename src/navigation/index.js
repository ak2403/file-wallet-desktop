import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from '../screen/login'
import Setup from '../screen/setup'
import Dashboard from '../screen/dashboard'

class Navigation extends Component {
  render() {
    const {isUserLogged, isSetupCompleted} = this.props;
    let defaultRoute = 'login';

    if (isUserLogged) {
      defaultRoute = 'setup';
    }
    if (isSetupCompleted) {
      defaultRoute = 'dashboard';
    }

    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to={`/${defaultRoute}`} />
            </Route>
            <Route path="/login" render={() => <Login />} />

            <Route path="/setup" render={() => <Setup />} />

            <Route path="/dashboard" render={() => <Dashboard />} />
          </Switch>
      </Router>
    );
  }
}

export default Navigation