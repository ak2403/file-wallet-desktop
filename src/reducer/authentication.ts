import { Authentications, AuthenticationAction, AuthenticationTypes } from '../types/reducer';

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

export function AuthenticationReducer(state = initialState, action: AuthenticationAction): Authentications {
  switch (action.type) {
    case AuthenticationTypes.LoadedApp:
      return {
        ...state,
        isAppLoaded: true,
        isUserLogged: action?.userLogged || false,
        connectionEstablished: action?.connectionEstablished || false,
      };
    case AuthenticationTypes.UserLoggedIn:
      return {
        ...state,
        isUserLogged: action?.payload || false,
        isUserLoggedError: false,
      };
    case AuthenticationTypes.UserLoggedInError:
      return {
        ...state,
        isUserLogged: false,
        isUserLoggedError: true,
      };
    case AuthenticationTypes.DeviceRegister:
      return {
        ...state,
        connectionEstablished: action?.payload || false,
      };
    case AuthenticationTypes.UserLoggedOut:
      return {
        ...state,
        isUserLogout: true,
        isUserLogoutError: false,
        isUserLogged: false,
        connectionEstablished: false,
      };
    case AuthenticationTypes.UserLoggedOutError:
      return {
        ...state,
        isUserLogout: false,
        isUserLogoutError: true,
      };
    default:
      return state;
  }
}
