import { Authentication } from '../type';
import { Authentications, AuthenticationAction } from '../types/reducer';

import { ToBool } from '../utils/common';

export const initialState: Authentications = {
  isAppLoaded: false,
  isUserLogged: false,
  connectionEstablished: false,
  connectionEstablishedError: false,
  deviceAlreadyRegistered: false,
  isUserLoggedError: false,
  isUserLogout: false,
  isUserLogoutError: false,
};

function AuthenticationReducer(state = initialState, action: AuthenticationAction): Authentications {
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
