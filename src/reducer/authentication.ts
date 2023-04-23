import { Authentications, AuthenticationAction, AuthenticationTypes } from '../types/reducer';

export const initialState: Authentications = {
  isAppLoaded: false,
  isUserLogged: false,
  connectionEstablished: false,
  deviceAlreadyRegistered: false,
  isUserLogout: false,
};

export function AuthenticationReducer(state = initialState, action: AuthenticationAction): Authentications {
  switch (action.type) {
    case AuthenticationTypes.LoadedApp:
      return {
        ...state,
        isAppLoaded: true,
        isUserLogged: action.userLogged ? true : false,
        connectionEstablished: action.connectionEstablished ? true : false,
      };
    case AuthenticationTypes.UserLoggedIn:
      return {
        ...state,
        isUserLogged: action.payload ? true : false,
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
        isUserLogged: false,
        connectionEstablished: false,
      };
    default:
      return state;
  }
}
