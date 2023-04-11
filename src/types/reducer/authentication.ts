export type Authentications = {
  isAppLoaded: boolean;
  isUserLogged: boolean;
  connectionEstablished: boolean;
  connectionEstablishedError: boolean;
  deviceAlreadyRegistered: boolean;
  isUserLoggedError: boolean;
  isUserLogout: boolean;
  isUserLogoutError: boolean;
};

export type AuthenticationAction = {
  type: string;
  payload?: boolean;
  userLogged?: boolean;
  connectionEstablished?: boolean;
};
