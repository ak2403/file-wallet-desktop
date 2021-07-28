import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Input from '../ui/input'
import Button from '../ui/button'
import Header from '../ui/header'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {registerDevice, getDeviceInfo} from '../action/user'

class SetupComponent extends Component {
  constructor() {
    super()
    this.state = {
      formData: {
        device_id: '',
        device_name: '',
        password: '',
        type: 'desktop'
      },
      errors: {},
      isSetupLoaded: false,
      redirectedToDashboard: false
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onSetupClick = this.onSetupClick.bind(this)
  }

  componentDidMount() {
    this.props.getDeviceInfo()
  }

  onInputChange(type, val) {
    const {formData, errors} = this.state
    formData[type]=  val

    errors[type] = val.length ? true : false

    this.setState({
      formData,
      errors
    })
  }

  onSetupClick() {
    const {formData, errors} = this.state
    const isFormDataEmpty = Object.keys(formData).filter(key => !formData[key])
    
    if (isFormDataEmpty.length === 0) {
      this.props.registerDevice(formData)
      this.setState({
        errors: {}
      })
    }

    isFormDataEmpty.map(key => errors[key] = true)

    this.setState({
      errors,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const {redirectedToDashboard, formData, isSetupLoaded} =this.state
    const {isDeviceRegistered, deviceInfo} = this.props;

    if (!isSetupLoaded && deviceInfo?.machineId) {
      formData.device_id = deviceInfo.machineId
      formData.device_name = deviceInfo.systemName
      this.setState({
        isSetupLoaded: true,
        formData,
      })
    }

    if (isDeviceRegistered && !redirectedToDashboard) {
      this.props.history.push({
        pathname: '/dashboard'
      })
      this.setState({
        redirectedToDashboard: true
      })
    }
    return true
  }

  render() {
    const {errors, formData} = this.state
    const {isDeviceRegisteredError} = this.props
    
    return <div className="ss-main-view">
      <div className="ss-setup-view">
        <Header title="Setup your system" className="ss-setup-header" />
        <Input 
          value={formData['device_name']}
          isError={errors['device_name']}
          onChange={val => this.onInputChange('device_name', val)} />
        <Input 
          type="password" 
          value={formData['password']}
          isError={errors['password']}
          onChange={val => this.onInputChange('password', val)} />
        <Button 
        title="Submit" 
        className="ss-setup-button"
        onClick={this.onSetupClick} />
        {isDeviceRegisteredError && <p>Setup unsuccessful</p>}
      </div>
    </div>
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  registerDevice,
  getDeviceInfo
}, dispatch)

const mapStateToProps = props => {
  const {authentication} = props;

  return {
    isDeviceRegistered: authentication.isDeviceRegistered,
    isDeviceRegisteredError: authentication.isDeviceRegisteredError,
    deviceInfo: authentication.deviceInfo,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SetupComponent))