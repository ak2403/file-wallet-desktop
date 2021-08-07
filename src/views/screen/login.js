import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Button from '../ui/button'

class LoginComponent extends Component {
  constructor() {
    super()
    this.state = {
      redirectLoginInProgress: false,
      loginSuccess: false,
      redirectedToSetup: false,
    }
    // this.onLoginClick = this.onLoginClick.bind(this);
    // this.handleAuthToken = this.handleAuthToken.bind(this);
  }

  componentDidMount() {
    // ipcRenderer.on('login-success', this.handleAuthToken)
  }

  handleAuthToken(_, data) {
    // this.props.processLogin(data?.data)
  }

  // async onLoginClick(){
  //   this.setState({
  //     redirectLoginInProgress: true
  //   })
  //   await openURL(FRONTEND_URL)
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const {redirectedToSetup} =this.state
  //   const {isUserLogged} = this.props;

  //   if (isUserLogged && !redirectedToSetup) {
  //     this.props.history.push({
  //       pathname: '/setup'
  //     })
  //     this.setState({
  //       redirectedToSetup: true
  //     })
  //   }
  // }

  render() {
    return <div className="ss-login-view">
      <Button 
          className="ss-login-button" 
          title="Sign in with Google" 
          // onClick={this.onLoginClick} 
          />
    </div>
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  // processLogin,
}, dispatch)

const mapStateToProps = props => {
  const {authentication} = props;
  return {
    isUserLogged: authentication.isUserLogged
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent))