import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Input from '../ui/input'
import Button from '../ui/button'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {registerDevice} from '../action/user'

class SetupComponent extends Component {
  constructor() {
    super()
    this.state = {
      formData: {
        username: '',
        password: ''
      },
      redirectedToDashboard: false
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onSetupClick = this.onSetupClick.bind(this)
  }

  onInputChange(type, val) {
    const {formData} = this.state
    formData[type]=  val

    this.setState({
      formData
    })
  }

  onSetupClick() {
    const {formData} = this.state
    const isFormDataEmpty = Object.keys(formData).filter(key => !formData[key])

    if (isFormDataEmpty.length === 0) {
      this.props.registerDevice(formData)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {redirectedToDashboard} =this.state
    const {isDeviceRegistered} = this.props;

    if (isDeviceRegistered && !redirectedToDashboard) {
      this.props.history.push({
        pathname: '/dashboard'
      })
      this.setState({
        redirectedToDashboard: true
      })
    }
  }

  render() {
    return <div>
      <p>Setup</p>
      <Input onChange={val => this.onInputChange('username', val)} />
      <Input type="password" onChange={val => this.onInputChange('password', val)} />
      <Button title="Setup" onClick={this.onSetupClick} />
    </div>
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  registerDevice
}, dispatch)

const mapStateToProps = props => {
  const {authentication} = props;

  return {
    isDeviceRegistered: authentication.isDeviceRegistered,
    isDeviceRegisteredError: authentication.isDeviceRegisteredError,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SetupComponent))