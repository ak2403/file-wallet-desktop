import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Startup from './startup'
import Login from '../views/screen/login'
import Setup from '../views/screen/setup'
import Dashboard from '../views/screen/dashboard'

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
            <Route exact path={["/login", "/setup"]}>
              <Startup>
                <Switch>
              <Route exact path="/login" component={Login} />

              <Route exact path="/setup" component={Setup} />
              </Switch>
              </Startup>
            </Route>

            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
      </Router>
    );
  }
}

export default Navigation