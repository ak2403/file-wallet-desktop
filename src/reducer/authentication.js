import {Authentication} from '../type'
import {ToBool} from '../utils/common'

export const initialState = {
  isAppLoaded: false,
  isUserLogged: false,
  isDeviceRegistered: false,
  isDeviceRegisteredError: false,
  isUserLoggedError: false,
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
    case Authentication.REGISTER_DEVICE_ERROR:
      return {
        ...state,
        isDeviceRegistered: false,
        isDeviceRegisteredError: true
      }
    default:
      return state;
  }
}

export default AuthenticationReducer
