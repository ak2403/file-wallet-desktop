import { Authentication } from '../type';
import { ToBool } from '../utils/common';

export const initialState = {
  isAppLoaded: false,
  isUserLogged: false,
  connectionEstablished: false,
  connectionEstablishedError: false,
  deviceAlreadyRegistered: false,
  isUserLoggedError: false,
  isUserLogout: false,
  isUserLogoutError: false,
  alreadyRegisteredDevice: {},
  deviceInfo: {},
  setupError: {},
};

function AuthenticationReducer(state = initialState, action) {
  switch (action.type) {
    case Authentication.LOADED_APP:
      return {
        ...state,
        isAppLoaded: true,
        isUserLogged: ToBool(action?.userLogged) || false,
        connectionEstablished: ToBool(action?.connectionEstablished) || false,
      };
    case Authentication.LOGGED_IN:
      return {
        ...state,
        isUserLogged: ToBool(action?.payload) || false,
        isUserLoggedError: false,
      };
    case Authentication.LOGGED_IN_ERROR:
      return {
        ...state,
        isUserLogged: false,
        isUserLoggedError: true,
      };
    case Authentication.REGISTER_DEVICE:
      return {
        ...state,
        connectionEstablished: ToBool(action?.payload) || false,
      };
    case Authentication.FETCH_DEVICE_INFO:
      let { deviceAlreadyRegistered, payload, device, alreadyRegisteredDevice } = action;

      if (payload.id === 'DEVICE_ALREADY_REGISTERED') {
        deviceAlreadyRegistered = true;
        alreadyRegisteredDevice = payload?.data;
      }
      //TODO: just get the name of the device from the server
      return {
        ...state,
        deviceInfo: device,
        deviceAlreadyRegistered,
        alreadyRegisteredDevice,
      };
    case Authentication.REGISTER_DEVICE_ERROR:
      return {
        ...state,
        connectionEstablished: false,
        connectionEstablishedError: true,
        setupError: action.payload,
      };
    case Authentication.LOGGED_OUT:
      return {
        ...state,
        isUserLogout: true,
        isUserLogoutError: false,
        isUserLogged: false,
        connectionEstablished: false,
      };
    case Authentication.LOGGED_OUT_ERROR:
      return {
        ...state,
        isUserLogout: false,
        isUserLogoutError: true,
      };
    default:
      return state;
  }
}

export default AuthenticationReducer;
