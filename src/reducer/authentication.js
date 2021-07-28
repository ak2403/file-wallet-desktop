import {Authentication} from '../type'
import {ToBool} from '../utils/common'

export const initialState = {
  isAppLoaded: false,
  isUserLogged: false,
  isDeviceRegistered: false,
  isDeviceRegisteredError: false,
  isUserLoggedError: false,
  isUserLogout: false,
  isUserLogoutError: false,
  deviceInfo: {},
  setupError: {},
}

function AuthenticationReducer(state = initialState, action) {
  switch (action.type) {
    case Authentication.LOADED_APP:
      return {
        ...state,
        isAppLoaded: true,
        isUserLogged: ToBool(action?.userLogged) || false,
        isDeviceRegistered: ToBool(action?.deviceLogged) || false
      }
    case Authentication.LOGGED_IN:
      return {
        ...state,
        isUserLogged: ToBool(action?.payload) || false,
        isUserLoggedError: false,
      }
    case Authentication.LOGGED_IN_ERROR:
      return {
        ...state,
        isUserLogged: false,
        isUserLoggedError: true,
      }
    case Authentication.REGISTER_DEVICE:
      return {
        ...state,
        isDeviceRegistered: ToBool(action?.payload) || false,
      }
    case Authentication.FETCH_DEVICE_INFO:
      return {
        ...state,
        deviceInfo: action.payload,
      }
    case Authentication.REGISTER_DEVICE_ERROR:
      return {
        ...state,
        isDeviceRegistered: false,
        isDeviceRegisteredError: true,
        setupError: action.payload
      }
    case Authentication.LOGGED_OUT:
      return {
        ...state,
        isUserLogout: true,
        isUserLogoutError: false,
        isUserLogged: false,
        isDeviceRegistered: false,
      }
    case Authentication.LOGGED_OUT_ERROR:
      return {
        ...state,
        isUserLogout: false,
        isUserLogoutError: true
      }
    default:
      return state;
  }
}

export default AuthenticationReducer
