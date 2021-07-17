import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Button from '../ui/button'
import {openURL} from '../utils/electron'
import {saveItem} from '../utils/localStorage'

class LoginComponent extends Component {
  constructor() {
    super()
    this.state = {
      redirectLoginInProgress: false,
      errorOccurred: false,
      loginSuccess: false,
    }
    this.onLoginClick = this.onLoginClick.bind(this);
    this.handleAuthToken = this.handleAuthToken.bind(this);
  }

  componentDidMount() {
    console.log(window.shell)
    window.electron.on('login-success', this.handleAuthToken)
  }

  async handleAuthToken(event, data) {
    try {
      const splitToken = data.data.split('access_token=')
      await saveItem('access_token', splitToken[1])
      
      this.props.history.push('/setup');
    }
    catch(err) {
      this.setState({
        errorOccurred: true,
      })
    }
  }

  async onLoginClick(){
    this.setState({
      redirectLoginInProgress: true
    })
    await openURL('http://localhost:3001/')
  }

  render() {
    return <div>
      <Button title="Login" onClick={this.onLoginClick} />
    </div>
  }
}

export default withRouter(LoginComponent)