import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import Button from '../../ui/button'
import Users from './user'
import {userLogout} from '../../../action/user'

class DashboardComponent extends Component {
  constructor() {
    super()
    this.state = {
      selectedView: 'users',
      isLogoutRedirected: false,
    }
    this.logout = this.logout.bind(this)
  }

  logout() {
    this.props.userLogout()
  }

  componentDidUpdate() {
    const {isLogoutRedirected} =this.state
    const {isUserLogout} = this.props;
    
    if (isUserLogout && !isLogoutRedirected) {
      this.props.history.push({
        pathname: '/login'
      })
      this.setState({
        isLogoutRedirected: true
      })
    }

    return true
  }

  render() {
    return <div className="ss-dashboard-view">
      <div className="ss-dashboard-menu">

      </div>
      <div className="ss-dashboard-content">
        <Users />
        <p>Dashboard</p>
        <Button title="Logout" onClick={this.logout} />
      </div>
    </div>
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  userLogout,
}, dispatch)

const mapStateToProps = props => {
  const {authentication} = props;

  return {
    isUserLogout: authentication.isUserLogout,
    isUserLogoutError: authentication.isUserLogoutError
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardComponent))