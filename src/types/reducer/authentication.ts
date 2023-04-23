export type Authentications = {
  isAppLoaded: boolean;
  isUserLogged: boolean;
  connectionEstablished: boolean;
  deviceAlreadyRegistered: boolean;
  isUserLogout: boolean;
};

export type AuthenticationAction = {
  type: string;
  payload?: boolean;
  userLogged?: boolean;
  connectionEstablished?: boolean;
};

export const AuthenticationTypes = {
  LoadedApp: 'LoadedApp',
  UserLoggedIn: 'UserLoggedIn',
  DeviceRegister: 'DeviceRegister',
  UserLoggedOut: 'UserLoggedOut',
  FetchDeviceInfo: 'FetchDeviceInfo',
};
