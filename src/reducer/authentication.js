import {Authentication} from '../type'
import {ToBool} from '../utils/common'

const initialState = {
  isAppLoaded: false,
  isUserLogged: false,
}

function AuthenticationReducer(state = initialState, action) {
  switch (action.type) {
    case Authentication.LOADED_APP:
      return {
        ...state,
        isAppLoaded: true,
        isUserLogged: ToBool(action?.payload) || false
      }
    default:
      return state;
  }
}

export default AuthenticationReducer
