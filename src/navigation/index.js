import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProtectedRoute from './protected'
import LoginComponent from '../screen/login'
import SetupComponent from '../screen/setup'
import {getItem} from '../utils/localStorage'


class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      isLoginCompleted: false,
    }
  }
  async componentDidMount() {
    const isTokenPresent = await getItem('access_token')

    if (isTokenPresent) {
      this.setState({
        isLoginCompleted: true,
      })
    }
  }

  render() {
    const {isLoginCompleted} = this.state;
    return (
      <Router>
          <Switch>
            <Route path="/" render={() => (isLoginCompleted ? <SetupComponent /> : <LoginComponent />)} />
          </Switch>
      </Router>
    );
  }
}

export default Navigation