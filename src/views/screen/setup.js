import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerDevice, getDeviceInfo } from '../../action/user';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Header from '../ui/Header';

class SetupComponent extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        deviceId: '',
        deviceName: '',
        password: '',
        type: 'desktop',
      },
      errors: {},
      isSetupLoaded: false,
      isDeviceAlreadyRegistered: false,
      redirectedToDashboard: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSetupClick = this.onSetupClick.bind(this);
  }

  componentDidMount() {
    this.props.getDeviceInfo();
  }

  onInputChange(type, val) {
    const { formData, errors } = this.state;
    formData[type] = val;

    errors[type] = val.length ? true : false;

    this.setState({
      formData,
      errors,
    });
  }

  onSetupClick() {
    const { formData, errors } = this.state;
    const { alreadyRegisteredDevice } = this.props;
    const isFormDataEmpty = Object.keys(formData).filter(
      (key) => !formData[key],
    );

    if (isFormDataEmpty.length === 0) {
      this.props.registerDevice(formData, alreadyRegisteredDevice);
      this.setState({
        errors: {},
      });
    }

    isFormDataEmpty.map((key) => (errors[key] = true));

    this.setState({
      errors,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    let { redirectedToDashboard, formData, isSetupLoaded, isDeviceAlreadyRegistered } = this.state;
    const { isDeviceRegistered, deviceInfo, alreadyRegisteredDevice } = this.props;

    if (!isSetupLoaded && deviceInfo?.machineId) {
      formData.deviceId = deviceInfo.machineId;
      formData.deviceName = deviceInfo.systemName;
      //TODO: reframe the logic here
      if (alreadyRegisteredDevice?.deviceName) {
        formData.deviceName = alreadyRegisteredDevice?.deviceName;
        isDeviceAlreadyRegistered = true
      }
      this.setState({
        isSetupLoaded: true,
        isDeviceAlreadyRegistered,
        formData,
      });
    }

    if (isDeviceRegistered && !redirectedToDashboard) {
      this.props.history.push({
        pathname: '/dashboard',
      });
      this.setState({
        redirectedToDashboard: true,
      });
    }
    return true;
  }

  render() {
    const { errors, formData, isDeviceAlreadyRegistered } = this.state;
    const { isDeviceRegisteredError, deviceAlreadyRegistered } = this.props;

    return (
      <div className="ss-setup-view">
        <Header 
          title="Setup your system" 
          className="ss-setup-header" />
        {isDeviceAlreadyRegistered && <p>It looks like the system is already registered. Please enter the password</p>}
        {!deviceAlreadyRegistered && <Input
          value={formData['deviceName']}
          isError={errors['deviceName']}
          onChange={(val) => this.onInputChange('deviceName', val)}
        />}
        <Input
          type="password"
          value={formData['password']}
          isError={errors['password']}
          onChange={(val) => this.onInputChange('password', val)}
        />
        <Button
          title="Submit"
          className="ss-setup-button"
          onClick={this.onSetupClick}
        />
        {isDeviceRegisteredError && <p>Setup unsuccessful</p>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      registerDevice,
      getDeviceInfo,
    },
    dispatch,
  );

const mapStateToProps = (props) => {
  const { authentication } = props;

  return {
    isDeviceRegistered: authentication.isDeviceRegistered,
    isDeviceRegisteredError: authentication.isDeviceRegisteredError,
    deviceInfo: authentication.deviceInfo,
    alreadyRegisteredDevice: authentication.alreadyRegisteredDevice,
    deviceAlreadyRegistered: authentication.deviceAlreadyRegistered
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SetupComponent),
);
