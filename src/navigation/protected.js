import React, {Component} from 'react'
import {
  Route,
  withRouter,
} from "react-router-dom";
import {getItem} from '../utils/localStorage'

class ProtectedRoute extends Component {
  async componentDidMount() {
    // const isTokenPresent = await getItem('access_token')

    // console.log(isTokenPresent)
    // if (isTokenPresent) {
    //   console.log("jo", this.props)
    //   // this.props.history.push('/setup')
    // }
  }

  render() {
    return this.props.history.push('/setup')
    return (<Route
      {...this.props}
      render={({ location }) =>
        false ? (
          this.props.children
        ) : (
          this.props.children
        )
      }
    />)
  }
}

export default withRouter(ProtectedRoute)