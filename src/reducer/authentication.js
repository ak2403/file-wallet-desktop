import {Authentication} from '../type'
import {ToBool} from '../utils/common'

const initialState = {
  isAppLoaded: false,
  isUserLogged: false,
  isDeviceRegistered: false,
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
    default:
      return state;
  }
}

export default AuthenticationReducer
