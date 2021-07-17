import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginComponent from '../screen/login'
import SetupComponent from '../screen/setup'

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const {isUserLogged} = this.props;

    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to={isUserLogged ? "/setup" : "/login"} />
            </Route>
            <Route path="/login" render={() => <LoginComponent />} />

            <Route path="/setup" render={() => <SetupComponent />} />
          </Switch>
      </Router>
    );
  }
}

export default Navigation